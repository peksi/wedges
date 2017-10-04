// Constant(s)
export const GO_FORWARD = 'wedges/home/GO_FORWARD'
export const GO_BACK = 'wedges/home/GO_BACK'
export const ADD_TO_LOG = 'wedges/home/ADD_TO_LOG'

// Action(s)
export function goForward () {
  return {
    type  : GO_FORWARD
  }
}

export function goBack () {
  return {
    type  : GO_BACK
  }
}

export function addToLog (timestamp, step) {
  return {
    type  : ADD_TO_LOG,
    event : [timestamp, step]
  }
}

// Action handler(s)

const ACTION_HANDLERS = {
  [GO_FORWARD]  : (state, action) => {
    return {
      ...state,
      page: state.page + 1
    }
  },
  [GO_BACK]    : (state, action) => {
    return {
      ...state,
      page: state.page - 1
    }
  },
  [ADD_TO_LOG]  : (state, action) => {
    return {
      ...state,
      log: [...state.log, action.event]
    }
  }
}

function coinFlip () {
  return (Math.floor(Math.random() * 2) === 0) ? 'add' : 'reduce'
}
// Reducer
const initialState = {
  first: coinFlip(),
  page: 0,
  log: []
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
