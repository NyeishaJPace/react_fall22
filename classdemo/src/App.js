import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
           <Button variant="fa-sharp fa-solid fa-moon" onClick={() => { 
            localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
            window.location.reload()
            }}> 
            Change Mode 
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


// props -> passed down from parent to child. A child shouldn't change the props f(x, y, z)

// state -> is owned by component, f has its own state, this.state.g

// setState() function -> component lifecycle methods

// hooks -> useeffects