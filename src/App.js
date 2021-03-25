import logo from './logo.svg';
import Pictures from './components/Pictures'
import './App.css';
import Footer from './components/Footer'
import Nav from './components/Nav';

import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <header>Fighter Jets</header>
      <Nav />
    <Pictures />
    <Body />
    <Footer />
    </div>
  );
}

export default App;
