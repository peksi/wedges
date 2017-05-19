// Constant(s)
export const GO_FORWARD = 'wedges/home/GO_FORWARD'

// Action(s)
export function goForward () {
  return {
    type  : GO_FORWARD
  }
}

// Action handler(s)

const ACTION_HANDLERS = {
  [GO_FORWARD]  : (state, action) => {
    return {
      ...state,
      page: state.page + 1
    }
  }
}

// Reducer
const initialState = {
  page: 0
}

export default function homeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
