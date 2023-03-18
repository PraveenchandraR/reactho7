import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteStudentDetailAction } from '../Redux/Actions/StudentAction';
import Nav from './Nav';



export default function StudentList() {
   const navigation=useNavigate();
   const dispatch = useDispatch();
   const studentList = useSelector(
    (state) => state?.StudentReducer?.StudentList
  );
  const handleAddNewStudent = () => {
    console.log("addStudent is called");
    // navigation('/addStudent');
    navigation('/newstudent')
  };
  const handleEditStudent = (item) => {
    navigation(`/editStudent/${item.id}`, { state: item });
  };
  const handleDeleteStudent = (id) => {
    console.log("handleDeleteStudent function called")
    dispatch(deleteStudentDetailAction(id));
  };
  return (
    <>
    <Nav />
    <div className='flex2'>
    <h1>Student Details</h1> 
    <button onClick={handleAddNewStudent}>Add New Student</button>
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
    
        {studentList?.map((item) => {
              return (
                <>
                <tr key={item.id}>
                  <td>{item?.name}</td>
                  <td>{item?.age}</td>
                  <td>{item?.course}</td>
                  <td>{item?.batch}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{
                          marginRight: 10,
                        }}
                        onClick={ handleEditStudent}
                      >
                        Edit
                      </button>
                      <button onClick={handleDeleteStudent(item.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                </>
              );
            })}
        </tbody>
    </table>

    </>
  )
}