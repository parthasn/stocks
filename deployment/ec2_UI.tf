resource "aws_instance" "EC2UIInstance" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  security_groups = [aws_security_group.allow_UI.name]
  key_name = aws_key_pair.stocks.key_name
  tags = {
    Name = "EC2UIInstance"
  }
  
}


resource "aws_security_group" "allow_UI" {
  name        = "allow_UI"
  description = "Allow SSH inbound traffic"

  ingress {
    description      = "TLS from VPC"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["117.203.183.231/32"]
  }

  ingress {
    description      = "TLS from UI"
    from_port        = 3000
    to_port          = 3000
    protocol         = "tcp"
    cidr_blocks      = ["117.203.183.231/32"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "allow_UI"
  }
}