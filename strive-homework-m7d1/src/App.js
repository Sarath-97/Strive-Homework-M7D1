import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar.jsx";
import { Container } from "react-bootstrap";
import {BrowserRouter as Router} from"react-router-dom"

import "./App.css";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
    <Router>
      <MyNavBar />
      <Container className="d-flex justify-content-center">
        <SearchBar />
      </Container>
    </Router>
  );
}

export default App;
