

import 'swiper/css';
import Button from 'react-bootstrap/Button';
import LatestProduct from './LatestProduct';
import FeaturedProduct from './FeaturedProduct';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import Hero from './Hero';
const Home = () => {
    return (
        <>
            <Layout>
                <Hero/>
                <LatestProduct />
                <FeaturedProduct />
            </Layout>

        </>
    )
}
export default Home
