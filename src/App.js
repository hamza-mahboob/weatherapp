import logo from './logo.svg';
import './App.css';
import { Weather } from './Components/Weather';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        {/* <Counter/> */}
      </header>
    </div>
  );
}

export default App;
