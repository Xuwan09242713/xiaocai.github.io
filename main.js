document.addEventListener('DOMContentLoaded', function() {  
    var ap = new APlayer({  
        element: document.getElementById('player'),  
        narrow: false,  
        autoplay: true,  
        mutex: true,  
        theme: '#2D8CF0',  
        mode: 'order', // 播放模式: order(顺序播放), loop(单曲循环), random(随机播放), single(列表循环)  
        listFolded: true,  
        listMaxHeight: '340px',  
        preload: 'auto',  
        audio: [  
            {  
                title: '歌曲标题',  
                artist: '歌手名称',  
                url: '歌曲链接',  
                cover: '歌曲封面链接',  
                lrc: '歌词链接'  
            },  
            // ... 其他歌曲  
        ]  
    });  
});