Steps for forking this repo and then sync when required

**Step 1: Open site**

https://github.com/panacloud/presidential-cs-program


**Step 2: Fork on your repo**

Press the button on the right top corner there is fork button


**Step 3: Open Terminal and make directory**

$ mkdir ai-web


**Step 4: Goto to your repository and clone it on local directory (Don't forget to change below url)**

$ git clone https://github.com/aamirpinger/presidential-cs-program.git


**Step 5: Check connected repo**

$ git remote -v

origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)

origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)


**Step 6: add master repository for sync**

$ git remote add main https://github.com/panacloud/presidential-cs-program.git


**Step 7: recheck connected repos**

$ git remote -v

origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)

origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)

main	https://github.com/panacloud/presidential-cs-program.git (fetch)

main	https://github.com/panacloud/presidential-cs-program.git (push)



**Step 8: Start Sync**

$ git fetch main

remote: Counting objects: 75, done.

remote: Compressing objects: 100% (53/53), done.

remote: Total 62 (delta 27), reused 44 (delta 9)

Unpacking objects: 100% (62/62), done.

From https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY

* [new branch]      master     -> main/master



**Step 9: checkout branch**

$ git checkout master

Switched to branch 'master'


**Step 10: finally download new updates from master repo to local**

$ git merge main/master

Updating a422352..5fdff0f

Fast-forward

README                    |    9 -------

README.md                 |    7 ++++++

2 files changed, 7 insertions(+), 9 deletions(-)

delete mode 100644 README

create mode 100644 README.md



**PLEASE NOTE:** above procedures will not update ur forked repo on github, you have to follow regular steps to upload updated data by **git push** command
