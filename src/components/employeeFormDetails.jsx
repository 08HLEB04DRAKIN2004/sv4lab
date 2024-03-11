import React from 'react';
import Popup from './Popup';

function EmployeeDetails({ employee, isDetailsVisible, handleCloseDetails }) {
  return (
    <Popup isOpen={isDetailsVisible} onClose={handleCloseDetails}>
      <div>
        <h2>Детали сотрудника</h2>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Имя:</strong> {employee.name}</p>
        <p><strong>Должность:</strong> {employee.position}</p>
        <p><strong>Допуск:</strong> {employee.access}</p>
        <p><strong>Дата рождения:</strong> {employee.birthdate}</p>
        <p><strong>Телефон:</strong> {employee.phone}</p>
        <p><strong>Адрес:</strong> {employee.address}</p>
      </div>
    </Popup>
  );
}

export default EmployeeDetails;
