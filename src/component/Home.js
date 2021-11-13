import React from 'react'
import web from "../rocket.svg"

import Commom from './Commom'


export default function Home() {
    return (
        <div>
        <Commom
         heading="Grow Your Business with" 
         image={web}
          visit="./Service" 
          btnname="Get Started" />
    </div>
    )
}

