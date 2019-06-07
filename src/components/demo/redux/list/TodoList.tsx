import React, { PureComponent } from "react";
import { map } from 'lodash';
import { Todo } from "../../../../models";
import { LocalizeContextProps, Translate, withLocalize } from "react-localize-redux";


const complete = {
    textDecoration: "line-through"
}
const incomplete = {
    textDecoration: "none"
}
interface IProps extends LocalizeContextProps {
    todos: Todo[];
    removeTodo: (todo: Todo) => void;
    completeTodo: (todo: Todo) => void;
}

class TodoListComponent extends PureComponent<IProps> {
  public render() {
    if (!this.props.todos){
      return "Loading...";
    }
    return (
        <ul>
            {
                map( this.props.todos, (todo, index) => {
                    return (
                        <li key={index}>
                            <p style={todo.completed ? complete: incomplete}>{todo.text}</p>
                            <button disabled={todo.completed} onClick={() => this.props.completeTodo(todo)}><Translate id="button.complete"/></button>
                            <button onClick={() => this.props.removeTodo(todo)}><Translate id="button.remove"/></button>
                        </li>
                    )
                })
            }
        </ul>
    );
  }
};

export const TodoList = withLocalize(TodoListComponent);
