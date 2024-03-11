import React from 'react';
import Button from '@mui/material/Button';

function EmployeeDelete({ employee, onDeleteEmployee, onCloseModal }) {
    const handleDelete = () => {
        onDeleteEmployee(employee); // Вызов функции удаления сотрудника
        onCloseModal();
    };

    return (
        <div>
            <h2>Вы уверены, что хотите удалить {employee.name}?</h2>
            <Button variant="contained" color="primary" onClick={handleDelete}>
                Удалить
            </Button>
            <Button variant="contained" color="secondary" onClick={onCloseModal}>
                Отмена
            </Button>
        </div>
    );
}

export default EmployeeDelete;
