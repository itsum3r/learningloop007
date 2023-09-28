//Getting Started Exercises with TypeScript and Node.js
//Here we go then

//1 -- Personal Message: Store a person’s name in a variable, and print a message to that person.
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

{
let mess = "Yo Wassap Eric Will Ya Learn Python Today?";
console.log(mess);
}

//2 -- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

{
    const namcase = "Ahmad";

    console.log(namcase.toLowerCase());
    console.log(namcase.toUpperCase());
    console.log(namcase.toLocaleUpperCase());
}

//3 -- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
      // Your output should look something like the following, including the quotation marks:

{
    console.log("Peter The Slave Said That," , '"i fight them and they beat me, they whip me,they string me up,they sell me,they throw me down in well,they pull me out and beat me again,i fight them,they broke my bones more then you can count, but they never break me"')
      }

//4 -- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

{
    let qou = '"i fight them and they beat me, they whip me,they string me up,they sell me,they throw me down in well,they pull me out and beat me again,i fight them,they broke my bones more then you can count, but they never break me"';
    let fam = "Peter the Slave Once Said"
    let all = (fam && qou);
    console.log(all);
}

//5 -- Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed.
      // Then print the name after striping the white spaces.

{
    let name = "\t\nAhmad\t\n";

console.log(name);

let strippedName = name.trim();

console.log(strippedName);

}

//6 -- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
    // Be sure to enclose your operations in print statements to see the results.

{
    let add = 5+3
    console.log("Addition",add);

    let sub = 18-10
    console.log("Substration",sub);

    let multi = 2*4
    console.log("multiplication",multi);
    
    let div = 16%2
    console.log("Division",div);

}

//7 -- Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

{
    let fav = 69
    console.log("Yk my favourite number is",fav);
}

//8 -- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

{
    //i am taking the upper programme 
    //in this i have just made a varibale of my fav number
    //then i printed it easy peasy lemon sqeezy

}

//9 -- Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

{
    var  fname:string[] = ["Ahmad","Hunzala","Ahad","Mirza"];
    for (let i= 0; i < fname.length; i++) {
        const element = fname[i];
        console.log(fname[i]);
    }
    
}

//10 -- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
        //The text of each message should be the same, but each message should be personalized with the person’s name.

{
    const peeps = ["Ahmad", "Hunzala", "Ahad","Mirza"];

    const mess = "Hello, {name}! How are you today?";
    
    for (const person of peeps) {
      console.log(mess.replace("{name}", person));
    }
    
}

//11 -- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
       // Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

{
    const favcars = ["F1","Avatr","Rolls Royace"];
    for (let ix= 0; ix < fname.length; ix++) {
        const element = fname[ix];
        console.log("i would love to own a",favcars[ix]);
}
}

//12 -- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
       // Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

{
    const mem = ["Aunt","Cousin","Calli"];
    for (let index = 0; index < mem.length; index++) {
        const element = mem[index];
        console.log("Dear",mem[index], "I Humbly invite you to my dinner at my home at wednesday 7:30 looking for your way here bye." )
        
    }
}

//13 -- Changing Guest List: You just heard that one of your guests can’t make the dinner,
        // so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

{
    const ori = ["Aunt","Cousin","Calli"];

const newg = "Uncle";

const invitedGuests = ori.filter((guest) => guest !== "Aunt");

invitedGuests.push(newg);

for (const guest of invitedGuests) {
  console.log(`
    Dear ${guest},

    I'm writing to invite you to dinner at my house on Wednesday 7:30. I'm so sorry to hear that Aunt can't make it, but I'm excited to have you instead.
    Best,
  `);
}

}

//14 -- eeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

{
    const placesToVisit = ["Machu Picchu", "The Great Barrier Reef", "Taj Mahal", "Eiffel Tower", "The Grand Canyon"];

console.log(placesToVisit);

const sortedPlaces = placesToVisit.sort();
console.log(sortedPlaces);

console.log(placesToVisit);

const reversedPlaces = placesToVisit.reverse();
console.log(reversedPlaces);

console.log(placesToVisit);

placesToVisit.reverse();
console.log(placesToVisit);

placesToVisit.reverse();
console.log(placesToVisit);

placesToVisit.sort();
console.log(placesToVisit);

}


//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

{
    let langs = ["urdu","turkish","irsih","english"];
    for (let dex = 0; dex < langs.length; dex++) {
        const element = langs[dex];
        console.log("The list is stated as",langs[dex])
        
    }
}

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

{
    const itms = { 
        name:"ahmad",
        age: 18 ,
        likes: "cooking",
        dislikes: "socail anxitey",
    };
    console.log(itms)
    }

// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

  {
    let me = "ahmad";

    console.log("IS That == 'ahmad'? i predict true")

    console.log(me == 'ahmad')

    console.log("Was He == 'ahmad' Attending The class?" ,"i predict no")

    console.log(me != 'ahmad')

    console.log("Did he == 'ahmad' ate his lunch? i predict yeah")

    console.log(me == "ahmad")

    console.log("is he =='ahmad' wearing white clothes? i predict no")

    console.log(me =='ahmad')

    console.log("is he == 'ahamd' inside there? i predict yes")

    console.log(me =='ahmad')

    console.log("is that his == 'ahmad' brush? i predict yes")

    console.log(me =='ahmad')

    console.log("does ahmad likes to eat that? i predict no ")

    console.log(me != 'ahmad')

    console.log("is he driving that car? i predict no")

    console.log(me != 'ahmad')

    console.log ("is he a hindu? i predict no")

    console.log(me != 'ahmad')

    console.log("is he pro? i predict no")

    console.log(me != 'ahmad')

  }

// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color: string;

alien_color = "green";

if (alien_color === "green") {

  console.log("The player just earned 5 points!");
}

// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain

let alen_color: string;

alen_color = "yellow";

if (alen_color === "green") {

  console.log("The player just earned 5 points!");
} else {

  console.log("The player just earned 10 points!");
}

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain

let lien_color: string;

lien_color = "green";


if (lien_color === "green") {
  
  console.log("The player just earned 5 points!");

} else if (lien_color === "yellow") {
  
  console.log("The player just earned 10 points!");

} else {

  console.log("The player just earned 15 points!");

}

//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.

let age: number;

age = 10;

if (age < 2) {
  
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
 
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
 
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  
  console.log("The person is an adult.");
} else {
  
  console.log("The person is an elder.");

}

//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

const favorite_fruits: string[] = ["apple", "banana", "orange"];


if ("apple" in favorite_fruits) {
  console.log("You like apples!");
}
if ("banana" in favorite_fruits) {
  console.log("You like bananas!");
}
if ("orange" in favorite_fruits) {
  console.log("You like oranges!");

}

// Sorry i was gone so i am now focusing on quantity more than quality 

// Hello Admin
const usnames = ["admin", "eric", "john", "jane"];

for (const username of usnames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log("Hello " + username + ", thank you for logging in again.");
  }
}

// No Users
const userns = [];

if (userns.length === 0) {
  console.log("We need to find some users!");
}

// Checking Usernames
const currentUsers = ["admin", "eric", "john"];
const newUsers = ["admin", "john", "jane"];

for (const newUser of newUsers) {
  const isUsernameAvailable = !currentUsers.includes(newUser.toLowerCase());
  if (!isUsernameAvailable) {
    console.log("The username " + newUser + " is already taken.");
  } else {
    console.log("The username " + newUser + " is available.");
  }
}

// Ordinal Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinalNumber;
  switch (number) {
    case 1:
      ordinalNumber = "st";
      break;
    case 2:
      ordinalNumber = "nd";
      break;
    case 3:
      ordinalNumber = "rd";
      break;
    default:
      ordinalNumber = "th";
  }

  console.log(number + ordinalNumber);
}

// Pizzas
const pizzas = ["pepperoni", "sausage", "mushroom"];

for (const pizza of pizzas) {
  console.log("I like " + pizza + " pizza.");
}

console.log("I really love pizza!");

// Animals
const animals = ["dog", "cat", "fish"];

for (const animal of animals) {
  console.log("A " + animal + " would make a great pet.");
}

console.log("Any of these animals would make a great pet!");

//backkk i ma start here now
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function makeShirt(size: string, message: string) {
  console.log(`This is a size ${size} shirt with the message '"${message}"' printed on it.`);
}

makeShirt("large", "I love TypeScript");

//Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describeCity(cityName: string, country: string = "India") {
  console.log(`${cityName} is in ${country}.`);
}

describeCity("Karachi");
describeCity("Paris", "France");
describeCity("Tokyo", "Japan");


//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//function makeAlbum(artistName: string, albumTitle: string, tracks?: number): Record<string, unknown> {

 // const album = {};

 // album["artist_name"] = artistName;
  //album["album_title"] = albumTitle;

 // if (tracks !== undefined) {
  //  album["tracks"] = tracks;
  //}

  //return album;
//}

//const album1 = makeAlbum("The Beatles", "Sgt. Pepper's Lonely Hearts Club Band");
//console.log(album1);

//const album2 = makeAlbum("Michael Jackson", "Thriller", 9);
//console.log(album2);

//const album3 = makeAlbum("Pink Floyd", "The Dark Side of the Moon", 13);
//console.log(album3);

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array

const magicians = ["Ahad", "Harry", "Chris"];

function showMagi(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}

showMagi(magicians);

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

{
  const magicians = ["David Copperfield", "Harry Houdini", "David Blaine"];

function makeGreat(magicians: string[]): string[] {
  const greatMagicians = [];
  for (const magician of magicians) {
    greatMagicians.push(`The Great ${magician}`);
  }
  return greatMagicians;
}

function showMagicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}


const originalMagicians = magicians.slice();


const greatMagicians = makeGreat(magicians);


showMagicians(originalMagicians);


showMagicians(greatMagicians);
}

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

{
  function makeSandwich(items: string[]) {

  console.log("You want a sandwich with the following items:");
  for (const item of items) {
    console.log(() => { item})
  }
}

makeSandwich(["ham", "cheese", "lettuce"]);
makeSandwich(["turkey", "tomato", "cucumber"]);
makeSandwich(["roast beef", "avocado", "onion"]);
}

//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.








