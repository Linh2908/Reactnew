import React, { useCallback, useState } from 'react';
import './App.css';
import StudentInfo from './Component/StudentInfo';


function App() {

  const [studentList, setStudentList] = useState([
      {
        uuid: 1,
        fullName: 'Nguyen Van A',
        points: 10
      },
      {
        uuid: 2,
        fullName: 'Le Van B',
        points: 8
      },
      {
        uuid: 3,
        fullName: 'Pham Thi C',
        points: 7
      },
      {
        uuid:6,
        fullName: 'Tran Van D',
        points: 6
      },
      {
        uuid: 5,
        fullName: 'Ta Thi Lang',
        points: 1
      },
    ]);

    const [student, setStudent] = useState({
      uuid : '',
      fullName : '',
      points : 0,
    });


    const hanldeDeleteStudent = useCallback((id) => {
      const newList = studentList.filter(student => student.uuid !== id);
       
      setStudentList(newList)
      
  }, [studentList]);


    const handleChange = (e) => {
      setStudent(prev => ({
        ...prev,
        [e.target.name] : e.target.value,
      }))
    }

    const handleAddStudent = () => {

      const isID = studentList.find(_student => _student.uuid === student.uuid);
      if(isID) {
        alert("Co nguoi cung id roi");
      }else{
        setStudentList(prev => [
          ...prev,
          student
        ]);

        setStudent({
          uuid :"",
          fullName : '',
          points :'',
        });
      }

      
    }

    const {uuid, fullName, points} = student;
  return (
    <div className="App">
      <input value={uuid} name='uuid' onChange={(e) => handleChange(e)} placeholder='Nhap uuid'/>
      <input value={fullName} name='fullName' onChange={(e) => handleChange(e)} placeholder='Nhap fullName'/>
      <input value={points} name='points' type={'number'} onChange={(e) => handleChange(e)} placeholder='Nhap points'/>
      <button onClick={handleAddStudent}>Add</button>
      <br></br>
     <table>
       <thead>
         <tr>
         <th>ID</th>
         <th>Name</th>
         <th>Points</th>
         <th>Actions</th>
         </tr>
       </thead>
       <tbody>
          <StudentInfo studentList={studentList} onDelete={hanldeDeleteStudent} />
       </tbody>
     </table>
    </div>
  );
}

export default App;
