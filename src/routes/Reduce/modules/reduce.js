// ------------------------------------
// Constants
// ------------------------------------
export const REMOVE_VALUE = 'REMOVE_VALUE'

// ------------------------------------
// Actions
// ------------------------------------
export function removeValue (value) {
  return {
    type    : REMOVE_VALUE,
    payload : value
  }
}

export const actions = {
  removeValue
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// state.reduceCount
const ACTION_HANDLERS = {
  [REMOVE_VALUE]    : (state, action) => {
    // state.reducedValues.push(action.payload)
    // state.reduceCount = state.reduceCount + 1
    return {
      ...state,
      reduceCount: state.reduceCount + 1,
      reducedValues: [
        ...state.reducedValues, action.payload
      ]
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { reduceCount: 0, reducedValues: [] }
export default function reduceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
