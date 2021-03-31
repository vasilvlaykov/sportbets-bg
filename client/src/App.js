import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import Login from './pages/login';
import Register from './pages/register';
import Tips from './pages/tips';
import About from './pages/about';
import Profile from './pages/profile';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar />
      
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ marginTop: "1rem" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tips" component={Tips} />
              <Route path="/game" component={Game} />
              <Route path="/login" component={Login} />
              <Route path="/partners" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Container>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
