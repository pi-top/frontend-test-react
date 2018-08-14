import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controllers from '../components/Controllers';
import AddTodoForm from '../components/AddTodoForm';
import todoActions from '../redux/todos/actions';

const { resetTodos, addTodo } = todoActions;

class ControllersContainer extends Component {

  state = {
    visibleForm: false,
  }

  setFormVisible = (visible) => {
    this.setState({
      visibleForm: visible,
    });
  };

  handleSubmit = (form) => {
   form.validateFields((err, values) => {
      if (err) return;
      form.resetFields();
      this.setFormVisible(false);
      this.props.addTodo(values);
    })
  };  

  render() {
    return (
      <div>
        <Controllers
          setFormVisible={this.setFormVisible}
          resetTodos={this.props.resetTodos}
        />
        <AddTodoForm 
          visible={this.state.visibleForm}
          onCancel={() => this.setFormVisible(false)}
          onSubmit={this.handleSubmit}
          onChangeDate={(value, dateStr) => console.log("Changed date: ", value, dateStr)}
          onConfirmDate={(value) => console.log("Confirmed date: ", value)}
        />
      </div>
    );
  };
}

export default connect(
  null,
  { resetTodos, addTodo }
)(ControllersContainer);