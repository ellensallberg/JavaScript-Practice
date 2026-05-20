let movieList = []

function addMovie()  {

    let newMovie = {
        title: prompt("Enter movie title:"),
        director: prompt("Enter movie director:"),
        isWatched: false
    }

    movieList.push(newMovie)
}

function listMovies() {
    console.clear()
    movieList.forEach(function(movie, index) {

        console.log(`
            Movie #${index + 1}
            Title: ${movie.title}
            Director: ${movie.director}
            Watched: ${movie.isWatched ? "Yes" : "No"}
        `)
    })
}

function markAsWatched() {

    const title = prompt("Enter the title of the movie to mark as watched:")

    const movie = movieList.find(function(movie) {

        return movie.title === title

    })

    if (movie) {
        movie.isWatched = true
        alert(`${title} marked as watched`)
    } else {
        alert("movie not found")
    }
}

running = true;

while (running) {
    const choice = prompt (`
    Movie watchlist
    1. Add movie
    2. List movies
    3. Mark movie as watched
    4. Exit
    Enter your coice:`)

    switch (choice) {
        case "1":
            addMovie()
            break
        
        case "2":
            listMovies()
            break

        case "3":
            markAsWatched()
            break

        case "4":
            running = false;
            alert("bye diva")
            break
        
        default:
            alert("invalid choice")
    }
}


