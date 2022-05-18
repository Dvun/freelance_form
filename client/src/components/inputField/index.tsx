import React, {FC} from 'react'
import './styles.scss'
import {useFormContext} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

interface Props {
  type: string
  label: string
  name: string
  placeholder: string
}

const InputField: FC<Props> = ({type, label, name, placeholder}) => {
  const {register, formState:{errors}} = useFormContext()

  return (
    <div className="field">
      <label className="label mb-0 is-size-7-mobile">{label}</label>
      <div className="control">
        <input 
          className="input is-primary is-size-7-mobile" 
          type={type} 
          placeholder={placeholder}
          {...register(name)}
        />
      </div>
      <ErrorMessage name={name} errors={errors} render={({message}) => 
        <p className="help is-danger mb-0">{message}</p>}/>
    </div>
  )
}

export default InputField