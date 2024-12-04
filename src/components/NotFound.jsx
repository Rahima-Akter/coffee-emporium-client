import { Link } from 'react-router-dom';
import notFound from '../assets/images/404/404.gif'

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <img src={notFound} alt="404 not found img" className='relative'/>
                <Link to='/'
                        type="submit"
                        className="px-6 py-2 bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] hover:text-white font-bold text-lg rounded hover:font-normal hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 transition duration-700 absolute left-[50% lg:bottom-12 md:bottom-28 bottom-40"
                    >
                       ← Go back home
                    </Link>
            </div>
        </div>
    );
};

export default NotFound;