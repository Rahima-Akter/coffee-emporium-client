import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import bg1 from "../assets/images/more/4.png";
import bg2 from "../assets/images/more/5.png";
import btn from "../assets/images/more/btn-cup.png";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const PopularProducts = () => {
  const navigate = useNavigate()

  const data = useLoaderData()
  const [products, setProducts] = useState(data)

  const handleDelete = id => {

    fetch(`https://coffee-emporium-server-six.vercel.app/coffees/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your selected coffee has been deleted.",
                icon: "success"
              });
              const remaining = products.filter(product => product._id !== id)
              setProducts(remaining);
            }
          });
        }
      })
  }

  return (
    <section
      className="py-10 relative overflow-hidden mt-10"
      style={{
        backgroundImage:
          ` url(${bg1}) , url(${bg2})`,
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "200px, 200px",
      }}
    >
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className="text-xl font-normal">--- <span>Sip & Savor</span> ---</h2>
        <h3 className="text-5xl text-[#331A15] drop-shadow-2xl font-semibold mt-2">Our Popular Products</h3>
        <button className="mt-4 px-4 py-2 bg-[#E3B577] border-2 border-[#331A15] text-lg text-white font-bold rounded hover:bg-yellow-700 flex items-center gap-2">
          Learn More <span><img src={btn} alt="" /></span>
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid gap-6 px-4 lg:px-28 lg:py-8 md:px-20 grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-[#F5F4F1] bg-opacity-70 rounded-lg px-4 flex justify-between items-center shadow-lg hover:shadow-none transition-shadow duration-300"
          >
            {/* Product Image */}
            <img
              src={product.photo}
              alt={product.name}
              className="md:h-44 h-40"
            />

            {/* Product Details */}
            <div className="flex-1 md:pl-12">
              <h4 className="lg:text-2xl md:text-2xl font-semibold mb-1">{product.name}</h4>
              <p className="lg:text-xl md:text-lg text-gray-600">Chef: {product.chef}</p>
              <p className="lg:text-xl md:text-lg text-gray-600">Price: $ {product.price}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col space-y-2">
              <button onClick={() => navigate(`/details/${product._id}`)} className="p-3 bg-yellow-500 rounded hover:bg-yellow-600">
                <FaEye />
              </button>
              <Link to={`/updateCoffee/${product._id}`} className="p-3 bg-yellow-500 rounded hover:bg-yellow-600">
                <FaPen />
              </Link>
              <button onClick={() => handleDelete(product._id)} className="p-3 rounded bg-red-500 hover:bg-red-600">
                <FaTrash></FaTrash>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
