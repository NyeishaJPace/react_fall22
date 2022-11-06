import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

function App() { 
  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Twitter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">LinkedIn</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
           <Button
           
            onClick={() => { 
            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
            window.location.reload()
            }}> 
            <FontAwesomeIcon icon= "fa-solid fa-moon" />
            </Button> 
        </Nav.Item>
      </Nav>
     <Header 
        linkText="Learn React"
        linkUrl="https://reactjs.org"
     />
     
    </div>
  );
}

export default App;
library.add(faMoon);

// props -> passed down from parent to child. A child shouldn't change the props f(x, y, z)

// state -> is owned by component, f has its own state, this.state.g

// setState() function -> component lifecycle methods

// hooks -> useeffects