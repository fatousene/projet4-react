import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo1 from "./Photo1.png"
function Profile(props) {
    
    const Style={color:"rgba(98, 88, 235, 0.952)", backgroundColor:"bisque" ,fontFamily:"serif"}
    return (
    <div style={Style}>
    <div className="row">
    <div className="col-sm-4">
    <img src={Photo1}  alt="screen" style={{width:400,height:400,borderRadius:400/ 2}}/>
    </div>
    <br/>
    <div className="col-sm-8">
    <h1>{props.FullName}</h1>
    <br/>
    <h1> {props.bio}</h1>
    <br/>
    <h1> {props.Profession} </h1>
    </div>
    </div>
    </div>
    
    );
}

export default Profile;


    