import { CheckIcon, UserIcon, BriefcaseIcon } from '@heroicons/react/20/solid';

export default function About() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl mt-16 lg:max-w-4xl">
      
  {/* Background elements */}
  <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#243142] to-[#4C6A7A] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* Quote Section 1 */}
        <figure className="mt-10">
          <div className="flex items-center justify-center space-x-3">
            <UserIcon style={{color:"#BA0819"}} className="w-6 h-6 " />
            <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
          </div>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 mt-4">
            <p>
              “At Hotels4U, we strive to make hotel reservations effortless and tailored for everyone. Whether you're seeking a luxury getaway in the heart of Tunisia or a cozy stay along the coast, we connect you to exceptional destinations and experiences, all at your fingertips.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="CEO of Hotels4U"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Amira Louati</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Hotels4U</div>
            </div>
          </figcaption>
        </figure>
  {/* Background elements */}
  <div
          aria-hidden="true"
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#243142] to-[#4C6A7A] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        {/* Quote Section 2 */}
        <figure className="mt-20 ">
          <div className="flex items-center justify-center space-x-3">
            <BriefcaseIcon style={{color:"#BA0819"}} className="w-6 h-6 " />
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
          </div>
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 mt-4">
            <p>
              “Hotels4U is more than just a booking platform. We offer personalized travel experiences by connecting you with the best hotels around Tunisia, whether you're here for a business trip, a family vacation, or a romantic getaway. Our mission is to make your stay memorable and effortless.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt="CEO of Hotels4U"
              src="https://tailwindui.com/plus/img/avatar-3.jpg"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Yosser Hannechi</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Hotels4U</div>
            </div>
            
          </figcaption>
          
        </figure>
      </div>
    </section>
  );
}
