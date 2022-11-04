import React, { PureComponent } from "react";
import "./Profile.css";
import {OptionType,OptionTypeC}from "../../type/OptionType"

export default function Profile(prop:OptionType){
    return (
        <div className='container'>
                <img className='avatar' src={require("../../Image/dlj.jpg")}/>
                <div className="person">
                    <div className='name'>{prop.name}</div>
                    <div className='intro'>{prop.description}</div>
                </div>
            </div>
    )
}
