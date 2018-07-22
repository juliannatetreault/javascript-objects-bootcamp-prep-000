var playlist = new Object({
  Slowdive: 'Alison',
  
});

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
 return playlist
}