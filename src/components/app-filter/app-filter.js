import "./app-filter.css";

const AppFilter = (props) => {
const buttons = [
  {
    filter: 'all',
    name: 'Все сотрудники',
  },
  {
    filter: 'rise',
    name: 'На повышение',
  },
  {
    filter: 'salary',
    name: 'З/П больше 1000$', 
  }
  
]
const result = buttons.map((elem) => {
const active = props.filter === elem.filter ? 'btn btn-light' : 'btn btn-outline-light';
 return( 
    <button key={elem.filter} onClick={ () => props.onFilterChange(elem.filter)} type="button"
    className={active}>
    {elem.name}
    </button>
) 
         
       
})

    return (
        <div className="btn-group">
         {result}
        </div>
    )
}

export default AppFilter;