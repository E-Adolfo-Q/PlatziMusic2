
function getArtistsCountry(country) {
   const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=15dbecd6ecf22ed00947923d642b293b&format=json`   
   return fetch(URL)
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => ({    
          id : artist.mbid,
    	    name : artist.name,
          image : artist.image[3]['#text'],         
          comments: 140    	
    })))   
}


export { getArtistsCountry }