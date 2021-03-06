console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "AS I LAY DYING - Through Struggle",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.JPG",
  },
  {
    songName: "Bring Me The Horizon - Avalanche",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.JPG",
  },
  {
    songName: "Bring Me The Horizon - It Never Ends",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.JPG",
  },
  {
    songName: "Bullet For My Valentine - Tears Don't Fall",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.JPG",
  },
  {
    songName: "Killswitch Engage - Rose Of Sharyn",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.JPG",
  },
  {
    songName: "Still Remains - The Worst Is Yet To Come",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.JPG",
  },
  {
    songName: "This Calling - All That Remains",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.JPG",
  },
  {
    songName: "Unearth - Zombie Autopilot",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.JPG",
  },
  {
    songName: "Self Medicated - Until I Wake",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.JPG",
  },
  {
    songName: "Wage War - Low",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.JPG",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
  if (loop.style.color == "limegreen") {
    if (progress === 100) {
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    }
  } else if (shuffle.style.color == "limegreen") {
    if (progress === 100) {
      randomIndex = Math.floor(Math.random() * 10);
      audioElement.src = `songs/${randomIndex + 1}.mp3`;
      masterSongName.innerText = songs[randomIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    }
  } else if (progress === 100) {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  }
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (shuffle.style.color == "limegreen") {
    randomIndex = Math.floor(Math.random() * 10);
    audioElement.src = `songs/${randomIndex + 1}.mp3`;
    masterSongName.innerText = songs[randomIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else if (true) {
    if (songIndex >= 9) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  }
});

document.getElementById("previous").addEventListener("click", () => {
  if (shuffle.style.color == "limegreen") {
    randomIndex = Math.floor(Math.random() * 10);
    audioElement.src = `songs/${randomIndex + 1}.mp3`;
    masterSongName.innerText = songs[randomIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  } else if (true) {
    if (songIndex <= 0) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  }
});

let shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", toggle1);
function toggle1() {
  if (shuffle.style.color != "limegreen") {
    shuffle.style.color = "limegreen";
  } else if (shuffle.style.color == "limegreen") {
    shuffle.style.color = null;
  }
}

let loop = document.getElementById("loop");
loop.addEventListener("click", toggle2);
function toggle2() {
  if (loop.style.color != "limegreen") {
    loop.style.color = "limegreen";
  } else if (loop.style.color == "limegreen") {
    loop.style.color = null;
  }
}
