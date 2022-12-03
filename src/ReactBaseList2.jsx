import './App.scss';
import Dog from './components/Dog';
import randNum from './functions/randNum'

function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    let key = randNum(10, 100000);

    return (
        <div className="App">
            <div className="App-header">
                {dogs.map(dog => 
                    <div>
                        <Dog key={key} dog={dog}/>
                    </div>
                )}   
            </div>
        </div>
    );
}

export default App;