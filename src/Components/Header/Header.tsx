import React from 'react';
import './Header.css';

export default function Header () {
    return (
        <div className='header'>
            <div className='headerImg'>
                <img src={require('../../Image/circle2.png')} className='headerCon'/>
            </div>
            <section className='textContainer'>
                <div className='text'>主页</div>
                <div className='text'>功能</div>
                <div className='text'>联络我们</div>
                <div className='text'>相关</div>
            </section>
        </div>
    )
}