// ------------------------------------
// Constants
// ------------------------------------
export const REMOVE_WEDGE = 'wedges/reduce/REMOVE_WEDGE'
export const RESTORE_WEDGE = 'wedges/reduce/RESTORE_WEDGE'
export const HIGHLIGHT_WEDGE = 'wedges/reduce/HIGHLIGHT_WEDGE'
export const CLEAR_HIGHLIGHT = 'wedges/reduce/CLEAR_HIGHLIGHT'
export const SHOW_BASKET = 'wedges/reduce/SHOW_BASKET'
export const ADD_TO_PATH = 'wedges/reduce/ADD_TO_PATH'

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

export function showBasket () {
  return {
    type: SHOW_BASKET
  }
}

export function logTransfer (time, direction, wedge) {
  return {
    type: ADD_TO_PATH,
    event: [time, direction, wedge]
  }
}

export const actions = {
  logTransfer,
  removeValue,
  restoreValue,
  highlightWedge,
  clearHighlight,
  showBasket
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
  },
  [SHOW_BASKET] : (state, action) => {
    return {
      ...state,
      basketHidden: false
    }
  },
  [ADD_TO_PATH] : (state, action) => {
    return {
      ...state,
      log: [...state.log, action.event]
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  basketHidden: true,
  reduceCount: 15,
  // these are here for start
  reducedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  highlightedWedge: -1,
  highlightedWedgeDirection: '',
  log: []
}
export default function reduceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
