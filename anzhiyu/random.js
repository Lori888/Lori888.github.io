var posts=["2024/08/23/Hexo建站笔记1/","2024/08/23/Hexo建站笔记2/","2024/09/10/Hexo建站笔记3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };