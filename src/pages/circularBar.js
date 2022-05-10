import React from "react";
import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,buildStyles 
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage1 = 100;
const percentage2 = 85;


const CircularBar = () => (
  <div className="row" style={{ padding: "0px 20px 40px 0px" }}>
      <div className="col-2">
        <Example label="English">
        <h3 className="h5" style={{display: "flex", justifyContent: "center"}}>English</h3>
        <CircularProgressbar
            value={percentage2}
            text={"85%"}
            strokeWidth={4}
            styles={buildStyles({
                textSize: '16px',
                pathColor: 'grey',
                textColor: 'black',
              })}        
        />
        </Example>
    </div>
    <div className="col-1"></div>
    <div className="col-2">
        <Example label="Spanish">
        <h3 className="h5" style={{display: "flex", justifyContent: "center"}}>Spanish</h3>
        <CircularProgressbar
            value={percentage1}
            text={"Native"}
            strokeWidth={4}
            styles={buildStyles({
                textSize: '16px',
                pathColor: 'grey',
                textColor: 'black',
              })} 
        />
        </Example>
    </div>
    <div className="col-1"></div>
    <div className="col-2">
        <Example label="Spanish">
        <h3 className="h5" style={{display: "flex", justifyContent: "center"}}>Italian</h3>
        <CircularProgressbar
            value={percentage1}
            text={"Native"}
            strokeWidth={4}
            styles={buildStyles({
                textSize: '16px',
                pathColor: 'grey',
                textColor: 'black',
              })} 
        />
        </Example>
    </div>
  </div>
);

function Example(props) {
  return (
    <div  style={{ marginBottom: 10}}>
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ paddingRight: 30 }}>{props.children}</div>
      </div>
    </div>
  );
}

export default CircularBar;