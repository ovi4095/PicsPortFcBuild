import React from 'react'
import CategoryCardItems from './CategoryCardItems'




const CategoryCard = (props) => {

  return (
       <CategoryCardItems categories={props.categories} />
  )
}

export default CategoryCard