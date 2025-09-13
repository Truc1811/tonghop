import React, { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import ProductImg from '../../assets/images/Mens/five.jpg'
import ProductImgTwo from '../../assets/images/Mens/six.jpg'
import ProductImgThree from '../../assets/images/Mens/seven.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Rating } from 'react-simple-star-rating'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4.5)

    return (
        <Layout>
            <div className='container product-detail mt-2'>
                <div className='row px-5'>
                    <div className='col-md-12'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item "><Link to="/shop">Shop</Link></li>
                                <li className="breadcrumb-item active"><Link to="/">Dummy Product Title</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className='row px-5 mb-5'>
                    <div className='col-md-5'>
                        <div className='row'>
                            {/* Thumbnails */}
                            <div className='col-3 col-md-2'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                        // height: '320px'
                                    }}
                                    onSwiper={setThumbsSwiper}
                                    loop={false}
                                    direction="vertical"
                                    spaceBetween={10}
                                    slidesPerView={3}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper mt-2"
                                >
                                    <SwiperSlide>
                                        <img src={ProductImg} alt="" className='w-100' height={100} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={ProductImgTwo} alt="" className='w-100' height={100} />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={ProductImgThree} alt="" className='w-100' height={100} />
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            {/* Main Image */}
                            <div className='col-9 col-md-10'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                    }}
                                    loop={false}
                                    spaceBetween={0}
                                    navigation={true}
                                    thumbs={thumbsSwiper && !thumbsSwiper.destroyed ? { swiper: thumbsSwiper } : undefined}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img src={ProductImg} alt="" className='w-100' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={ProductImgTwo} alt="" className='w-100' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={ProductImgThree} alt="" className='w-100' />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className='col-md-7'>
                        <h2>Dummy Product Title</h2>
                        <div className='d-flex'>
                            <Rating size={20} readonly initialValue={rating} />
                            <span className='pt-1 ps-2'>10 reviews</span>
                        </div>
                        <div className='price h2 py-3'>
                            $20 <span className='text-decoration-line-through'>$18</span>
                        </div>
                        <div>
                            100% Original Products <br />
                            Pay on delivery might be available <br />
                            Easy 15 days return and exchanges
                        </div>
                        <div className="pt-3">
                            <strong>Select Sizes</strong>
                            <div className="sizes pt-2">
                                <button className="btn btn-size ms-1">S</button>
                                <button className="btn btn-size ms-1">M</button>
                                <button className="btn btn-size ms-1">L</button>
                                <button className="btn btn-size ms-1">XL</button>
                            </div>
                        </div>
                        <div className='add-to-cart mt-4'>
                            <button className='btn btn-primary text-uppercase'>Add to cart</button>
                        </div>
                        <hr />
                        <div>
                            <strong>SKU:</strong> FFGG5
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className='row px-5 pb-5'>
                    <div className='col-md-12'>
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="Description">
                                Tab content for Description
                            </Tab>
                            <Tab eventKey="profile" title="Review (10)">
                                Reviews Area
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Product
