import './App.css';
import Home from './pages/Home/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Details from './pages/Details/Details';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AddService from './pages/Home/AddService/AddService';
import MyOrders from './pages/Home/MyOrders/MyOrders';
import ManageOrder from './pages/Home/ManageOrder/ManageOrder';





function App() {
  return (
    <div className="App">
        <AuthProvider>
        <BrowserRouter>
     <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <PrivateRoute path="/my-order">
          <MyOrders></MyOrders>
       </PrivateRoute>
       <PrivateRoute path="/details/:serviceId">
        <Details></Details>
       </PrivateRoute>
       <PrivateRoute path="/manage-order">
         <ManageOrder></ManageOrder>
       </PrivateRoute>
       <Route path="/add-services">
         <AddService></AddService>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="/register">
         <Register></Register>
       </Route>
       <Route exact path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
