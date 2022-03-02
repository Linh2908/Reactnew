import React, { memo } from 'react';

function StudentInfo ({studentList, onDelete}) {

    console.log('re-render');
    return (
        <>
           {
            studentList.map(student => (
             <tr key={student.uuid}>
               <td>{student.uuid}</td>
               <td>{student.fullName}</td>
               <td>{student.points}</td>
               <td><button onClick={() =>onDelete(student.uuid)}>Delete</button></td>
             </tr>
           ))
         }
        </>
    );
}

export default memo(StudentInfo);
