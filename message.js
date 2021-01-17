const superHeroNames = ['Captain America: ', 'Thor: ', 'Black Panter: ', 'Iron Man: ', 'Hulk: ']; //Different super heores that can tell the message
const commonQuotesStarters = ['Remember, ', 'Never forget, ', 'Always keep in mind, ', 'As I always say, ']; //Different ways to start the message
const commonTopics = ['the truth ', 'justice ', 'love ', 'life ']; // Different topics for the corresponding message
const mainMessage = ['will always be there, wether we can see it or not.', 'is a natural part of us.', 'is the most important thing we have.']; 


const messageGenerator = (part1, part2, part3, part4) => { // fucntion that generates the messages
    let message; 
    message = part1[Math.floor(Math.random()*part1.length)];
    if(message == 'Hulk: '){
        message+= 'Hulk smaaaash!';
    }
    else {
        message += part2[Math.floor(Math.random()*part2.length)];
        message += part3[Math.floor(Math.random()*part3.length)];
        message += part4[Math.floor(Math.random()*part4.length)];
    }
    return message;
}

console.log(messageGenerator(superHeroNames, commonQuotesStarters, commonTopics, mainMessage));