import React from 'react';
import store, { makeRow, changeColor, makeColumn } from '../store';
import Table from './Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleClick = this.handleClick.bind(this);
    this.handlePaint = this.handlePaint.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      return this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleClick(event) {
    switch (event.target.id) {
      case 'add-row':
        store.dispatch(makeRow());
        break;
      case 'add-col':
        store.dispatch(makeColumn());
        break;
      default:
        break;
    }
  }

  handlePaint(event) {
    store.dispatch(changeColor(event.target.value));
  }

  render() {
    return (
      <div id="pixelate">
        <h1>Pixelate</h1>
        <div>
          <button id="add-row" onClick={this.handleClick}>
            Add a row
          </button>
          <select onChange={this.handlePaint}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="brown">Brown</option>
          </select>
          <button id="add-col" onClick={this.handleClick}>
            Add a Column
          </button>
        </div>
        <Table grid={this.state.grid} />
      </div>
    );
  }
}
