import img1 from '../assets/images/cups/1.png'
import img2 from '../assets/images/cups/2.png'
import img3 from '../assets/images/cups/3.png'
import img4 from '../assets/images/cups/4.png'
import img5 from '../assets/images/cups/5.png'
import img6 from '../assets/images/cups/6.png'
import img7 from '../assets/images/cups/7.png'
import img8 from '../assets/images/cups/8.png'

const Gallery = () => {
    return (
        <div className='w-10/12 mx-auto my-12'>
            <div className="flex flex-col justify-center items-center mb-8">
                <h2 className="text-xl font-normal">Follow Us Now</h2>
                <h3 className="text-5xl text-[#331A15] drop-shadow-2xl font-semibold mt-2">Follow on Instagram</h3>
            </div>
            {/* photo album */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 group">
                <img src={img1} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img2} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img3} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img4} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img5} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img6} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img7} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
                <img src={img8} alt="gallery-images" className='w-full group-hover:blur-sm hover:!blur-none group-hover:scale-95 hover:!scale-100 duration-1000'/>
            </div>
        </div>
    );
};

export default Gallery;