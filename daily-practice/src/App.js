// import './App.css';
// named import with same name and curly braces
// and can be multiple in one file
import { Header } from './components/Header/Header';
import { Counter } from './components/Counter/Counter';
// footer is export default so don't need {} 
// import footer1 from './components/Footer'; valid
import Footer  from './components/Footer/Footer'
import { SquareofNumber } from './components/SquareofNumber/SquareofNumber';
import IncrementAndDecrementCounter from './components/IncrementAndDecrementCounter/IncrementAndDecrementCounter';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
          {/* <Header />
          <Footer /> */}
        {/* <Counter /> */}
        {/* <SquareofNumber /> */}
        <IncrementAndDecrementCounter />
      </header>
    </div>
    );
}

export default App;
