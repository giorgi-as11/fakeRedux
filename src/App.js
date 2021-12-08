
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Router from './components/Router/Router';


const App = (props) => {
  
  return (

    <div className="App">
      <Header />
      <div className='main'>
        <NavBar />

        <Router dispatch={props.dispatch} state={props.state} />
      </div>
    </div>
  );
}

export default App;
