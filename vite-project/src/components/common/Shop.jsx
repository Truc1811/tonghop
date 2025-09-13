


import Layout from './Layout'
import Hero from './Hero'

import ProductImg from '../../assets/images/Mens/five.jpg'
import ProductImgTwo from '../../assets/images/Mens/six.jpg'
import ProductImgThree from '../../assets/images/Mens/seven.jpg'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


const Shop = () => {

   
    return (
        <>
            <Layout>
                <div className='container py-4 px-5'>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page"><Link to="/shop">Shop</Link></li>
                        </ol>
                    </nav>

                    <div className='row pb-5'>
                        <div className='col-md-3'>
                            <div className='card shadow border-0 mb-3'>
                                <div className='card-body p-4'>
                                    <h3>Categories</h3>
                                    <ul>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Kids</label>
                                        </li>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Men</label>
                                        </li>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Women</label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div className='card shadow border-0 mb-5'>
                                <div className='card-body p-4'>
                                    <h3>Brands</h3>
                                    <ul>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Puma</label>
                                        </li>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Killer</label>
                                        </li>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Levis</label>
                                        </li>
                                        <li className='mb-2'>
                                            <input type='checkbox' />
                                            <label className='ps-2'>Flying Machine</label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-9'>
                            <div className='row'>
                                <div className='col-md-3 col-6'>
                                    < div className="product card border-0">
                                        <div className='card-img'>
                                            <Link to='/product'>
                                                <img src={ProductImg} className='w-100' />
                                            </Link>

                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <Link to='/product'>Red check shirt for men</Link>
                                            <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    < div className="product card border-0">
                                        <div className='card-img'>
                                            <img src={ProductImg} className='w-100' />

                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <a>Red check shirt for men</a>
                                            <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    < div className="product card border-0">
                                        <div className='card-img'>
                                            <img src={ProductImg} className='w-100' />

                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <a>Red check shirt for men</a>
                                            <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 col-6'>
                                    < div className="product card border-0">
                                        <div className='card-img'>
                                            <img src={ProductImg} className='w-100' />

                                        </div>
                                        <div className="card-body px-0 pt-3">
                                            <a>Red check shirt for men</a>
                                            <div className='price'>$50 <span className='text-decoration-line-through'>$80</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
               
            </Layout>
        </>
    )
}
export default Shop
