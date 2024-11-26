console.log('Welcome to Holberton School, what is your name?');
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString().trim()}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    console.log(`Your name is: ${data.toString().trim()}`);  
    process.on('exit', () => {
      console.log('This important software is now closing');
    });
  });
}
