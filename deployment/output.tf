output "instance_backend_id" {
  description = "EC2BackendInstance"
  value       = aws_instance.EC2BackendInstance.id
}

output "instance_backend_public_ip" {
  description = "Public IP address of the EC2BackendInstance"
  value       = aws_instance.EC2BackendInstance.public_ip
}

output "instance_UI_id" {
  description = "EC2UIInstance"
  value       = aws_instance.EC2UIInstance.id
}

output "instance_UI_public_ip" {
  description = "Public IP address of the EC2UIInstance"
  value       = aws_instance.EC2UIInstance.public_ip
}