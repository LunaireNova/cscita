
const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;

function forward() {
    if (idx < photos.length -1) {
        ++idx;
    } else {
        idx = 0;
    }
    showImage();
}

function back() {
    if (idx > 0) {
        --idx;
    } else {
        idx = photos.length -1;
    }
    showImage();
}

function showImage() {
    document.querySelector('.current-photo').innerHTML = `
        <img src="${photos[idx]}" alt="current photo" />
    `
    document.querySelector('.caption').innerHTML = `Photo ${idx + 1} of ${photos.length}`
}

showImage();