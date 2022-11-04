import React from 'react'
import "./Option.css"
import {OptionType, OptionTypeC}from "../../type/OptionType"

export default function Option (prop: OptionType){
    console.log(prop.imgUrl);//问题：不对称
    return (
        <div className='container'>
            <img className='picture' src={require("../../Image/"+prop.imgUrl)}/>
            <div className='name'>{prop.name}</div>
            <div className='description'>{prop.description}</div>
        </div>
    );
}