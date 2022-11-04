import React from 'react'

// 记得导入css
export default function About () {
    return (
        <div className='content'>
            <div>
                <div className='start'>关于我们</div>
                <div className='line1'>from HUST</div>
            </div>
            <section>
                // todo:    仍然使用map复制这个结构
                <div>
                    <img/>
                    <div>
                        <a>name</a>
                        <a>job</a>
                    </div>
                </div>
            </section>
        </div>
    )
}