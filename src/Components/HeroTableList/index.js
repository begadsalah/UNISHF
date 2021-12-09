import React from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default function HeroTableList({ data }) {
  return (
    <Container>
      <Table striped bordered hover responsive>
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
        })}{' '}
      </Table>
    </Container>
  )
}
