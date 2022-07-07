import React, { ReactElement } from 'react';

import './index.css';

interface IDataSource {
  dataSource: Array<{
    key: string;
    name: string;
    age: number;
    address: string;
  }>;
}

interface IColumns {
  columns: Array<{
    title: string;
    dataIndex: string;
    key: string;
    render?: (item: string, record: string) => ReactElement;
  }>;
}

const Table: React.FC<IDataSource & IColumns> = (
  props: IDataSource & IColumns
): ReactElement => {
  const { dataSource, columns } = props;

  return (
    <div className='table'>
      {columns.map((item) => {
        return (
          <div key={item.key}>
            <div>{item.title}</div>
            <div>
              {dataSource.map((it) => {
                return (
                  <div key={it.key}>
                    {item.render
                      ? item.render(it.name, it.key)
                      : it[item.dataIndex as keyof typeof it]}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
