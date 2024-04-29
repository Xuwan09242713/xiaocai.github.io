// 在你的JavaScript文件中  
var globalAPlayerInstance = null;  
  
function initializePlayer() {  
    if (!globalAPlayerInstance) {  
        var playerElement = document.getElementById('player');  
        if (playerElement) {  
            globalAPlayerInstance = new APlayer({  
                element: playerElement,  
                autoplay: true, // 自动播放  
                // 其他APlayer配置...  
                audio: [  
                    // ... 你的歌曲列表 ...  
                ]  
            });  
        }  
    }  
}  
  
// 确保DOM加载完成后初始化播放器  
document.addEventListener('DOMContentLoaded', initializePlayer);