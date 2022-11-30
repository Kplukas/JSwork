import { useState } from 'react';
import './App.scss';

function App() {

    const[sq, setSq] = useState([]);

    const add = () => {
        setSq(s => [...s, 1]);
    }
    return (
        <div className="App">
            <div className="App-header">
                    <div className="bin">
                    {
                        sq.map((_, i) => <div className='sq' key={i}></div>)
                    }
                </div>
                <button onClick={add}>ADD</button>
            </div>

        </div>
    );
}

export default App;