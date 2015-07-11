function Movie(title, time, year, desc, genre) {
    this.movieTitle = title;
    this.runTime = time;
    this.releaseDate = year;
    this.movieGenre = genre;
    this.movieDescription = desc;
}

Movie.prototype = {
    runningTimeHours: function runningTimeHours() {
        var time = (this.runTime / 60).toFixed(2);
        return(time);
    },
    preview: function preview() {
        return(this.movieDescription.slice(0,50) + "...");
    }
};

function makeItHappen(elementType, text, attributes, styles, selector) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    
    var container = document.querySelector(selector);

    if(container) {
        container.appendChild(newElement);
    }

    return newElement;
}

makeItHappen('h1', null, {id: 'movie header', class:'col-8-md' }, null, 'body');
makeItHappen('ul', null, {id: 'list' }, {textAlign: 'center'}, 'body');

var form = document.getElementById("newMovieForm");

form.addEventListener("submit", function (evt) {
    var movie = document.getElementById("movieTitle").value;
    var time = document.getElementById("runTime").value;
    var year = document.getElementById("yearRelease").value;
    var desc = document.getElementById("description").value;
   

    var genreInputs = document.getElementsByName("genre");

    var genre;

    for (var i = 0; i < genreInputs.length; i++) {
        var genreInput = genreInputs[i];
        if (genreInput.checked) {
            genre = genreInput.value;
            
        }
    }
    var movieInstance = new Movie(movie, time, year, desc, genre);
    enter = makeItHappen('li', movieInstance.movieTitle, {rel: movieInstance.preview(), class: movieInstance.runningTimeHours()}, {listStyleType: 'none'}, null);

    enter.addEventListener('click', function(){
        alert(this.getAttribute('rel') + " Total Time: " + this.getAttribute('class') + " hrs");
    });

    var sticky = document.getElementById('list');
    sticky.appendChild(enter);

    document.getElementById("newMovieForm").reset();

    evt.preventDefault();

});