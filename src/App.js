import React from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'



function App() {
  const data = require('./bird.json');
  console.log(data)


  const columns = [{
    Header: 'finnish',
    headerStyle: {textAlign: 'left', font: 'bold 15px Arial, serif', background: '#92a8d1'},
    accessor: 'finnish', // String-based value accessors!
    filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value.charAt(0).toUpperCase() + filter.value.slice(1))
    //row[filter.id].startsWith(filter.value)
  },{
    Header: 'english',
    headerStyle: {textAlign: 'left', font: 'bold 15px Arial, serif', background: '#92a8d1'},
    accessor: 'english',
    filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value.charAt(0).toUpperCase() + filter.value.slice(1))
  }, {
    Header: 'swedish',
    headerStyle: {textAlign: 'left', font: 'bold 15px Arial, serif', background: '#92a8d1'},
    accessor: 'swedish',
    filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value.charAt(0).toUpperCase() + filter.value.slice(1))
  }, {
    Header: 'short',
    headerStyle: {textAlign: 'left', font: 'bold 15px Arial, serif', background: '#92a8d1'},
    accessor: 'short',
    filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value.charAt(0).toUpperCase() + filter.value.slice(1))
  }, {
    Header: 'latin',
    headerStyle: {textAlign: 'left', font: 'bold 15px Arial, serif', background: '#92a8d1'},
    accessor: 'latin',
    filterMethod: (filter, row) =>
    row[filter.id].startsWith(filter.value.charAt(0).toUpperCase() + filter.value.slice(1))
  }
];

  return (
    <div className="App">
      <ReactTable data={data}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.accessor]) === filter.value}
       columns={columns}
  />
    </div>
  );
}

export default App;
