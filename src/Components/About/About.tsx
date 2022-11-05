import React from 'react'
import "./About.css"
import { OptionType, OptionTypeC } from "../../type/OptionType"
import Profile from "../Profile/Profile"

// 记得导入css
// todo:    仍然使用map复制这个结构
export default function About () {
    let list=[]
    list.push(new OptionTypeC({
        name:"董玲晶",
        description:"后端",
        imgUrl:"dlj.jpg"
    }));
    list.push(new OptionTypeC({
        name:"陈梁子豪",
        description:"前端",
        imgUrl:"clzh.jpg"
    }));
    list.push(new OptionTypeC({
        name:"祁祺",
        description:"前端",
        imgUrl:"qq.jpg"
    }));
    list.push(new OptionTypeC({
        name:"靳骐睿",
        description:"后端",
        imgUrl:"jqr.jpg"
    }));

    return (
        <div className='aboutContainer'>
            <div className='aboutTitle'>
                <div className='line0'>关于我们</div>
                <div className='line1'>from HUST</div>
                <div className='line2'>我们来自华中科技大学计算机学院，是一个软件工程制作小组</div>
                <div className='line3'>​我们制作的软件包含web界面和移动设备浏览界面，是一个AI视频处理工具</div>
            </div>
            <section className='figure'>
                {list.map(item =>
                    <Profile
                        key={item.name}
                        imgUrl={item.imgUrl}
                        name={item.name}
                        description={item.description} />)}
            </section>
        </div>
    )
}