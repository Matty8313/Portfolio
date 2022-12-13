import './App.css';
import SideBar from './sideBar';
import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import Logo from './Logo';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact1 from './Contact';
import Language from './Language2';



import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './Contact';

function App() {

  return (
    
    <Router>
    <div className="App" >
    <Language/>
      <SideBar/>
      
      
      
          <Switch>
            
            <Route path="/About" component={About}/>
            <Route path="/Skills" component={Skills}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Contact" component={Contact1}/>
            <Route path="/Portfolio/" component={Logo}/>

          </Switch>
    </div>
    </Router>
  );
}

export default App;

