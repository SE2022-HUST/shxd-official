import React, { PureComponent } from "react";
import "./Profile.css";
import {OptionType, OptionTypeC} from "../../type/OptionType"

export default function Profile (prop: OptionType) {
    console.log(prop.imgUrl)
    return (
        <div className='container'>
            <img className='avatar' src={require('../../Image/'+prop.imgUrl)}/>
            <div className='name'>{prop.name}</div>
            <div className='intro'>{prop.description}</div>
        </div>
    );
}
