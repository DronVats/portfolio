import React from 'react'
import web from "../rocket.svg"
import { NavLink } from 'react-router-dom'


export default function Commom(props) {
    return (
       <>
            <section id="header" className="d-flex align-item-center">
                <div className="conatiner-fluid nav_bg ">
                    <div className="row ">
                        <div className="col-10 mx-auto ">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                                
                               
                                <h1 className="ps-2"><strong>{props.heading}<strong className="blue">Dron vats</strong></strong></h1>
                                <p className='my-3 '>
                                    We are the team of talented developeres making websites
                                </p>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn btnm">{props.btnname}</NavLink>
                                </div>
                                </div>
                                <div className="col-lg-6 order-lg-2  header-img">
                                    <img src={props.image} alt="hi" className="img-fluid animated" />
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            




        </>
    )
}

