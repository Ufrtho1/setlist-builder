"use strict";

// data variables
const saved = localStorage.getItem("savedSongs");
const savedSongs = saved ? JSON.parse(saved) : [];

// HTML
const addNewSongBTN = document.querySelector(".add-new-song");
const returnBTN = document.querySelector(".return");
const addSongView = document.querySelector(".add-song-view");
const mainView = document.querySelector(".main-view");
const songParameters = document.querySelector(".song-parameters");
const saveSong = document.querySelector(".save-song");
const listOfSongs = document.querySelector(".list-of-songs");
const updateSong = document.querySelector(".update-song");

// parameters
const inputName = document.querySelector(".input-name");
const inputRating = document.querySelector(".input-rating");
const inputBPM = document.querySelector(".input-bpm");
const inputVibe = document.querySelector(".input-vibe");
const inputCover = document.querySelector(".input-cover");
const inputNew = document.querySelector(".input-new");
const inputTone = document.querySelector(".input-tone");
const inputLength = document.querySelector(".input-length");
const inputPopularity = document.querySelector(".input-popularity");

// Music styles
const musicStyleTags = document.querySelectorAll(".music-style-tags input");

// Atmosphere tags
const atmosphereTags = document.querySelectorAll(".atmosphere-tags input");

// manipulating song
let songId = null;

// default
const getDefault = function () {
  return {
    id: null,
    name: (inputName.value = ""),
    rating: (inputRating.value = ""),
    BPM: (inputBPM.value = ""),
    vibe: (inputVibe.value = ""),
    musicStyle: Array.from(musicStyleTags)
      .filter((tag) => tag.checked === true)
      .map((tag) => (tag.checked = false)),
    popularity: (inputPopularity.value = ""),
    atmosphere: Array.from(atmosphereTags)
      .filter((tag) => tag.checked === true)
      .map((tag) => (tag.checked = false)),
    cover: (inputCover.checked = false),
    new: (inputNew.checked = false),
    tone: (inputTone.value = ""),
    length: (inputLength.value = ""),
  };
};

const getSongData = function () {
  return {
    name: inputName.value,
    rating: inputRating.value ? Number(inputRating.value) : null,
    BPM: inputBPM.value ? Number(inputBPM.value) : null,
    vibe: inputVibe.value ? Number(inputVibe.value) : null,
    musicStyle: Array.from(musicStyleTags)
      .filter((tag) => tag.checked === true)
      .map((tag) => tag.value),
    popularity: inputPopularity.value ? Number(inputPopularity.value) : null,
    atmosphere: Array.from(atmosphereTags)
      .filter((tag) => tag.checked === true)
      .map((tag) => tag.value),
    cover: inputCover.checked ? "It's cover" : "",
    new: inputNew.checked ? "It's new song" : "",
    tone: inputTone.value,
    length: inputLength.value ? Number(inputLength.value) : null,
  };
};

// function song interface
const newSongInterface = function () {
  listOfSongs.innerHTML = savedSongs
    .map(
      (song) =>
        `<p id="${song.id}"> ${song.name ? `Name: ${song.name}` : ""} ${song.rating ? `,Rating: ${song.rating}` : ""} ${song.BPM ? `,BPM: ${song.BPM}` : ""} ${song.vibe ? `,Vibe: ${song.vibe}` : ""} ${song.musicStyle ? `,Music style: ${song.musicStyle}` : []} ${song.popularity ? `,Popularity: ${song.popularity}` : ""} ${song.atmosphere ? `,Atmosphere: ${song.atmosphere}` : []} ${song.cover} ${song.new} ${song.tone ? `,Tone: ${song.tone}` : ""} ${song.length ? `,Length: ${song.length}` : ""} <button class="delete-song" data-id="${song.id}">x</button></p>`,
    )
    .join("");
};

// click on song by id
listOfSongs.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-song")) {
    const id = Number(e.target.dataset.id);
    const index = savedSongs.findIndex((song) => song.id === id);
    savedSongs.splice(index, 1);
    localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
    newSongInterface();
    return;
  }

  let clickedSong = savedSongs.find((song) => song.id === Number(e.target.id));

  songId = clickedSong.id;

  // console.log(clickedSong);

  // rewrite values as inputs
  inputName.value = clickedSong.name;
  inputBPM.value = clickedSong.BPM;
  inputRating.value = clickedSong.rating;
  inputVibe.value = clickedSong.vibe;
  musicStyleTags.forEach(
    (tag) => (tag.checked = clickedSong.musicStyle.includes(tag.value)),
  );
  inputPopularity.value = clickedSong.popularity;
  atmosphereTags.forEach(
    (tag) => (tag.checked = clickedSong.atmosphere.includes(tag.value)),
  );
  inputCover.checked = clickedSong.cover === "It's cover" || false;
  inputNew.checked = clickedSong.new === "It's new song" || false;
  inputTone.value = clickedSong.tone;
  inputLength.value = clickedSong.length;

  mainView.style.display = "none";
  addSongView.style.display = "inline-block";
  updateSong.style.display = "inline-block";
});

// current song
updateSong.addEventListener("click", function () {
  let update = savedSongs.findIndex((song) => song.id === songId);
  console.log(update);
  let song = getSongData();
  song.id = songId;
  savedSongs[update] = song;
  localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
  newSongInterface();
  updateSong.style.display = "none";
  song = getDefault();
});

// Add a New song
// click functions
addNewSongBTN.addEventListener("click", function () {
  mainView.style.display = "none";
  addSongView.style.display = "inline-block";
  newSongInterface();
});

// Add song interface
saveSong.addEventListener("click", function () {
  let song = getSongData();
  song.id = Date.now();
  savedSongs.unshift(song);
  localStorage.setItem("savedSongs", JSON.stringify(savedSongs));

  // set default values

  song = getDefault();
  // console.log(savedSongs.map((tag) => tag === true));
  newSongInterface();
});

// Main view interface
returnBTN.addEventListener("click", function () {
  mainView.style.display = "inline-block";
  addSongView.style.display = "none";
});

// removes localstorage
// localStorage.removeItem("savedSongs");
// console.log(savedSongs);
