import Header from "./components/Header";

function App() {
  return (
    <div className="App">
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