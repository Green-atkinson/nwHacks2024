export default function Account() {
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
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Produce</h2>  
            <label htmlFor="UserEmail" className="block text-md font-medium text-gray-700"> Search </label>
            <input
              type="email"
              id="UserEmail"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
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
