import React, {ReactElement} from 'react'
import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import rootState from '../redux/rootState'

function render(
  ui: ReactElement, 
  {preloadedState, 
    store = configureStore({ reducer: rootState, preloadedState }), ...renderOptions}: any = {}) {
  function Wrapper({children}: any) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }