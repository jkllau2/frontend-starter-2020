import { userConstants } from '../constants'

const initialState = {
  // some states...
  isLoading: false,
  data: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // some action type per case...
    case userConstants.UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case userConstants.UPDATE_FAILURE:
    case userConstants.UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.response.data
      }

    default:
      return state
  }
}

export default userReducer
