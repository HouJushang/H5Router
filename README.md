# 简单路由功能实现
html5 路由功能
## html代码 使用方法
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Router</title>
</head>
<body>
<a href="#/home">热点</a>
<a href="#/personal">个人</a>
<a href="#/detail/1">详情1</a>
<a href="#/detail/2">详情2</a>
<a href="#/list/1">列表1</a>
<a href="#/list/2">列表2</a>
<a href="#/sss">其他路由跳转到默认路由</a>

</body>
<script src="router.js"></script>
<script>
    new $router().add('home',{
        url: '/home',
        ctrl: function(){
            console.log('home');
        }
    }).add('personal',{
        url: '/personal',
        ctrl: function(){
            console.log('personal');
        }
    }).add('detail',{
        url: '/detail/:id',
        ctrl: function(id){
            console.log(id);
        }
    }).add('list',{
        url: '/list/:id',
        ctrl: function(id){
            console.log(id);
        }
    }).default('home').complete();
</script>
</html>
```