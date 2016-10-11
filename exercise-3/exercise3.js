  var me = {
    name: "Krister",
    age: "26",
    favFoods: ["Lasagna", "Meatballs", "Pizza"],
    favMovies: { movie: "Unleashed", director: "asdf", star: "Jet Li" }
  }

function myFunction(myself) {
  console.log("Hello, my name is " + me.name + " and I am " + me.age +
  " years old. One of my favorite foods is " + me.favFoods[1] +
  " and my favorite movie is " +me.favMovies.movie +
  ", directed by " + me.favMovies.director + ", starring " +
  me.favMovies.star + "!");

  var content = "Hello, my name is " + me.name + " and I am " + me.age +
  " years old. One of my favorite foods is " + me.favFoods[1] +
  " and my favorite movie is " +me.favMovies.movie +
  ", directed by " + me.favMovies.director + ", starring " +
  me.favMovies.star + "!";

  var element = document.createElement("p")
  element.style.backgroundColor = "red";
  element.textContent = content;
  document.body.appendChild(element);
}

myFunction(me);
