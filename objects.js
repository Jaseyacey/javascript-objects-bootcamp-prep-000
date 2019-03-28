var playlist = {
  artistName : "Lil Wayne",
  songTitle  : "Doe",
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; 
  return playlist
}