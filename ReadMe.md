
代码没有错误继续提交会通过commitlint校验提交信息格式，格式如下

<type>(<scope>): <subject>
<body>
<footer>

git commit -m "feat:xxx"


type只有以下选项：
feat：新功能
fix：Bug修复
docs：仅文档修改
style：不影响代码含义的更改（空格、格式、缺少分号等）
refactor：既不修复错误也不添加功能的代码更改
perf：提高性能的代码更改
test：添加丢失的测试或更正现有测试
build：影响构建系统或外部依赖关系的更改
ci：更改我们的CI配置文件和脚本
chore：其他不修改src或测试文件的更改
revert：恢复以前的提交
