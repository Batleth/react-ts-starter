import React, { PureComponent } from "react";
import { RouterRootState } from "connected-react-router";
import { connect } from "react-redux";


interface IProps {
  pathname: string;
  search: string;
  hash: string;
};
const mapStateToProps = (state: RouterRootState) => ({
    pathname: state.router.location.pathname,
    search: state.router.location.search,
    hash: state.router.location.hash,
});

class NavChildComponent extends PureComponent<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    if (!this.props.pathname){
      return "Loading...";
    }
    const {pathname, hash, search } = this.props;

    return (
        <div>
          <p>Current Path: {pathname}, Hash: {hash}, Search: {search}</p>
        </div>
    );
  }
};

export const NavChild = connect(mapStateToProps, null)(NavChildComponent);
