import {IFreelanceFormData} from '../interfaces/interfaces'
import {exec} from 'child_process'


class FormService {

  async SaveForm(data: IFreelanceFormData) {

    exec(`sh ./sales-sourcing-frame-agreement-xlsx.sh '${data.companyName}' '${data.address}' ${data.zipCode} ${data.town} ${data.businessId} '${data.contactName}' ${data.contactEmail} ${data.phoneNumber} '${data.signatureName}' '${data.signatureTitle}' `, 
      (error, stdout, stderr) => {
      if (stderr) 
      if (error) {
        console.error(`exec error ${error}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    })
  }

}

export default new FormService()