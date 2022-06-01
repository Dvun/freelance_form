import React from 'react'
import HomePage from '../pages/homePage'
import {render, screen} from '../utils/testUtils'


describe('Test for the HomePage component', () => {

  test('renders HomePage and h1 title need be Freelance Form', () => {
    render(<HomePage/>)
    const titleElement = screen.getByText('Freelance Form');
    expect(titleElement).toBeInTheDocument();
  });

  it('render firstname input', () => {
    render(<HomePage/>)
    const firstNameInput = screen.getByTestId(/firstName/i)
    expect(firstNameInput).toBeInTheDocument();
  });

  it('render company name input', () => {
    render(<HomePage/>)
    const companyNameInput = screen.getByTestId(/companyName/i)
    expect(companyNameInput).toBeInTheDocument();
  })

  it('render address input', () => {
    render(<HomePage/>)
    const addressInput = screen.getByTestId(/address/i)
    expect(addressInput).toBeInTheDocument();
  })

  it('render zip code input', () => {
    render(<HomePage/>)
    const zipCodeInput = screen.getByTestId(/zipCode/i)
    expect(zipCodeInput).toBeInTheDocument();
  })


  it('render town input', () => {
    render(<HomePage/>)
    const townInput = screen.getByTestId(/town/i)
    expect(townInput).toBeInTheDocument();
  })

  it('render business id input', () => {
    render(<HomePage/>)
    const businessIdInput = screen.getByTestId(/businessId/i)
    expect(businessIdInput).toBeInTheDocument();
  })

  it('render contact email input', () => {
    render(<HomePage/>)
    const contactEmailInput = screen.getByTestId(/contactEmail/i)
    expect(contactEmailInput).toBeInTheDocument();
  })

  it('render contact personal name input', () => {
    render(<HomePage/>)
    const contactPersonalNameInput = screen.getByTestId(/contactPersonalName/i)
    expect(contactPersonalNameInput).toBeInTheDocument();
  })

  it('render contact input', () => {
    render(<HomePage/>)
    const contactInput = screen.getByTestId('contact')
    expect(contactInput).toBeInTheDocument();
  })

  it('render phone number input', () => {
    render(<HomePage/>)
    const phoneNumberInput = screen.getByTestId(/phoneNumber/i)
    expect(phoneNumberInput).toBeInTheDocument();
  })

  it('render signature name input', () => {
    render(<HomePage/>)
    const signatureNameInput = screen.getByTestId(/signatureName/i)
    expect(signatureNameInput).toBeInTheDocument();
  })

  it('render signature title input', () => {
    render(<HomePage/>)
    const signatureTitleInput = screen.getByTestId(/signatureTitle/i)
    expect(signatureTitleInput).toBeInTheDocument();
  })

})
