import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='Navbar'>
        <div><a href='#' id='logo'>Navbar</a></div>
        <div className='items'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Blog</a>
        </div>
      </nav>
      <div className='Title'>
          <h1>My heading</h1>
      </div>
      <div className='text'>
        <p>I présent my three cards :</p>
      </div>
      <div id='container-cards'>
      <div className='Card'>
      <h3>Titre de la carte</h3>
      <p>Contenu de la carte...</p>
      </div>
      <div className='Card'>
      <h3>Titre de la carte</h3>
      <p>Contenu de la carte...</p>
      </div>
      <div className='Card'>
      <h3>Titre de la carte</h3>
      <p>Contenu de la carte...</p>
      </div>
      </div>
    </div>
  );
}

export default App;
