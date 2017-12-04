import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props){
    this.setState ({
      allowEdit: props.allowEdit
    })
  }

  render() {
    const { update } = this.props;

    return (
      <select className="dropDownContainer" onChange = {event => update(event.target.value)} disabled = {this.state.allowEdit === 'false'}>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}