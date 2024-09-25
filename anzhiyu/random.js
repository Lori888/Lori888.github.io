var posts=["2024/08/23/Hexo建站笔记1/","2024/08/23/Hexo建站笔记2/","2024/09/10/Hexo建站笔记3/","2024/09/25/Android系统xapk安装方法/","2024/09/23/画境播放器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };