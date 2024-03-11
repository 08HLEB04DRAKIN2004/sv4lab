import React, { useState, useEffect } from 'react';
import { Button, TextField, Box } from '@mui/material'; // Импорт компонентов из Material-UI

function EmployeeEditForm({ employeeData, onUpdateEmployee, onCloseModal }) {
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        position: '',
        access: '',
        birthdate: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        if (employeeData) {
            setEmployee(employeeData);
        }
    }, [employeeData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateEmployee(employee); // Здесь нужно использовать текущее значение employee
        onCloseModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    return (
        <div className="modal"> {/* Обертка для модального окна */}
            <div className="modal-content">
                <form className="modal-form" onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Должность"
                        name="position"
                        value={employee.position}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Допуск"
                        name="access"
                        value={employee.access}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="День рождения"
                        name="birthdate"
                        value={employee.birthdate}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Телефон"
                        name="phone"
                        value={employee.phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <TextField
                        label="Адрес"
                        name="address"
                        value={employee.address}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="primary" type="submit">
                            Сохранить
                        </Button>
                        <Button variant="contained" onClick={onCloseModal}>
                            Отмена
                        </Button>
                    </Box>
                </form>
            </div>
        </div>
    );
}

export default EmployeeEditForm;
