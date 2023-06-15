import { useContext } from "react"
import { MoodContext } from "./MoodContext"

function Emoji() {
    const { mood, changeMood } = useContext(MoodContext);

    return (
        <div>
            <h2>Current Mood: {mood}</h2>
            <button onClick={changeMood}>Change Mood</button>
        </div>
    );
}

export default Emoji;