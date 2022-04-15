import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='mdc-top-app-bar--dense-adjust' id='main-content'>
        <Landing />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
