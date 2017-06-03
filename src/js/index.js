import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import Index from './container/Index'

import store from './store'

render(
    <Provider store={store()}>
      <Index />
    </Provider>,
    document.getElementById('root')
)

