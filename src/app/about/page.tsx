'use client'

import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 28, 66, 0.9), rgba(30, 64, 175, 0.9)), url('/img/singapore.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      > 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Effective . Effecient .  Economical
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Background
            </h2>
            <div className="max-w-4xl mx-auto text-left text-justify">
              <p className="text-lg text-gray-600 mb-4">
                Established in 2011, 3ELOGIC CONSULTANCY PTE. LTD. is an applications software solutions and consulting company specializing in Business Analytics and Optimization. Led by alumni from prestigious institutions such as Yale, MIT, and NUS, 3ELOGIC is headquartered in Singapore with consultants spanning Singapore, China, and India.
              </p>
              <p className="text-lg text-gray-600">
                Our primary goal at 3ELOGIC is to assist clients in achieving sustainable cost savings, operational efficiency, and optimal performance through intelligent data analysis and optimization services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        className="relative flex flex-col items-center justify-center min-h-[700px] py-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,28,66,0.88), rgba(30,64,175,0.88)), url('/img/data_analytics.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Mission</h2>
                      <p className="text-xl text-blue-100 mb-12 text-center max-w-3xl">
              3ELOGIC is committed to enhancing the effectiveness, efficiency, and economic aspects of our customers&apos; operations.
            </p>
          <br/>
          <div className="w-full max-w-3xl text-center bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-lg text-blue-100">
              Our vision is to emerge as the market leader in both software and professional services within the realm of Business Analytics. Concurrently, we strive to pioneer evolutionary enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-justify">
              The founder of 3ELOGIC brings extensive expertise in applications development and consulting, gained from working with prominent organizations such as SMRT, LTA, SIAEC, Hainan Airlines, Shenzhen Airlines, and the Ministry of Defense Singapore. These experiences have equipped the founder with global best practices, which will be seamlessly integrated into the development of our system applications.
              <br/><br/>Our core team members have a wealth of experience collaborating with clients on numerous projects, ensuring the smooth development and timely delivery of our services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 min-h-[350px] flex items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image src="/img/singapore.png" alt="Singapore Skyline" fill priority className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-blue-900/70 to-blue-700/60" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to transform your business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discuss your use case with us
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
} 