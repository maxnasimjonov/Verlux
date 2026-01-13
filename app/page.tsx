import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 pb-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-gray-900 cloudinary-video-container">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=abdulgafar4&public_id=overview_igxyad&profile=cld-looping&autoplay=true&muted=true&loop=true&controls=false"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77777778vh',
              zIndex: 0,
              border: 'none',
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none" style={{ zIndex: 1 }}></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight text-white">
              Quality Comes First
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assests/masonry-restoration-brick-repointing-01.JPG"
                alt="Construction team at work"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
                About Our Construction Company
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our team of qualified and experienced professionals can be trusted with all your Commercial, Industrial, and Residential projects. When you choose Verlux, you are getting experienced, qualified, and innovative expertise. We have the knowledge and creativity to turn your ideas into a reality. Your satisfaction is our number one priority. We strongly believe in building relationships that last.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-gray-900 text-center">
            What Makes Us Different
          </h2>
          
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              Since 2005, Verlux has been committed to doing things differently. We've identified the common challenges in the construction industry and built our company around solving them.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Industry Challenges</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Less than desirable quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Dishonest business practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Missed deadlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Cost overruns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Lack of communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Unprofessional appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Safety concerns</span>
                </li>
              </ul>
            </div>
            
            <p>
              There is absolutely no excuse for unprofessionalism. When you trust a company to do work, you should get everything you agreed upon, without compromise on quality or missed deadlines. Our goal is to give our customers the best experience possible.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Foundational Pillars</h3>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Clear and concise communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Honest and transparent transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Highest level of quality and craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Safety for both employees and customers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Strict adherence to budget and timelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-3">•</span>
                  <span>Utmost professionalism</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t-2 border-gray-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">All Under One Roof</h3>
              <p>
                Having to call multiple contractors for different services can be a hassle. Our competitors often work on their own timeframe and aren't always reliable. We eliminate that frustration by offering a comprehensive range of services all under one roof. We take pride in our reputation and will work with you from start to finish, ensuring you get everything you desire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-black mb-12 text-gray-900 text-center">
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="relative h-[250px] rounded-lg overflow-hidden mb-4 shadow-md">
                <Image
                  src="/assests/apartment-building-scaffolding-construction.JPG"
                  alt="Design services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">Of the Highest Quality</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-[250px] rounded-lg overflow-hidden mb-4 shadow-md">
                <Image
                  src="/assests/masonry-restoration-brick-repointing-01.JPG"
                  alt="Repair services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Repair</h3>
              <p className="text-gray-600">Building Options</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-[250px] rounded-lg overflow-hidden mb-4 shadow-md">
                <Image
                  src="/assests/construction-site-danger-sign-barrier.JPG"
                  alt="Construction services"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Construction</h3>
              <p className="text-gray-600">Customized for You</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black mb-8 text-gray-900">
                Contact Us
              </h2>
              <div className="space-y-6 text-lg">
                <div>
                  <p className="font-bold text-gray-900 mb-2">Email Address</p>
                  <a 
                    href="mailto:info@verlux.com" 
                    className="text-gray-700 hover:text-gray-900 underline"
                  >
                    info@verlux.com
                  </a>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Phone Number</p>
                  <a 
                    href="tel:+14374520850" 
                    className="text-gray-700 hover:text-gray-900 underline"
                  >
                    +1 (437) 452-0850
                  </a>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Address</p>
                  <p className="text-gray-700">
                    8 McKee Ave, North York, ON M2N 7E5
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Get a Free Quote
              </h3>
              <form action="/api/quote" method="POST" className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="projectType"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select Type of Project</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="restoration">Restoration</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="projectDetails"
                    placeholder="Project Details"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
