// Constant(s)
export const GO_FORWARD = 'wedges/home/GO_FORWARD'
export const GO_BACK = 'wedges/home/GO_BACK'

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
  }
}

function coinFlip () {
  return (Math.floor(Math.random() * 2) === 0) ? 'add' : 'reduce'
}
// Reducer
const initialState = {
  first: coinFlip(),
  page: 0
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
