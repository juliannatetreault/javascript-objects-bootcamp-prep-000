var playlist = new Object({artistName: 'song title'});

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
 return playlist
}