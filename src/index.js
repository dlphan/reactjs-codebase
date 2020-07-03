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

ReactDOM.render(<App />, document.getElementById('root'))
