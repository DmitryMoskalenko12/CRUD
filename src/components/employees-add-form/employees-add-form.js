import './employees-add-form.scss';
import {useState} from 'react';

 const  EmployeesAddForm = (props) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

 const onValueChange = (e) =>{
  setName(e.target.value);
  setSalary(e.target.value);
  }

 const onSubmit = (e) =>{
    e.preventDefault();
    props.add(name, salary);
    setName('');
    setSalary('');
  }

  
    return (
      <div className="app-add-form">
          <h3>Добавьте нового сотрудника</h3>
          <form onSubmit={onSubmit}
              className="add-form d-flex">
              <input value={name} name="name" onChange={onValueChange} type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?" />
              <input value={salary} name="salary" onChange={onValueChange} type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?" />

              <button type="submit"
                      className="btn btn-outline-light">Добавить</button>
          </form>
      </div>
  )
}


export default EmployeesAddForm;