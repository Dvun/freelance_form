import * as yup from 'yup'


export const freelanceSchema = yup.object().shape({
  address: yup.string().required('Address is required!').trim(),
  businessId: yup.string().required('Business ID is required!').trim(),
  companyName: yup.string().required('Company name is required!').trim(),
  contact: yup.string().required('Contact is required!').trim(),
  contactEmail: yup.string().required('Email is required!').email('Email is not correct!').trim(),
  contactPersonalName: yup.string().required('Personal name is required!').trim(),
  firstName: yup.string().required('Name is required!').trim(),
  phoneNumber: yup.string().required('Phone number is required!').matches(/^[0-9]+$/, "Must be only digits").trim(),
  signatureName: yup.string().required('Signature name is required!').trim(),
  signatureTitle: yup.string().required('Signature title is required!').trim(),
  town: yup.string().required('town is required!').trim(),
  zipCode: yup.string().required('Zip code is required!')
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, 'Must be exactly 5 digits').max(5, 'Must be exactly 5 digits').trim(),
})