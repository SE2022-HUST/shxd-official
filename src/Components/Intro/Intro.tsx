import React from 'react'

// 记得导入css
export default function Intro () {
    return (
        <div>
            <div>
                <a>开始！</a>
                <a>提供多种视频编辑渲染功能，弥补只能制作图片的不足、保护您的隐私！</a>
            </div>
            <section>
                // todo:    把这个改成list.map的形式（最好）实在不行就复制这个结构
                <div>
                    <img/>
                    <a>压缩</a>
                    <a>在这里压缩您的视频</a>
                </div>
            </section>
        </div>
    )
}