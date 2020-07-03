import React from 'react'
import { Button } from 'antd'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import './styles.less'

const GET_DISH = gql`
query {
  dishes {
    _id
    name
  }
}
`
const Page1 = (props) => {
  const { loading, error, data } = useQuery(GET_DISH, { errorPolicy: 'all', fetchPolicy: 'network-only' })
  console.log(error)
  return (
    <div className='page1-wrapper'>
      <h1>Page 1 title</h1>
      {loading ? <p>Loading</p> : <ul>Data: {data.dishes.map(d => <li key={d._id}>{d.name}</li>)}</ul>}
      <Button type='primary'>hello world</Button>
    </div>
  )
}

export default Page1