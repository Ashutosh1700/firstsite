import { Handyman } from '@mui/icons-material'
import React from 'react'
import './services.css'

const Services = () => {
    return (

        <div className="serviceContainer">
            <h2>Our Services</h2>
            <section className="services">
                <div className="serviceCard">
                    <div className="serviceContent">
                        <div className="icon"><Handyman /></div>
                        <div className="title">Web Development</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <div className="serviceContent">
                        <div className="icon"><Handyman /></div>
                        <div className="title">Web Development</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <div className="serviceContent">
                        <div className="icon"><Handyman /></div>
                        <div className="title">Web Development</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <div className="serviceContent">
                        <div className="icon"><Handyman /></div>
                        <div className="title">Web Development</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <div className="serviceContent">
                        <div className="icon"><Handyman /></div>
                        <div className="title">Web Development</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                    </div>
                </div>
                <div className="serviceCard">
                    <div className="serviceContent">
                        <div className="icon"><i className="fa fa-mobile"></i></div>
                        <div className="title">App Development</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Services