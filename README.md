# How to run

Connecting simple node js app to an dockerized S3 bucket

## Instalation
Clone the project, install Docker and [AWS cli](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

## Usage
Navigate to project folder and run
```
docker-compose up
```

If that doesnt work run 
```
TMPDIR=/private$TMPDIR docker-compose up
```

To check the list of buckets created run
```
aws --endpoint-url=http://localhost:4566 s3api list-buckets
```


or by name
```
aws --endpoint-url=http://localhost:4566 list-buckets --query "Buckets[].Name"
```

to check the content of the bucket
```
aws --endpoint-url=http://localhost:4566 s3 ls demo-bucket
```
