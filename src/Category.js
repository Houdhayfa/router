import React from 'react'
import {Route,Link} from 'react-router-dom';

function Category(props) {
  
    return (
        <div>
          
          <ul>
          <li><Link to={`${props.match.url}/shoes`}>shoes</Link></li>
          <li><Link to={`${props.match.url}/boots`}>boots</Link></li> 
          <li><Link to={`${props.match.url}/footwear`}>footwear</Link></li>
          </ul>
          
              <Route path={`${props.match.path}/:name`} 
              render= {(props) =>( <div>  <h3> {props.match.params.name} </h3></div>)}/>
              
           
        </div>
    )
}

export default Category
