import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

function App() { 
  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/https://github.com/NyeishaJPace">
        <Nav.Item>
          <Nav.Link href="https://github.com/NyeishaJPace" target="_blank">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://twitter.com/_TheRealJaypeee" target="_blank">Twitter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/nyeisha-pace-b8b527241/" target="_blank">LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Button onClick={() => {localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
            window.location.reload()
            }}> 
            <FontAwesomeIcon icon= "fa-solid fa-moon" />
            </Button> 
        </Nav.Item>
      </Nav>
     <Header 
        
        
     />
     
    </div>
  );
}

export default App;
library.add(faMoon);
