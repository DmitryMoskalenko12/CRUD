import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {useState, useMemo} from 'react';


import './app.scss';

const App = () => {
  const [data, setData] = useState([
    {name:'John Smith', salary: 1000, increase: false, rise: false, id: 1},
    {name:'Katrine Bruster', salary: 700, increase: false, rise: false, id: 2},
    {name:'Arnold', salary: 500, increase: false, rise: false, id: 3},
    {name:'Her mayor', salary: 2000, increase: false, rise: false, id: 4}
  ]);
  const [words, setWords] = useState('');
  const [filter, setFilter] = useState('all');
  

const onAdd = (name, salary) => {
if (name.length !== 0 && salary.length !== 0) {
  const persone = {
    name,
    salary,
    increase: false,
    rise: false,
    id: Date.now() 
  }
  
   setData([...data, persone]) 
}}

const onDelete = (id)=>{
   setData( data.filter(elem => elem.id !== id))
}

const onToggle = (id, prop) => {
  setData(data.map(elem =>{
    if (elem.id === id) {
      return {...elem, [prop]: !elem[prop]}
    }
      return elem
  }))
}

const setWord = (data, item) => {
if (item.length === 0) {
  return data
}
return data.filter(elem=>{
  return  elem.name.indexOf(item) > -1
}) 
}

const setFilters = (data, filter) => {
  console.log('render')
    switch (filter) {
      case 'all':
        return data.filter(elem => elem)
      case 'rise':
        return data.filter(elem => elem.rise) 
      case 'salary':
        return data.filter(elem => elem.salary >= 1000)    
      default:
        break;
    }

}

const onUpdateSearch =(term) => {
setWords(term)
}

const onFilterChange = (filter) => {
  setFilter(filter)
}

  const allEmployers = data.length;
  const getPrem = data.filter(elem => elem.rise).length;
  const result = useMemo(() => {
    return setFilters(setWord(data, words), filter);
  },[filter, words, data])
  
  return (
    <div className="app">
        <AppInfo allEmployers = {allEmployers} getPrem = {getPrem}/>

        <div className="search-panel">
            <SearchPanel onUpdateSearch = {onUpdateSearch}/>
            <AppFilter filter = {filter} onFilterChange = {onFilterChange}/>
        </div>
        
        <EmployeesList onToggle = {onToggle} data = {result} remove = {onDelete}/>
        <EmployeesAddForm add = {onAdd}/>
    </div>
  )
}
 
export default App;
