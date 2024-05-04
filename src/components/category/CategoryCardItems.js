import React from 'react'
import '../../css/Categories.css'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

const CategoryCardItems = (props) => {
  return (
    <div className='catagoryDiv'>
        

            {props.categories.map((item) => {
                return(
                    
                <div className='CategotyCard'>
                <Link 
                    to='/categoryImage'
                    state={{categoryName: item.categoryName}}
                    >
                    <Card inverse
                            style={{
                                width: '100%'
                            }}
                        >
                            <CardImg
                            alt="Card image cap"
                            src={item.image}
                            style={{
                                height: 'auto'
                            }}
                            width="100%"
                            />
                            <CardImgOverlay>
                            <CardTitle
                            style={{
                                background:'rgba(0, 0, 0, 0.435)',
                                
                                paddingLeft: '1rem',
                                fontSize:'1.2rem',
                                textAlign:'left',
                                marginTop: '3.5rem',
                                color:"#ffffff",
                                width: '100%',
                                borderRadius: '12.5px'
                            }} 
                            >
                                <h2 className='h2C'>{item.categoryName}</h2>
                            </CardTitle>
                            </CardImgOverlay>
                        </Card>
                        </Link>
                    </div>
            
                    )
                })
                }
        
    </div>     
  
  )
}

export default CategoryCardItems