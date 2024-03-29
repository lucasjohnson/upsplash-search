import React from "react";
import ReactDOM from "react-dom";
const modalRoot = document.getElementById("portal");

class Portal extends React.Component<any, any> {
  el: HTMLElement = document.createElement("div");

  componentDidMount() {
    modalRoot?.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
