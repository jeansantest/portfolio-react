import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
