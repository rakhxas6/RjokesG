let jokes = [
  "What do you call a boomerang that won't come back?<br> A stick.",

  "What does a cloud wear under his raincoat? <br>Thunder-wear.",

  "Two pickles fell out of a jar onto the floor? <br> What did one say to the other Dill with it.",

  "What time is it when the clock strikes 13?<br> Time to get a new clock.",

  "How does a cucumber become a pickle?<br>It goes through a jarring experience.",

  "What did one toilet say to the other ? <br>You look a bit flushed.",

  "What do you think of that new diner on the moon Food was good?<br> but there really wasn't much atmosphere.",

  "Why did the dinosaur cross the road? <br>Because the chicken wasn't born yet.",

  'Why can\'t Elsa from Frozen have a balloon?<br> Because she will "let it go, let it go."',

  "What musical instrument is found in the bathroom ?<br> A tuba toothpaste.",

  "Why don't scientists trust atoms? <br>Because they make up everything.",

  "I told my wife she was drawing her eyebrows too high? <br>She looked surprised.",

  "Why did the tomato turn red? <br>Because it saw the salad dressing!",

  "What do you call a lazy kangaroo? <br>A pouch potato!",

  "Why did the chicken cross the playground?<br> To get to the other slide.",
];


let divJoke = document.getElementById("joke");
randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
divJoke.innerHTML = randomJoke;

// for(let key in jokes){
//     console.log(jokes[key])
// }
