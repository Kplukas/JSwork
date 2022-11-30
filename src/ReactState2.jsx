import { useState } from 'react';
import './App.scss';
import randNum from './functions/randNum';

function App() {

    const[radius, setRadius] = useState(true);

    const change = () => {
        setRadius(!radius);
    }
    const[rand, setRand] = useState(1);

    const randomize = () => {
        setRand(randNum(5, 25))
    }

    return (
        <div className="App">
            <div className="App-header">
                <div style={{ borderRadius: radius ? '50%' : '0', 
                backgroundColor:'red',
                height:'200px',
                width:'200px',
                lineHeight: '200px'}}>Number: {rand}</div>
                <button onClick={change} >Change</button>
                <button onClick={randomize} >Random number</button>
            </div>

        </div>
    );
}

export default App;