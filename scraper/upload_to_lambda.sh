rm -f package.zip
zip -r package.zip .
aws lambda update-function-code --function-name serverlessrepo-hello-world-helloworld-QdnscDL9v4x1 --zip-file fileb://package.zip
