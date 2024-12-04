
import Gallery from '../Gallery';
import Hero from '../Hero';
import PopularProducts from '../PopularProducts';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularProducts></PopularProducts>
            <Gallery></Gallery>
        </div>
    );
};

export default HomePage;