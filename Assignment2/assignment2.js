/*
Author: Chase Burkdoll
KUID: 3082972
Date: 9/03/2022
Assignment: Assignment 1
Last modified: 9/15/2022
Purpose: Creates a Group class that has methods add, delete, has, union, intersect, and difference.
*/

class Group { // Group class declaration
    constructor() { //Class constructor 
        this.newGroup = []; // variable set to an empty array
    }

    add(entry) { //Group method that takes an entry as a parameter and adds it to the newGroup array
        if (entry in this.newGroup) { // if statement that checks if the entry is in the classes group array
        } else { //else statement that runs if the entry is not in the classes group array
            this.newGroup.push(entry); //array function that pushes the entry into the newGroup array
        } // end of if statement 
    } // end of add method
 
    delete(entry) { // Group method that takes an entry as a parameter and deletes it from the newGroup array
        this.newGroup.forEach(x => { // Higher order function that runs on each element of the newGroup array
            if (x === entry){ // if statement that checks if the element in the newGroup array is equal to the entry
                const index = this.newGroup.indexOf(x); // const variable declaration that is set to the index of the element for the newGroup array
                this.newGroup.splice(index, 1); //array method that removes the selected index from the newGroup array
            } // end of if statement
        }); // end of Higher order function
    } // end of delete method

    has(entry) { // Group method that takes an entry as a parameter and checks if it's in the newGroup array
        let inGroup = false; //initalizes the variable to false
        this.newGroup.forEach(x => { // Higher order function that runs on each element of the newGroup array
            if (x === entry) { // if statement that checks if the element in the newGroup array is equal to the entry
                inGroup = true; // sets the variable to true if the element is in the array
            } // end of if statement
        }); // end of Higher order function
        return inGroup; //return the truth variable
    } // end of has method

    union(group) { // Group method that takes a as another group as a parameter and forms a union between the arrays
        let unionArray = []; // initalizes an array to contain the union
        for (let x = 0; x < this.newGroup.length; x++) { // for loop that runs from zero to the end of the newGroup array
            unionArray.push(this.newGroup[x]) // array method that adds the element in the newGroup to the unionArray
        } // end of for loop
        for (let y = 0; y < group.newGroup.length; y++) { // for loop that runs from zero to the end of the other newGroup array
            if (unionArray.includes(group.newGroup[y]) === false) { // if statement that checks if the element is already in unionArray
                unionArray.push(group.newGroup[y]) // if not in array then it adds the element in the other array to unionArray
            } //end of if statement
        } // end of for loop
        return unionArray; // returns the results of the union of the two arrays
    } // end of union method

    intersection(group) { // Group method that takes a as another group as a parameter and returns the intersection of the arrays
        let interArray = [];
        for (let x = 0; x < this.newGroup.length; x++) { // for loop that runs from zero to the end of the newGroup array
            for (let y = 0; y < group.newGroup.length; y++) { // for loop that runs from zero to the end of the other newGroup array
                if ((this.newGroup[x] === group.newGroup[y]) && (interArray.includes(group.newGroup[y]) === false)) { // if statement checks if the elements are equal and not already in the return array
                    interArray.push(this.newGroup[x]) // if the elements are equal and not in the intersection array then adds to the intersection array
                } // end of if statement
            } // end of inner for loop
        } // end of outer for loop
        return interArray; // returns the results of the intersection
    } // end of intersection method

    difference(group) { // Group method that takes a as another group as a parameter and returns the difference of the arrays
        let diffArray = []; 
        for (let x = 0; x < this.newGroup.length; x++) { // for loop that runs from zero to the end of the newGroup array
            diffArray.push(this.newGroup[x])
        }
        for (let y = 0; y < group.newGroup.length; y++) { // for loop that runs from zero to the end of the other newGroup array
            if (diffArray.includes(group.newGroup[y]) === true) { // if statement that checks if an element is in an array
                const index = diffArray.indexOf(group.newGroup[y]); // gets the index of an element in the other group if its value is already in the diffArray
                diffArray.splice(index, 1); //array method that removes the selected index from the diffArray
            } // end of if statement
        } // end of for loop
        return diffArray; // returns the result of the difference
    } //end of difference method

} // end of group class

let group1 = new Group();
let group2 = new Group();
group1.add(1); 
group1.add(2); 
group1.add(3); 
console.log(group1);
group2.add(2); 
group2.add(3); 
group2.add(5); 
group2.add(2); 
console.log(group2);
console.log(group1.has(5));
console.log(group2.has(3)); 
console.log(group1.union(group2)); 
console.log(group1.intersection(group2)); 
console.log(group1.difference(group2)); 
console.log(group2.difference(group1)); 
group1.delete(1); 
console.log(group1);
group2.delete(1); 
console.log(group2);
