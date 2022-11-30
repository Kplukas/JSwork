import { useState } from 'react';
import './App.scss';

function App() {

    const[radius, setRadius] = useState(true);

    const change = () => {
        setRadius(!radius);
    }

    return (
        <div className="App">
            <div className="App-header">
                <div style={{ borderRadius: radius ? '50%' : '0', backgroundColor: 'red' , height: '200px', width: '200px'}}></div>
                <button onClick={change} >Change</button>
            </div>

        </div>
    );
}

export default App;