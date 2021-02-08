
window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop
    //获取左边聊天框
    const leftChat = document.querySelector('.first_chat_left')
    //获取右边聊天框
    const rightChat = document.querySelector('.first_chat_right')
    //左边聊天框图片
    const leftPic = document.querySelector('.first_chat_left_img')
    //右边聊天框图片
    const rightPic = document.querySelector('.first_chat_right_img')
    //放大倍数
    const i = scrollTop / 35
    const j = (scrollTop - 35) / 35
    //音频播放
    const firstMusic = document.getElementById('first_meet_music');
    firstMusic.src = 'http://n.sinaimg.cn/gd/20200316/xuwen/1.mp3';
    if (scrollTop === 0) {
        leftChat.style.display = ""
        rightChat.style.display = ""
    }
    if (scrollTop > 0 && scrollTop <= 35) {
        leftChat.style.display = "block"
        leftChat.style.transform = `scale(${i})`
        firstMusic.addEventListener('canplay', () => {
            if (firstMusic.paused) {
                firstMusic.play();
            } else {
                firstMusic.paused()
            }
        }, { once: true })
    }
    if (scrollTop > 35 && scrollTop < 70) {
        rightChat.style.display = "block"
        rightChat.style.transform = `scale(${j})`
    }

}
