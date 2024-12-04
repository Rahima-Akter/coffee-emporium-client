import { Link } from "react-router-dom";
import coffeeBg from "../assets/images/more/11.png";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const coffeeData = { name, chef, supplier, taste, category, details, price, photo }
        console.log(coffeeData)

        fetch('https://coffee-emporium-server-six.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee Added",
                        showConfirmButton: true,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ok"
                    });
                    form.reset()
                }
            })
    };


    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 mb-1 text-xl6" style={{
            backgroundImage: `url(${coffeeBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            {/* Back to Home */}
            <Link
                to="/"
                className="text-[#331A15] text-lg hover:bg-[#be9d71] flex items-center mb-6 px-4 py-2 bg-[#D2B48C] border-2 border-[#331A15] rounded-md w-36 duration-700"
            >
                <span className="mr-2">←</span> Back to Home
            </Link>

            {/* Form Container */}
            <div className="max-w-4xl mx-auto bg-[#F4F3F0] shadow-md rounded-lg p-8 my-10">
                {/* Title */}
                <h2 className="lg:text-4xl text-2xl drop-shadow-xl font-bold text-center text-gray-800 mb-4">
                    Add New Coffee
                </h2>
                <p className="text-center text-gray-600 mb-8 lg:px-24">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using Content here.
                </p>

                {/* Form */}
                <form onSubmit={handleAddCoffee} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter coffee name"
                                required
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Chef */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Chef
                            </label>
                            <input
                                type="text"
                                name="chef"
                                placeholder="Enter coffee chef"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Supplier */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Supplier
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                required
                                placeholder="Enter coffee supplier"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Taste */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Taste
                            </label>
                            <input
                                type="text"
                                name="taste"
                                required
                                placeholder="Enter coffee taste"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                required
                                placeholder="Enter coffee category"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Details */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Details
                            </label>
                            <input
                                type="text"
                                name="details"
                                required
                                placeholder="Enter coffee details"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* photo, proce */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                required
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 text-xl">
                                Photo
                            </label>
                            <input
                                type="text"
                                name="photo"
                                required
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-6 py-2 bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] hover:text-white font-bold text-lg rounded hover:font-normal hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-500 transition duration-700"
                    >
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
