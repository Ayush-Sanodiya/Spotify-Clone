console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let MyProgressBar = document.getElementById("MyProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Tere Bin - Rabbi Shergil",
    filePath: "song/1.mp3",
    coverPath: "covers/Rabbi.jpg",
  },
  {
    songName: "Mera Yaar - Bhaag Milkha Bhaag",
    filePath: "song/2.mp3",
    coverPath: "covers/MeraYaar.jpg",
  },
  {
    songName: "Apna Bana Le - Full Audio | Bhediya",
    filePath: "song/3.mp3",
    coverPath: "covers/ApnaBanaLe.jpg",
  },
  {
    songName: "Tere Hawaale - Laal Singh Chaddha",
    filePath: "song/4.mp3",
    coverPath: "covers/Tere.jpg",
  },
  {
    songName: "Kalank - Title Track",
    filePath: "song/5.mp3",
    coverPath: "covers/Kalank.jpg",
  },
  {
    songName: "Chal Ghar Chalen Malang - Unleash The Madness",
    filePath: "song/6.mp3",
    coverPath: "covers/Chal.jpg",
  },
  {
    songName: "Phir Aur Kya Chahiye - Zara Hatke Zara Bachke",
    filePath: "song/7.mp3",
    coverPath: "covers/phirAurKyaChahiye.jpg",
  },
  {
    songName: "Shayad - Love Aaj Kal",
    filePath: "song/8.mp3",
    coverPath: "covers/Shayad.jpg",
  },
  {
    songName: "Mehrama - Love Aaj Kal",
    filePath: "song/9.mp3",
    coverPath: "covers/Mehrama.jpg",
  },
  {
    songName: "Hawayein - Jab Harry Met Sejal",
    filePath: "song/10.mp3",
    coverPath: "covers/Hawayein.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
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
  // update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  MyProgressBar.value = progress;
});

MyProgressBar.addEventListener("change", () => {
  audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    })
  }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
  })
})

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
    songIndex = 0;
  }
  else{
    songIndex +=1;
  }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex = 0;
  }
  else{
    songIndex -=1;
  }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})