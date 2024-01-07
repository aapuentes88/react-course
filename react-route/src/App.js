import logo from './logo.svg';
import './App.css';
import BasicConcept from './components/BasicConcept';
import CrudApi from './components/Crud/CrudApi';
import SongSearch from './components/SongSearch/SongSearch';


function App() {
  return (
    <div className="App">
      <h2>React Route</h2>
      <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noreferrer">Docs</a>
      {/* <hr/>
      <CrudApi /> */}
      <hr/>
      <SongSearch />
      {/* <hr/>
      <BasicConcept/>       */}
    </div>
  );
}

export default App;
