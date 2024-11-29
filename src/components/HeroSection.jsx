export default function HeroSection() {
  return (
    <div className="bg-white ">
      <div className="relative isolate px-6 lg:px-8">
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
        
        {/* Main Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 md:py-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative mt-1 rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Discover the best deals for your next vacation.{" "}
              <a style={{color:"#BA0819"}} href="/hotels" className="font-semibold">
                <span aria-hidden="true" className="absolute inset-0" />
                Book now <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Book Your Stay, Enjoy Your Escape
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Explore top-rated hotels, resorts, and vacation homes at unbeatable prices. Your dream getaway is just a click away.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/hotels"
                className="rounded-md bg-gradient-to-r from-[#243142] to-[#4C6A7A] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-[#4C6A7A] hover:to-[#243142] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243142]"
              >
                Book Your Stay
              </a>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn More <span aria-hidden="true" className="text-[#BA0819]">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Background Elements (continued) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#243142] to-[#4C6A7A] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
