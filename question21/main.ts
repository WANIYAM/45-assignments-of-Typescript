/*                      QUESTION 21
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/

// Define an array of objects containing information about countries
let countries: { name: string, population: number, capital: string, language: string }[] = [
    { name: "United States", population: 331000000, capital: "Washington, D.C.", language: "English" },
    { name: "China", population: 1441000000, capital: "Beijing", language: "Chinese" },
    { name: "India", population: 1380000000, capital: "New Delhi", language: "Hindi, English" },
    { name: "Brazil", population: 212000000, capital: "Brasília", language: "Portuguese" },
    { name: "Russia", population: 146000000, capital: "Moscow", language: "Russian" },
    { name: "Japan", population: 126000000, capital: "Tokyo", language: "Japanese" }
];

// Print information about each country
console.log("Countries Information:");
countries.forEach(country => {
    console.log(`Name: ${country.name}, Population: ${country.population}, Capital: ${country.capital}, Language: ${country.language}`);
});
