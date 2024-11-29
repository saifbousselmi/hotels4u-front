import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Importing Heroicons for toggle icons
import { login } from '../JS/Actions/AuthActions';

console.log(login)
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, errors } = useSelector(state => state.AuthReducer);

    // Component state
    const [user, setUser] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false); // Toggle visibility of password

    // Handle form input changes
    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = { 
            email: user.email, 
            phone: user.phone,  // If the user has a phone number, include it
            password: user.password 
        };
        dispatch(login(loginData, navigate)); // Pass the login data with email/phone
    };
    

    // Log errors for debugging
    useEffect(() => {
        if (errors) console.log('Errors:', errors);
    }, [errors]);

    // Normalize errors for consistent rendering
    const errorMessages = Array.isArray(errors)
    ? errors.map(err => (typeof err === 'object' ? err.msg : err))  // Extract msg if it's an object
    : errors && typeof errors === 'object'
    ? Object.values(errors).flat().map(err => (typeof err === 'object' ? err.msg : err))  // Same for object
    : typeof errors === 'string'
    ? [errors]
    : [];

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={user.email}
                                placeholder="Enter your email address"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="text-sm">
                                <Link
                                    to="/forgot-password"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            <input
                                onChange={handleChange}
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                value={user.password}
                                placeholder="Enter your password"
                                autoComplete="current-password"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                {showPassword ? (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                    </div>

                    {errorMessages.length > 0 && (
    <div className="text-red-500">
        {errorMessages.map((error, index) => (
            <div key={index}>{error}</div>
        ))}
    </div>
)}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                                loading
                                    ? 'bg-gray-400'
                                    : 'bg-indigo-600 hover:bg-indigo-500'
                            } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{' '}
                    <Link
                        to="/register"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Register now
                    </Link>
                </p>
            </div>
        </div>
    );
}
