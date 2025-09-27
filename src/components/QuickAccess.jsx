import InstallBanner from "./InstallBanner";
import FAQSection from "./FAQSection";
const items = [
  { name: "PYQs", icon: "⚡" },
  { name: "Notes", icon: "📒" },
  { name: "Resources", icon: "📂" },
  { name: "Seniors", icon: "👨‍🎓" },
  { name: "Store", icon: "🏪" },
  { name: "Community", icon: "🌐" },
];

const itemsPlatform = [
  { name: "PYQs Available", icon: "📒", count: '1000 +' },
  { name: "Senior Guide", icon: "👨‍🎓", count: '35 +' },
  { name: "Active User", icon: "👨‍🎓", count:' 3500 +' },
  { name: "Product Sold", icon: "🏪" },
];

// Features Section Component
const FeaturesSection = () => {
  const features = [
    {
      title: "PYQ Access",
      description:
        "Access past year question papers, understand trends, and improve strategies.",
      icon: "📝",
    },
    {
      title: "Senior Mentorship",
      description:
        "Gain expert mentorship and support from seniors for academic and career guidance.",
      icon: "👨‍🎓",
    },
    {
      title: "Student Store",
      description:
        "Discover and sell essential academic supplies to help you support your preparation.",
      icon: "🏪",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title correctly switches color */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12 transition-colors">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Card background correctly switches
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4 transition-colors">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              {/* Feature title text correctly switches */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                {feature.title}
              </h3>
              {/* Feature description text correctly switches */}
              <p className="text-gray-600 dark:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};







export default function QuickAccess() {
  return (
    <>
     <div className="bg-white dark:bg-gray-800 transition-colors duration-500">
  <h2 className="text-center text-3xl p-4 ">
    
    <span className="text-3xl sm:text-4xl font-extrabold text-blue-900 dark:text-blue-400 transition-colors">
      Quick Access
    </span>
  </h2>
  <section className="flex justify-center items-center p-4">
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          // The background of the buttons themselves is a fixed gradient (bg-gradient-to-b), so it won't change, which is typically desired for colorful buttons.
          className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-b from-blue-400 to-blue-800 flex flex-col items-center justify-center rounded-full shadow-lg cursor-pointer transition-all 
          hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:scale-105 duration-300"
        >
          <span className="text-3xl sm:text-4xl text-white">
            {item.icon}
          </span>
          <p className="mt-2 text-sm sm:text-base text-white dark:text-white font-medium">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  </section>
</div>
      
    <InstallBanner></InstallBanner>
   
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="text-center mb-10">
      
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white transition-colors">
            A Platform Trusted by Students
          </h2>
        
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mt-3 max-w-2xl mx-auto transition-colors">
            Explore the impact we've made with our resources, community, and
            products!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {itemsPlatform.map((item, i) => (
            <div
              key={i}
              // dark background and dark border to the stat cards
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 text-center
              transition-all duration-300 hover:scale-105 hover:shadow-lg
              border border-gray-100 dark:border-gray-700"
            >
              {/* dark background to the icon circle  */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 transition-colors">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <div className="space-y-2">
                {/*dark mode text color for the count */}
                <h3 className="text-3xl sm:text-4xl font-extrabold text-blue-700 dark:text-blue-400 transition-colors">
                  {item.count || "1K+"}
                </h3>
                {/*dark mode text color for the label */}
                <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    
       <FeaturesSection />
      <FAQSection />
      {/* Footer component */}
      <footer className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-700 dark:text-gray-400">
                Email: support@studentsenior.com
              </p>
              <p className="text-gray-700 dark:text-gray-400">
                Tel: +91 1234567890
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    T&C
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
 
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {/* Facebook SVG */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {/* Twitter SVG */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {/* LinkedIn SVG */}
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Download App</h3>
    
              <button className="bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.928 3.072c-1.008-.928-2.016-1.856-3.024-2.784-1.008.928-2.016 1.856-3.024 2.784-2.016-.928-4.032-1.856-6.048-2.784 0 6.832 0 13.664 0 20.496 2.016-.928 4.032-1.856 6.048-2.784 1.008.928 2.016 1.856 3.024 2.784 1.008-.928 2.016-1.856 3.024-2.784 2.016.928 4.032 1.856 6.048 2.784 0-6.832 0-13.664 0-20.496-2.016.928-4.032 1.856-6.048 2.784z" />
                </svg>
                <span>Install App</span>
              </button>
            </div>
          </div>
         
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 Student Senior. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}