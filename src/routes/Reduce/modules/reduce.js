// ------------------------------------
// Constants
// ------------------------------------
export const REDUCE_REMOVE = 'REDUCE_REMOVE'

// ------------------------------------
// Actions
// ------------------------------------
export function reduce (value) {
  return {
    type    : REDUCE_REMOVE,
    payload : value
  }
}

export const actions = {
  reduce
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REDUCE_REMOVE]    : (state, action) => {
    state.push(action.payload)
    return state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function reduceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
