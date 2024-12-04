import { Link, useLoaderData } from "react-router-dom";
import coffeeBg from "../assets/images/more/11.png";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffeeData = useLoaderData()
    const { name, chef, supplier, taste, category, details, price, photo } = coffeeData;

    const handleUpdateCoffee = (e) => {
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

        const updatedCofffee = { name, chef, supplier, taste, category, details, price, photo }

        fetch(`https://coffee-emporium-server-six.vercel.app/coffees/${coffeeData._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCofffee)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee Updatedd",
                        showConfirmButton: true,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "Ok"
                    });
                    form.reset();
                }
            })
    }


    return (
        <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 mb-16" style={{
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
            <div className="max-w-4xl mx-auto bg-[#F4F3F0] shadow-md rounded-lg p-8">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                    Update {name}
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using Content here.
                </p>

                {/* Form */}
                <form onSubmit={handleUpdateCoffee} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                defaultValue={name}
                                placeholder="Enter coffee name"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Chef */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Chef
                            </label>
                            <input
                                type="text"
                                name="chef"
                                required
                                defaultValue={chef}
                                placeholder="Enter coffee chef"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Supplier */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Supplier
                            </label>
                            <input
                                type="text"
                                name="supplier"
                                required
                                defaultValue={supplier}
                                placeholder="Enter coffee supplier"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Taste */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Taste
                            </label>
                            <input
                                type="text"
                                name="taste"
                                required
                                defaultValue={taste}
                                placeholder="Enter coffee taste"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                required
                                defaultValue={category}
                                placeholder="Enter coffee category"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* Details */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Details
                            </label>
                            <input
                                type="text"
                                name="details"
                                required
                                defaultValue={details}
                                placeholder="Enter coffee details"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        {/* photo, proce */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                required
                                defaultValue={price}
                                placeholder="Enter photo URL"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Photo
                            </label>
                            <input
                                type="text"
                                name="photo"
                                required
                                defaultValue={photo}
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
                        Update Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;