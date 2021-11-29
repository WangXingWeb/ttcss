---
title: git命令
---

# git add

放到暂存区

# git commit

-   git commit -m '修改说明'
-   git commit --amend 修改最近一次提交

创建版本

# git push

提交到远程仓库

# git status

查看当前项目有那些改动

# git log 查看提交记录

查看提交记录
键盘`Q`退出查看

1. git log 查看提交历史记录
2. git log --oneline 或者 git log --pretty=oneline 以精简模式显示
   如`git log --pretty=oneline index.html`
3. git log --graph 以图形模式显示版本路线
4. git log --name-only 现实文件名修改
5. git log --name-status
6. git log --stat 显示文件更改列表
7. git log --author= 'name' 显示某个作者的日志
8. git log -p filepath 查看某个文件的详细修改
9. git log -p -1 查看最近一次提交的修改记录
10. git log -L start,end:filepath 查看某个文件某几行范围内的修改记录
11. git log --stat commitId 或者 git show --stat commitId 查看某一次提交的文件修改列表

# git restore

撤销修改,将文件从暂存区撤回

# git config 配置信息

-   git config --global user.name '星仔'
-   git config --global user.email 'wx1620@163.com'
-   git config --global --list

# git rm 删除文件

-   git rm index.html 版本库和本地都删除
-   git rm --cached index.html 版本库删除本地不删除

# git mv 重命名

-   git mv oldFileName newFileName
    git mv 命令也可以移动文件位置
    如`git mv index.html home/index.html`
    将 index.html 移动到 home 文件夹下

# git show 显示更改信息

-   git show commitId 显示一次 commit 的修改信息

# git checkout

-   git checkout -- index.html
-   git checkout commitId -- index.html

# git reset

-   git reset HEAD index.html
-   git reset --hard HEAD^ 恢复到上一个版本
-   git reset --hard commitId 恢复到指定版本
    commitId 可以是全部的 id 也可以是前几位

# git push 推送

-   git push origin master

# git tag 创建标签

-   git tag v1.0
-   git tag
-   git tag v0.5 commitId
-   git tag -d v0.5 删除标签
-   git push origin v1.0 提交标签

# git branch 分支

-   git branch dev 创建一个名字为 dev 的分支
-   git branch 查看分支
-   git branch -a 查看分支包括远程分支
-   git checkout dev 切换到 dev 分支
-   git branch -d dev 删除 dev 分支(不能删除当前所在分支，不能删除有 commit 的分支)
-   git branch -D dev 强制删除 dev 分支，即使有过 commit 也可以删除
-   git checkout -b test 创建 test 分支并切换到 test 分支
-   git merge dev 合并分支 dev
-   git merge --abort 处理冲突保留当前分支中的代码
-   git push origin --delete summer 删除 summer 分支
