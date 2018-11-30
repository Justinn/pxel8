import React from 'react';
import store, { colorize } from '../store';

export default class TableCell extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick() {
    store.dispatch(colorize(this.props.rowIndex, this.props.idx));
  }

  render() {
    return (
      <td
        className={this.props.color}
        onClick={() =>
          this.handleCellClick()
        }
        onMouseDown={() =>
            this.handleCellClick()
          }
        onMouseUp={() =>
          this.handleCellClick()
        }
      />
    );
  }
}
