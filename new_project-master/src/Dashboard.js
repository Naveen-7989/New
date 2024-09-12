import React from 'react'
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Revenuee from './Revenuee';

export default function Dashboard() {
  const [attendane,setAttendance]= useState(true);
  const [lead,setLead]= useState(false);
  const [expense,setExpense]= useState(false);
  const [Project,setProject]= useState(false);


  return (
    <div className='Dashboard pb-5'>
      <div className='text-center'>
      <div className='d-flex justify-content-center' >
        <h5 className='m-0 mt-3'><strong>Hello Sridhar,</strong></h5>
      </div>
      <p className='mt-1'>This is RS FIRE PROTECTION'S dashboard</p>
    </div>

    <div className='container'>
      <h3 className='my-4 mt-5 '><strong>Dashboard</strong></h3>
      <div className='row ' >
       <div className='col-lg-7 d-flex flex-wrap justify-content-around '>
          <div className='col-sm-6 col-12 p-1'>
            <div className='boderstyle rounded-4 border py-4 text-center d-flex w-100 flex-nowrap p-2'>
              <div className=' col-6'>
                 <h5><i className="fa-solid fa-house"></i>Projects</h5>
                 <p className='my-3'><span className='dashboardtext'>Completed</span>   150</p>
                 <p><span className='dashboardtext'>In funnel</span>   20</p>
              </div>
              <div className='col-6 '>
                <p className='text-danger'><strong>view more</strong></p>
                <p className='my-3'><span className='dashboardtext'>Running</span>   5</p>
                <button className='btn dashboardbutton border py-1 rounded-4 text-danger'>Add Project</button>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-12 p-1'>
          <div className='boderstyle rounded-4 border py-4 text-center d-flex flex-nowrap p-2'>
              <div className='col-6'>
                 <h5><i className="fa-solid fa-users"></i>Employees</h5>
                 <p className='my-3'><span className='dashboardtext'>Total</span>   150</p>
                 <p><span className='dashboardtext'>Absent</span>   20</p>
              </div>
              <div className='col-6 '>
                <p className='text-danger'><strong>view more</strong></p>
                <p className='my-3'><span className='dashboardtext'>Present</span>   5</p>
                <button className='btn dashboardbutton border py-1 rounded-4 text-danger'>Add Employee</button>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-12 p-1'>
          <div className='boderstyle rounded-4 border py-4 text-center d-flex flex-nowrap p-2'>
              <div className='col-6'>
                 <h5><i className="fa-solid fa-database"></i>CRM</h5>
                 <p className='my-3'><span className='dashboardtext'>Total Leads</span>   150</p>
                 <p><span className='dashboardtext'>Prospects</span>   20</p>
              </div>
              <div className='col-6 '>
                <p className='text-danger'><strong>view more</strong></p>
                <p className='my-3'><span className='dashboardtext'>Today</span>   5</p>
                <button className='btn dashboardbutton border py-1 rounded-4 text-danger'>Add Lead</button>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-12  p-1'>
          <div className='boderstyle rounded-4 border py-4 text-center d-flex flex-nowrap p-2'>
              <div className='col-6'>
                 <h5><i className="fa-solid fa-building-columns"></i>Accounts</h5>
                 <p className='my-3'><span className='dashboardtext'>balance</span>   150</p>
                 <p><span className='dashboardtext'>In funnel</span>   20</p>
              </div>
              <div className='col-6 '>
                <p className='text-danger'><strong>view more</strong></p>
                <p className='my-3'><span className='dashboardtext'>Running</span>   5</p>
                <button className='btn dashboardbutton border py-1 rounded-4 text-danger'>Add Projects</button>
              </div>
            </div>
          </div>
        
       </div>
     <Revenuee/>

      </div>


      <div className='border rounded-4 p-3 mt-3'>
        <div className='d-flex my-2 p-1 px-2 justify-content-between'>
            <h5 className='m-0'><strong>Attendane</strong></h5>
            <div className='d-flex'>
                <p className='p-1'>Aug</p>
                <p className='p-1'>Sep</p>
                <p className='p-1'>Oct</p>
                <p className='p-1'>Nov</p>
            </div> 
        </div>

        <div className='container'>
            <table>
            <thead>
            <tr>

                <th></th>
                <th>1</th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>
            Sravan
            </td>
                <td className='d-flex justify-content-center align-items-center'>
                <div className="circle"></div>
                </td>
            
            </tr>
            <tr>
                <td>
                Naveen
                </td>
                <td className='d-flex justify-content-center align-items-center'>
                    <div className="circle"></div>
                </td>
            
            </tr>
            <tr>
            <td>
            Pream
            </td>
            <td className='d-flex justify-content-center align-items-center'>
                <div className="circle"></div>
            </td>

            </tr>
            </tbody>

            </table>
        </div>
      </div>
    </div>



    <div className='container'>
      <h4 className='my-4 mt-5 px-3'><strong>Quick Session</strong></h4>
      <div className='overflow-scroll  px-3'>
      <ul className=' list-unstyled row flex-nowrap   text-center'>
        <Link to={"attendance"} className={`nav-link p-2 mx-2 cursor-pointer text-nowrap fit-content ${attendane?"outline2":""}`} onClick={()=>{setAttendance(true);setLead(false);setExpense(false);setProject(false)}}>Mark attendane</Link>
        <Link to={"crm"} className={`nav-link p-2 mx-2 cursor-pointer  text-nowrap fit-content  ${lead?"outline2":""}`} onClick={()=>{setAttendance(false);setLead(true);setExpense(false);setProject(false)}}>Add Lead to CRM</Link>
        <Link to={"expense"} className={`nav-link p-2 mx-2 cursor-pointer text-nowrap fit-content  ${expense?"outline2":""}`} onClick={()=>{setAttendance(false);setLead(false);setExpense(true);setProject(false)}}>Add Expense</Link>
        <Link to={"Project"} className={`nav-link p-2 mx-2 cursor-pointer text-nowrap fit-content ${Project?"outline2":""}`} onClick={()=>{setAttendance(false);setLead(false);setExpense(false);setProject(true)}}>Add Project</Link>
      </ul>
         <Outlet/>
      </div>
    </div>
    </div>
  )
}
