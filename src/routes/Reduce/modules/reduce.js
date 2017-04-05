// ------------------------------------
// Constants
// ------------------------------------
export const REMOVE_WEDGE = 'wedges/reduce/REMOVE_WEDGE'
export const RESTORE_WEDGE = 'wedges/reduce/RESTORE_WEDGE'
export const HIGHLIGHT_WEDGE = 'wedges/reduce/HIGHLIGHT_WEDGE'
export const CLEAR_HIGHLIGHT = 'wedges/reduce/CLEAR_HIGHLIGHT'

// ------------------------------------
// Actions
// ------------------------------------
export function removeValue (value) {
  return {
    type    : REMOVE_WEDGE,
    payload : value
  }
}

export function restoreValue (value) {
  return {
    type    : RESTORE_WEDGE,
    payload : value
  }
}

export function highlightWedge (value, direction) {
  return {
    type    : HIGHLIGHT_WEDGE,
    wedge : value,
    direction: direction
  }
}

export function clearHighlight () {
  return {
    type: CLEAR_HIGHLIGHT,
    wedge: -1,
    direction: ''
  }
}

export const actions = {
  removeValue, restoreValue, highlightWedge, clearHighlight
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// state.reduceCount
const ACTION_HANDLERS = {
  [REMOVE_WEDGE]    : (state, action) => {
    return {
      ...state,
      reduceCount: state.reduceCount + 1,
      reducedValues: [
        ...state.reducedValues, action.payload
      ]
    }
  },
  [RESTORE_WEDGE]   : (state, action) => {
    return {
      ...state,
      reduceCount: state.reduceCount - 1,
      reducedValues: state.reducedValues.filter(element => element !== action.payload)
    }
  },
  [HIGHLIGHT_WEDGE] : (state, action) => {
    return {
      ...state,
      highlightedWedge: action.wedge,
      highlightedWedgeDirection: action.direction
    }
  },
  [CLEAR_HIGHLIGHT] : (state, action) => {
    return {
      ...state,
      highlightedWedge: action.wedge,
      highlightedWedgeDirection: action.direction
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  reduceCount: 0,
  reducedValues: [],
  highlightedWedge: -1,
  highlightedWedgeDirection: ''
}
export default function reduceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
