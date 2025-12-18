import { useState } from 'react';
import StudentList from './components/StudentList';
import NewStudentForm from './components/NewStudentForm';

function App() {
    const [studentData, setStudentData] = useState([
        {
            id: 1,
            nameData: 'Ada',
            emailData: 'ada@dev.org',
            isPresentData: false,
        },
        {
            id: 2,
            nameData: 'Soo-ah',
            emailData: 'sooah@dev.org',
            isPresentData: false,
        },
        {
            id: 3,
            nameData: 'Chrissy',
            emailData: 'chrissy@dev.org',
            isPresentData: true,
        },
    ]);

    const toggleStudentPresence = (studentId) => {
        const students = studentData.map(student => {
            if (student.id === studentId) {
                return { ...student, isPresentData: !student.isPresentData };
            } else {
                return student;
            }
        });

        setStudentData(students);
    };

    const addStudentData = (newStudent) => {
      //logic to generate the next valid student ID
      const nextId = Math.max(0, ...studentData.map((student) => student.id)) + 1;

      const newStudentList = [...studentData];
      
      newStudentList.push({
        id: nextId,
        nameData: newStudent.nameData,
        emailData: newStudent.emailData,
        isPresentData: false,
      });
      setStudentData(newStudentList)
    }

    return (
        <main>
            <h1>Attendance</h1>
            <StudentList
                students={studentData}
                onStudentPresenceToggle={toggleStudentPresence}
            ></StudentList>
            <NewStudentForm onStudentAdd={addStudentData}/>
        </main>
    );
}

export default App;
