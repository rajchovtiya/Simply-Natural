import React from 'react';
import { useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../logic/Store';

const Checkout = () => {
  const { cart }   = useSelector((s) => s.shop);
  const total      = useSelector(selectTotalPrice);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log('Billing Details:', data);

  return (
    <div className="bg-[#f9f9f9] padding mt-20">
      <div className="bg-white py-20 mt-6 px-4 lg:px-20">
        <h1 className="text-4xl font-light">Checkout</h1>
        <div className="border-t-2 border-black mt-4" />

        {/* ------------ single form for everything ------------ */}
        <form onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col lg:flex-row gap-8 mt-8">

          {/* -------- Billing column -------- */}
          <div className="w-full lg:w-3/5 bg-white shadow-md rounded-lg p-6 pt-0">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Billing Details</h2>

            {Object.keys(errors).length > 0 && (
              <div className="mb-4 bg-red-100 border border-red-300 text-red-700 p-3 rounded">
                Please fill in all required fields marked with *
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First‑Name */}
              <div>
                <label className="block mb-1 font-medium opacity-50 text-[14px]">First Name *</label>
                <input
                  {...register('firstName', { required: 'First name is required' })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>

              {/* Last‑Name */}
              <div>
                <label className="block mb-1 font-medium opacity-50 text-[14px]">Last Name *</label>
                <input
                  {...register('lastName', { required: 'Last name is required' })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>

              {/* Company (optional) */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">
                  Company name (optional)
                </label>
                <input
                  {...register('company')}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Company name"
                />
              </div>

              {/* Country */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">Country / Region *</label>
                <select
                  {...register('country', { required: 'Country is required' })}
                  className="w-full border rounded px-3 py-2 bg-white"
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Canada</option>
                </select>
                {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
              </div>

              {/* Street */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">Street address *</label>
                <input
                  {...register('street', { required: 'Street address is required' })}
                  className="w-full border rounded px-3 py-2"
                  placeholder="House number and street name"
                />
                {errors.street && <p className="text-red-500 text-sm">{errors.street.message}</p>}
              </div>

              {/* Town / City */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">Town / City *</label>
                <input
                  {...register('city', { required: 'City is required' })}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
              </div>

              {/* State */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">State *</label>
                <select
                  {...register('state', { required: 'State is required' })}
                  className="w-full border rounded px-3 py-2 bg-white"
                >
                  <option value="">Select a state…</option>
                  <option>Andhra Pradesh</option>
                  <option>Gujarat</option>
                  <option>Maharashtra</option>
                  {/* ...other states... */}
                </select>
                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
              </div>

              {/* PIN */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">PIN Code *</label>
                <input
                  {...register('pin', { required: 'PIN code is required' })}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.pin && <p className="text-red-500 text-sm">{errors.pin.message}</p>}
              </div>

              {/* Phone */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">Phone *</label>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium opacity-50 text-[14px]">Email address *</label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
                  })}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
            </div>
          </div>

          {/* -------- Order summary column -------- */}
          <div className="w-full lg:w-2/5 border border-gray-300 h-max p-4 pt-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Your order</h2>

            <div className="flex justify-between border-b border-gray-200 pb-2">
              <h3>Product</h3>
              <h3>Subtotal</h3>
            </div>

            {cart.map(item => (
              <div key={item.id} className="flex justify-between mt-4 border-b border-gray-200 pb-2">
                <h3 className="flex items-center gap-1 text-[16px] opacity-80">
                  {item.title} <IoMdClose className="text-[10px]" /> {item.quantity}
                </h3>
                <h3 className="opacity-85">${(item.price * item.quantity).toFixed(2)}</h3>
              </div>
            ))}

            <div className="flex justify-between mt-4 border-b border-gray-200 pb-2">
              <h3 className="text-[16px] opacity-80">Subtotal</h3>
              <h3 className="opacity-85">${total.toFixed(2)}</h3>
            </div>

            <div className="flex justify-between mt-4 border-b border-gray-200 pb-2">
              <h3 className="font-semibold text-[16px] opacity-80">Total</h3>
              <h3 className="font-bold opacity-85">${total.toFixed(2)}</h3>
            </div>

            {/* ---- submit button INSIDE form ---- */}
            <button
              type="submit"
              className="mt-6 w-full bg-[#fc5f5f] hover:bg-[#75c32c] text-white py-3 rounded-3xl font-semibold transition duration-300"
            >
              PLACE ORDER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
