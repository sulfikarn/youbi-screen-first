import React, { useState } from 'react'
import './ScreenTwo.css'
import { Table } from 'react-bootstrap';

export default function ScreenTwo({ tableData, updateField }) {
  const [cityName, setCityName] = useState('')
  const [tempTableData, setTempTableData] = useState(tableData)
  const handleClick = () => {
    updateField(tempTableData)
  }
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Table Name</th>
            <th>Column Name</th>
            <th>Distinct Value</th>
            <th>User Input</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.tableName}</td>
                <td>{item.UniqueColumn}</td>
                <td>{item.columnName}</td>
                <td><input type="text" onChange={(e) => {
                  setCityName(e.target.value)
                  let updateTableValue = tableData
                  if(updateTableValue.length > 0) updateTableValue[index].tempColumnName = e.target.value
                  setTempTableData(updateTableValue)
                }} /></td>
              </tr>
            )

          })}

        </tbody>
      </Table>
      <div style={{ textAlign: "center" }}>
        <button type='submit'
          className='button-table'
          onClick={handleClick}
        >
          Update
        </button>
      </div>

    </>

  )
}
