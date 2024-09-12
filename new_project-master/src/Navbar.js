import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
   const [home,setHome]= useState(true);
   const [projects,setProjects]= useState(false);
   const [team,setTeam]= useState(false);
   const [accounts,setAccounts]= useState(false);
   const [crm,setCrm]=useState(false);

    
  return (
    <div className='Navbar container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand bg-danger rounded-3 py-0 px-2" href="#"><img src=''/>Rs Fire</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around align-items-start flex-column-reverse flex-lg-row" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-1 ">
                    <Link to={"Dashboard"} className={`nav-link ${home?"outline":""}`} onClick={()=>{setHome(true);setProjects(false);setTeam(false);setAccounts(false);setCrm(false)}} aria-current="page" href="#"><i className="fa-solid fa-house"></i>Home</Link>
                    </li>
                    <li className="nav-item mx-1">
                    <Link to={'Projects'} className={`nav-link ${projects?"outline":""}`} onClick={()=>{setHome(false);setProjects(true);setTeam(false);setAccounts(false);setCrm(false)}}  href="#"> <i className="fa-solid fa-file"></i>Projects</Link>
                    </li>
                    <li className="nav-item mx-1">
                    <Link to={'Team'} className={`nav-link ${team?"outline":""}`} onClick={()=>{setHome(false);setProjects(false);setTeam(true);setAccounts(false);setCrm(false)}}  href="#"><i className="fa-solid fa-users"></i>Team</Link>
                    </li>
                    <li className="nav-item mx-1">
                    <Link to={'Accounts'} className={`nav-link ${accounts?"outline":""}`} onClick={()=>{setHome(false);setProjects(false);setTeam(false);setAccounts(true);setCrm(false)}}  href="#"><i className="fa-solid fa-building-columns"></i>Accounts</Link>
                    </li>
                    <li className="nav-item mx-1">
                    <Link to={'Crm'} className={`nav-link ${crm?"outline":""}`} onClick={()=>{setHome(false);setProjects(false);setTeam(false);setAccounts(false);setCrm(true)}}  href="#"><i className="fa-solid fa-database"></i>CRM</Link>
                    </li>
                </ul>
                <div>
                  <button className='btn btn-sm rounded-4 bg-black text-white'>hii</button>
                </div>
                </div>
               
  </div>
</nav>
    </div>
  )
}
