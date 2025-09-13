import React from 'react'
import ProductImg from '../../assets/images/eight.jpg'


const LatestProduct = () => {
    return (
        <>
            <section className='section-2 py-5'>
                <div className='container px-5'>
                    <h2>New Arrival</h2>
                    <div className='row mt-4 '>
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

            </section>
        </>
    )
}
export default LatestProduct
