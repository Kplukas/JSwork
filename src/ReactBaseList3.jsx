import './App.scss';


function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    return (
        <div className="App">
            <div className="App-header">
                {dogs.map((dog, i) => i % 2 === 0  ? <div key={i} className='ovalCage'>{dog}</div> : <div className='cage' key={i}>{dog}</div>)}   
            </div>
        </div>
    );
}

export default App;