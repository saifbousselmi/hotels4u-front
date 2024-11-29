'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function HotelDetails({ selectedHotel }) {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');

  if (!selectedHotel) {
    return <p>Loading hotel details...</p>;
  }

  const {
    name,
    pricePerNight,
    location,
    description,
    photos,
    rating,
    region,
    phone,
    email,
    numberOfRooms,
  } = selectedHotel;

  const displayPhotos = (() => {
    if (photos.length >= 4) {
      return photos.slice(0, 4);
    }
    if (photos.length === 3) {
      return [...photos, photos[0]];
    }
    if (photos.length === 2) {
      return [...photos, ...photos];
    }
    if (photos.length === 1) {
      return Array(4).fill(photos[0]);
    }
    return [];
  })();

  return (
    <div>
      <div className="bg-white h-screen">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center justify-between space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li className="text-lg ">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500  hover:text-gray-600"
                >
                  {location}
                </a>
              </li>
              <li className="text-lg ">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-[#990000] hover:text-[#cc0000]"
                >
                  {name}
                </a>
              </li>

              <li className="text-lg ">
                <a
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500  hover:text-gray-600"
                >
                  {region}
                </a>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <img
              alt={`Hotel image 1`}
              src={displayPhotos[0]}
              className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"
            />
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              <img
                alt={`Hotel image 2`}
                src={displayPhotos[1]}
                className="aspect-[3/2] size-full rounded-lg object-cover"
              />
              <img
                alt={`Hotel image 3`}
                src={displayPhotos[2]}
                className="aspect-[3/2] size-full rounded-lg object-cover"
              />
            </div>
            <img
              alt={`Hotel image 4`}
              src={displayPhotos[3]}
              className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
            />
          </div>

          {/* Hotel info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-[#990000] hover:text-[#cc0000] sm:text-3xl">
                {name}
              </h1>
            </div>

            {/* Booking form */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Hotel information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${pricePerNight} / night
              </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, ratingIndex) => (
                      <StarIcon
                        key={ratingIndex}
                        aria-hidden="true"
                        className={classNames(
                          ratingIndex < rating
                            ? 'text-yellow-400'
                            : 'text-yellow-700',
                          'h-5 w-5'
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{rating} out of 5 stars</p>
                </div>
              </div>

              <form className="mt-10">
                <div className="grid gap-4">
                  <label className="text-sm font-medium text-gray-700">
                    First Night
                    <input
                      type="date"
                      value={selectedStartDate}
                      onChange={(e) => setSelectedStartDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </label>
                  <label className="text-sm font-medium text-gray-700">
                    Last Night
                    <input
                      type="date"
                      value={selectedEndDate}
                      onChange={(e) => setSelectedEndDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#990000] px-8 py-3 text-base font-medium text-white focus:ring-offset-2"
                >
                  Book
                </button>
              </form>
            </div>

            {/* Description and details */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <p className="mt-4 text-base text-gray-600">
                <strong>Phone:</strong> {phone}
              </p>
              <p className="mt-4 text-base text-gray-600">
                <strong>Email:</strong> {email}
              </p>
              <p className="mt-4 text-base text-gray-600">
                <strong>Number of Rooms:</strong> {numberOfRooms}
              </p>
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                Description
              </h3>
              <p className="mt-4 text-base text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
