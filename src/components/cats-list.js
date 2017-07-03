import React from 'react'
import Cat from './cat'

const CatsList = ({
  cats
}) => (
  <div>
    { cats.map(cat => <Cat name={ cat.name } picture={ cat.picture } />)}
  </div>
)

export default CatsList
