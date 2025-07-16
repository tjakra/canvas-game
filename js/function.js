function frame(w,h){
    canva.width = w
    canva.height = h
}

function screen(){
    const elem = document.getElementById("area");
    // 1. Masuk fullscreen
    if (elem.requestFullscreen) {
        elem.requestFullscreen().then(() => {
        // 2. Rotasi jika mobile
        if (isMobile()) {
            rotateToLandscape();
        }
        });
    }
}

function isMobile() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

function rotateToLandscape() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("landscape").catch(err => {
      console.warn("Rotasi gagal:", err);
    });
  }
}