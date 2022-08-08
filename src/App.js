import './App.css';
import SideBar from './sideBar';
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import Logo from './Logo';
import About from './About';
import CV from './CV';
import Projects from './Projects';
import Skills from './Skills';



import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    
    <Router>
    <div className="App" >
      <SideBar/>
      
      
          <Switch>
            
            <Route path="/About" component={About}/>
            <Route path="/Skills" component={Skills}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/" component={Logo}/>
          </Switch>
    </div>
    </Router>
  );
}

export default App;

