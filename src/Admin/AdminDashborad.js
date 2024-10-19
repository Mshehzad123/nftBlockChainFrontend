import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const dataInfo = {
      name: data.name,
      email: data.email,
      password: data.password
    };

    await axios.post('http://localhost:4001/signup', dataInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("🎉 User created successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon: "🚀"
          });
          navigate('/admin/home', { replace: true });

          localStorage.setItem("Users", JSON.stringify({
            id: res.data._id,
            name: res.data.name,
            email: res.data.email
          }));
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(`❌ Failed to create user, user already exists: ${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          icon: "⚠️"
        });
      });
  };
  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create an account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
            <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Your Email</label>
            <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Your Password</label>
            <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500 text-xs">This field is required</span>}
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </div>

          <p className="text-center text-gray-500 mt-5">Already have an account? <Link to='/admin/signin' className="text-blue-500 hover:text-blue-800 font-bold">Login here</Link></p>
        </form>
      </div>
    </div>
  );
}
