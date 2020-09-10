import React from "react";
import {NavLink} from 'react-router-dom';
import '../src/Navigation.css';
const list=[
    {name:'start',path:'/', exact:true},
    {name:'Products',path:'/products'},
    {name:'Contact',path:'/contact'},
    {name:'admin panel',path:'/admin'},
]
const Navigation = () => {
    const menu=list.map(item=>(

<li key={item.name}>

    <NavLink to={item.path} exact={item.exact ? item.exact:false}>{item.name}</NavLink>


</li>


    ))
  return (
    <nav className='main'>
      <ul>
     {menu}
      </ul>
    </nav>
  );
};

export default Navigation;
