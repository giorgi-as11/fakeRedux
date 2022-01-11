
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import Router from './components/Router/Router';


const App = (props) => {

  return (

    <div className="App">
      <HeaderContainer />
      <div className='main'>
        <NavBar />

        <Router />
      </div>
    </div>
  );
}

export default App;
