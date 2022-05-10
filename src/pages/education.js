import React from 'react';
import  './general.css';
import './education.css';

const Education = () =>{
    return (
        <div>
            <div className='container-fluid'>
                <div className='cont-all '>
                    <div className='container-single-education'> 
                        Full Stack Developer Career - Coder House (2021-2022) :
                        Web Devolepment Course: Passed with merits, 2nd best in class.
                        Teacher collaboration with professional development awarded
                    </div>
                    <div className='container-single-education'> 
                        Front End developer Certificate - Coderhouse
                    </div >
                    <div className='container-single-education'>
                        Informatics Engineering at University of Buenos Aires (2019-2025)
                    </div>
                    <div className='container-single-education'>
                        IT Degree at University of Buenos Aires (2019-2023)
                    </div>
                    <div className='container-single-education'>
                        High School Institution : Cristóforo Colombo (2005-2018)
                    </div>
                    <div className='container-single-education'>
                        International College degree of the Italian state (2018)
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Education;