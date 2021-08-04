#### Commands

To zip on a mac
`zip -r package.zip .`


To upload to lambda
`aws lambda update-function-code --function-name serverlessrepo-hello-world-helloworld-QdnscDL9v4x1 --zip-file fileb://package.zip`

