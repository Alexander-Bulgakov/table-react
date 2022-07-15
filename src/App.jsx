import React, {useState} from 'react';
import Table from './Table';
import './App.css';

const App = () => {

const [paginationStep, setPaginationStep] = useState(20);

const handleBlur = (e) => {
  setPaginationStep(e.target.value);
}

const onSort = (sortingCol) => {
  console.log(sortingCol);
}

  return(
    <div className="container">
      <h1>Hello world</h1>
      <header>
        <input type="number" onBlur={handleBlur}/>
      </header>
      <Table 
        paginationStep={paginationStep}
        onSort={onSort}
        />
    </div>
  )  
}

export default App;