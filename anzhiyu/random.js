var posts=["2024/10/10/QtScrcpy/","2024/10/09/Windows10/","2024/10/08/NewPipe/","2024/09/27/NotionNext搭建博客/","2024/09/25/Android系统xapk安装方法/","2024/09/23/画境播放器/","2024/09/10/Hexo搭建博客3/","2024/08/23/Hexo搭建博客1/","2024/08/23/Hexo搭建博客2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };