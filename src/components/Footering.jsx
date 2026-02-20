import React from 'react'

const Footering = () => {
  return (
    <div>
      <footer className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white mt-20">

        <div className="max-w-6xl mx-auto px-6 py-14 
                        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide mb-5 
                           bg-gradient-to-r from-emerald-300 to-emerald-500 
                           bg-clip-text text-transparent">
              🍽 Meal Explorer
            </h2>

            <p className="text-sm text-emerald-200 leading-relaxed 
                          border-l-4 border-emerald-400 pl-4">
              Discover, search and explore delicious meals from around the world.  
              Your journey to tasty recipes starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Quick Links
              <span className="block h-1 w-10 bg-emerald-400 rounded-full mt-2"></span>
            </h3>

            <ul className="space-y-3 text-sm text-emerald-200">
              {["Home", "Search Meals", "Favorites"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white hover:pl-2 transition-all duration-300 inline-block"
                  >
                    → {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Popular
              <span className="block h-1 w-10 bg-emerald-400 rounded-full mt-2"></span>
            </h3>

            <ul className="space-y-3 text-sm text-emerald-200">
              <li className="hover:text-white transition duration-300 hover:scale-105">
                Vegetarian
              </li>
              <li className="hover:text-white transition duration-300 hover:scale-105">
                Chicken
              </li>
              <li className="hover:text-white transition duration-300 hover:scale-105">
                Dessert
              </li>
              <li className="hover:text-white transition duration-300 hover:scale-105">
                Seafood
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5 relative inline-block">
              Stay Updated
              <span className="block h-1 w-10 bg-emerald-400 rounded-full mt-2"></span>
            </h3>

            <p className="text-sm text-emerald-200 mb-4">
              Subscribe to get latest recipes.
            </p>

            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-black outline-none"
              />
              <button className="bg-emerald-500 hover:bg-emerald-400 
                                 px-5 py-2 font-semibold 
                                 transition duration-300">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 text-center py-5 text-sm text-emerald-300">
          © {new Date().getFullYear()} Meal Explorer • Made with ❤️ for food lovers
        </div>

      </footer>
    </div>
  )
}

export default Footering