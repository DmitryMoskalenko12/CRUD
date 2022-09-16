import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data}) => {
   const res = data.map(({id, ...elem}) => {
   return <EmployeesListItem {...elem} key={id} />
    })
    return (
        <ul className="app-list list-group">
            {res}
        </ul>
    )
}

export default EmployeesList;