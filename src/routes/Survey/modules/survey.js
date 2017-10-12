// ------------------------------------
// Constants
// ------------------------------------
export const GO_FORWARD = 'wedges/survey/EQUAL'

// ------------------------------------
// Actions
// ------------------------------------
export function goForward () {
  return {
    type    : GO_FORWARD
  }
}

export const actions = {
  goForward
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// state.reduceCount
const ACTION_HANDLERS = {
  [GO_FORWARD]  : (state, action) => {
    return {
      ...state,
      page: state.page + 1
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  page: 1
}

export default function reduceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
