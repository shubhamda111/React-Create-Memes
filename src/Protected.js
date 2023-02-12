import React from 'react';
import {Redirect,Route} from 'react-router-dom'
const Protected=({component:Component,...data})=> (
     <Route
         {...data}
     render={(props)=>
         localStorage.getItem('user') ?(
             <Component {...props}/>
         ):
         <Redirect to="/"/>
     }
     />
)
export default Protected;
