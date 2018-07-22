var playlist = new Object({
  'Slowdive': 'Alison',
  'My Bloody Valentine': 
});

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle;
 return playlist
}