import { useState } from 'react';
import './App.scss';
import Sq from './components/Sq';

function App() {

    return (
        <div className="App">
            <div className="App-header">
                <div className="bin">
                    {}
                </div>
                <button onClick={add}>ADD</button>
            </div>

        </div>
    );
}

export default App;