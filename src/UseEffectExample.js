import './App.css';
import {useForm} from "./hooks/useForm";
import {useEffect} from 'react';

function UseEffectExample() {
    const [form, onChangeForm] = useForm({firstName: '', lastName: ''});

    // When you want to do something after the component mounts. Note the `[]` as the 2nd argument.
    // This is similar to componentDidMount and it will not be called on every re-render

    useEffect(() => {
        console.log('This is only called once');
    }, [])

    // When firstName or lastName changes, print log statements accordingly
    // This is similar to componentDidUpdate(prevState) in Class based components

    useEffect(() => {
        console.log('First name changed!');
    }, [form.firstName])

    useEffect(() => {
        console.log('Last name changed!');
    }, [form.lastName])

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <strong>First Name: {form.firstName}</strong>
                </div>
                <div>
                    <strong>Last Name: {form.lastName}</strong>
                </div>
                <form>
                    <input name={'firstName'} onChange={onChangeForm} placeholder={'Your first name'}></input>
                    <input name={'lastName'} onChange={onChangeForm} placeholder={'Your last name'}></input>
                </form>
            </header>
        </div>
    );
}

export default UseEffectExample;
