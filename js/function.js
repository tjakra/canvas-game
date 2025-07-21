function frame(w,h){
    canva.width = w
    canva.height = h
}

function screen(){
    const elem = document.getElementById("area");
    // 1. Masuk fullscreen
    elem.requestFullscreen()
    if(isMobile()){
      myscreen.lock("landscape")
    }
}

function isMobile() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}