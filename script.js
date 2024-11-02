let movie_input=document.querySelector(".input_movie")
let search_movie=document.querySelector(".search-button")
let container=document.querySelector(".container")
let target_year=document.querySelectorAll(".target_year")

//fetch by search
search_movie.addEventListener("click",()=>{
    container.innerHTML=''
  const apiKey = '9a4b3fa0';
  const searchTerm = movie_input.value;
  fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`)
   .then(response => response.json())
   .then((data) => {
    if (data.Search) {
      data.Search.forEach((item) => {
        console.log(item)
        let movies=document.createElement('div')
        movies.className="movies"
        
        movies.innerHTML=`
        <div class="plus"><h3>+</h3></div>
            <div class="poster">
              <img width="100%" height="100%" src="${item.Poster}" alt="${item.Title}">
            </div>
            <div class="details">
              <h3 class="title">${item.Title}</h3>
              <p class="rating_year"><span><i class="fa-solid fa-star"></i> ${item.imdbRating || 'N/A'}</span><span>${item.Year}</span></p>
            </div>
            <div class="watchlist">
              <button>+ Watch List</button>
            </div>
        `
        container.appendChild(movies)

      });
    } else {
      console.error('No results found');
    }
  })
  .catch(error => console.error('Error:', error));
})
  
//fetch by year
target_year.forEach((element)=>{
    element.addEventListener("click",()=>{
      container.innerHTML=''
      const apiKey = '9a4b3fa0';
      const year = element.textContent;
    
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=movie&y=${year}`)
      .then(response => response.json())
      .then((data) => {
        if (data.Search) {
          data.Search.forEach((item) => {
            let movies=document.createElement('div')
          movies.className="movies"
          
          movies.innerHTML=`
          <div class="plus"><h3>+</h3></div>
              <div class="poster">
                <img width="100%" height="100%" src="${item.Poster}" alt="${item.Title}">
              </div>
              <div class="details">
                <h3 class="title">${item.Title}</h3>
                <p class="rating_year"><span><i class="fa-solid fa-star"></i> ${item.imdbRating || 'N/A'}</span><span>${item.Year}</span></p>
              </div>
              <div class="watchlist">
                <button>+ Watch List</button>
              </div>
          `
          container.appendChild(movies)
          });
        } else {
          console.error('No results found for the specified year');
        }
      })
      .catch(error => console.error('Error:', error));
    })
  })

//default movies when website loaded
  const topHollywoodMovies = [
    { title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
    { title: "The Godfather", year: 1972, rating: 9.2 },
    { title: "The Dark Knight", year: 2008, rating: 9.0 },
    { title: "The Godfather Part II", year: 1974, rating: 9.0 },
    { title: "12 Angry Men", year: 1957, rating: 9.0 },
    { title: "Schindler's List", year: 1993, rating: 8.9 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9 },
    { title: "Pulp Fiction", year: 1994, rating: 8.9 },
    { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, rating: 8.8 },
    { title: "Forrest Gump", year: 1994, rating: 8.8 },
    { title: "Inception", year: 2010, rating: 8.8 },
    { title: "The Lord of the Rings: The Two Towers", year: 2002, rating: 8.7 },
    { title: "Fight Club", year: 1999, rating: 8.8 },
    { title: "The Matrix", year: 1999, rating: 8.7 },
    { title: "Goodfellas", year: 1990, rating: 8.7 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975, rating: 8.7 },
    { title: "Se7en", year: 1995, rating: 8.6 },
    { title: "City of God", year: 2002, rating: 8.6 },
    { title: "The Silence of the Lambs", year: 1991, rating: 8.6 },
    { title: "It's a Wonderful Life", year: 1946, rating: 8.6 },
    { title: "Star Wars: Episode IV - A New Hope", year: 1977, rating: 8.6 },
    { title: "Saving Private Ryan", year: 1998, rating: 8.6 },
    { title: "The Green Mile", year: 1999, rating: 8.6 },
    { title: "Interstellar", year: 2014, rating: 8.6 },
    { title: "Léon: The Professional", year: 1994, rating: 8.5 },
    { title: "The Usual Suspects", year: 1995, rating: 8.5 },
    { title: "Harakiri", year: 1962, rating: 8.6 },
    { title: "The Lion King", year: 1994, rating: 8.5 },
    { title: "Back to the Future", year: 1985, rating: 8.5 },
    { title: "Gladiator", year: 2000, rating: 8.5 },
    { title: "The Prestige", year: 2006, rating: 8.5 },
    { title: "Memento", year: 2000, rating: 8.4 },
    { title: "Apocalypse Now", year: 1979, rating: 8.4 },
    { title: "Alien", year: 1979, rating: 8.4 },
    { title: "The Great Dictator", year: 1940, rating: 8.4 },
    { title: "American History X", year: 1998, rating: 8.5 },
    { title: "Casablanca", year: 1942, rating: 8.5 },
    { title: "The Shining", year: 1980, rating: 8.4 },
    { title: "Whiplash", year: 2014, rating: 8.5 },
    { title: "The Intouchables", year: 2011, rating: 8.5 },
    { title: "Coco", year: 2017, rating: 8.4 },
    { title: "Braveheart", year: 1995, rating: 8.4 },
    { title: "Toy Story", year: 1995, rating: 8.3 },
    { title: "Reservoir Dogs", year: 1992, rating: 8.3 },
    { title: "Amadeus", year: 1984, rating: 8.4 },
    { title: "Good Will Hunting", year: 1997, rating: 8.3 },
    { title: "Django Unchained", year: 2012, rating: 8.4 },
    { title: "Avengers: Infinity War", year: 2018, rating: 8.4 },
    { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4 },
    { title: "Joker", year: 2019, rating: 8.4 },
    { title: "The Departed", year: 2006, rating: 8.5 }
  ];

document.addEventListener("DOMContentLoaded", (event) => {
    topHollywoodMovies.forEach((movie)=>{
      container.innerHTML=''
     const apiKey = '9a4b3fa0';
     const year = movie.title;
 
     fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${year}`)
       .then(response => response.json())
       .then((data) => {
             let movies=document.createElement('div')
           movies.className="movies"
           movies.innerHTML=`
           <div class="plus"><h3>+</h3></div>
               <div class="poster">
                 <img width="100%" height="100%" src="${data.Poster}" alt="${data.Title}">
               </div>
               <div class="details">
                 <h3 class="title">${data.Title}</h3>
                 <p class="rating_year"><span><i class="fa-solid fa-star"></i> ${data.imdbRating || 'N/A'}</span><span>${data.Year}</span></p>
               </div>
               <div class="watchlist">
                 <button>+ Watch List</button>
               </div>
           `
           container.appendChild(movies)
       })
       .catch(error => console.error('Error:', error));
   })
  });