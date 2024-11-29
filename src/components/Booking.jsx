import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export default function BookingModal({ isOpen, setIsOpen, hotel }) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white rounded-md shadow-lg p-6 max-w-md">
          <h2 className="text-lg font-bold">Book {hotel.name}</h2>
          <p>{hotel.description}</p>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md"
          >
            Confirm Booking
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
