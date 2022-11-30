import { useState } from 'react';
import './App.scss';

function App() {
    
    const[count, setCount] = useState(0);
    const add = () => {
        setCount(countNow => countNow +1)
    }
    const minus3 = () => {
        setCount(countNow => countNow -3)
    }

    return (
        <div className="App">
            <div className="App-header">
                <h1>{count}</h1>
                <div>
                    <button onClick={add} >+1</button>
                    <button onClick={minus3} >-3</button>
                </div>
            </div>

        </div>
    );
}

export default App;