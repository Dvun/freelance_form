import {IFreelanceFormData} from '../interfaces/interfaces'
import {exec} from 'child_process'


class FormService {

  async SaveForm(data: IFreelanceFormData) {

    exec(`sh ./script.sh ${data.contact} ${data.town} ${data.address}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    })
  }

}

export default new FormService()