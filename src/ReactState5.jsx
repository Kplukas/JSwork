import { useState } from 'react';
import './App.scss';
import randNum from './functions/randNum';
import Sq from './components/Sq';

function App() {

    const[sq, setSq] = useState([]);

    const addBlue = () => {
        setSq(s => [...s, { id: randNum(100000, 999999), bg: 'blue'}]);
    }
    const addRed = () => {
        setSq(s => [...s, { id: randNum(100000, 999999), bg: 'red'}]);
    }
    const reset = () => {
        const nulis = 0;
        setSq(nulis);
    }
    return (
        <div className="App">
            <div className="App-header">
                    <div className="bin">
                    {
                        sq?.map((sq) => <Sq key={sq.id} sq={sq} className="{sq.bg}" style={{backgroundColor: '{sq.bg}'}}/>)
                    }
                </div>
                <div>
                    <button onClick={addBlue}>ADD Blue</button>
                    <button onClick={addRed}>ADD Red</button>
                    <button onClick={reset}>RESET</button>
                </div>
            </div>

        </div>
    );
}

export default App;