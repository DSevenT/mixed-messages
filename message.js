const messageMaterial = {
    superHeroNames: ['Captain America: ', 'Thor: ', 'Black Panter: ', 'Iron Man: ', 'Hulk: '], //Different super heores that can tell the message
    commonQuotesStarters: ['Remember, ', 'Never forget, ', 'Always keep in mind, ', 'As I always say, '], //Different ways to start the message
    commonTopics: ['the truth ', 'justice ', 'love ', 'life '], // Different topics for the corresponding message
    mainMessage: ['will always be there, whether we can see it or not.', 'is a natural part of us.', 'is the most important thing we have.']

}

const messageGenerator = (materials) => { // fucntion that generates the messages
    let message = ''; 
    for(const key in materials)
    {
        message += materials[key][Math.floor(Math.random()*materials[key].length)];
        if(message === 'Hulk: '){
            message += 'Hulk smaaaash!';
            break;
        }
    }

    //Alternative solution:
    //message = materials.superHeroNames[Math.floor(Math.random()*materials.superHeroNames.length)];   
    //else {    
    //    message += materials.commonTopics[Math.floor(Math.random()*materials.commonTopics.length)];
    //    message += materials.mainMessage[Math.floor(Math.random()*materials.mainMessage.length)];
    //}
    return message;
}

console.log(messageGenerator(messageMaterial));