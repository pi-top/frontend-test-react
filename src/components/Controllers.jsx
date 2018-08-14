import React from 'react';
import { Button, List } from 'antd';

const Controllers = ({
  resetTodos,
  addTodo,
  setFormVisible,
}) => (
    <div>
      <h3 style={{ margin: '16px 0', textAlign: 'center'}}>Controllers</h3>
      <List
        size='small'
        itemLayout='horizontal'
      >
        <List.Item>
          <List.Item.Meta
            title='Click to reset all current todos'
          />
          <Button type='primary' style={{ width: '200px' }} onClick={resetTodos}>Reset ToDos</Button>
        </List.Item>

        <List.Item>
          <List.Item.Meta
            title='Click to add a new Todo'
          />
          <Button type='primary' style={{ width: '200px' }} onClick={() => setFormVisible(true)}>Add New ToDo</Button>
        </List.Item>
      </List>
    </div>
  );

export default Controllers;