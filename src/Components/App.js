import React from 'react'
import store, { makeRow, changeColor } from '../store'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log(props, 'props')
    this.handleClick = this.handleClick.bind(this)
    this.handlePaint = this.handlePaint.bind(this)
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      return this.setState(store.getState())
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  handleClick() {
    store.dispatch(makeRow())

  }
  handlePaint(event) {
    store.dispatch(changeColor(event.target.value))
  }

  render() {
    return (
      <div id='pixelate'>
        <h1>Pixelate</h1>
        <div>
          <button id='add-row' onClick={this.handleClick}>Add a row</button>
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
        </div>
        <table>
          <tbody>
            {this.state.grid.map((elem, idx) => {
              return (
                <tr key={idx}>
                  {elem.map((cell, idx) => {
                    return (
                      <td key={idx} className={cell}></td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )

  }
}