// ------------------------------------
// Constants
// ------------------------------------
export const REDUCE_BETTER = 'wedges/thankyou/REDUCE_BETTER'
export const ADD_BETTER = 'wedges/thankyou/ADD_BETTER'
export const EQUAL = 'wedges/thankyou/EQUAL'

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

export function equal () {
  return {
    type    : EQUAL
  }
}

export const actions = {
  addBetter, reduceBetter, equal
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
  },
  [EQUAL]   : (state, action) => {
    return {
      ...state,
      better: 'equal'
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
