//variables are a fundamental part of many programming languages 
//in javaScript, there are three keywords used to declare a variable -var,let, const.
//a variable is a container used for storing values.
var name = "Memseletu";
var spartans = 200;
var kingdoms = [ "Valarya", "kingsLanding", "high Garden" ];
var poem = { roses: "red", violets: "blue" }; 
var success = true;
var nothing = null;
console.log(spartans);

// Global variables are those declared outside of a block
// Local variables are those declared inside of a block

// Initialize a global variable

var species = "human";
 
function transform() {
  // Initialize a local, function-scoped variable
  var species = "werewolf";
  console.log(species);
}
  //Duplicate declaration of variables, which is possible with var, will throw an error with let and const

  // Attempt to overwrite a variable declared with var
var x = 1;
var x = 2;
console.log(x);

Output
2

// Attempt to overwrite a variable declared with let
let y = 1;
let y = 2;

console.log(y);
Output
//Uncaught SyntaxError: Identifier 'y' has already been declared

//CONSTANTS
    //they are values that cannot be modified or changed.
    //in java they are respresented by const.
    //they also cannot bed reassigned.
    //they need to be declared and initialized at same time.


    //OBJECTS
    //an object in javaScript is a data type that is composed of a collection of names or 
    //Keys and values. 
    //it is represented in NAME:VALUE PAIRS.
   // The name:value pairs can consist of properties that may contain any data type — including strings, numbers, and Booleans — as well as methods, which are functions contained within an object.

//    There are two ways to construct an object in JavaScript:

//    The object literal, which uses curly brackets: {}
//    The object constructor, which uses the new keywor
const objectLiteral = {};

// Initialize object constructor with new Object
const objectConstructor = new Object();

// Initialize gimli object
const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};

//objects can have Properties and methods.

//best way to think of properties and methods is to think of properties as a nound and methods as a verb.

//There are two ways to access an object’s properties.
// Dot notation: .
// Bracket notation: []

//If we want to retrieve the property value of weapon, we can do so with object dot notation by typing the variable name of the object, followed by a dot (.) and the property or method name.
// Retrieve the value of the weapon property
gimli.weapon
//
Output
"axe"

//The delete operation evaluates as true if the property was successfully removed, or if it was used on a property that doesn’t exist.

//Looping Through Object Properties
const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "battle axe",
};

//We can use for...in to traverse through all the properties of gimli and print them to the console. Using bracket notation, we can retrieve the property value as a variable, in this case key.
// Iterate through properties of gimli
for (let key in gimli) {
    console.log(gimli[key]);
  }


  //LOOPS
  //LOOPS are used to perform/automate repetitive tasks. most basic types of loops in javascript
  //are for and while loops.

  //For Loop
  //The for statement is a type of loop that will use up to three optional expressions to implement the repeated execution of a code block.
 
 // for (initialization; condition; final expression) {}
//basically loops here work same as in Java.


//Classes in javaSCript.
//CLASSES ARE FUNCTIONS.
  //a javascript class is a type of function.
  //classes are declared with CLASS keyword.
  // Initializing a function with a function expression
const x = function();

// Initializing a class with a class expression
const y = class {}

//we can access the prototype of an object using the Object.getPrototypeOf() method.
//e.g.
//Object.getPrototypeOf(x);

//DEFINING A CLASS
    // A constructor function is initialized with a number of parameters, 
// which would be assigned as properties of this, referring to the function itself. 
// The first letter of the identifier would be capitalized by convention

// Initializing a constructor function
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

//// Initializing a class definition
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level; } }

        //the only difference in the in tialization of a function and a class is using the CLASS keyword instead of the FUNCTION.

    //    DEFINING METHODS
        // The common practice with constructor 
        //functions is to assign methods directly to the prototype instead of in the initialization, as seen in the greet() method below.

        function Hero(name, level) {
            this.name = name;
            this.level = level;
        }
        
        // Adding a method to the constructor
        Hero.prototype.greet = function() {
            return `${this.name} says hello.`;}

    //with classes, it has been simplified to be able to just add a method to the class.
    class Hero {
        constructor(name, level) {
            this.name = name;
            this.level = level;
        }
    
        // Adding a method to the constructor
        greet() {
            return `${this.name} says hello.`;
        } }

       // EXTENDING  A class
       //the key word extends is used.
       //classes, the super keyword is used in place of call to access the parent functions.
       // We will use extends to refer to the parent class.
            
       // Creating a new class from the parent
class Mage extends Hero {
	constructor(name, level, spell) {
		// Chain constructor with super
		super(name, level);

		// Add a new property
		this.spell = spell;
	}
}
//Classes give us a more concise way of creating object blueprints, and constructor functions describe more accurately what is happening under the hood.


//Destructuring
    //Destructuring assignment is a syntax that allows you to assign object properties or array items as variables.
    //Traditionally, if you wanted to create a new variable for each property, you would have to assign each variable individually, with a lot of repetition:
    //example
    // Create variables from the Object properties
const id = note.id
const title = note.title
const date = note.date

//With object destructuring, this can all be done in one line. By surrounding each variable in curly brackets {}, JavaScript will create new variables from each property with the same name:
// Destructure properties into variables
    //const { id, title, date } = note

// NB: Destructuring an object does not modify the original object. You could still call the original note with all its entries intact.

//As shown in this section, the destructuring assignment syntax adds a lot of flexibility 
//to JavaScript and allows you to write more succinct code. In the next section, you will 
//see how spread syntax can be used to expand data structures into their constituent data entries.

//SPREAD
    //useful for working with arrays, objects and function class.

    // Spread with Arrays

    // Spread can simplify common tasks with arrays. For example, let’s say you have two arrays and want to combine them:
    // Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

//Originally you would use concat() to concatenate the two arrays:

// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools)

//Now you can also use spread to unpack the arrays into a new array:
 
// Unpack the tools Array into the allTools Array
const allTools = [...tools, ...otherTools]

console.log(allTools)