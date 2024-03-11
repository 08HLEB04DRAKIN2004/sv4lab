import React from 'react';
import EmployeeEditForm from './employeeEditForm'; // Импорт нового компонента для формы редактирования сотрудника

function EmployeeEdit({ employeeData, onUpdateEmployee, onCloseModal }) {
    // Функция для закрытия модального окна редактирования сотрудника
    const handleClose = () => {
        onCloseModal();
    };

    return (
        <div>
         
            <EmployeeEditForm
                employeeData={employeeData}
                onUpdateEmployee={onUpdateEmployee}
                onCloseModal={handleClose} // Передаем функцию для закрытия модального окна в компонент формы редактирования
            />
        </div>
    );
}

export default EmployeeEdit;
