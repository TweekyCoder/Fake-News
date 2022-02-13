(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://fake-news-project.netlify.app/images/OffFavicon.jfif';
    document.getElementsByTagName('head')[0].appendChild(link);
})();