import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, remove, onToggle}) => {
   const res = data.map(({id, ...elem}) => {
   return <EmployeesListItem {...elem} key={id} remove = {() => remove(id)} onToggle = {(e)=> onToggle(id, e.currentTarget.getAttribute('data-toggle'))}/>
    })
    return (
        <ul className="app-list list-group">
            {res}
        </ul>
    )
}

export default EmployeesList;