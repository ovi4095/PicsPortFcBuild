import React, { useEffect } from 'react'
import '../../css/Categories.css'
import '../../css/Gallery.css'
import { connect } from 'react-redux'
import { fetchCategories } from '../../redux/actionCreators'
import CategoryCard from './CategoryCard'
import Loading from '../loading/Loading'
const mapStateToProps = (state) => {
    return {
      categories: state.categories,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
      fetchCategories: () => dispatch(fetchCategories())
    }
}


export const Category = (props) => {

  useEffect(() => {
    props.fetchCategories()
  },[])

  const categories = props.categories.categories.map(categories => categories)
  // const categoryName = (categories.map(categories=> categories.categoryName));
  const categoryId = (categories.map(categories=> categories.id));
  // const categoryImage = (categories.map(categories=> categories.image));

  const categoryGallery = <CategoryCard
                              categories={categories}
                              key={categoryId}
                          />
  const category = props.categories.isLoading === true? (<Loading/>):(
                    <div className='container containPosition'>
                          <h3 className='GalleryTitle'>Category</h3>
                          <div className='CardPosition'>
                                  {categoryGallery}
                          </div>
                    </div>
  );
  return (
    <div className=''><div>{category}</div></div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Category)