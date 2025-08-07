'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [showSmrtDetails, setShowSmrtDetails] = useState(false);
  const [showWinningGroupDetails, setShowWinningGroupDetails] = useState(false);
  const [showSpDetails, setShowSpDetails] = useState(false);
  const [showNieDetails, setShowNieDetails] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[700px] flex items-stretch justify-start px-0 py-0 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/img/handshake.png" alt="Data Analytics" fill className="object-cover w-full h-full" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-blue-900/80" />
        </div>
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-20 py-10 md:py-40 gap-1">
          <div className="flex-1 flex items-center justify-center min-w-[120px] md:min-w-[180px] mb-0 md:mb-0">
            <Image src="/logo/3ELogo_HD.png" alt="3ELogic Logo" width={220} height={220} className="w-28 h-28 sm:w-28 sm:h-28 md:w-56 md:h-56 drop-shadow-xl mb-1 md:mb-0 animate-float" />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white tracking-wide">
              <span className="block mb-1 relative">
                Unlock
              </span>
              <span className="block text-blue-300 mb-1 relative">
                Business
              </span>
              <span className="block text-blue-200 relative">
                Potential
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 font-light mb-8 tracking-wide hidden md:block">
              Transforming Businesses Through Data
            </p>
            <div className="mt-8 md:mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-blue-900 bg-white hover:bg-gray-100 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-200"
              >
                Get Started
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About/Intro Section */}
      <section id="about" className="py-20 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Who We Are</h2>
          <p className="mb-6 text-lg">At 3ELogic, we design and implement custom AI-powered enterprise software, predictive analytics platforms, and operational optimization systems to drive sustainable cost savings and enhance operational efficiency for businesses.</p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-0 px-0 bg-gradient-to-b from-white to-gray-100 border-b w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-20 text-center pt-20">
          Case Studies
        </h2>
        <div className="flex flex-col gap-24">
          {/* 1. SMRT - Text Left, Image Right */}
          <div className="w-full flex flex-col md:flex-row items-stretch">
            <div className={`relative basis-full md:basis-3/5 flex items-center justify-center bg-white p-6 md:px-16 md:py-10 md:rounded-l-2xl shadow-md ${showSmrtDetails ? 'md:h-[600px]' : 'md:h-auto'}`}> 
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-1 text-blue-800">SMRT</h3>
                <p className="mb-4 text-lg text-gray-700">Improving train operations through schedule optimization, forecasting, and management systems for SMRT.</p>
                {!showSmrtDetails ? (
                  <div>
                    <button
                      className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition"
                      onClick={() => setShowSmrtDetails(true)}
                    >
                      Read More
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 space-y-3 text-gray-700 text-base md:pr-12 w-full">
                    <div>
                      <strong>CREW SCHEDULING SYSTEM</strong>
                      <p className="text-justify">The system generates duty schedules that minimize total number of duties and split duties, subject to various labor rules imposed by management. It reduced total number of drivers needed to cover all train services by about 10-15% for various scenarios.</p>
                    </div>
                    <div>
                      <strong>ADVANCED TRAIN OPERATIONS MANAGEMENT SYSTEM</strong>
                      <p className="text-justify">The system is a platform developed for SMRT to manage the daily train captains’ rostering and deployment. It provides a windows client for RSMs and CMTs to manage the train captains (TCs), a mobile App for TCs to interact with the system to report their duty, and a web client for managers to view online reports regarding daily operations.</p>
                    </div>
                    <div>
                      <strong>BUS ARRIVAL TIME FORECAST SYSTEM</strong>
                      <p className="text-justify">The system is developed for SMRT Bus service. It utilizes the real time GPS signal sent from buses as well as the dynamic schedule loaded from existing legacy system to forecast the arrival time of buses at various bus stops. It achieves an accuracy of more than 90% with ±2 minutes error.</p>
                    </div>
                    <div>
                      <strong>TRAIN TRAVEL TIME FORECAST SYSTEM</strong>
                      <p className="text-justify">The system is developed for SMRT Train service. It utilizes the real time ATSS signal combined with planned timetable to forecast the travel time from one station to another at given time.</p>
                    </div>
                    <div>
                      <strong>FARE DETERMINATION AND APPORTIONMENT</strong>
                      <p className="text-justify">The Trainload Estimation, Fare Determination and Apportionment (TLFDA) system is designed to assist planners of SMRT in managing train schedules, analyzing trainloads, and determining train fares.</p>
                    </div>
                    <div>
                      <button
                        className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition mt-2"
                        onClick={() => setShowSmrtDetails(false)}
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span className="hidden md:block absolute bottom-2 right-4 pr-4 text-6xl font-extrabold text-gray-200 opacity-60 italic pointer-events-none select-none">TRANSPORT</span>
            </div>
            <div className={`relative basis-full md:basis-2/5 flex items-center justify-center bg-gray-100 p-0 md:rounded-r-2xl h-80 transition-all duration-500 ${showSmrtDetails ? 'md:h-[600px]' : 'md:h-[400px]'}`}> 
              <Image 
                src="/img/smrt_train.png" 
                alt="SMRT Train" 
                width={700} 
                height={400} 
                className={`object-cover w-full h-full shadow-lg border border-gray-200 transition-all duration-500 ${showSmrtDetails ? 'scale-110' : 'scale-100'}`} 
              />
            </div>
          </div>
          {/* 2. Winning International Group - Image Left, Text Right */}
          <div className="w-full flex flex-col md:flex-row items-stretch">
            <div className={`relative basis-full md:basis-2/5 flex items-center justify-center bg-gray-100 p-0 md:rounded-l-2xl order-2 md:order-1 h-80 transition-all duration-500 ${showWinningGroupDetails ? 'md:h-[600px]' : 'md:h-[400px]'}`}> 
              <Image
                src="/img/winning_ship.png"
                alt="Logistics"
                width={700}
                height={400}
                className={`object-cover w-full h-full shadow-lg border border-gray-200 transition-all duration-500 ${showWinningGroupDetails ? 'scale-110' : 'scale-100'}`}
              />
            </div>
            <div className="relative basis-full md:basis-3/5 flex items-center justify-center bg-white p-6 md:px-16 md:py-10 md:rounded-r-2xl shadow-md order-1 md:order-2">
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-1 text-blue-800">WINNING INTERNATIONAL GROUP</h3>
                <p className="mb-4 text-lg text-gray-700">AI-powered systems for Winning Group to automate certificate management, inspection reporting, and end-to-end ERP tracking, streamlining logistics operations and compliance.</p>
                {!showWinningGroupDetails ? (
                  <div>
                    <button
                      className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition"
                      onClick={() => setShowWinningGroupDetails(true)}
                    >
                      Read More
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 space-y-3 text-gray-700 text-base md:pl-12 w-full">
                    <div>
                      <strong>Certificate Management System</strong>
                      <p>We use AI to scan ship certificates and automatically sort them by ship, flag, country, and expiration date. The system alerts users when a certificate is about to expire, helping to manage compliance efficiently.</p>
                    </div>
                    <div>
                      <strong>Inspection System</strong>
                      <p>Our AI-powered inspection system generates inspection reports from photos and voice recordings of inspectors, streamlining the reporting process and improving accuracy.</p>
                    </div>
                    <div>
                      <strong>ERP System</strong>
                      <p>We use AI to scan purchase orders and employ barcodes to track items from the moment they are recorded on a purchase order till they are expended, providing full traceability and inventory control.</p>
                    </div>
                    <div>
                      <button
                        className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition mt-2"
                        onClick={() => setShowWinningGroupDetails(false)}
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span className="hidden md:block absolute bottom-2 right-4 pr-4 text-5xl font-extrabold text-gray-200 opacity-60 italic pointer-events-none select-none">TRANSPORT & LOGISTIC</span>
            </div>
          </div>
                   {/* 1. SMRT - Text Left, Image Right */}
                   <div className="w-full flex flex-col md:flex-row items-stretch">
            <div className={`relative basis-full md:basis-3/5 flex items-center justify-center bg-white p-6 md:px-16 md:py-10 md:rounded-l-2xl shadow-md ${showSpDetails ? 'md:h-[600px]' : 'md:h-auto'}`}> 
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-1 text-blue-800">SINGAPORE POLYTECHNIC</h3>
                <p className="mb-4 text-lg text-gray-700">An adaptive mathematics learning platform that personalizes study schedules based on student performance and learning patterns.</p>
                {!showSpDetails ? (
                  <div>
                    <button
                      className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition"
                      onClick={() => setShowSpDetails(true)}
                    >
                      Read More
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 space-y-3 text-gray-700 text-base md:pr-12 w-full">
                    <div>
                      <br/>
                      <strong>LEARNINGANTS - LEARNING VIA ANALYTICS NETWORKED TUTORING SYSTEM</strong> 
                      <p>LearningANTS is an online differentiated learning system that is developed to manage the learning of such core subjects as mathematics. 
                        <br></br>It uses advanced data analytics algorithms to analyze the learning behavior of students and propose customized learning schedule on personal basis.<br />
                        <br/>
                        <a href="https://www.learningants.com/Login.aspx?/" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline ml-1">Visit Website</a>
                      </p>
                    </div>
                    <div>
                      <button
                        className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition mt-2"
                        onClick={() => setShowSpDetails(false)}
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span className="hidden md:block absolute bottom-2 right-4 pr-4 text-6xl font-extrabold text-gray-200 opacity-60 italic pointer-events-none select-none">EDUCATION</span>
            </div>
            <div className={`relative basis-full md:basis-2/5 flex items-center justify-center bg-gray-100 p-0 md:rounded-r-2xl h-80 transition-all duration-500 ${showSpDetails ? 'md:h-[600px]' : 'md:h-[400px]'}`}> 
              <Image 
                src="/img/singapore_poly.png" 
                alt="SMRT Train" 
                width={700} 
                height={400} 
                className={`object-cover w-full h-full shadow-lg border border-gray-200 transition-all duration-500 ${showSpDetails ? 'scale-110' : 'scale-100'}`} 
              />
            </div>
          </div>
          {/* 2. Winning International Group - Image Left, Text Right */}
          <div className="w-full flex flex-col md:flex-row items-stretch">
            <div className={`relative basis-full md:basis-2/5 flex items-center justify-center bg-gray-100 p-0 md:rounded-l-2xl order-2 md:order-1 h-80 transition-all duration-500 ${showNieDetails ? 'md:h-[600px]' : 'md:h-[400px]'}`}> 
              <Image
                src="/img/nie.jpg"
                alt="Logistics"
                width={700}
                height={400}
                className={`object-cover w-full h-full shadow-lg border border-gray-200 transition-all duration-500 ${showNieDetails ? 'scale-110' : 'scale-100'}`}
              />
            </div>
            <div className="relative basis-full md:basis-3/5 flex items-center justify-center bg-white p-6 md:px-16 md:py-10 md:rounded-r-2xl shadow-md order-1 md:order-2">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">NATIONAL INSTITUTE OF EDUCATION</h3>
                <p className="mb-4 text-lg text-gray-700">AI-powered Chinese language learning and composition writing systems for young learners, supporting vocabulary, sentence construction, and creative writing.</p>
                {!showNieDetails ? (
                  <div>
                    <button
                      className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition"
                      onClick={() => setShowNieDetails(true)}
                    >
                      Read More
                    </button>
                  </div>
                ) : (
                  <div className="mt-2 space-y-3 text-gray-700 text-base md:pl-12 w-full">
                    <div>
                      <br/><strong>ARCHE 2.0</strong>
                      <p className="text-justify">An AI-powered Chinese language learning system designed for young learners. <br/>
                        ARCHE 2.0 facilitates both vocabulary acquisition and sentence construction through seamless integration of intelligent tutoring and interactive learning strategies. The system enhances foundational literacy skills by providing scaffolded support in an engaging, learner-centered environment.<br/>
                        <br/><a href="https://repository.nie.edu.sg/entities/publication/1cb0024b-c191-4cf1-b11c-08413c30e6ff/details" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline ml-1">Read publication</a>
                      </p>
                      <br/>
                    </div>
                    <div>
                      <strong>BEARs</strong>
                      <p className="text-justify">An intelligent, interactive chatbot that supports Chinese composition writing.<br />
                        The chatbot offers real-time feedback, vocabulary and sentence suggestions, and adaptive writing prompts, fostering creativity and fluency in a dynamic and engaging learning environment. It encourages active participation and promotes independent writing skills among students.
                      </p>
                    </div>
                    <div>
                      <button
                        className="text-blue-700 font-semibold underline underline-offset-4 hover:text-blue-900 transition mt-2"
                        onClick={() => setShowNieDetails(false)}
                      >
                        Show Less
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <span className="hidden md:block absolute bottom-2 right-4 pr-4 text-6xl font-extrabold text-gray-200 opacity-60 italic pointer-events-none select-none">EDUCATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Collaborators Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-white-600 to-white-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10 tracking-tight">Key Collaborators</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-items-center">
            <a 
              href="https://www.smrt.com.sg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-200 hover:scale-105 hover:shadow-xl bg-white rounded-2xl shadow px-8 py-6 flex items-center justify-center"
            >
              <Image src="/logo/smrt.png" alt="SMRT Logo" width={160} height={80} style={{objectFit: 'contain', height: '80px', width: 'auto'}} />
            </a>
            <a 
              href="https://www.sp.edu.sg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-200 hover:scale-105 hover:shadow-xl bg-white rounded-2xl shadow px-8 py-6 flex items-center justify-center"
            >
              <Image src="/logo/sp.png" alt="SP Logo" width={160} height={80} style={{objectFit: 'contain', height: '80px', width: 'auto'}} />
            </a>
            <a 
              href="https://www.winninggroup.com.sg/en/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-200 hover:scale-105 hover:shadow-xl bg-white rounded-2xl shadow px-8 py-6 flex items-center justify-center"
            >
              <Image src="/logo/winning_group.png" alt="Winning Group Logo" width={160} height={80} style={{objectFit: 'contain', height: '80px', width: 'auto'}} />
            </a>
            <a 
              href="https://www.ntu.edu.sg/nie" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="transition-transform duration-200 hover:scale-105 hover:shadow-xl bg-white rounded-2xl shadow px-8 py-6 flex items-center justify-center"
            >
              <Image src="/logo/nie.png" alt="NIE Logo" width={160} height={80} style={{objectFit: 'contain', height: '80px', width: 'auto'}} />
            </a>
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
  );
}
