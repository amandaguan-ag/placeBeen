# _Places You've Been_

#### _{Brief description of application}, 8/24/20_

#### By _**Natalie Murphy, Alama Frankenstein and Joseph Nilles**_

## Description

Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object (including specs, which should go in your README). If you complete the business logic, you may work on adding a user interface. (See tonight's lessons for more.)

### TDD
// DestinationBook Business Logic

Describe: DestinationBook()

Test: "It should add destinations." 
Code: destinationBook.prototype.addDestination = function (destination) { this.destinations[destination.place] = destination; 
Expected Output: destinationBook.destinations; {France: Destination}

Test: "It should add an id to destinations" 
Code: this.currentId += 1; destinationBook.prototype.assignId(destination1) 
Expected Outcome: 0

Test: "It should find a contact based on its id" 
Code: DestinationBook.prototype.findDestination(0) 
Expected Output: Destination {place: 'France', city: 'Paris', landmark: 'Effile Tower', id: 0}

Test: "It should delete a destination by id" 
Code: DestinationBook.prototype.deleteDestination(0) 
Expected Output: DestinationBook {destination: {...}}

//Destination Business Logic

Describes: Destination()

Test: "It should create a new destination" 
Code: let firstDestination = new Destination ("Japan", "Tokyo", "Meiji Jingu Shrine"); Destination(firstDestination) 
Expected Output: Destination {place: "Japan", city: "Tokyo", landmark: "Meiji Jingu Shrine"}

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*This software is available with an MIT license*

Copyright (c) 2016 **_{List of contributors or company name}_**