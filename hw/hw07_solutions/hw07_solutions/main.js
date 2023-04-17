const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const tracks = [
    { 
        id: "6dGnYIeXmHdcikdzNNDMm2", 
        name: "Here Comes The Sun - Remastered 2009", 
        album: { 
            id: "0ETFjACtuP2ADo6LFhL6HN", 
            name: "Abbey Road (Remastered)" 
        }, 
        artist: { 
            id: "3WrFJ7ztbogyGnTHbHJFl2", 
            name: "The Beatles" 
        } 
    }, { 
        id: "3Am0IbOxmvlSXro7N5iSfZ", 
        name: "Strawberry Fields Forever", 
        album: { 
            id: "2BtE7qm1qzM80p9vLSiXkj", 
            name: "Magical Mystery Tour (Remastered)" 
        }, 
        artist: { 
            id: "3WrFJ7ztbogyGnTHbHJFl2", 
            name: "The Beatles" 
        } 
    }, { 
        id: "2EqlS6tkEnglzr7tkKAAYD", 
        name: "Come Together", 
        album: { 
            id: "0ETFjACtuP2ADo6LFhL6HN", 
            name: "Abbey Road (Remastered)" 
        }, 
        artist: { 
            id: "3WrFJ7ztbogyGnTHbHJFl2", 
            name: "The Beatles" 
        } 
    }
];


async function getTracks(term) {
    const elem = document.querySelector('#tracks');
    elem.innerHTML = "";
    const data = await fetch(baseURL + '?type=track&q=' + term).then(response => response.json());
    if (data.length === 0) {
        elem.innerHTML += `<p>No tracks found</p>`;
        return;
    }

    const firstFive = data.slice(0, 5);
    for (item of firstFive) {
        elem.innerHTML += getTrackHTML(item);
    }
}

async function getAlbums(term) {
    const elem = document.querySelector('#albums');
    elem.innerHTML = "";
    const data = await fetch(baseURL + '?type=album&q=' + term).then(response => response.json());
    if (data.length === 0) {
        elem.innerHTML += `<p>No albums found</p>`;
        return;
    }
    for (item of data) {
        elem.innerHTML += getAlbumHTML(item);
    }
}

async function getArtist(term) {
    const elem = document.querySelector('#artist');
    elem.innerHTML = "";
    const data = await fetch(baseURL + '?type=artist&q=' + term).then(response => response.json());
    if (data.length > 0) {
        const firstArtist = data[0];
        elem.innerHTML += getArtistHTML(firstArtist);
    } else {
        elem.innerHTML = `<p>No artist found</p>`;
    }
}


const getAlbumHTML = (data) => {

    if (!data.image_url) {
        data.image_url = 'https://www.pngkit.com/png/full/943-9439413_blue-butterfly-free-png-image-dark-blue-to.png';
    }
    return `<section class="album-card" id="${data.id}">
        <div>
            <img alt="Album cover images of ${data.name}" src="${data.image_url}" />
            <h2>${data.name}</h2>
            <div class="footer">
                <a href="${data.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
}

function getTrackHTML(data) {
    if (!data.preview_url) {
        return `
            <section class="track-item">
                <img src="${data.album.image_url}">
                <div class="label">
                    <h2>${data.name}</h2>
                    <p>
                        ${data.artist.name} (no preview available)
                    </p>
                </div>
            </section>`;
    }
    return `
    <button 
        aria-label="Listen to ${data.name}" 
        class="track-item preview" 
        data-preview-track="${data.preview_url}" 
        onclick="playTrack('${data.id}');"
        >
        <img alt="Album cover images of ${data.album.name}" src="${data.album.image_url}">
        <i class="fas fa-play play-track"></i>
        <div class="label">
            <h2>${data.name}</h2>
            <p>
                ${data.artist.name}
            </p>
        </div>
    </button>`;
}

function getArtistHTML(data) {
    if (!data.image_url) {
        data.image_url = 'https://www.pngkit.com/png/full/943-9439413_blue-butterfly-free-png-image-dark-blue-to.png';
    }
    return `<section class="artist-card" id="${data.id}">
        <div>
            <img alt="Image of ${data.name}" src="${data.image_url}" />
            <h2>${data.name}</h2>
            <div class="footer">
                <a href="${data.spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>`;
}

function playTrack(trackId) {
    document.querySelector('#artist-section h1').innerHTML = "Now Playing";
    document.querySelector('#artist').innerHTML = `
        <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0" 
            width="100%" 
            height="352px" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe> 
    `;
}


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}

//optional
setTimeout(search, 500);