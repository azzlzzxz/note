# Git 常用命令

## git add

把要提交的文件的信息添加到暂存区中。当使用 git commit 时，将依据暂存区中的内容来进行文件的提交。

它通常将现有路径的当前内容作为一个整体添加，但是通过一些选项，它也可以用于添加内容，只对所应用的工作树文件进行一些更改，或删除工作树中不存在的路径了。

“索引”保存工作树内容的快照，并且将该快照作为下一个提交的内容。 因此，在对工作树进行任何更改之后，并且在运行 git commit 命令之前，必须使用 git add 命令将任何新的或修改的文件添加到索引。

该命令可以在提交之前多次执行。它只在运行 git add 命令时添加指定文件的内容; 如果希望随后的更改包含在下一个提交中，那么必须再次运行 git add 将新的内容添加到索引。

```sh
# 将当前目录下所有修改过的文件添加到暂存区的命令
git add .

# 把指定的文件添加到暂存区中
$ git add <文件路径>
```