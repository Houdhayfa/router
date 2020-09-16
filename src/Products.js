import React from 'react'
import {Route,Switch,Link,useRouteMatch,useParams} from 'react-router-dom';
function Products(props) {
const match= useRouteMatch()
    
return (
    <div className="wrapper">
        <div className="productList">
            <h2>Products</h2>
            <ul>
                {props.productData.map(
                    (ele,i)=>
                        <li key={ele.id}>
                        <Link  to={`${match.url}/${ele.id}`} >{ele.name}</Link>
                        </li>
                )}
            </ul>
        </div>
        <div className="product">
          <Route exact path={match.path} render={()=><p>Please select a  product</p>}/>
          <Route path={`${match.path}/:name`} render={({match})=>{
                let product=props.productData.filter(el=> el.id===parseInt(match.params.name))[0]
                if(product!=null){
                    return (
                        <div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <hr/>
                            <h4>{product.status}</h4>
                        </div>
            
                                    )}
                else {return <p>Please select a valid product</p>}
            } } />
        </div>    
                
    </div>
)
}

export default Products
