import React from 'react'
import { Link } from 'react-router-dom'
import EMICalculator from '../components/emiCalculator'

export default function LeftMenu() {
    return (
        <div className="leftMenu" >

        <div className="nav flex-column nav-pills collapse-nav" style={{padding:'10px'}}id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <ul className="sidebar-nav">
            <li>
              <a className="nav-link" href="/"> <h5 className="list-name" style={{"fontWeight":"bold"}}>
                                <i className="fas fa-id-card" style={{"fontSize":"12px"}}></i>
                            Applications</h5></a>
            </li>
            </ul>

    <EMICalculator />
      </div>
      </div>
    )
}
