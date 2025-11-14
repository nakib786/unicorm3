import Image from 'next/image'
import Link from 'next/link'

// WhatsApp Configuration - Update with actual phone number
const WHATSAPP_NUMBER = '12504860386' // +1 250-486-0386
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! 👋 I\'m interested in your professional cleaning services. Could you please provide me with more information and a quote? Thank you!')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CleaningService',
            name: 'Unicorn Janitorial Ltd.',
            image: '/logo.svg',
            description: 'Professional cleaning services in the Okanagan Valley including commercial, residential, office, and deep cleaning.',
            areaServed: [
              {
                '@type': 'City',
                name: 'Penticton',
                '@id': 'https://en.wikipedia.org/wiki/Penticton'
              },
              {
                '@type': 'City',
                name: 'Kelowna',
                '@id': 'https://en.wikipedia.org/wiki/Kelowna'
              },
              {
                '@type': 'City',
                name: 'Summerland',
                '@id': 'https://en.wikipedia.org/wiki/Summerland,_British_Columbia'
              },
              {
                '@type': 'City',
                name: 'Naramata',
                '@id': 'https://en.wikipedia.org/wiki/Naramata'
              },
              {
                '@type': 'City',
                name: 'Peachland',
                '@id': 'https://en.wikipedia.org/wiki/Peachland'
              }
            ],
            priceRange: '$$',
            telephone: `+${WHATSAPP_NUMBER}`,
            url: typeof window !== 'undefined' ? window.location.origin : '',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Cleaning Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Commercial Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Residential Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Office Cleaning'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Deep Cleaning'
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-modern-bg overflow-hidden">
        {/* Animated floating shapes */}
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        
        {/* Glass overlay for content */}
        <div className="absolute inset-0 hero-glass-overlay"></div>
        
        <div className="section-container relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.svg"
              alt="Unicorn Janitorial Ltd. Logo"
              width={200}
              height={150}
              className="drop-shadow-2xl"
              priority
            />
          </div>
          
          <h1 className="heading-1 text-white mb-6 drop-shadow-2xl">
            Sparkling Clean Spaces<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200">
              Magical Service
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Professional cleaning services across the Okanagan Valley. 
            From commercial spaces to cozy homes, we bring excellence to every corner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Get Instant Quote on WhatsApp
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 hero-glass-overlay rounded-full px-6 py-3 backdrop-blur-md">
              <svg className="w-6 h-6 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-white">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 hero-glass-overlay rounded-full px-6 py-3 backdrop-blur-md">
              <svg className="w-6 h-6 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-white">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 hero-glass-overlay rounded-full px-6 py-3 backdrop-blur-md">
              <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold text-white">Professional Team</span>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center animate-bounce z-10 pointer-events-none">
          <div className="hero-glass-overlay rounded-full p-3 backdrop-blur-md flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-gray-900 mb-6">
            About Unicorn Janitorial Ltd.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8 rounded-full"></div>
          
          <div className="relative rounded-3xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src="/images/about-team.jpg"
              alt="Unicorn Janitorial professional cleaning team"
              width={800}
              height={500}
              className="w-full h-auto"
            />
          </div>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At <strong>Unicorn Janitorial Ltd.</strong>, we believe that a clean space is the foundation of success and well-being. 
            With years of experience serving the beautiful Okanagan Valley, we've built our reputation on reliability, 
            attention to detail, and exceptional customer service.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our professional team is fully trained, insured, and equipped with the latest cleaning technologies and 
            eco-friendly products. Whether it's a bustling office, a retail space, or your cherished home, 
            we treat every project with the same level of care and dedication.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="card text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-700 font-semibold">Years Experience</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Happy Clients</div>
            </div>
            <div className="card text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container bg-gradient-to-br from-unicorn-lilac/30 to-unicorn-mint/30">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Commercial Cleaning */}
          <div className="card group">
            <div className="relative rounded-xl overflow-hidden mb-4 h-48">
              <Image
                src="/images/commercial-cleaning.jpg"
                alt="Commercial cleaning services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Commercial Cleaning</h3>
            <p className="text-gray-600 leading-relaxed">
              Keep your business spotless with our comprehensive commercial cleaning services. 
              Perfect for retail stores, restaurants, and business facilities.
            </p>
          </div>

          {/* Residential Cleaning */}
          <div className="card group">
            <div className="relative rounded-xl overflow-hidden mb-4 h-48">
              <Image
                src="/images/residential-cleaning.jpg"
                alt="Residential cleaning services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Residential Cleaning</h3>
            <p className="text-gray-600 leading-relaxed">
              Transform your home into a pristine sanctuary. We handle everything from regular maintenance 
              to deep cleaning with care and attention.
            </p>
          </div>

          {/* Office Cleaning */}
          <div className="card group">
            <div className="relative rounded-xl overflow-hidden mb-4 h-48">
              <Image
                src="/images/office-cleaning.jpg"
                alt="Office cleaning services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Office Cleaning</h3>
            <p className="text-gray-600 leading-relaxed">
              Create a productive work environment with our professional office cleaning. 
              We work around your schedule to minimize disruption.
            </p>
          </div>

          {/* Deep Cleaning */}
          <div className="card group">
            <div className="relative rounded-xl overflow-hidden mb-4 h-48">
              <Image
                src="/images/deep-cleaning.jpg"
                alt="Deep cleaning services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Deep Cleaning</h3>
            <p className="text-gray-600 leading-relaxed">
              Our intensive deep cleaning reaches every corner, tackling built-up grime and ensuring 
              every surface sparkles like new.
            </p>
          </div>

          {/* Post-Construction Cleaning */}
          <div className="card group">
            <div className="relative rounded-xl overflow-hidden mb-4 h-48">
              <Image
                src="/images/hero-cleaning.jpg"
                alt="Post-construction cleaning services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Post-Construction Cleaning</h3>
            <p className="text-gray-600 leading-relaxed">
              Remove construction dust and debris with our specialized post-construction cleaning. 
              We'll make your new space move-in ready.
            </p>
          </div>

          {/* Custom Cleaning */}
          <div className="card group">
            <div className="flex items-center justify-center h-48 mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl">
              <svg className="w-24 h-24 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Custom Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Have specific cleaning needs? We create customized cleaning plans tailored to your unique 
              requirements and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-6">
            Areas We Serve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Proudly serving the beautiful Okanagan Valley
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Penticton', image: '/images/penticton.jpg' },
            { name: 'Kelowna', image: '/images/kelowna.jpg' },
            { name: 'Summerland', image: '/images/summerland.jpg' },
            { name: 'Naramata', image: '/images/naramata.jpg' },
            { name: 'Peachland', image: '/images/peachland.jpg' },
          ].map((area) => (
            <div key={area.name} className="card group overflow-hidden p-0">
              <div className="relative h-64">
                <Image
                  src={area.image}
                  alt={`${area.name} cleaning services`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-3xl font-bold text-white mb-2">{area.name}</h3>
                    <div className="flex items-center text-white/90">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Service Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add a "More Areas" card */}
          <div className="card group overflow-hidden p-0 bg-gradient-to-br from-purple-600 to-blue-600">
            <div className="h-64 flex flex-col items-center justify-center p-6 text-white text-center">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-2xl font-bold mb-2">More Areas</h3>
              <p className="text-white/90">Contact us to check if we serve your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="section-container bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-6">
            Why Choose Unicorn Janitorial?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Fully Insured</h3>
            <p className="text-gray-600">
              Complete peace of mind with comprehensive insurance coverage for all our services.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Eco-Friendly Products</h3>
            <p className="text-gray-600">
              We use environmentally safe cleaning products that are tough on dirt but gentle on the planet.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Fast Response</h3>
            <p className="text-gray-600">
              Quick turnaround times and flexible scheduling to meet your urgent cleaning needs.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Professional Team</h3>
            <p className="text-gray-600">
              Trained, vetted, and experienced cleaning professionals dedicated to excellence.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">Flexible Scheduling</h3>
            <p className="text-gray-600">
              We work around your schedule, offering evening and weekend appointments.
            </p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="heading-3 text-gray-900 mb-3">WhatsApp Support</h3>
            <p className="text-gray-600">
              Get instant quotes and communicate directly with us via WhatsApp for convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-container bg-white">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              "Unicorn Janitorial transformed our office space! The team is professional, thorough, and always punctual. 
              Best cleaning service we've ever used in Kelowna."
            </p>
            <div className="font-semibold text-gray-900">Sarah Mitchell</div>
            <div className="text-sm text-gray-600">Office Manager, Kelowna</div>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              "After our home renovation, Unicorn Janitorial made everything spotless. They were incredible with the 
              post-construction cleanup. Highly recommend!"
            </p>
            <div className="font-semibold text-gray-900">David Chen</div>
            <div className="text-sm text-gray-600">Homeowner, Penticton</div>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic leading-relaxed">
              "We've been using Unicorn Janitorial for our retail store for over a year. Consistent quality and 
              great communication through WhatsApp. A+++"
            </p>
            <div className="font-semibold text-gray-900">Maria Rodriguez</div>
            <div className="text-sm text-gray-600">Store Owner, Summerland</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Ready for a Sparkling Clean Space?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl mb-8 leading-relaxed">
            Contact us on WhatsApp for an instant quote. We're here to make your space shine!
          </p>
          
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-purple-600 bg-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 mb-12"
          >
            <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp Now
          </a>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Phone / WhatsApp</div>
                    <a href={`tel:+${WHATSAPP_NUMBER}`} className="hover:underline">+{WHATSAPP_NUMBER}</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold">Service Area</div>
                    <div>Okanagan Valley, BC</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span>7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday:</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday:</span>
                  <span>By Appointment</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-sm">
                    <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    24/7 WhatsApp Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-modern text-white py-16 relative z-0">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="footer-item">
              <div className="footer-logo-container mb-6">
                <Image
                  src="/logo.svg"
                  alt="Unicorn Janitorial Ltd."
                  width={150}
                  height={110}
                  className="brightness-0 invert drop-shadow-lg"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Professional cleaning services across the Okanagan Valley. 
                Making spaces sparkle with magical service since 2014.
              </p>
              <div className="flex gap-4 mt-6">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-green-500/50 transition-all"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="footer-item">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="footer-link text-gray-300 hover:text-white text-lg">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="footer-link text-gray-300 hover:text-white text-lg">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#areas" className="footer-link text-gray-300 hover:text-white text-lg">
                    Service Areas
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="footer-link text-gray-300 hover:text-white text-lg">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link text-gray-300 hover:text-white text-lg">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Service Areas */}
            <div className="footer-item">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Service Areas
              </h4>
              <ul className="space-y-3">
                <li className="footer-service-area text-gray-300 text-lg cursor-default">
                  Penticton
                </li>
                <li className="footer-service-area text-gray-300 text-lg cursor-default">
                  Kelowna
                </li>
                <li className="footer-service-area text-gray-300 text-lg cursor-default">
                  Summerland
                </li>
                <li className="footer-service-area text-gray-300 text-lg cursor-default">
                  Naramata
                </li>
                <li className="footer-service-area text-gray-300 text-lg cursor-default">
                  Peachland
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">Unicorn Janitorial Ltd.</span> All rights reserved.
            </p>
            
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold overflow-hidden z-10"
            >
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10">Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </a>
    </main>
  )
}

