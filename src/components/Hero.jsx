import heroBg from '../assets/images/more/3.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'

const Hero = () => {
    return (
        <section className="bg-black text-white z-0">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={heroBg}
                    alt="Coffee Beans"
                    className="w-full h-[80vh] object-cover opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-10"></div>
                <div className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] md:w-1/2 w-[90%] md:px-5'>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        It's coffee time - Sip & Savor. Relaxation in every sip! Get the nostalgic bliss!
                        Your companion of every moment. Enjoy the beautiful moments and make them memorable.
                    </p>
                    <div className='flex justify-center'>
                        <button className="px-6 py-3 bg-[#E3B577] hover:border-white hover:border duration-700 text-black hover:bg-transparent hover:text-white font-semibold">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>


            {/* Features Section */}
            <div className="bg-[#ECEAE3] text-black py-6 px-6 md:px-20 grid gap-6 md:grid-cols-4">
                <div className="text-center">
                    <img src={icon1} alt="" className='mx-auto mb-2' />
                    <h3 className="text-xl font-bold mb-2">Awesome Aroma</h3>
                    <p className="text-sm w-[70%] mx-auto">
                        You will definitely be a fan of the design & aroma of your coffee.
                    </p>
                </div>
                <div className="text-center">
                    <img src={icon2} alt="" className='mx-auto mb-2' />
                    <h3 className="text-xl font-bold mb-2">High Quality</h3>
                    <p className="text-sm w-[70%] mx-auto">
                        We served the coffee to you maintaining the best quality.
                    </p>
                </div>
                <div className="text-center">
                    <img src={icon3} alt="" className='mx-auto mb-2' />
                    <h3 className="text-xl font-bold mb-2">Pure Grades</h3>
                    <p className="text-sm w-[70%] mx-auto">
                        The coffee is made of the green coffee beans which you will love.
                    </p>
                </div>
                <div className="text-center">
                    <img src={icon4} alt="" className='mx-auto mb-2' />
                    <h3 className="text-xl font-bold mb-2">Proper Roasting</h3>
                    <p className="text-sm w-[70%] mx-auto">
                        Your coffee is brewed by first roasting the green coffee beans.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
