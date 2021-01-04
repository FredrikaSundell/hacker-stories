import React from 'react'

const welcome = {
  greeting: 'Yo',
  title: 'FE20',
}

const myArray = ['Im', 'an', 'array']

function getTitle(title) {
  return 'From Function' + title
}

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {getTitle('React').toLowerCase()}
      </h1>
      <div>(myArray)</div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
