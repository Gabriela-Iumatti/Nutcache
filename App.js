import React from 'react';
import EmployeeCard from 'components/Employee/Card/Card';

const App = () => {
{/* data goes to Card.js */}
  const employee = {
    "id": 1,
    "name": "",
    "birthDate": 10/11/1998,
    "gendre": "",
    "e-mail": "John8d_@callmail.com",
    "CPF": 12345678901,
    "startDate": 11/2001,
    "team": "Tiger" [
      {
        "id": 1,
        "comment": "test"
      }
    ]
  };


  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      {/* Const´s atribute*/}
      <EmployeeCard employee={employee} />
    </div>
  );
}

export default App;