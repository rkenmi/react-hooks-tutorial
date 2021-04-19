import './App.css';
import {useForm} from "./hooks/useForm";

function CustomHookExampleWithUseState() {
    const [form, onChangeForm] = useForm({firstName: '', lastName: ''});

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

export default CustomHookExampleWithUseState;
