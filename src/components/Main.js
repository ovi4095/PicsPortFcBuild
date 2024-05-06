import '../css/Main.css'
import { connect } from 'react-redux'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './about/About'
import Gallery from './gallery/Gallery'
import Category from './category/Category'
import CategoryImageGallery from './categoryImageGallery/CategoryImageGallery'
import Auth from './auth/Auth'
import { useEffect } from 'react'
import { fetchCategories, fetchComments, fetchImages } from '../redux/actionCreators'
import Logout from './auth/Logout'
import { authCheck } from '../redux/authActionCreators'



const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
        fetchCategories:() => dispatch(fetchCategories()),
        fetchImages:() => dispatch(fetchImages()),
        fetchComments:() => dispatch(fetchComments())

    }
}

export const Main = (props) => {
    useEffect(()=>{
        props.authCheck();
        props.fetchCategories();
        props.fetchImages();
        props.fetchComments();
    },[])
console.log("Login Token:", props.token)
let routes = props.token === null?(
                <Routes>
                    <Route path='*' element={<Navigate to="/" replace={true}/>}/>
                    <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/login' element={<Auth/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/categoryImage' element={<CategoryImageGallery/>}/>
                </Routes>
):(
                <Routes>
                    <Route path='*' element={<Navigate to="/" replace={true}/>}/>
                    <Route path='/' element={<Navigate to='/home' replace={true}/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/logout' element={<Logout/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/category' element={<Category/>}/>
                    <Route path='/categoryImage' element={<CategoryImageGallery/>}/>
                </Routes>
);

    return (
        <div>
            <Header/>
              {routes}           
            <Footer/>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)