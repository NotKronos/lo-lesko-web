document.addEventListener('wheel', scroll);
let prevScroll = 0;
const maxScroll = -47.5;
function scroll(e) {

    const maxDelta = window.innerWidth * 0.5;
    const delta = e.deltaY;
    const percent = prevScroll + (delta / maxDelta) * -100;
    if(percent > 0) {
        document.getElementById('article-track').style.transform = `translate(0%, -50%)`;
        return;
    } else if(percent < -47.5) {
        document.getElementById('article-track').style.transform = `translate(-47.5%, -50%)`;
        document.getElementById('scroll-progress').style.width = `100%`;
        return;
    } else {
        prevScroll = percent;
        document.getElementById('article-track').style.transform = `translate(${percent}%, -50%)`;
    }
    const scrollProgress = percent / maxScroll * 100;
    document.getElementById('scroll-progress').style.width = `${scrollProgress}%`;
}

