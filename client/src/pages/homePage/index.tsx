import React from 'react'
import './styles.scss'
import {FormProvider, useForm} from 'react-hook-form'
import InputField from '../../components/inputField'

const HomePage = () => {
  const methods = useForm()
  
  const onSubmit = (data: any) => {
    
  }
  
  return (
    <div className='is-flex is-flex-direction-column inputContainer'>
      <div>
        <h1 className='title mb-4'>Freelance Form</h1>
      </div>
      <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          
          <div className='columns mb-4'>
            <div className='column is-half pt-0 pb-4'>
              <InputField label='Name' name='name' type='text' placeholder='Insert Name' />
            </div>
            <div className='column is-half pt-0  pb-0'>
              <InputField label='Company Name' name='companyName' type='text' placeholder='Company Name' />
            </div>
          </div>
          <InputField label='Address' name='address' type='text' placeholder='Address' />

          <div className='columns mt-4 mb-4'>
            <div className='column pt-0 pb-4'>
              <InputField label='ZIP' name='zipCode' type='text' placeholder='ZIP code' />
            </div>
            <div className='column pt-0  pb-4'>
              <InputField label='Town' name='town' type='text' placeholder='Town' />
            </div>
            <div className='column pt-0'>
              <InputField label='Business ID' name='businessId' type='text' placeholder='Business ID' />
            </div>
          </div>
          
          <div className='columns mb-4'>
            <div className='column is-half pt-0  pb-4'>
              <InputField label='Contact Email' name='contactEmail' type='email' placeholder='Contact Email' />
            </div>
            <div className='column is-half pt-0'>
              <InputField label='Contact Person Name' name='contactPersonalName' type='text' placeholder='Contact Person Name' />
            </div>
          </div>

          <div className='columns mb-4'>
            <div className='column is-half pt-0  pb-4'>
              <InputField label='Contact' name='contact' type='text' placeholder='Contact' />
            </div>
            <div className='column is-half pt-0'>
              <InputField label='Contact Phone' name='phoneNumber' type='tel' placeholder='Contact Phone'/>
            </div>
          </div>

          <div className='columns mb-4'>
            <div className='column is-half pt-0  pb-4'>
              <InputField label='Signature Name' name='signatureName' type='text' placeholder='Signature Name' />
            </div>
            <div className='column is-half pt-0  pb-3'>
              <InputField label='Signature Title' name='signatureTitle' type='text' placeholder='Signature Title' />
            </div>
          </div>
          
          <div className='buttons is-flex is-justify-content-flex-end'>
            <button className='button is-warning is-size-7-mobile'>Clear</button>
            <button className='button is-primary is-size-7-mobile'>Send</button>
          </div>
          
        </form>
      </FormProvider>
    </div>
  )
}

export default HomePage