import React, { useState } from 'react'
import axios from 'axios';

const BadWordsChecker = () => {
    const [badWords, setBadWords] = useState([]);

    useEffect(() => {
        axios.get('/src/badWords.txt')
            .then(responce => {
                const words = responce.data.split('\n').map(word => word.trim());
                setBadWords(words);
            })
            .catch(error => console.error('Error fetching bad words:', error))
    }, []);

    const checkForBadWords = (text) => {
        const words = text.split(' ');
        const detectedBadWords = words.filter(word => badWords.includes(word.toLowerCase()));
        return detectedBadWords;
    };

    const handleInput = (event) => {
        const userInput = event.target.value;
        const detectedWords = checkForBadWords(userInput);
        if (detectedWords.length > 0) {
            console.log('WATCH OUT YOUR WORDS', detectedWords);
        }
    };

    return (
        <div>
            <text onChange={handleInput} placeholder="sss" />
        </div>
    );
};

export default BadWordsChecker;