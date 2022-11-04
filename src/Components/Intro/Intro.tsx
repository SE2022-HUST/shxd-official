import React from 'react'
import "./Intro.css"
import {OptionType,OptionTypeC}from "../../type/OptionType"
import Option from "../Option/Option"

export default function Intro () {
    let list = []
    list.push(new OptionTypeC({
        name:"压缩",
        description:"在这里压缩您的视频",
        imgUrl:"2.jpg"
    }))
    list.push(new OptionTypeC({
        name: "风格化处理",
        description: "在这里对您的视频进行风格化处理，多种风格供您选择",
        imgUrl: "3.jpg"
    }))
    list.push(new OptionTypeC({
        name: "自动识别马赛克处理",
        description: "在这里使用我们的AI技术自动识别视频中特定对象并自动马赛克处理",
        imgUrl: "1.jpg"
    }))

    return (
        <div className='introContainer'>
            <div>
                <div className='start'>开始！</div>
                <div className='offer'>提供多种视频编辑渲染功能，弥补只能制作图片的不足、保护您的隐私！</div>
            </div>
            <section className='list' style={{display:'flex',justifyContent:'space-around'}}>
                { list.map(item=>
                    <Option
                        key={item.name}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        description={item.description}
                    />)
                }
            </section>
        </div>
    );
}