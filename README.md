# 环境
mysql 5.5
jdk 1.8

# jec无限制加密策略文件
jce_policy-8.zip 解压缩移动至%JAVA_HOME%\jre\lib\security

# 编译
windows
```
./gradlew.bat build
```

linux
```
chmod +X gradlew
gradlew build
```
# 运行
```
cd dist
java -jar ./myapp.jar
```
# 客户端下载
链接: https://pan.baidu.com/s/1gDt0qN-AoU9fGvhp1TLuJA?pwd=rcan 

提取码: rcan 复制这段内容后打开百度网盘手机App，操作更方便哦 
--来自百度网盘超级会员v4的分享

注：登录器网上找的，如果感觉不太靠谱，可使用 bat文件登录 

```
MapleStory.exe  127.0.0.1 9595
```

# 修改说明
- jdk7升级至jdk8
- js引擎使用nashorn

# 鸣谢

- https://github.com/aoaostar/MapleStory （aoaostar）
- https://github.com/Afauria/MapleStory-Server-079 (Afauria)