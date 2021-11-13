import React from 'react'
import page from "../page.svg"
import { NavLink } from 'react-router-dom'
import Commom from './Commom'


export default function About() {
    return (
        <div>

        <Commom
         heading="Welcome to About Page" 
         image={page}
          visit="./Contact" 
          btnname="Contact Now" />
    </div>
    )
}
