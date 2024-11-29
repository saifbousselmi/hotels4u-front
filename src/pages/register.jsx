import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../JS/Actions/AuthActions"; // Import register action

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    companyName: '',
    businessAddress: '',
    businessPhone: '',
  });

  const [role, setRole] = useState("customer"); // Default role is 'customer'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Include the role in the user data when dispatching the registration action
    const userData = { ...newUser, role }; 

    // Dispatch register action with user data
    dispatch(register(userData, navigate, setError, setLoading));
  }

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 md:py-24">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>

        {error && <div className="text-red-500 text-center">{error}</div>}

        <div className="flex justify-center mt-4 space-x-4">
          {/* Role Selection */}
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="customer"
              checked={role === "customer"}
              onChange={() => setRole("customer")}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">Customer</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="owner"
              checked={role === "owner"}
              onChange={() => setRole("owner")}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">Owner</span>
          </label>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Properties */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <input
              onChange={handleChange}
              id="firstName"
              type="text"
              required
              className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <input
              onChange={handleChange}
              id="lastName"
              type="text"
              required
              className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              required
              className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <input
              onChange={handleChange}
              id="password"
              type="password"
              required
              className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
              Phone
            </label>
            <input
              onChange={handleChange}
              id="phone"
              type="tel"
              required
              className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
            />
          </div>

          {/* Owner-Specific Properties */}
          {role === "owner" && (
            <>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                  Company Name
                </label>
                <input
                  onChange={handleChange}
                  id="companyName"
                  type="text"
                  required
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>
              <div>
                <label htmlFor="businessAddress" className="block text-sm font-medium leading-6 text-gray-900">
                  Business Address
                </label>
                <input
                  onChange={handleChange}
                  id="businessAddress"
                  type="text"
                  required
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>
              <div>
                <label htmlFor="businessPhone" className="block text-sm font-medium leading-6 text-gray-900">
                  Business Phone
                </label>
                <input
                  onChange={handleChange}
                  id="businessPhone"
                  type="tel"
                  required
                  className="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 rounded-md bg-indigo-600 text-white font-semibold"
            >
              {loading ? 'Registering...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
