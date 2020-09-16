import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Home from './Home'
import Category from './Category'
import Products from './Products'
import AdminArea from './AdminArea'
import Login from './Login'
import fakeAuth from './Login'
import PrivateRoute from './PrivateRoute'
import './App.css';


function App() {
  const productData = [
    {
      id: 1,
      name: 'NIKE Liteforce Blue Sneakers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
      status: 'Available'
    
    },
    {
      id: 2,
      name: 'Stylised Flip Flops and Slippers',
      description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
      status: 'Out of Stock'
    
    },
    {
      id: 3,
      name: 'ADIDAS Adispree Running Shoes',
      description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
      status: 'Available'
    },
    {
      id: 4,
      name: 'ADIDAS Mid Sneakers',
      description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
      status: 'Out of Stock'
    },
    
    ];
  return (
    
    <div>
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/category">Category</Link></li>
         <li><Link to="/products">Products</Link></li>
         <li><Link to="/adminArea">AdminArea</Link></li>
         </ul>
         <Switch>
          
          <Route path="/login" component={Login} />  
          <Route exact path="/" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route  path="/products" >
              <Products productData={productData}/>
          </Route>
          
          <PrivateRoute  path='/adminArea' component = {AdminArea} />
        </Switch>
    </div>
  )
              }

export default App
