import React  from "react";
import general from './general.css';
import './skills.css'
import Skill from './skill.js';
import items1 from './skillsData1.js'
import items2 from  './skillsData2.js'

const Skills = () =>{
    return ( 
        <div className="container-fluid">
            <div className="big-card">
                <div className="title">PERSONAL SKILLS</div>
                <div>
                    <div className="row cont-skilss">
                     <div className="col-6">
                        {(items1).map((prod) => {
                            return (
                                <Skill name={prod.name} quantcolor = {prod.q1} quantnone = {prod.q2}/>
                            )
                            }
                            )}
                    </div>
                    <div className="col-6">
                        {(items2).map((prod) => {
                            return (
                                <Skill name={prod.name} quantcolor = {prod.q1} quantnone = {prod.q2}/>
                            )
                            }
                            )}
                    </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default Skills;