import React from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signin() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        await axios
            .post('http://localhost:4001/signin', userInfo)
            .then((res) => {
                console.log(res.data);

                // Store user info in localStorage after successful login
                localStorage.setItem('Users', JSON.stringify(res.data));

                toast.success("🎉 User logged in successfully!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { background: '#4CAF50', color: '#fff' },
                    icon: "🚀",
                });

                // Redirect to admin home
                navigate('/admin/home', { replace: true });
            })
            .catch((err) => {
                console.error(err);
                toast.error(`❌ Failed to log in: ${err.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    style: { background: '#f44336', color: '#fff' },
                    icon: "⚠️",
                });
            });
    };

    return (
        <>
            <div
                className="min-h-screen bg-cover bg-center flex justify-center items-center"
                style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}
            >
                <div className="bg-white bg-opacity-80 rounded-lg shadow-lg max-w-md w-full p-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Login Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register('email', { required: true })}
                            />
                            {errors.email && (
                                <span className="text-red-500 text-xs">This field is required</span>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Your Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register('password', { required: true })}
                            />
                            {errors.password && (
                                <span className="text-red-500 text-xs">This field is required</span>
                            )}
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Log In
                            </button>
                        </div>

                        <p className="text-center text-gray-500 mt-5">
                            Are you registered?{' '}
                            <Link to="/admin/signup" className="text-blue-500 hover:text-blue-800 font-bold">
                                Signup here
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
