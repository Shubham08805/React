import './App.css';
// named import with same name and curly braces
import { Header } from './components/Header';
// footer is export default so don't need {} 
// import footer1 from './components/Footer'; valid
import Footer  from './components/Footer'
function App() {
  let name='Shubham'
  return (
    <div className="App">
      <header className="App-header">
        <div>name</div>
        <div>{name}</div>
        <div>10+10</div>
        <div>{10+10}</div>
        <Header />
        <Footer />
      </header>
    </div>
  );
}

export default App;
