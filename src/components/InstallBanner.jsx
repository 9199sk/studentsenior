const InstallBanner = () => {
  return (
    // dark mode gradient colors to be darker (gray-900 to gray-800)
    <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around gap-4 p-4 pr-6 py-8">
          {/* Left section with icon and text */}
          <div className="flex items-center gap-3">
          
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-500 p-2 text-white shadow-lg transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinelinejoin="round"
                  strokeWidth="2"
                  d="M9 3h6m-6 18h6M8 4a2 2 0 012-2h4a2 2 0 012 2v16a2 2 0 01-2 2h-4a2 2 0 01-2-2V4zm4 14v.01"
                />
              </svg>
            </div>
            <div>
   
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 transition-colors">
                Install the app for quicker access!
              </h3>
          
              <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors">
                Better experience on mobile!
              </p>
            </div>
          </div>


          <button className="flex items-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-blue-300 dark:hover:shadow-blue-400 active:scale-95">
            <span>Install Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallBanner;