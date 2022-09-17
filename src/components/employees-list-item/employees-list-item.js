import './employees-list-item.css';

const EmployeesListItem = (props) =>{
 
    const {name, salary, remove, increase, rise, onToggle} = props;
   
    let styleClass = 'list-group-item d-flex justify-content-between';
    if (increase) {
      styleClass  +=' increase';
    }

    if (rise) {
      styleClass +=' like';
    }
    return (
      <li className={styleClass}>
          <span onClick={onToggle} className="list-group-item-label" data-toggle="rise">{name}</span>
          <input type="text" className="list-group-item-input" defaultValue={`${salary} $`}/>
          <div className='d-flex justify-content-center align-items-center'>
              <button type="button"
                  data-toggle="increase"
                  className="btn-cookie btn-sm "
                  onClick={onToggle}>
                  <i className="fas fa-cookie"></i>
                 
              </button>

              <button onClick={remove} type="button"
                      className="btn-trash btn-sm ">
                  <i className="fas fa-trash"></i>
              </button>
              <i className="fas fa-star"></i>
          </div>
      </li>
  )

    
}

export default EmployeesListItem;