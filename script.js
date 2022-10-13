const pickDirectors = () => {
    const directorsArray = ['Scorcese', 'Spielberg', 'Tarantino', 'Eastwood', 'Fellini', 'Truffaut', 'Almodovar', 'Kurosawa', 'Panahi', 'Chaplin'];
    return directorsArray[Math.floor(Math.random() * directorsArray.length)];
};

const pickVerb = () => {
    const verbArray = ['was', "wasn't"];
    return verbArray[Math.floor(Math.random() * verbArray.length)];
};

const pickAdjectives = () => {
    const adjectivesArray = ['fabulous', 'great', 'major', 'sensational', 'maybe', 'interesting'];
    return adjectivesArray[Math.floor(Math.random() * adjectivesArray.length)];
};

const pickAdverbs = () => {
    const adverbsArray = ['maybe', 'definetely', 'surely', 'possibly', 'for sure'];
    return adverbsArray[Math.floor(Math.random() * adverbsArray.length)];
};

const pickPhrase = () => {
    const phraseArray = ['He won 3 oscars', 'His movies was perfect', 'I love his movies', "I don't like his movies", 'His first was the best'];
    return phraseArray[Math.floor(Math.random() * phraseArray.length)];
};

console.log(`${pickDirectors()} ${pickVerb()} ${pickAdverbs()} ${pickAdjectives()}. ${pickPhrase()}`);