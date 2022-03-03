import React from "react";
import './general.css';
import './skills.css'

const Skill = (props) =>{
    return  (
        <div className="row">
                    <div className="row cont-skill">
                        <div className="col-4 skill-name">{props.name}</div>
                        <div className="col-5">
                            <div className="row square-cont">
                                <div className=" square-none" style= {{width: `${ props.quantcolor }%`}} ></div>
                                <div className=" square-color" style= {{width: `${ props.quantnone }%`}}></div>
                            </div>
                        </div>

                    </div>
        
        </div>
    )
}

export default Skill;