import React from 'react'
import Table from 'react-bootstrap/Table'
export default function HeroTableList({ data }) {
  const columns = data[0] && Object.keys(data[0])
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Phone</th>
          <th>Email</th>
          {/*<th>Date</th>*/}
          <th>City</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      {data.map((post) => {
        return (
          <tbody key={post.id}>
            <tr>
              <td>{post.name}</td>
              <td>{post.username}</td>
              <td>{post.phone}</td>
              <td className='post-email'>
                <a href={post.email}>{post.email}</a>
              </td>
              {/*<td>March 6, 2018</td>*/}
              <td>{post.address.city}</td>
              <td>{post.website}</td>
              <td>{post.company.name}</td>
            </tr>
          </tbody>
        )
      })}
    </Table>
  )
}
