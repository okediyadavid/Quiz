const container = document.querySelector('.container');
const questionBox = document.querySelector('.question');
const choicesBox = document.querySelector('.choices');
const nextBtn = document.querySelector('.nextBtn');
const scoreCard = document.querySelector('.scoreCard');
const alert = document.querySelector('.alert');
const startBtn = document.querySelector('.startBtn');
const timer = document.querySelector('.timer');


// Make an array of objects that stores question, choices of question and answer
const quiz = [
    {
        question: "Q. Which of the following is not a CSS box model property?",
        choices: ["margin", "padding", "border-radius", "border-collapse"],
        answer: "border-collapse"
    },
    {
        question: "Q. Which of the following is not a valid way to declare a function in JavaScript?",
        choices: ["function myFunction() {}", " let myFunction = function() {};", "myFunction: function() {}", "const myFunction = () => {};"],
        answer: "myFunction: function() {}"
    },
    {
        question: "Q. Which of the following is not a JavaScript data type?",
        choices: ["string", "boolean", "object", "float"],
        answer: "float"
    },
    {
        question: "Q. What is the purpose of the this keyword in JavaScript?",
        choices: ["It refers to the current function.", "It refers to the current object.", "It refers to the parent object.", " It is used for comments."],
        answer: "It refers to the current object."
    },
    {
        question: "What is the capital of France?",
        choices: ["London", "Madrid", "Berlin", "Paris"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        answer: "Harper Lee"
    },
    {
        question: "What is the capital of Japan?",
        choices: ["Tokyo", "Kyoto", "Osaka", "Seoul"],
        answer: "Tokyo"
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "CH4"],
        answer: "H2O"
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        choices: ["Alan Turing", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        answer: "Alan Turing"
    },
    {
        question: "What is the currency of China?",
        choices: ["Yuan", "Euro", "Dollar", "Peso"],
        answer: "Yuan"
    },
    {
        question: "Who discovered penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "What year did the Titanic sink?",
        choices: ["1912", "1905", "1920", "1933"],
        answer: "1912"
    },
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        choices: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "William Shakespeare"],
        answer: "Jane Austen"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "What is the tallest mountain in the world?",
        choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the capital of Australia?",
        choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
        answer: "Canberra"
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "William Faulkner", "Mark Twain"],
        answer: "F. Scott Fitzgerald"
    },
    {
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "So", "S", "No"],
        answer: "Na"
    },
    {
        question: "Who was the first person to step on the moon?",
        choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        answer: "Neil Armstrong"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Mars", "Jupiter", "Venus", "Mercury"],
        answer: "Mars"
    },
    {
        question: "Who painted 'Starry Night'?",
        choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        choices: ["O", "O2", "O3", "O+"],
        answer: "O"
    },
    {
        question: "Who is the Greek god of the sea?",
        choices: ["Poseidon", "Zeus", "Hades", "Apollo"],
        answer: "Poseidon"
    },
    {
        question: "What is the capital of Brazil?",
        choices: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        answer: "Brasília"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for carbon?",
        choices: ["C", "Ca", "Co", "Cr"],
        answer: "C"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
        answer: "Marie Curie"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        choices: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
        answer: "J.D. Salinger"
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Ag", "Au", "Si", "Sr"],
        answer: "Ag"
    },
    {
        question: "Who discovered the theory of relativity?",
        choices: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the main ingredient in guacamole?",
        choices: ["Avocado", "Tomato", "Onion", "Lime"],
        answer: "Avocado"
    },
    {
        question: "Who is the protagonist in 'The Lord of the Rings'?",
        choices: ["Frodo Baggins", "Gandalf", "Aragorn", "Legolas"],
        answer: "Frodo Baggins"
    },
    {
        question: "What is the chemical symbol for iron?",
        choices: ["Fe", "Ir", "In", "Ni"],
        answer: "Fe"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: "Michelangelo"
    },
    {
        question: "What is the chemical symbol for potassium?",
        choices: ["K", "Ka", "Po", "Ke"],
        answer: "K"
    },
    {
        question: "Who wrote '1984'?",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
        answer: "George Orwell"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the capital of South Korea?",
        choices: ["Seoul", "Busan", "Incheon", "Daegu"],
        answer: "Seoul"
    },
    {
        question: "Who discovered penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"],
        answer: "Alexander Fleming"
    },
    {
        question: "What is the chemical symbol for neon?",
        choices: ["Ne", "Na", "Ni", "No"],
        answer: "Ne"
    },
    {
        question: "Who painted 'The Last Supper'?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for helium?",
        choices: ["He", "H", "Ha", "Hi"],
        answer: "He"
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        choices: ["J.K. Rowling", "Stephen King", "J.R.R. Tolkien", "George R.R. Martin"],
        answer: "J.K. Rowling"
    },
    {
        question: "What is the capital of Canada?",
        choices: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Who wrote 'The Odyssey'?",
        choices: ["Homer", "Virgil", "Sophocles", "Plato"],
        answer: "Homer"
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Ag", "Au", "Si", "Sr"],
        answer: "Ag"
    },
    {
        question: "Who is known as the 'Father of Geometry'?",
        choices: ["Euclid", "Pythagoras", "Archimedes", "Aristotle"],
        answer: "Euclid"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Diamond", "Steel", "Titanium", "Graphite"],
        answer: "Diamond"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
        answer: "Marie Curie"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Who discovered gravity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica Desert"],
        answer: "Antarctica Desert"
    },
    {
        question: "Who is the author of 'The Hobbit'?",
        choices: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "What is the chemical symbol for lead?",
        choices: ["Pb", "Li", "Pt", "Po"],
        answer: "Pb"
    },
    {
        question: "Who wrote 'The Divine Comedy'?",
        choices: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "Homer"],
        answer: "Dante Alighieri"
    },
    {
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Rio de Janeiro", "Santiago", "Lima"],
        answer: "Buenos Aires"
    },
    {
        question: "Who discovered electricity?",
        choices: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Alexander Graham Bell"],
        answer: "Benjamin Franklin"
    },
    {
        question: "What is the chemical symbol for calcium?",
        choices: ["Ca", "Cu", "Ci", "Ce"],
        answer: "Ca"
    },
    {
        question: "Who painted 'Girl with a Pearl Earring'?",
        choices: ["Johannes Vermeer", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        answer: "Johannes Vermeer"
    },
    {
        question: "What is the chemical symbol for uranium?",
        choices: ["U", "Un", "Ur", "Um"],
        answer: "U"
    },
    {
        question: "Who wrote 'Moby-Dick'?",
        choices: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "H.P. Lovecraft"],
        answer: "Herman Melville"
    },
    {
        question: "What is the largest bone in the human body?",
        choices: ["Femur", "Humerus", "Tibia", "Radius"],
        answer: "Femur"
    },
    {
        question: "Who composed 'Für Elise'?",
        choices: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Johannes Brahms"],
        answer: "Ludwig van Beethoven"
    },
    {
        question: "What is the chemical symbol for nitrogen?",
        choices: ["N", "Ni", "No", "Na"],
        answer: "N"
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Ag", "Au", "Si", "Sr"],
        answer: "Ag"
    },
    {
        question: "Who discovered the theory of relativity?",
        choices: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the main ingredient in guacamole?",
        choices: ["Avocado", "Tomato", "Onion", "Lime"],
        answer: "Avocado"
    },
    {
        question: "Who is the protagonist in 'The Lord of the Rings'?",
        choices: ["Frodo Baggins", "Gandalf", "Aragorn", "Legolas"],
        answer: "Frodo Baggins"
    },
    {
        question: "What is the chemical symbol for iron?",
        choices: ["Fe", "Ir", "In", "Ni"],
        answer: "Fe"
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        choices: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        answer: "Michelangelo"
    },
    {
        question: "What is the chemical symbol for carbon?",
        choices: ["C", "Ca", "Co", "Cr"],
        answer: "C"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
        answer: "Marie Curie"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        choices: ["J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain"],
        answer: "J.D. Salinger"
    },
    {
        question: "What is the chemical symbol for silver?",
        choices: ["Ag", "Au", "Si", "Sr"],
        answer: "Ag"
    },
    {
        question: "Who is known as the 'Father of Geometry'?",
        choices: ["Euclid", "Pythagoras", "Archimedes", "Aristotle"],
        answer: "Euclid"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        choices: ["Diamond", "Steel", "Titanium", "Graphite"],
        answer: "Diamond"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        choices: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Ada Lovelace"],
        answer: "Marie Curie"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Fe", "Cu"],
        answer: "Au"
    },
    {
        question: "Who discovered gravity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctica Desert"],
        answer: "Antarctica Desert"
    },
    {
        question: "Who is the author of 'The Hobbit'?",
        choices: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "George R.R. Martin"],
        answer: "J.R.R. Tolkien"
    },
    {
        question: "What is the chemical symbol for lead?",
        choices: ["Pb", "Li", "Pt", "Po"],
        answer: "Pb"
    },
    {
        question: "Who wrote 'The Divine Comedy'?",
        choices: ["Dante Alighieri", "Geoffrey Chaucer", "John Milton", "Homer"],
        answer: "Dante Alighieri"
    },
    {
        question: "What is the capital of Argentina?",
        choices: ["Buenos Aires", "Rio de Janeiro", "Santiago", "Lima"],
        answer: "Buenos Aires"
    },
    {
        question: "Who discovered electricity?",
        choices: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Alexander Graham Bell"],
        answer: "Benjamin Franklin"
    },
    {
        question: "What is the chemical symbol for calcium?",
        choices: ["Ca", "Cu", "Ci", "Ce"],
        answer: "Ca"
    },
    {
        question: "Who painted 'Girl with a Pearl Earring'?",
        choices: ["Johannes Vermeer", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
        answer: "Johannes Vermeer"
    },
    {
        question: "What is the chemical symbol for uranium?",
        choices: ["U", "Un", "Ur", "Um"],
        answer: "U"
    },
    {
        question: "Who wrote 'Moby-Dick'?",
        choices: ["Herman Melville", "Mark Twain", "Nathaniel Hawthorne", "H.P. Lovecraft"],
        answer: "Herman Melville"
    },
    {
        question: "What is the largest bone in the human body?",
        choices: ["Femur", "Humerus", "Tibia", "Radius"],
        answer: "Femur"
    },
    {
        question: "Who composed 'Für Elise'?",
        choices: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Johannes Brahms"],
        answer: "Ludwig van Beethoven"
    },
    {
        question: "What is the chemical symbol for nitrogen?",
        choices: ["N", "Ni", "No", "Na"],
        answer: "N"
    },
    {
        question: "What is the chemical symbol for potassium?",
        choices: ["K", "Ka", "Po", "Ke"],
        answer: "K"
    },
    {
        question: "Who wrote '1984'?",
        choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
        answer: "George Orwell"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Blue Whale", "African Elephant", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the capital of South Korea?",
        choices: ["Seoul", "Busan", "Incheon", "Daegu"],
        answer: "Seoul"
    },
    {
        question: "Who discovered penicillin?",
        choices: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Louis Pasteur"],
        answer: "Alexander Fleming"
        },
        {
        question: "What is the chemical symbol for sodium?",
        choices: ["Na", "No", "Ni", "Nu"],
        answer: "Na"
        },
        {
        question: "Who painted 'Starry Night'?",
        choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Vincent van Gogh"
        },
        {
        question: "What is the chemical symbol for hydrogen?",
        choices: ["H", "He", "Ho", "Hu"],
        answer: "H"
        },
        {
        question: "Who wrote 'The Great Gatsby'?",
        choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        answer: "F. Scott Fitzgerald"
        },
        {
        question: "What is the largest organ in the human body?",
        choices: ["Skin", "Liver", "Brain", "Heart"],
        answer: "Skin"
        },
        {
        question: "Who composed 'Symphony No. 9'?",
        choices: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Johannes Brahms"],
        answer: "Ludwig van Beethoven"
        },
        {
        question: "What is the chemical symbol for helium?",
        choices: ["He", "H", "Ho", "Hi"],
        answer: "He"
        },
        {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
        answer: "Harper Lee"
        },
        {
        question: "What is the longest river in the world?",
        choices: ["Nile River", "Amazon River", "Mississippi River", "Yangtze River"],
        answer: "Nile River"
        },
        {
        question: "Who is known as the 'Father of Medicine'?",
        choices: ["Hippocrates", "Aristotle", "Socrates", "Plato"],
        answer: "Hippocrates"
        },
        {
        question: "What is the chemical symbol for mercury?",
        choices: ["Hg", "Me", "Mg", "Ma"],
        answer: "Hg"
        },
        {
        question: "Who painted 'The Persistence of Memory'?",
        choices: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
        answer: "Salvador Dalí"
        },
        {
        question: "What is the chemical symbol for oxygen?",
        choices: ["O", "Ox", "Om", "On"],
        answer: "O"
        },
        {
        question: "Who wrote 'Pride and Prejudice'?",
        choices: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
        answer: "Jane Austen"
        },
        {
        question: "What is the largest planet in the solar system?",
        choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: "Jupiter"
        },
        {
        question: "Who composed 'The Four Seasons'?",
        choices: ["Antonio Vivaldi", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach"],
        answer: "Antonio Vivaldi"
        },
        {
        question: "What is the chemical symbol for tin?",
        choices: ["Sn", "Tn", "Ti", "Te"],
        answer: "Sn"
        },
        {
        question: "Who wrote 'The Odyssey'?",
        choices: ["Homer", "Virgil", "Plato", "Aristotle"],
        answer: "Homer"
        },
        {
        question: "What is the chemical symbol for silver?",
        choices: ["Ag", "Au", "Si", "Sr"],
        answer: "Ag"
        },

        {
            question: "Who discovered penicillin?",
            choices: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Louis Pasteur"],
            answer: "Alexander Fleming"
        },
        {
            question: "What is the chemical symbol for sodium?",
            choices: ["Na", "No", "Ni", "Nu"],
            answer: "Na"
        },
        {
            question: "Who painted 'Starry Night'?",
            choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Vincent van Gogh"
        },
        {
            question: "What is the chemical symbol for hydrogen?",
            choices: ["H", "He", "Ho", "Hu"],
            answer: "H"
        },
        {
            question: "Who wrote 'The Great Gatsby'?",
            choices: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
            answer: "F. Scott Fitzgerald"
        },
        {
            question: "What is the largest organ in the human body?",
            choices: ["Skin", "Liver", "Brain", "Heart"],
            answer: "Skin"
        },
        {
            question: "Who composed 'Symphony No. 9'?",
            choices: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Johannes Brahms"],
            answer: "Ludwig van Beethoven"
        },
        {
            question: "What is the chemical symbol for helium?",
            choices: ["He", "H", "Ho", "Hi"],
            answer: "He"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            choices: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"],
            answer: "Harper Lee"
        },
        {
            question: "What is the longest river in the world?",
            choices: ["Nile River", "Amazon River", "Mississippi River", "Yangtze River"],
            answer: "Nile River"
        },
        {
            question: "Who is known as the 'Father of Medicine'?",
            choices: ["Hippocrates", "Aristotle", "Socrates", "Plato"],
            answer: "Hippocrates"
        },
        {
            question: "What is the chemical symbol for mercury?",
            choices: ["Hg", "Me", "Mg", "Ma"],
            answer: "Hg"
        },
        {
            question: "Who painted 'The Persistence of Memory'?",
            choices: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
            answer: "Salvador Dalí"
        },
        {
            question: "What is the chemical symbol for oxygen?",
            choices: ["O", "Ox", "Om", "On"],
            answer: "O"
        },
        {
            question: "Who wrote 'Pride and Prejudice'?",
            choices: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
            answer: "Jane Austen"
        },
        {
            question: "What is the largest planet in the solar system?",
            choices: ["Jupiter", "Saturn", "Uranus", "Neptune"],
            answer: "Jupiter"
        },
        {
            question: "Who composed 'The Four Seasons'?",
            choices: ["Antonio Vivaldi", "Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Johann Sebastian Bach"],
            answer: "Antonio Vivaldi"
        },
        {
            question: "What is the chemical symbol for tin?",
            choices: ["Sn", "Tn", "Ti", "Te"],
            answer: "Sn"
        },
        {
            question: "Who wrote 'The Odyssey'?",
            choices: ["Homer", "Virgil", "Plato", "Aristotle"],
            answer: "Homer"
        },
        {
            question: "What is the chemical symbol for silver?",
            choices: ["Ag", "Au", "Si", "Sr"],
            answer: "Ag"
        },
        {
            question: "Who was the first person to walk on the moon?",
            choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
            answer: "Neil Armstrong"
        },
        {
            question: "What is the chemical symbol for carbon dioxide?",
            choices: ["CO2", "CO", "Cd", "Cu"],
            answer: "CO2"
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Fyodor Dostoevsky"],
            answer: "William Shakespeare"
        },
        {
            question: "What is the chemical symbol for magnesium?",
            choices: ["Mg", "Mn", "Ma", "Mo"],
            answer: "Mg"
        },
        {
            question: "Who painted 'The Last Supper'?",
            choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the chemical symbol for phosphorus?",
            choices: ["P", "Ph", "Po", "Pe"],
            answer: "P"
        },
        {
            question: "Who wrote 'The Canterbury Tales'?",
            choices: ["Geoffrey Chaucer", "John Milton", "William Shakespeare", "John Donne"],
            answer: "Geoffrey Chaucer"
        },
        {
            question: "What is the chemical symbol for zinc?",
            choices: ["Zn", "Zi", "Zo", "Ze"],
            answer: "Zn"
        },
        {
            question: "Who painted 'The Mona Lisa'?",
            choices: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the chemical symbol for sulfur?",
            choices: ["S", "Su", "So", "Se"],
            answer: "S"
        },
        {
            question: "Who wrote 'War and Peace'?",
            choices: ["Leo Tolstoy", "Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"],
            answer: "Leo Tolstoy"
        },
        {
            question: "What is the chemical symbol for chlorine?",
            choices: ["Cl", "Cr", "Cn", "Ce"],
            answer: "Cl"
            },
            {
            question: "Who painted 'The Scream'?",
            choices: ["Edvard Munch", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
            answer: "Edvard Munch"
            },
            {
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Ad", "Al"],
            answer: "Au"
            },
            {
            question: "Who wrote '1984'?",
            choices: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
            answer: "George Orwell"
            },
            {
            question: "What is the chemical symbol for nitrogen?",
            choices: ["N", "Ng", "No", "Ne"],
            answer: "N"
            },
            {
            question: "Who painted 'Guernica'?",
            choices: ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Leonardo da Vinci"],
            answer: "Pablo Picasso"
            },
            {
            question: "What is the chemical symbol for calcium?",
            choices: ["Ca", "Cm", "Co", "Cu"],
            answer: "Ca"
            },
            {
            question: "Who wrote 'The Catcher in the Rye'?",
            choices: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "John Steinbeck"],
            answer: "J.D. Salinger"
            },
            {
            question: "What is the chemical symbol for potassium?",
            choices: ["K", "Ke", "Ka", "Kl"],
            answer: "K"
            },
            {
            question: "Who painted 'The Birth of Venus'?",
            choices: ["Sandro Botticelli", "Leonardo da Vinci", "Michelangelo", "Raphael"],
            answer: "Sandro Botticelli"
            },
            {
            question: "What is the chemical symbol for iron?",
            choices: ["Fe", "Fr", "Fo", "Fi"],
            answer: "Fe"
            },
            {
            question: "Who wrote 'Moby-Dick'?",
            choices: ["Herman Melville", "Mark Twain", "Emily Dickinson", "Nathaniel Hawthorne"],
            answer: "Herman Melville"
            },
            {
            question: "What is the chemical symbol for copper?",
            choices: ["Cu", "Co", "Cp", "Ck"],
            answer: "Cu"
            },
            {
            question: "Who painted 'The Starry Night'?",
            choices: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
            answer: "Vincent van Gogh"
            },
            {
            question: "What is the chemical symbol for lead?",
            choices: ["Pb", "Pe", "Pl", "Pd"],
            answer: "Pb"
            },
            {
            question: "Who wrote 'The Divine Comedy'?",
            choices: ["Dante Alighieri", "Virgil", "Geoffrey Chaucer", "Miguel de Cervantes"],
            answer: "Dante Alighieri"
            }
            ];
// Making Variables
let currentQuestionIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerID = null;

let questions = [20];

function setUpQuiz(numQuestions) {
    // Clear previous questions
    questions = [];
    
    // Generate new questions
    for (let i = 0; i < numQuestions; i++) {
        questions.push({
            question: `Question ${i + 1}?`,
            options: [`Option 1 for Question ${i + 1}`, `Option 2 for Question ${i + 1}`, `Option 3 for Question ${i + 1}`, `Option 4 for Question ${i + 1}`],
            answer: Math.floor(Math.random() * 4) // Randomly select correct option
        });
    }
}

// Arrow Function to Show Questions
const showQuestions = () => {
    const questionDetails = quiz[currentQuestionIndex];
    questionBox.textContent = questionDetails.question;

    choicesBox.textContent = "";
    for (let i = 0; i < questionDetails.choices.length; i++) {
        const currentChoice = questionDetails.choices[i];
        const choiceDiv = document.createElement('div');
        choiceDiv.textContent = currentChoice;
        choiceDiv.classList.add('choice');
        choicesBox.appendChild(choiceDiv);

        choiceDiv.addEventListener('click', () => {
            if (choiceDiv.classList.contains('selected')) {
                choiceDiv.classList.remove('selected');
            }
            else {
                choiceDiv.classList.add('selected');
            }
        });
    }

    if(currentQuestionIndex < quiz.length){
        startTimer();
    }
}

// Function to check answers
const checkAnswer = () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (selectedChoice.textContent === quiz[currentQuestionIndex].answer) {
        // alert("Correct Answer!");
        displayAlert("Correct Answer!");
        score++;
    }
    else {
        // alert("Wrong answer");
        displayAlert(`Wrong Answer! ${quiz[currentQuestionIndex].answer} is the Correct Answer`);
    }
    timeLeft = 15;
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        showQuestions();
    }
    else {
        stopTimer();
        showScore();
    }
}

// Function to show score
const showScore = () => {
    questionBox.textContent = "";
    choicesBox.textContent = "";
    scoreCard.textContent = `You Scored ${score} out of ${quiz.length}!`;
    displayAlert("You have completed this quiz!");
    nextBtn.textContent = "Play Again";
    quizOver = true;
    timer.style.display = "none";
}

// Function to Show Alert
const displayAlert = (msg) => {
    alert.style.display = "block";
    alert.textContent = msg;
    setTimeout(()=>{
        alert.style.display = "none";
    }, 2000);
}

// Function to Start Timer
const startTimer = () => {
    clearInterval(timerID); // Check for any exist timers
    timer.textContent = timeLeft;

    const countDown = ()=>{
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0){
            const confirmUser = confirm("Time Up!!! Do you want to play the quiz again");
            if(confirmUser){
                timeLeft = 15;
                startQuiz();
            }
            else{
                startBtn.style.display = "block";
                container.style.display = "none";
                return;
            }
        }
    }
    timerID = setInterval(countDown, 1000);
}

// Function to Stop Timer
const stopTimer = () =>{
    clearInterval(timerID);
}

// Function to shuffle question
const shuffleQuestions = () =>{
    for(let i=quiz.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [quiz[i], quiz[j]] = [quiz[j], quiz[i]];
    }
    currentQuestionIndex = 0;
    showQuestions();
}

// Function to Start Quiz
const startQuiz = () =>{
    timeLeft = 15;
    timer.style.display = "flex";
    shuffleQuestions();
}

// Adding Event Listener to Start Button
startBtn.addEventListener('click', ()=>{
    startBtn.style.display = "none";
    container.style.display = "block";
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('.choice.selected');
    if (!selectedChoice && nextBtn.textContent === "Next") {
        // alert("Select your answer");
        displayAlert("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        scoreCard.textContent = "";
        currentQuestionIndex = 0;
        quizOver = false;
        score = 0;
        startQuiz();
    }
    else {
        checkAnswer();
    }
});