import React from 'react'
import "./Intro.css"
import {OptionType,OptionTypeC}from "../../type/OptionType"
import Option from "../Option/Option"

export default function Intro () {
    let list = []
    list.push(new OptionTypeC({
        name:"压缩",
        description:"压缩您的视频",
        imgUrl:"2.jpg"
    }))
    list.push(new OptionTypeC({
        name: "风格化处理",
        description: "对您的视频进行风格化处理，多种风格供您选择",
        imgUrl: "3.jpg"
    }))
    list.push(new OptionTypeC({
        name: "自动识别马赛克处理",
        description: "使用AI技术自动识别视频中特定对象并做马赛克处理",
        imgUrl: "1.jpg"
    }))

    return (
        <div className='introContainer'>
            <div>
                <div className='start'>开始！</div>
                <div className='offer'>提供多种视频编辑渲染功能，弥补只能制作图片的不足、保护您的隐私！</div>
                <div className='offer'>更多功能，请前往<a color='white' href='https://github.com/SE2022-HUST/shxd-client/releases'><strong>最新release版本软件</strong></a>下载了解☆</div>
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