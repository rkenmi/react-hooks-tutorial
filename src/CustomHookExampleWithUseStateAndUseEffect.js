import './App.css';
import {useState} from 'react';
import {useFetch} from "./hooks/useFetch";

function CustomHookExampleWithUseStateAndUseEffect() {
    const [number, setNumber] = useState(0)

    const response = useFetch(number);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <strong>Number: {number}</strong>
                </div>
                <div>
                    <strong>Trivia: {response.trivia}</strong>
                </div>
                <button onClick={e => {setNumber(number => number + 1)}}>Increment</button>
            </header>
        </div>
    );
}

export default CustomHookExampleWithUseStateAndUseEffect;
