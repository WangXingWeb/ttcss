---
title: github添加密钥
---

提交文件到github，不成功，出现如下的情况，就代表着github上面没有设置秘钥

![nossh](/assets/img/nossh.png)

## 生成ssh密钥
git-bash运行命令
```ssh
ssh-keygen -t rsa -C "邮箱"
```
然后连续回车键，出现下面的图案就表示生成成功

![sshbashcommand](/assets/img/sshbashcommand.png)

默认密钥在 C:\Users\用户名\.ssh 目录下

![ssh](/assets/img/ssh.png)

## 设置密钥到github
把id_rsa.pub里面的内容复制到githubd 的add github key 的key里面

![setKey](/assets/img/setKey.png)

密钥配置成功后，要验证一下是否配置成功

```ssh
ssh -T git@github.com   
```
出现： You've successfully authenticated, but GitHub does not provide shell access.就是说明配置成功

![yanzheng](/assets/img/yanzheng.png)

