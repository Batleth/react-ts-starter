import React, { PureComponent } from "react";
import { RouteComponentProps } from 'react-router';
import { RouterRootState } from "connected-react-router";
import { connect } from "react-redux";

interface IParams {
  requiredParam: string;
}
interface IProps extends RouteComponentProps<IParams> {
  pathname: string;
  search: string;
  hash: string;
};

interface IState {
  internalValue: string;
}

const mapStateToProps = (state: RouterRootState) => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
});

class NavChildComponent extends PureComponent<IProps, IState> {
  // Example for using a constructor, it uneccessary if no intitialization is made
  constructor(props: IProps) {
    super(props);
    this.state = {internalValue: props.match.params.requiredParam}
  }

  public render() {
    if (!this.props.pathname){
      return "Loading...";
    }
    const {pathname, hash, search } = this.props;
    const { requiredParam } = this.props.match.params;

    return (
        <div>
          <p>Current Path: {pathname}<br/> Hash: {hash}<br/> Search: {search}<br/> Param: {requiredParam} </p>
        </div>
    );
  }
};

export const NavChild = connect(mapStateToProps, null)(NavChildComponent);
