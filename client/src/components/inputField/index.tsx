import React, {FC} from 'react'
import './styles.scss'
import {useFormContext} from 'react-hook-form'

interface Props {
  type: string
  label: string
  name: string
  placeholder: string
}

const InputField: FC<Props> = ({type, label, name, placeholder}) => {
  const {register} = useFormContext()

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
      <p className="help is-danger mb-0">This email is invalid</p>
    </div>
  )
}

export default InputField