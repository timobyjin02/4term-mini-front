import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { injectionGlobal } from '@emotion/css';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box; 
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  } 
  ul {
    list-style: none;
  }
  li {
    list-style:none;
  }
  a, a:visited, a:link {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;
