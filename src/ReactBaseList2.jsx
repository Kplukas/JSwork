import './App.scss';
import Dog from './components/Dog';

function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="App">
            <div className="App-header">
                {dogs.map((dog, i) => 
                    <Dog key={i} dog={dog}/>
                )}   
            </div>
        </div>
    );
}

export default App;