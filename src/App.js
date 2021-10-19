import './App.css';
import Home from './pages/Home/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import Services from'./pages/Home/Services/Services'
import Header from './pages/Header/Header';
import Doctors from './pages/Home/Doctors/Doctors';
import Footer from './pages/Footer/Footer';
import About from './pages/Home/About/About';





function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route path="/services">
          <Services></Services>
       </Route>
       <Route path="/doctors">
          <Doctors></Doctors>
       </Route>
       <Route path="/details/:serviceId">
        <Details></Details>
       </Route>
       <Route path="/about">
         <About></About>
       </Route>
       <Route exact path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
