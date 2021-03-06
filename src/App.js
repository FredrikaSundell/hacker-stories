import React from 'react'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Hackers',
    url: 'https://hackers.org/',
    author: 'Krillzorz',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
]

const welcome = {
  greeting: 'Yo',
  title: 'FE20',
}

const myArray = ["I'm", 'an', 'array']
const myNumbers = [1, 4, 8]

function getTitle(title) {
  return 'From Function' + title
}

// const map1 = array1.map(x => x * 2);

function writePTags(arr) {
  return arr.map(function (x, index) {
    console.log(x)
    return <p key={index}>{x}</p>
  })
}

function writePTagsWithoutMap(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(<p key={i}>{arr[i]}</p>)
  }
  return newArr
}

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      {list.map(function (item) {
        return (
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </div>
        )
      })}
    </div>
  )
}

export default App
