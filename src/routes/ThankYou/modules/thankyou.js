// ------------------------------------
// Constants
// ------------------------------------
export const REDUCE_BETTER = 'wedges/thankyou/REDUCE_BETTER'
export const ADD_BETTER = 'wedges/thankyou/ADD_BETTER'

// ------------------------------------
// Actions
// ------------------------------------
export function addBetter () {
  return {
    type    : ADD_BETTER
  }
}

export function reduceBetter () {
  return {
    type    : REDUCE_BETTER
  }
}

export const actions = {
  addBetter, reduceBetter
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// state.reduceCount
const ACTION_HANDLERS = {
  [ADD_BETTER]    : (state, action) => {
    return {
      ...state,
      better: 'add'
    }
  },
  [REDUCE_BETTER]   : (state, action) => {
    return {
      ...state,
      better: 'reduce'
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  better: ''
}
export default function reduceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
