import React, { PureComponent } from "react";
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { Translate, LocalizeContextProps, withLocalize } from "react-localize-redux";
import { completeTodo, removeTodo, addTodo } from '../../../actions';
import { Todo, IRootState } from "../../../models";
import { TodoList } from "./list";
import { AddTodo } from "./addtodo";



interface IProps extends LocalizeContextProps {
    todos: Todo[];
    removeTodo: (todo: Todo) => void;
    addTodo: (todo: Todo) => void;
    completeTodo: (todo: Todo) => void;
}

const mapStateToProps = (state: IRootState) => ({
    todos: state.application.todo.todos,
});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
    removeTodo: (todo: Todo) => dispatch(removeTodo(todo)),
    addTodo: (todo: Todo) => dispatch(addTodo(todo)),
    completeTodo: (todo: Todo) => dispatch(completeTodo(todo)),
});

class TodoContainer extends PureComponent<IProps> {

  public render() {
    if (!this.props.todos){
      return "Loading...";
    }
    return (
        <div>
          <h1><Translate id="todos"/></h1>
            <AddTodo addTodo={(text) => this.props.addTodo({text: text, completed: false})}/>
            <TodoList todos={this.props.todos} removeTodo={this.props.removeTodo} completeTodo={this.props.completeTodo}/>
        </div>
    );
  }
};

export const Todos = connect(
    mapStateToProps,
    mapDispatchToProps)(withLocalize(TodoContainer));
