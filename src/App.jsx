import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sobre from './pags/Sobre'
import Home from './pags/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </Router>
  );
}

export default App;


