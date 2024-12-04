import { useLoaderData } from "react-router-dom";
import bg from '../assets/images/more/11.png'
import test from '../assets/images/1.png'

const Details = () => {
    const coffeeData = useLoaderData()
    const { name, chef, supplier, taste, category, details, price, photo } = coffeeData;
    return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
        }}>
            <div className="bg-[#F4F3F0] rounded-lg shadow-lg py-6 max-w-2xl w-full flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="flex justify-center items-center mb-6 md:mb-0">
                    <img
                        src={test} 
                        alt="Coffee Cup"
                        className="md:w-52 h-auto"
                    />
                </div>

                {/* Details Section */}
                <div className="md:w-[60%] w-[50%] mx-auto md:mt-5">
                    <h2 className="md:text-xl text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{name}</h2>
                    <ul className="space-y-1">
                        <li>
                            <span className="font-semibold text-gray-700 text-lg">Price:</span> $ {price}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700 text-lg">Chef:</span> {chef}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700 text-lg">Category:</span> {category}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700 text-lg">Taste:</span> {taste}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700 text-lg">Supplier:</span> {supplier}
                        </li>
                        <li>
                            <span className="font-semibold text-gray-700 text-lg">Details:</span> {details}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Details;
