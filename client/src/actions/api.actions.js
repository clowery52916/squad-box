import axios from 'axios'

export function fetchUserImage () {
  return {
    type: 'SIGN_UP_WITH_FACE',
    loading: true
  }
}
export function fetchUserImageSuccess (user) {
  return {
    type: 'GET_ALL_CARDS',
    user,
    loading: false
  }
}

export function fetchUserImageError (err) {
  return {
    type: 'GET_ALL_CARDS_ERROR',
    err,
    loading: false
  }
}

export function fetchUserImageFromApi () {
  return async (dispatch) => {
    dispatch(fetchUserImage())

    try {
      const response = await axios.get('https://api.kairos.com')
      dispatch(fetchMagicSuccess(response.data.user))
    } catch (err) {
      dispatch(fetchUserImageError(err))
    }
  }
}
