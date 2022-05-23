import {AppDispatch} from '../store'
import {sendFormDataLoading} from './formSlice'
import {IFreelanceFormData} from '../../interfaces/interfaces'
import {callApi} from '../../utils/callApi'


class FormActions {

  SendData = (data: IFreelanceFormData) => (dispatch: AppDispatch) => {
    dispatch(sendFormDataLoading(true))
    callApi.post('/send', data)
      .then(res => {
        console.log(res)
        dispatch(sendFormDataLoading(false))
      })
      .catch(err => {
        console.log(err)
        dispatch(sendFormDataLoading(false))
      })
  }

}

export default new FormActions()