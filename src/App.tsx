import React from 'react';

import Table from './components/Table/Table';

import './App.css';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (item: string, record: string) => {
      return (
        <div>
          <a href={`${record}`}>{item}</a>
        </div>
      );
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

function App() {
  return (
    <div className='App'>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default App;
