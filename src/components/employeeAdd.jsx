import React from 'react';
import EmployeeForm from './employeeForm';

function employeeAdd({ onAddEmployee }) {
    return (
        <div>
       
            <EmployeeForm onAddEmployee={onAddEmployee} />
        </div>
    );
}

export default employeeAdd;
