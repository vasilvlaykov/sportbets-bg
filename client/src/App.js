import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Tips from './pages/tips';
import Contact from './pages/contact';
import Profile from './pages/profile';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ResetPassword from './pages/ResetPassword'
import UpdateProfile from './pages/UpdateProfile'
import AddTip from './pages/AddTip';
import AddPartner from './pages/AddPartner';
import Admin from './pages/admin';
import ErrorAdmin from './pages/error';
import Partners from './pages/partners';

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
              <Route path="/contact" component={Contact} />
              <Route path="/tips" component={Tips} />
              <Route path="/login" component={Login} />
              <Route path="/partners" component={Partners} />
              <Route path="/register" component={Register} />
              <Route path="/reset-password" component={ResetPassword} />
              <Route path="/error" component={ErrorAdmin} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/add-tip" component={AddTip} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <AdminRoute path="/admin" component={Admin} />
              <AdminRoute path="/add-partner" component={AddPartner} />
            </Switch>
          </div>
        </Container>
      </AuthProvider>
      <Footer />
    </Router>
    
  );
}

export default App;
