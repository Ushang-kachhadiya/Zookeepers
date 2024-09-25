const fs = require('fs');

// Function to read the files and split their content by line
function readFileContent(fileName) {
    try {
        return fs.readFileSync(fileName, 'utf-8').split('\n').filter(Boolean);
    } catch (error) {
        console.error(`Error reading file: ${fileName}`, error);
        return [];
    }
}

// Main function to compute leftover food
function getLeftoverFood(animalsFile, foodFile) {
    const animals = readFileContent(animalsFile);
    const food = readFileContent(foodFile);

    let foodIndex = 0; // Keeps track of food item being served

    // Feed each animal if there is food available
    animals.forEach(animal => {
        if (foodIndex < food.length) {
            foodIndex++; // Feed one animal with one food item
        }
    });

    // Remaining food after feeding animals
    const leftoverFood = food.slice(foodIndex);

    // Return the leftover food items joined by '-'
    return leftoverFood.join('-');
}

// Run the function with the input files and print the result
const result = getLeftoverFood('animals.txt', 'food.txt');
console.log(result);
