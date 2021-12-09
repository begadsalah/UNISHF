import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './HeroList.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import Offcanvas from 'react-bootstrap/Offcanvas'
import HeroTableList from './HeroTableList'
import { TextField } from '@mui/material'
import { Checkbox } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import Stack from '@mui/material/Stack'
import CountrySelect from './CountrySelect'
import HeroDetails from './HeroDetails'
import { useParams } from 'react-router'

require('es6-promise').polyfill()
require('isomorphic-fetch')

const SearchHeroes = ({ ParaData }) => {
  const { title } = useParams()
  const [data, setData] = useState([])
  const [q, setQ] = useState('')
  const [searchColumns, setSearchColumns] = useState(['name'])
  const [value, setValue] = React.useState(new Date())
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    )
  }

  const columns = data[0] && Object.keys(data[0])
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <Navbar.Brand href='#'>Heroes</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse
            id='navbarScroll'
            className='heroList-Navbarform-div'
          >
            <Form className='d-flex'>
              <Button variant=''>
                <SearchIcon />
              </Button>
              <Button variant='' onClick={handleShow}>
                <FilterListIcon />
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className='filter-title'>
                    Filters
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Search From Heroes</Form.Label>
                    <Form.Control
                      type='text'
                      value={q}
                      onChange={(e) => {
                        setQ(e.target.value)
                      }}
                      id='standard-basic'
                      label='Standard'
                      variant='standard'
                    />
                    <Form.Text className='text-muted'>
                      Check on what you want to search on.
                    </Form.Text>
                    <div className='checkboxes-div'>
                      {columns &&
                        columns.map((column) => (
                          <label>
                            <Checkbox
                              type='checkbox'
                              checked={searchColumns.includes(column)}
                              onChange={(e) => {
                                const checked = searchColumns.includes(column)
                                setSearchColumns((prev) =>
                                  checked
                                    ? prev.filter((sc) => sc !== column)
                                    : [...prev, column]
                                )
                              }}
                            />
                            {column}
                          </label>
                        ))}
                    </div>
                  </Form.Group>
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    className='Date-input'
                  >
                    <Stack spacing={3}>
                      <DatePicker
                        disableFuture
                        label='Date'
                        openTo='year'
                        views={['year', 'month', 'day']}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                  <CountrySelect className='country-input' />
                  <Button
                    variant='primary'
                    type='submit'
                    className='Submit-filter-button'
                    onClick={handleClose}
                  >
                    <FilterListIcon /> Filter
                  </Button>
                  {/*<Button variant='primary' onClick={handleClose}></Button>*/}
                </Offcanvas.Body>
              </Offcanvas>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Row xs={10} md={10} lg={10}>
          <HeroTableList data={search(data)} />
        </Row>
      </Container>
    </>
  )
}

export default SearchHeroes
