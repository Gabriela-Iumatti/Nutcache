import React, { useState } from 'react';
import useApi from 'components/utils/useApi';
import EmployeeModal from '../Modal/Modal';
import EmployeeCard from '../Card/Card';

import './List.css';

const employeeList = ({ loading, error, employees, refetch }) => {
  const [employeeId, setEmployeeId] = useState(null);
  const [deleteEmployee, deleteEmployeeInfo] = useApi({
    method: 'DELETE',
  });


  if (error) {
    return <div>Something is wrong, please try again</div>;
  }
  if (employees === null || deleteEmployeeInfo.loading) {
    return <div>Carrying...</div>;
  }

  if (employees.length === 0) {
    return <div>No results found</div>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard
          employee={employee}
          onClickComments={() => setEmployeeId(employee.id)}
          onClickDelete={async () => {
            await deleteEmployee({
              url: `/employees/${employee.id}`,
            });
            refetch();
          }}
        />
      ))}
      {loading && <div>Carrying...</div>}
      {employeeId && (
        <EmployeeModal
          employeeId={employeeId}
          onClickClose={() => setEmployeeId(null)}
        />
      )}
    </div>
  );
};

export default employeeList;