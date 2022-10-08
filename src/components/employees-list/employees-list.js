import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.scss';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
const EmployeesList = ({data, remove, onToggle}) => {
  
   const res = 
   <TransitionGroup>
     {
    data.map(({id, ...elem}) => 
    <CSSTransition key={id} timeout={500} classNames='post'>
      <EmployeesListItem {...elem}  remove = {() => remove(id)} onToggle = {(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}/>
    </CSSTransition>
      )
    }
   </TransitionGroup>
     
   
    return (
        <ul className="app-list list-group">
          {res}         
        </ul>
    )
}

export default EmployeesList;