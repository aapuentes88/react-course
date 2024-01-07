import logo from './logo.svg';
import './App.css';
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'
import Sample from './components/Sample';
import SampleChild1 from './components/SampleChild1';
import SampleChild2 from './components/SampleChild2';
import SampleChild3 from './components/SampleChild3';
import CrudApi from './components/Crud/CrudApi';
import { CrudProvider } from './components/Crud/CrudContext';



function App() {
  return (
    <div className="App">
      <h1>React context API</h1>
      <hr/>
      <CrudProvider>
      <CrudApi/>
      </CrudProvider>
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
      <hr/>
      <Sample>
        <SampleChild1/>
        <SampleChild2/>
        <SampleChild3/>
      </Sample>
      </div>
  );
}

export default App;
