// We'll dive deeper into middleware later.
// For now, it's enough to know that this loggerMiddleware prints out useful
// information about everything that happens in your store.
// Much like requests in express pass from middleware to middleware, actions in redux
// pass from middleware to middleware. The loggerMiddleware gets a chance to see
// actions before they are processed. They get in the middle, hence, middleware.
import { createStore, applyMiddleware } from 'redux'
import loggerMiddleware from 'redux-logger'

// We'll soon revisit the initial state of this application.
const initialState = {
  grid: [
    Array(20).fill('')
  ],
  color: 'red'
}


// ACTION TYPES
const MAKEROW = 'makerow'
const CHANGECOLOR = 'changeColor'
const COLORIZE = 'colorize'

// ACTION CREATORS
export function makeRow() {
  return ({ type: MAKEROW })
}
export function changeColor(color) {
  return { type: CHANGECOLOR, color }
}
export function colorize() {

  return { type: COLORIZE, row, col }
}

// And we'll revisit this reducer.
function reducer(state = initialState, action) {
  switch (action.type) {
    case MAKEROW:
      const numCols = state.grid[0].length
      const newRow = Array(numCols).fill('')
      return { ...state, grid: [...state.grid, newRow] }
    case CHANGECOLOR:
      return { ...state, color: action.color }
    case COLORIZE:
      const newGrid = [...state.grid]
      newGrid[action.row] = [...newGrid[action.row]]
      newGrid[action.row][action.col] = state.color
      return { ...state, grid: newGrid }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware)
)



export default store