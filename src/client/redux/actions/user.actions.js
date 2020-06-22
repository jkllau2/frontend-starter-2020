import { userConstants } from '../constants'
import { userService } from '../../services'
import { request, success, failure } from './helper'

function update(user) {
  console.log(user)
  return async (dispatch) => {
    dispatch(request(userConstants.UPDATE_REQUEST, user))

    try {
      const response = await userService.doSomeExampleFetch(user)
      return dispatch(success(userConstants.UPDATE_SUCCESS, response))
    } catch (error) {
      return dispatch(failure(userConstants.UPDATE_FAILURE, error))
    }
  }
}

export default {
  update
}