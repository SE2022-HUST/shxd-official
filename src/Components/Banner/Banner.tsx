import React from 'react'
import './Banner.css'

export default function Banner() {
  return (
    <div className="banner">
      <div className="ban_content">
        <div className="ban_header1">Meet SE2022</div>
        <div className="ban_header2">-HUST</div>
        <div className="ban_text">Critically Acclaimed Film Editor</div>
        <div className="repo-link">
          {'< '}
          <a href="https://github.com/SE2022-HUST/shxd-client">Github Repo</a>
          {' >'}
        </div>
      </div>
    </div>
  )
}
// <img src={require('../../Image/bkg.jpg')} className='ban_bkg'/>
