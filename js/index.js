var i = 1;

function volta() {
  if (i <= 1) {
    document.getElementById('muda').src = "img/campanha44.png";
    i = 4;
  } else if (i == 2) {
    document.getElementById('muda').src = "img/campanha11.png";
    i--;
  } else if (i == 3) {
    document.getElementById('muda').src = "img/campanha22.png";
    i--;
  } else if (i == 4) {
    document.getElementById('muda').src = "img/campanha33.png";
    i--;
  }
}

function avanca() {
  if (i == 1) {
    document.getElementById('muda').src = "img/campanha22.png";
    i++;
  } else if (i == 2) {
    document.getElementById('muda').src = "img/campanha33.png";
    i++;
  } else if (i == 3) {
    document.getElementById('muda').src = "img/campanha44.png";
    i++;
  } else if (i >= 4) {
    document.getElementById('muda').src = "img/campanha11.png";
    i = 1;
  }
}

function passa() {
  setTimeout(setInterval(avanca, 3000), 2000);
}
