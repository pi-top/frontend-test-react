import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Table, Switch } from 'antd';

const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'Title',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Created Date',
  dataIndex: 'createdAt',
  key: 'createdAt',
  width: 240,
  render: (text, record) => moment(record.createdAt).format('MMM Do YYYY hh:mm:ss A'),
  sorter: (a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateA.getTime() - dateB.getTime();
  }
}, {
  title: 'Priority',
  dataIndex: 'priority',
  key: 'priority',
  width: 120,
  sorter: (a, b) => a.priority - b.priority
}, {
  title: 'IsDone',
  dataIndex: 'isDone',
  key: 'isDone',
  width: 120,
  render: (text, record) => (
    <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked={record.isDone} disabled={true} />
  ),
}, {
  title: 'Action',
  key: 'action',
  width: 80,
  render: (text, record) => <Link to={'./todo/' + record.id}>Edit</Link>
}];

const TodosList = ({
  data,
  loading,
}) => {
  return (
    <div>
      <h3 style={{ marginBottom: 16, textAlign: 'center' }}>Todos List</h3>
      <Table
        loading={loading}
        rowKey={ record => record.id }
        dataSource={data}
        columns={columns}
      />            
    </div>
  );
};

export default TodosList;