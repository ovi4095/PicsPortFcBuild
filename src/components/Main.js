import './css/Main.css'
import { connect } from 'react-redux'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './about/About'
import Gallery from './gallery/Gallery'


const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export const Main = (props) => {
    
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                </Routes>
            
            <Footer/>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)