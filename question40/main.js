function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Create three dictionaries representing different albums
var album1 = make_album('Artist1', 'Album Title1');
var album2 = make_album('Artist2', 'Album Title2', 12); // Including number of tracks
var album3 = make_album('Artist3', 'Album Title3');
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
