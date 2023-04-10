import Header from './components/header/Header';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
