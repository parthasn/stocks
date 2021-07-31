resource "aws_s3_bucket" "stock-ui-bucket" {
  bucket = "stock-ui-bucket"
  acl    = "public-read"  
  policy = file("./ui/policy.json")

  website {
    index_document = "index.html"
  }
  tags = {
    Name        = "stock-ui-bucket"
  }
}