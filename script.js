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

// Add a New song
// click functions
addNewSongBTN.addEventListener("click", function () {
  mainView.style.display = "none";
  addSongView.style.display = "inline-block";
});

// function song interface

// Add song interface
saveSong.addEventListener("click", function () {
  let song = {
    name: inputName.value,
    rating: inputRating.value,
    BPM: inputBPM.value,
    vibe: inputVibe.value,
    musicStyle: Array.from(musicStyleTags)
      .filter((tag) => tag.checked === true)
      .map((tag) => tag.value),
    popularity: inputPopularity.value,
    atmosphere: Array.from(atmosphereTags)
      .filter((tag) => tag.checked === true)
      .map((tag) => tag.value),
    cover: inputCover.checked,
    new: inputNew.checked,
    tone: inputTone.value,
    length: inputLength.value,
  };
  savedSongs.push(song);
  localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
  console.log(song);

  // set default values
  song = {
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
  console.log(song);
  // console.log(savedSongs.map((tag) => tag === true));
});

// Main view interface
returnBTN.addEventListener("click", function () {
  mainView.style.display = "inline-block";
  addSongView.style.display = "none";
});

// removes localstorage
// localStorage.removeItem("saved");
// console.log(savedSongs);
