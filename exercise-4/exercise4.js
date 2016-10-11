function findHighestNum() {
  var newDiv = document.createElement("div");
  var input;
  var number;
  var storeInput = [];
  var x;

  while(number !== 0) {
    input = prompt("Type in a number");
    number = parseInt(input);
    storeInput.push(number);
    x = storeInput[0];

    if(input === "" || input === NaN ) {
      alert("Please enter a number!");
      storeInput.splice(1, 1);
    }
    else if ( x >= number ) {
    storeInput.splice(1);
    }
    else {
      storeInput.splice(0, 1);
    }
    console.log(storeInput);
  }
    newDiv.innerHTML = "The highest number is " + storeInput;
    // newDiv.style.backgroundColor = "red";
    document.body.appendChild(newDiv);
    return;
}
findHighestNum();




function countLetters() {
  var newP = document.createElement("p");
  var array = [];
  var text = "Praesent felis lacus, viverra a interdum quis, fringilla aliquam velit. In dictum vulputate rhoncus. Nullam sollicitudin a tortor non aliquam. Donec tristique mi risus, id consequat felis scelerisque in. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed mollis tincidunt justo, interdum consectetur felis sagittis quis. Quisque ullamcorper quam a dictum scelerisque. Sed efficitur mi nec aliquet tempus. Maecenas elementum egestas viverra. Duis accumsan, diam ac malesuada vulputate, nunc purus accumsan felis, at feugiat est sem eget eros. Vestibulum pharetra arcu eros, w ac sagittis enim aliquet eget. In tincidunt nisi ac mi luctus, sed interdum neque porta. Aenean vel ante eget magna porta cursus. Phasellus et dignissim turpis, ac rutrum nibh. In non scelerisque urna.";
  var userLetter = prompt("What letter do you want to count?");


  if(userLetter === "" || userLetter === " ") {
    alert("Please type in a single letter!");
    return countLetters();
  }
  else if (userLetter.length === 1) {
    userLetter = countLetter(userLetter);
  }
  else {
    alert("Please use just a single letter!")
    return countLetters();
  }

  function countLetter(letter) {
    for(var i = 0; i <= text.length; i++) {
      if(text.charAt(i) === letter) {
        array.push(text.charAt(i));
      }
    };
    newP.innerHTML = "There are " + array.length + " " + letter + "´s in this text!";
    document.body.appendChild(newP);
    console.log(array);
  }
}
countLetters();
