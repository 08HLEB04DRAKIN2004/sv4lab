import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';



import {
   employeeAccessController,
   departamentController,
   hazardousJobController,
   positionController
} from './Controllers/index.js';
import {employeeAccessValidation,
    departmentValidation,
    positionValidation,
    hazardousJobValidation} from './validations.js'
mongoose
    .connect('mongodb+srv://gdrakin:951753hdn@svz.phnc4ls.mongodb.net/?retryWrites=true&w=majority&appName=SVZ')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

const app = express();
app.use(express.json());
app.use(cors());

//employee access
app.post('/employeeAccess/create', employeeAccessValidation,  employeeAccessController.create);
app.delete('/employeeAccess/:id/delete',employeeAccessController.remove);
app.patch('/employeeAccess/:id/update',employeeAccessValidation, employeeAccessController.update);
app.get('/employeeAccess/:id', employeeAccessController.getOne);
app.get('/employeeAccess', employeeAccessController.getAll);

//department
app.post('/department/create', departmentValidation, departamentController.create);
app.delete('/department/:id/delete', departamentController.remove);
app.patch('/department/:id/update',departmentValidation, departamentController.update);
app.get('/department/:id', departamentController.getOne);
app.get('/department', departamentController.getAll);

//hazardous job
app.post('/hazardousJobs/create', hazardousJobValidation ,hazardousJobController.create);
app.delete('/hazardousJobs/:id/delete',  hazardousJobController.remove);
app.patch('/hazardousJobs/:id/update',hazardousJobValidation, hazardousJobController.update);
app.get('/hazardousJobs/:id', hazardousJobController.getOne);
app.get('/hazardousJobs', hazardousJobController.getAll);

//position
app.post('/positions/create',positionValidation, positionController.create);
app.delete('/positions/:id/delete',  positionController.remove);
app.patch('/positions/:id/update', positionValidation, positionController.update);
app.get('/positions/:id', positionController.getOne);
app.get('/positions', positionController.getAll);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK ');
});

