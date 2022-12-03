import './App.scss';
import Dog from './components/Dog';

function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    let dogs2 = [...dogs];
    function arraySort(x){
    let sorted = x.sort((a, b) => a.length - b.length);
    return sorted;
    };
    arraySort(dogs2);

    return (
        <div className="App">
            <div className="App-header">
                {dogs2.map((dog, i) => 
                    <Dog key={i} dog={dog} i={i}/>
                )}   
            </div>
        </div>
    );
}

export default App;