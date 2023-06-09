import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ContextData from '../ContextData';

import Nav from './Nav';


export default function Table() {
    const DataContext=useContext(ContextData);
   const navigate=useNavigate();
  return (
    <>
    <Nav />
    <div className='flex2'>
    <h1>Student Details</h1> 
    <button onClick={()=>{navigate('/newstudent')}}>Add New Student</button>
    </div>
          <table className='table'>
               <tbody>
        <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Course</th>
        <th>Batch</th>
        <th>Change</th>
        </tr>
       
            {DataContext?.entries?.map((item,index)=>(
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.course}</td>
                    <td>{item.batch}</td>
                    <td>
                        <Link to='/editStudent' state={{data:index}}>Edit</Link>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>

    </>
  )
}