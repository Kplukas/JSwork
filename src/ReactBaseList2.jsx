import './App.scss';
import Dog from './components/Dog';
import randNum from './functions/randNum'

function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="App">
            <div className="App-header">
                {dogs.map((dog) => 
                    <div>
                    <Dog key={randNum(100000, 90000)} dog={dog}/>
                    </div>
                )}   
            </div>
        </div>
    );
}

export default App;