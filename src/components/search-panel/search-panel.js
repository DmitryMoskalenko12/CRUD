import './search-panel.scss';
import {useState} from 'react'
const SearchPanel = (props) => {
  const [term, setTerm] = useState('');
  
  const onStateChange = (e) =>{
   const term = e.target.value;
   setTerm(term)
   props.onUpdateSearch(term)
  }
  
    return (
      <input onChange={onStateChange} type="text"
              className="form-control search-input"
              placeholder="Найти сотрудника"
              value={term}/>
  )
  }
    


export default SearchPanel;