import React from 'react'
import Commom from './Commom';
import { NavLink } from 'react-router-dom'
import Card from './Card';



export default function Service() {
    return (
        <>
        <div className="my-5">
          <h1 className="text-center">Our Services </h1>
        </div>
        <div className="container-fluid mb-5">
         <div className="row">
             <div className="col-10 mx-auto">
                 <div className="row">
                     
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/>
                     <Card/>
                        </div>
                 </div>
             </div>
         
        </div>
        </>
    );
}
