export default function Home() {
  const fontURL = 'https://fonts.googleapis.com/css2?family=Lilita+One&display=swap';
  return (
    <div className="flex flex-col h-screen">
      <header className='custom-green border-green'>
        <div className="mx-auto max-w-screen-xl h-10 px-4 py-8 sm:flex sm:items-center sm:py-12 ">
          {/* profile picture */}
          <div className="flex-shrink-0">
            <img
              className="h-14 w-14 mr-5 rounded-full object-cover border-green"
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"  // Replace with your actual profile picture URL
              alt="Profile"
            />
          </div>

          {/* header */}
          <div className  ="sm:flex sm:items-center sm:justify-between w-full">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Username</h1>
            </div>

            <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-lg font-bold text-gray-900 px-2 sm:text-xl">My Garden</h1>
              <h1 className="text-lg font-bold text-gray-900 px-8 sm:text-xl">Settings</h1>
              <button
                className="block rounded-lg custom-brown px-6 py-3 w-174 h-63 text-xl font-bold border-brown underline transition hover:shadow-md focus:border-none focus:ring"
                type="button">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-grow p-7">
        {/* Section 1 */}
        <div className="custom-green border-green py-5 flex-shrink-0 w-1/5 rounded-lg">
          <div className="mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Produce</h2>
              <label
                htmlFor="Username"
                className="relative block rounded-md shadow-sm focus-within:border-green focus-within:ring-1 focus-within:border-green"
              >
                <input
                  type="text"
                  id="Username"
                  className="peer border-none placeholder-transparent focus:outline-none focus:ring-0"
                  placeholder="Username"
                />

                <span
                  className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
                >
                  Username
                </span>
              </label>
            {/* Add content for Section 1 */}
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-color-white py-5 flex-shrink-0 w-3/5 ">
          <div className="mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">My Garden</h2>
            {/* Add content for Section 2 */}
          </div>
        </div>

        {/* Section 3 */}
        <div className="custom-green border-green py-5 flex-shrink-0 w-1/5 rounded-lg">
          <div className="mx-auto max-w-screen-xl px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Basket</h2>
            {/* Add content for Section 3 */}
          </div>
        </div>
      </div>
    </div>
  );
}
