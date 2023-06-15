import React, {createContext, useState} from 'react';

const MoodContext = createContext();

function MoodProvider({ children }) {
    const [mood, setMood] = useState('😊');

    const changeMood = () => {
        setMood((prevMood) => (prevMood === '😊' ? '😢' : '😊'));
    };

    return (
        <MoodContext.Provider value={{mood,changeMood}}>
            {children}
        </MoodContext.Provider>
    );
}

export { MoodContext, MoodProvider};