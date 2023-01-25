import React from 'react'

export default function Coin(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <img src={props.image} />
    </div>
  )
}
