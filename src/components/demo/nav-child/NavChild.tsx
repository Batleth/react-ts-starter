import React, { PureComponent } from "react";
import { RouteComponentProps } from 'react-router';

interface IParams {
  requiredParam: string;
}
interface IProps extends RouteComponentProps<IParams> {};

interface IState {
  internalValue: string;
}
class NavChildComponent extends PureComponent<IProps, IState> {
  // Example for using a constructor, it uneccessary if no intitialization is made
  constructor(props: IProps) {
    super(props);
    this.state = {internalValue: props.match.params.requiredParam}
  }

  public render() {
    if (!this.props){
      return "Loading...";
    }
    const {pathname, hash, search } = this.props.location;
    const { requiredParam } = this.props.match.params;

    return (
        <div>
          <p>Current Path: {pathname}<br/> Hash: {hash}<br/> Search: {search}<br/> Param: {requiredParam} </p>
        </div>
    );
  }
};

export const NavChild = NavChildComponent;
