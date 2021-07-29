resource "aws_instance" "EC2BackendInstance" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  security_groups = [aws_security_group.allow_backend.name]
  key_name = aws_key_pair.stocks.key_name
  tags = {
    Name = "EC2BackendInstance"
  }
  
}

resource "aws_security_group" "allow_backend" {
  name        = "allow_backend"
  description = "Allow SSH inbound traffic"

  ingress {
    description      = "TLS from VPC"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["${chomp(data.http.myip.body)}/32"]
  }

  ingress {
    description      = "TLS from Backend"
    from_port        = 8081
    to_port          = 8081
    protocol         = "tcp"
    cidr_blocks      = ["${chomp(data.http.myip.body)}/32"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow_backend"
  }
}

resource "null_resource" "setup_backend_provisioner" {
  triggers = {
    public_ip = aws_instance.EC2BackendInstance.public_ip
  }

  connection {
    type  = "ssh"
    host  = aws_instance.EC2BackendInstance.public_ip
    user  = "ubuntu"
    port  = 22
    agent = true
    private_key = "${file("~/.ssh/id_rsa")}"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt install -y openjdk-11-jdk",
      "java -version"
    ]
  }
}