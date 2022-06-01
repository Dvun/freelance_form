import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import {render} from '@testing-library/react'
import {FormProvider, useForm} from 'react-hook-form'


const renderWithRHFormProvider = (ui: any) => {
  const Wrapper = (children: any) => {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return render(<Wrapper>{ui}</Wrapper>);
};

export default renderWithRHFormProvider;