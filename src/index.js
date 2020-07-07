import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'core-js'
import 'raf/polyfill'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import PureApp from './App'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './configs/apollo'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PureApp />
    </ApolloProvider >
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
