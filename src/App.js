import './App.css';
import {Switch, Route} from 'react-router-dom';
import FormSignUp from './Pages/FormSignUp'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <FormSignUp/>
      </header>
    </div>
  );
}

//App => Rotas => Paginas => Componentes

export default App;
