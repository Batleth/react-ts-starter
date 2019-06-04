import React, { PureComponent, ChangeEvent } from "react";
import { LocalizeContextProps, Translate, withLocalize } from "react-localize-redux";


interface IProps extends LocalizeContextProps {
    addTodo: (text: string) => void;
}
interface IState {
    text: string;
}
class AddTodoContainer extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {text: ""};
}

  public render() {
    if (!this.props){
      return "Loading...";
    }
    return (
        <div>
        <input type="text" value={this.state.text} onChange={(event: ChangeEvent<HTMLInputElement>) => this.setState({text: event.currentTarget.value})}></input><br/>
        <button onClick={() => this.props.addTodo(this.state.text)} disabled={this.state.text === ""}><Translate id="button.add"/></button>
        </div>
    );
  }
};

export const AddTodo = withLocalize(AddTodoContainer);
