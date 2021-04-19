import './App.css';
import {useState} from "react";

function UseStateExample() {
    const [profile, setProfile] = useState({name: 'Fred', books: 0, confirmedName: null});

    const setConfirmedName = (event) => {
        setProfile(currentState => ({...currentState, confirmedName: currentState.name}));
        event.preventDefault();
    }

    return (
        <div className="App">
            <header className="App-header">
                <form onSubmit={setConfirmedName}>
                    <input onChange={e => setProfile(currentState => ({...currentState, name: e.target.value}))} placeholder={'Your name'}></input>
                    <button value={'Submit'}>
                        Submit Name
                    </button>
                </form>
                <button onClick={e => setProfile(currentState => ({...currentState, books: currentState.books + 1}))}>
                    Add book
                </button>
                <strong>
                    Confirmed Name: {profile.confirmedName}
                </strong>
                <p>
                    Books: {profile.books}
                </p>
            </header>
        </div>
    );
}

export default UseStateExample;
