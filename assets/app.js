// functions apply(), bind(), call(), 
var person = {
    firstname: 'Oscar',
    lastname: 'salu',
    getfullname: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('The displayed name is :' + this.getfullname());
    console.log('Passed arguments:' + lang1 + ' ' + lang2);
    console.log('--------------------------------');
}

var logPersonName = logName.bind(person); //makes a copy of the logname and changes the this variable to the bounded object which is person
logPersonName('en'); // logpersonname is a copy of logname

// using the call() function
//function borrowing
var person2 = {
    firstname: 'john',
    lastname: 'dow'
}

console.log(person.getfullname.call(person2)); //allows specification of the this keyword

//using the apply() function
logName.apply(person, ['en', 'swa']); // similar to call function only that it takes the arguments as an array

function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('you');

//using prototypes and function constructors
function car(sits, name) {
    this.sits = sits;
    this.name = name;
    console.log('The car function is invoked');

}
//using prototypes to add another getcarname property
car.prototype.getCarname = function() {
    return this.sits + ' ' + this.name;
}

//using function constactor
var vokswagen = new car('2', 'vokswagen');
console.log(vokswagen);

//logout the car name.
console.log(vokswagen.getCarname());

//one way of creating an object

var cloths = new Object();

cloths['name'] = 'Shirt';
cloths['size'] = '5';

console.log(cloths.name);
console.log(cloths.size);