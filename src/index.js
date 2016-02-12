import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root/'
import configureStore from './store/configureStore'
import style from './styles/less/style.less'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
