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
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ResetPassword from './pages/ResetPassword'
import UpdateProfile from './pages/UpdateProfile'
import AddTip from './pages/AddTip';
import Admin from './pages/admin';
import ErrorAdmin from './pages/error';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Navbar />
        <Container
          style={{ marginTop: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/tips" component={Tips} />
              <Route path="/game" component={Game} />
              <Route path="/login" component={Login} />
              <Route path="/partners" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/error" component={ErrorAdmin} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/add-tip" component={AddTip} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <AdminRoute path="/admin" component={Admin} />
            </Switch>
          </div>
        </Container>
      </AuthProvider>
      <Footer />
    </Router>
    
  );
}

export default App;
