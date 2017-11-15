// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_GROUPCODE = 'wedges/results/SAVE'

// ------------------------------------
// Actions
// ------------------------------------
export function saveGroupCode (value) {
  console.log(value)
  return {
    type    : SAVE_GROUPCODE,
    payload : value
  }
}

export const actions = {
  saveGroupCode
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SAVE_GROUPCODE]  : (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      groupcode: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  groupcode: ''
}

export default function resultsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
