---
sidebar_position: 3
---

# Trufflehog Search

```
Use Trufflehog to find secrets in a Git repo. Work with Jill Underpole in the Cloud Ring for hints. What's the name of the file that has AWS credentials?
```

****

## Setup

```bash
git clone https://github.com/trufflesecurity/trufflehog.git
cd truffehog
go install
```

## Running Trufflehog

Installed Trufflehog locally by downloading binary builds and went on. Until I realized this was the same assigment as in the AWS CLI thingy ...

```bash
./trufflehog git http://haugfactory.com/orcadmin/aws_scripts.git
🐷🔑🐷  TruffleHog. Unearth your secrets. 🐷🔑🐷

Found unverified result 🐷🔑❓
Detector Type: AWS
Decoder Type: PLAIN
Raw result: AKIAAIDAYRANYAHGQOHD
File: put_policy.py
Email: asnowball <alabaster@northpolechristmastown.local>
Repository: http://haugfactory.com/orcadmin/aws_scripts.git
Timestamp: 2022-09-07 07:53:12 -0700 -0700
Line: 6
Commit: 106d33e1ffd53eea753c1365eafc6588398279b5

Found unverified result 🐷🔑❓
Detector Type: Gitlab
Decoder Type: PLAIN
Raw result: add-a-file-using-the-
Commit: 2c77c1e0a98715e32a277859864e8f5918aacc85
File: README.md
Email: alabaster snowball <alabaster@northpolechristmastown.local>
Repository: http://haugfactory.com/orcadmin/aws_scripts.git
Timestamp: 2022-09-06 19:54:48 +0000 +0000
Line: 14

Found unverified result 🐷🔑❓
Detector Type: Gitlab
Decoder Type: BASE64
Raw result: add-a-file-using-the-
Commit: 2c77c1e0a98715e32a277859864e8f5918aacc85
File: README.md
Email: alabaster snowball <alabaster@northpolechristmastown.local>
Repository: http://haugfactory.com/orcadmin/aws_scripts.git
Timestamp: 2022-09-06 19:54:48 +0000 +0000
Line: 14

```

Anywho, the answer is **put_policy.py***, because there's where we find the credentials.