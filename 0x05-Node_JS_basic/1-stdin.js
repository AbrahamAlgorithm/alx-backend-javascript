// 1-stdin.js

// Display initial message
console.log('Welcome to Holberton School, what is your name?');

// Set up stdin to read input from the user
process.stdin.setEncoding('utf8');

process.stdin.on('data', (input) => {
    const name = input.trim(); // Remove any trailing new line characters
    console.log(`Your name is: ${name}`);
    process.exit();
});

// Handle the exit event to display closing message
process.on('exit', () => {
    console.log('This important software is now closing');
});
