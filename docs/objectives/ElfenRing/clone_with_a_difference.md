---
sidebar_position: 1
---

# Clone with a difference

> We just need you to clone one repo: git clone git@haugfactory.com:asnowball/aws_scripts.git 
> This should be easy, right?
>
> Thing is: it doesn't seem to be working for me. This is a public repository though. I'm so confused!
> 
> Please clone the repo and cat the README.md file.
> Then runtoanswer and tell us the last word of the README.md file!

****

Tried regular Git clone:

```bash
bow@b47e44aa7a9c:~$ git clone git@haugfactory.com:asnowball/aws_scripts.git
Cloning into 'aws_scripts'...
The authenticity of host 'haugfactory.com (34.171.230.38)' can't be established.
ECDSA key fingerprint is SHA256:CqJXHictW5q0bjAZOknUyA2zzRgSEJLmdMo4nPj5Tmw.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'haugfactory.com,34.171.230.38' (ECDSA) to the list of known hosts.
git@haugfactory.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
bow@67147828b581:~$ 
```

Trying the HTTPS route:

```bash
bow@b47e44aa7a9c:~$ git clone https://haugfactory.com/asnowball/aws_scripts.git
Cloning into 'aws_scripts'...
remote: Enumerating objects: 64, done.
remote: Total 64 (delta 0), reused 0 (delta 0), pack-reused 64
Unpacking objects: 100% (64/64), 23.83 KiB | 1.19 MiB/s, done.
bow@b47e44aa7a9c:~$
```

Reading the README

```bash
bow@b47e44aa7a9c:~$ cat aws_scripts/README.md 
.
.
.
## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying 
that development has slowed down or stopped completely. Someone may choose to fork your project or 
volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also 
make an explicit request for maintainers.
```

The last word in the README file is **maintainers**. Submitting the answer:

```bash
bow@67147828b581:~$ runtoanswer 
                                        Read that repo!
What's the last word in the README.md file for the aws_scripts repo?

> maintainers
Your answer: maintainers

Checking......
Your answer is correct!


bow@67147828b581:~$ 
```