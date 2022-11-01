import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import FooterComp from './Components/FooterComp';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold underline">
      Hello world!
      <FooterComp/>
    </h1>
    </div>
  );
}

export default App;
