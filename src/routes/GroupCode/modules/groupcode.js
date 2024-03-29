// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_GROUPCODE = 'wedges/groupcode/SAVE'

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
}

export default function groupcodeReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
