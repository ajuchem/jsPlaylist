var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var fieldsOfGold = new Song("Fields of Gold", "Sting", "3:40");
var beautifulDay = new Song("Beautiful Day", "U2", "4:08");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

var toKillaMockingbird = new Movie("To Kill a Mockingbird", 1962, "2:10:00");

playlist.add(hereComesTheSun);
playlist.add(fieldsOfGold);
playlist.add(beautifulDay);
playlist.add(walkingOnSunshine);

playlist.add(toKillaMockingbird);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
