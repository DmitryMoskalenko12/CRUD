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
      ]
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
  render(){
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data} remove = {this.onDelete}/>
          <EmployeesAddForm add = {this.onAdd}/>
      </div>
    );
  }
 
}

export default App;
