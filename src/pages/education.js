import React from 'react';
import  './general.css';
import './education.css';

const Education = () =>{
    return (
        <div>
            <div className='container-fluid'>
                <div className='cont-all'>
                    <ul className='ul-edu'>
                        <div className='row'>
                            <div className='col-2'>
                                <h5 >2021-2022 </h5>
                            </div>
                            <div className='col-7'>
                                <li className='container-single-education'> 
                                    <h5 className=''>Full Stack Developer Career - Coder House  </h5>
                                    <p>Web Devolepment Course: Passed with merits, 2nd best in class.
                                    Teacher collaboration with professional development awarded</p>
                                </li>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h5 >2022 </h5>
                            </div>
                            <div className='col-7'>
                                <li className='container-single-education'> 
                                    <h5>Front End developer Certificate - Coderhouse</h5>
                                </li>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h5 >2019-2025 </h5>
                            </div>
                            <div className='col-7'>
                                <li className='container-single-education'>
                                    <h5>Informatics Engineering at University of Buenos Aires </h5>
                                </li>
                            </div>
                            </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h5 >2019-2023</h5>
                            </div>
                            <div className='col-7'>
                                <li className='container-single-education'>
                                    <h5>IT Degree at University of Buenos Aires</h5>
                                </li>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h5 >2005-2018 </h5>
                            </div>
                            <div className='col-7'>
                                <li className='container-single-education'>
                                    <h5>High School Institution : Cristóforo Colombo </h5>
                                </li>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h5 >2018 </h5>
                            </div>
                            <div className='col-7'>
                                <li className='container-single-education'>
                                    <h5>International College degree of the Italian state </h5>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default Education;