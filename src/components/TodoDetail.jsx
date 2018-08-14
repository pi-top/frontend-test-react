import React from 'react';
import moment from 'moment';
import { Card, List, Switch } from 'antd';

const TodoDetail = ({
  data,
  updateTodo,
}) => {
  if (!data) return null;
  return (
    <div>
      <Card title="Todo Details" bordered={false}>
        <List itemLayout="horizontal">
          <List.Item>
            <List.Item.Meta title="ID" />
            <div>{data.id}</div>
          </List.Item>
          <List.Item>
            <List.Item.Meta title="Title" />
            <div>{data.title}</div>
          </List.Item>
          <List.Item>
            <List.Item.Meta title="Created Date" />
            <div>{moment(data.createdAt).format('MMM Do YYYY hh:mm:ss A')}</div>
          </List.Item>

          <List.Item>
            <List.Item.Meta title="Priority" />
            <div>{data.priority}</div>
          </List.Item>
          <List.Item>
            <List.Item.Meta title="IsDone(Editable)" />
            <Switch 
              checkedChildren="Yes"
              unCheckedChildren="No"
              defaultChecked={data.isDone}
              onChange={(checked) => updateTodo({id: data.id, isDone: checked})}
            />
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default TodoDetail;