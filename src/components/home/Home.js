import React from 'react'
import './../css/Home.css'
import Banner1 from '../../assets/images/banner/banner1.png'
import Banner2 from '../../assets/images/banner/banner2.png'
import Banner3 from '../../assets/images/banner/banner3.png'
import Gallery1 from '../../assets/images/home/g1.png'
import Gallery2 from '../../assets/images/home/g2.png'
import Category1 from '../../assets/images/home/category1.png'
import Category2 from '../../assets/images/home/category2.png'
import Category3 from '../../assets/images/home/category3.png'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from '../loading/Loading'

const mapStateToProps = state => {
    return {
      token: state.auth.token
    }
}

const Home = (props) => {
    let homeBtn = props.token === null? (<NavLink to='/login' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-purple'>Let's Go</NavLink>):
    (<NavLink to='/gallery' className='Carosuselbtn Carosuselbtn--position Carosuselbtn--color-purple'>Let's Go</NavLink>);
  return (
      <div className='container-fluid Home' style={{padding:'0px'}}>

            {/* Carousel */}
            <div id="carouselExampleFade" className="carousel slide carousel-fade Home-Slider-field" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className='d-block w-100' alt='Banner One'  />
                        <div className="carousel-caption d-none d-md-block">
                            {homeBtn}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Gallery view */}
            <section className='container grid'>
                <div className='Gallery--text'>
                    <h2>Take a Look!</h2>
                    <h4>What we have in here!</h4>
                </div>
                <div className='gallery--img-flex'>
                    <img className='GalleryImg' src={Gallery1} alt="." />
                    <img className='GalleryImg' src={Gallery2} alt="." />
                </div>
            </section>
            <section className='container grid'>
                <div className='Category--text'>
                    <h2>6 Different Categories</h2>
                    <p>You can browse as much as you want and share your opinions as much as you want </p>
                </div>
                <div className='category--img-flex'>
                    <h1 className='categoryTitle'>Animal</h1>
                    <h1 className='categoryTitle'>Anime</h1>
                    <h1 className='categoryTitle'>Background</h1>
                    <h1 className='categoryTitle'>People</h1>
                    <h1 className='categoryTitle'>Land Scape</h1>
                    <h1 className='categoryTitle'>Space</h1>
                </div>
            </section>
        </div>
  )
}

export default connect(mapStateToProps)(Home)