// ------------------------------------
// Constants
// ------------------------------------
export const REMOVE_WEDGE = 'wedges/add/REMOVE_WEDGE'
export const ADD_WEDGE = 'wedges/add/ADD_WEDGE'
export const HIGHLIGHT_WEDGE = 'wedges/add/HIGHLIGHT_WEDGE'
export const CLEAR_HIGHLIGHT = 'wedges/add/CLEAR_HIGHLIGHT'
export const SHOW_BASKET = 'wedges/add/SHOW_BASKET'

// ------------------------------------
// Actions
// ------------------------------------
export function removeValue (value) {
  console.log('yes')
  return {
    type    : REMOVE_WEDGE,
    payload : value
  }
}

export function addValue (value) {
  console.log('wat')
  return {
    type    : ADD_WEDGE,
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

export const actions = {
  removeValue,
  addValue,
  highlightWedge,
  clearHighlight,
  showBasket
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// state.addCount
const ACTION_HANDLERS = {
  [REMOVE_WEDGE]    : (state, action) => {
    return {
      ...state,
      addCount: state.addCount + 1,
      addedValues: [
        ...state.addedValues, action.payload
      ]
    }
  },
  [ADD_WEDGE]   : (state, action) => {
    return {
      ...state,
      addCount: state.addCount - 1,
      addedValues: state.addedValues.filter(element => element !== action.payload)
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
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  basketHidden: true,
  addCount: 0,
  addedValues: [],
  highlightedWedge: -1,
  highlightedWedgeDirection: ''
}
export default function addReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
