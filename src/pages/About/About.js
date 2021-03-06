import React from 'react';
import Header from '../../components/Header/Header';

import '../pages.css';

function About() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <p>
                    MARS was developed by Erik Alfvin, the former Technical Manager for the State of Minnesota Metrology Laboratory, and now a full-time software engineer.
                    The idea for MARS came from the desire to develop a easy-to-use application that would help calibration laboratories produce more accurate precision-mass
                    results.
                    <br/> <br/>
                    The most significant improvement to measurement accuracy that MARS offers is line-by-line air buoyancy corrections. This is especially important when measurements are made
                    on automated balances or performed manually when the air pressure changes during the calibration.
                    <br/> <br/>
                    MARS is also designed to automatically check input data for consistency and identify errors that may have occurred during data entry or measurement.
                    This reduces the risk of producing bad measurement results. A series of 211 internal validation tests runs each time the program is opened,
                    ensuring that real-time mass calculations are accurate.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
