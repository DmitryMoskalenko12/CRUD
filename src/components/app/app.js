import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {Component} from 'react';

import './app.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:[
        {name:'John Smith', salary: 1000, increase: false, rise: false, id: 1},
        {name:'Katrine Bruster', salary: 700, increase: false, rise: false, id: 2},
        {name:'Arnold', salary: 500, increase: false, rise: false, id: 3},
        {name:'Her mayor', salary: 2000, increase: false, rise: false, id: 4}
      ],
      words : '',
      filter: 'all'
    }
    this.addNew = 5
    
  }


 onAdd = (name, salary) => {
  if (name.length !== 0 && salary.length !== 0) {
    let persone = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.addNew++
    }
  this.setState(({data}) => ({
    data: [...data, persone]
  }))
  }
  
}

  onDelete = (id)=>{
   this.setState(({data})=>({
    data: data.filter(elem => elem.id !== id)
   }))
  }

  onToggle = (id, prop) => {

    this.setState(({data})=>({
    data: data.map(elem =>{
      if (elem.id === id) {
        return {...elem, [prop]: !elem[prop]}
      }
        return elem
    })
  }))
  
  }
setWord = (data, item) => {
    if (item.length === 0) {
      return data
    }
    return data.filter(elem=>{
      return  elem.name.indexOf(item) > -1
    }) 
  }

 setFilter = (data, filter) => {
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
  onUpdateSearch = (term) => {
   this.setState({words: term})
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }
 
  render(){
    const {words, data, filter} = this.state
    const allEmployers = this.state.data.length;
    const getPrem = this.state.data.filter(elem => elem.rise).length;
    const result = this.setFilter(this.setWord(data, words), filter)
    return (
      <div className="app">
          <AppInfo allEmployers = {allEmployers} getPrem = {getPrem}/>
  
          <div className="search-panel">
              <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
              <AppFilter filter = {filter} onFilterChange = {this.onFilterChange}/>
          </div>
          
          <EmployeesList onToggle = {this.onToggle} data = {result} remove = {this.onDelete}/>
          <EmployeesAddForm add = {this.onAdd}/>
      </div>
    );
  }
 
}

export default App;
