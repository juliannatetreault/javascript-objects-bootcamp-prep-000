var playlist = new Object({
  artistName: 'song titles'
});

function updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi") {
  return Object.assign({}, {['Phil Ochs']: "Here's to the State of Mississippi"})
}