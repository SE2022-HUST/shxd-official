import React from 'react'
import "./Intro.css"
import {OptionType,OptionTypeC}from "../../type/OptionType"
import Option from "../Option/Option"

// 记得导入css
export default function Intro () {
    let jarrstr = '[{        "name":"压缩",        "description":"在这里压缩您的视频",        "imgUrl":1    },    {        "name":"风格化处理",        "description":"在这里对您的视频进行风格化处理",        "imgUrl":2    },    {        "name":"自动识别马赛克处理",        "description":"在这里使用AI识别、马赛克处理",        "imgUrl":3    }]'
    let list=[];
    for(let i=0;i<3;i++){
        list.push(JSON.parse(jarrstr)[i]);
    }
    let imgUrlList=["../../Image/2.jpg","../../Image/3.jpg","../../Image/1.jpg"]

    // todo:    把这个改成list.map的形式(最好)实在不行就复制这个结构
    return (
        <div className='content'>
            <div>
                <div className='start'>开始！</div>
                <div className='offer'>提供多种视频编辑渲染功能，弥补只能制作图片的不足、保护您的隐私！</div>
            </div>
            <section className='list' style={{display:'flex',justifyContent:'space-around'}}>
                {list.map(item=>
                    <Option 
                            imgUrl={imgUrlList[item.imgUrl-1]}
                            name={item.name}
                            description={item.description}></Option>)}
            </section>
        </div>
    );
}