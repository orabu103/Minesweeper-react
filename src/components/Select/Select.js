import React from 'react'
import './style.css'

const options = [
    { value: 0, label: 'Easy' },
    { value: 1, label: 'Medium' },
    { value: 2 , label: 'Hard' }
  ]

const Select = ({clickChangeLevel}) => {

  const handleOnClick = (e) => {
    clickChangeLevel(e.target.value)
  }
  return (
    <select options={options} onChange={e => handleOnClick(e)}>
        {options.map(( value , index) => {
            return  <option key={index} value={value.value}>{value.label}</option>
        })}
    </select>
  )
}

export default Select