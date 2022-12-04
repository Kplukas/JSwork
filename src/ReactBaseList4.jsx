import './App.scss';


function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
    function isUpperCase (input) {  
        return input === String(input).toUpperCase()
    };
    return (
        <div className="App">
            <div className="App-header">
                {dogs.map((dog, i) => isUpperCase(dog) === true  ? null : <div className='cage' key={i}>{dog}</div>)}   
            </div>
        </div>
    );
}

export default App;