import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { executeInlineAction } from '../lib/inlineActions.js';
import { bootLegacyPage } from '../lib/legacyRuntime.js';

const inlineStyles = [
  "\r\n        body {\r\n            font-family: \"Lato\", sans-serif;\r\n            font-weight: 400;\r\n            /* user-select: none; */\r\n        }\r\n\r\n        h1, h2, h3, h4, h5, h6 {\r\n            font-family: \"Lato\", sans-serif;\r\n            font-weight: 900 !important; /* Forces override of any utility classes */\r\n        }\r\n    ",
  "\r\n            .zoom-in-out-box {\r\n                animation: zoom-in-zoom-out 1s ease infinite;\r\n                border-radius: 0.5rem;\r\n            }\r\n  \r\n            @keyframes zoom-in-zoom-out {\r\n                0% {\r\n                scale: 100%\r\n                }\r\n                50% {\r\n                scale: 150%;\r\n                }\r\n                100% {\r\n                scale: 100%;\r\n                }\r\n            }\r\n            \r\n        ",
  "\r\n            @keyframes float {\r\n              0% { transform: translateY(0px) translateX(0px); }\r\n              50% { transform: translateY(-10px) translateX(5px); }\r\n              100% { transform: translateY(0px) translateX(0px); }\r\n            }\r\n\r\n            @keyframes float2 {\r\n              0% { transform: translateY(0px) translateX(0px); }\r\n              50% { transform: translateY(8px) translateX(-6px); }\r\n              100% { transform: translateY(0px) translateX(0px); }\r\n            }\r\n\r\n            .animate-float {\r\n              animation: float 6s ease-in-out infinite;\r\n            }\r\n\r\n            .animate-float2 {\r\n              animation: float2 5s ease-in-out infinite;\r\n            }\r\n          ",
  "\r\n            #carousel img {\r\n              transition: transform 0.3s ease;\r\n              cursor: pointer;\r\n          }\r\n\r\n          #carousel img:hover {\r\n              transform: scale(1.1);\r\n          }\r\n          ",
  "\r\n          #E_Sevai {\r\n            position: relative;\r\n            background: url('/assets/images/es-logo.png') center/cover no-repeat;\r\n          }\r\n\r\n          #E_Sevai::before {\r\n            content: \"\";\r\n            position: absolute;\r\n            top: 0;\r\n            left: 0;\r\n            width: 100%;\r\n            height: 100%;\r\n            background: rgba(0, 0, 0, 0.5); /* Adjust opacity for dimness */\r\n            z-index: 0;\r\n          }\r\n\r\n          /* #E_Sevai .content, */\r\n          #E_Sevai section,\r\n          #E_Sevai div {\r\n            position: relative;\r\n            z-index: 1; /* Keeps text above overlay */\r\n          }\r\n\r\n        "
];

export default function EnglishPage() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => bootLegacyPage('/assets/js/react-runtime-en.js'), []);

  const toggleMobileMenu = () => setMobileMenuOpen(open => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const overlayClassName = `${isMobileMenuOpen ? '' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 z-40`;
  const mobileMenuClassName = `${isMobileMenuOpen ? '' : 'hidden'} fixed top-0 right-0 w-2/3 h-screen bg-gradient-to-r from-amber-600 to-amber-400 text-white p-6 shadow-lg z-50 lg:hidden overflow-y-auto`;

  return (
    <>
      <style>{inlineStyles[0]}</style>
      {/* Loading Screen */}
      <div id="loading-screen" className="fixed inset-0 flex flex-col items-center justify-center bg-slate-50 z-50" style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', zIndex: 50 }}>
        <img loading="lazy" decoding="async" src="/assets/icons/TamilNadu_Logo.svg" alt="Logo" className="w-32 h-32 animate-pulse zoom-in-out-box" style={{ width: 96, height: 96, objectFit: 'contain' }} />
        <p className="mt-12 text-gray-950" style={{ marginTop: 24, color: '#111827' }}>Loading...</p>
        <style>{inlineStyles[1]}</style>
      </div>

      {/* Main Content (Hidden Initially) */}
      <div id="main-content" className="hidden">

        {/* Include Alpine.js */}


        <header className="bg-gradient-to-r from-amber-600 to-amber-500 text-white p-4 flex items-center justify-between" data-aos="fade-down">
          {/* Left: Logo & Title */}
          <div className="flex items-center space-x-3">
            <img loading="lazy" decoding="async" src="/assets/icons/TamilNadu_Logo.svg" alt="Logo" className="h-12 md:h-16" />
            <div className="leading-tight">
              <h1 className="text-lg md:text-2xl">KOVALAM PANCHAYAT</h1>
              <span className="text-sm md:text-lg"><b>Corruption Free Administration</b></span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* தமிழ் only on desktop */}
            <Link to="/ta" className="hidden lg:inline-block px-6 py-3 mr-10 bg-orange-500 text-white text-base md:text-lg font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
              <b>தமிழ்</b>
            </Link>

            {/* ☰ Menu only on mobile/tablet */}
            <button id="menuButton" onClick={toggleMobileMenu} className="text-white text-2xl focus:outline-none block lg:hidden">
              ☰
            </button>
          </div>

        </header>


        <div id="overlay" onClick={closeMobileMenu} className={overlayClassName}></div>
        <nav id="mobileMenu"
          aria-hidden={!isMobileMenuOpen}
          className={mobileMenuClassName}>
          <button id="closeMenu" onClick={closeMobileMenu} className="text-white text-2xl absolute top-4 right-4">✖</button>
          <ul className="mt-10 space-y-4 relative">

            <li>
              <div onClick={(event) => executeInlineAction("mobileshowSection('Home', this)", event)} className="nav-item text-white cursor-pointer ">
                <a href="#Home" className="nav-item  text-lg hover:underline block">Home</a>
              </div>
            </li>
            <li>
              <div onClick={(event) => executeInlineAction("mobileshowSection('Aboutus', this)", event)} className="nav-item text-white cursor-pointer ">
                <a href="#Aboutus" className="nav-item  text-lg hover:underline block">About Us</a>
              </div>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <div className="nav-item text-white cursor-pointer peer">
                <a href="#Services" className=" text-lg hover:underline block">Services</a>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-50 shadow-lg rounded-lg opacity-0 invisible pointer-events-none
                        group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="text-gray-950 text-base">
                  <li onClick={(event) => executeInlineAction("MobileShowList('Tax_Management', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Tax_Management">Tax Management</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('E_Sevai', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#E_Sevai">E Sevai</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Water_Management', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Water_Management">Water Management</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Garbage_Management', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Garbage_Management">Garbage Management</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Electricity', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Electricity">Electricity</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Drainage', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Drainage">Drainage</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Disaster_Management', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Disaster_Management">Disaster Management</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Others', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Others">Others</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Events Dropdown */}
            <li className="relative group">
              <div className="nav-item text-white cursor-pointer peer">
                <a href="#Events" className=" text-lg hover:underline block">Events</a>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-50 shadow-lg rounded-lg opacity-0 invisible pointer-events-none
                        group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible
                        transition-all duration-300 z-50">
                <ul className="text-gray-950 text-base">
                  <li onClick={(event) => executeInlineAction("MobileShowList('AadharCamp', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer event-item" data-event-id="Event-1">
                    <a href="#AadharCamp">Aadhar Card Camp</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('MedicalCamp', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer event-item" data-event-id="Event-1">
                    <a href="#MedicalCamp">Medical Camp</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('GramaSabhaCamp', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer event-item" data-event-id="Event-2">
                    <a href="#GramaSabhaCamp">Grama Sabha</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('PanCardCamp', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer event-item" data-event-id="Event-3">
                    <a href="#PanCardCamp">Pan Card Camp</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('VoterIDCamp', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer event-item" data-event-id="Event-4">
                    <a href="#VoterIDCamp">Voter ID Camp</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('BeachCleaning', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer event-item" data-event-id="Event-5">
                    <a href="#BeachCleaning">Mass Beach Cleaning</a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <div onClick={(event) => executeInlineAction("mobileshowSection('Achievements', this)", event)} className="nav-item text-white cursor-pointer ">
                <a href="#Achievements" className=" text-lg hover:underline">Achievements</a>
              </div>
            </li>

            {/* Infrastructure Dropdown */}
            <li className="relative group">
              <div className="nav-item text-white cursor-pointer peer">
                <a href="#Infrastructure" className=" text-lg hover:underline block">Infrastructure</a>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-50 shadow-lg rounded-lg opacity-0 invisible pointer-events-none
                        group-hover:pointer-events-auto group-hover:opacity-100 group-hover:visible
                        transition-all duration-300 z-50">
                <ul className="text-gray-950 text-base">
                  <li onClick={(event) => executeInlineAction("MobileShowList('Anganvadi', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Anganvadi">Anganwadi</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Schools', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Schools">Schools</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Library', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Library">Library</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('HealthCare', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#HealthCare">Health Care</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('PublicToilet', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#PublicToilet">Public Toilet</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('PublicPostOffice', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#PublicPostOffice">Public Post Office</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('PublicHotels', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#PublicHotels">Public Hotels & Restaurants</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Meeting_Halls', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Meeting_Halls">Meeting Halls</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Ponds', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Ponds">Ponds</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Wells', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Wells">Wells</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('Roads', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Roads">Roads</a>
                  </li>
                  <li onClick={(event) => executeInlineAction("MobileShowList('BusStand', this)", event)} className="px-4 py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#BusStand">Bus Stand</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div onClick={(event) => executeInlineAction("mobileshowSection('Feedback', this)", event)} className="nav-item text-white cursor-pointer ">
                <Link to="/feedback" className=" text-lg hover:underline">Feedback</Link>
              </div>
            </li>
            <li>
              <div onClick={(event) => executeInlineAction("mobileshowSection('Contactus', this)", event)} className="nav-item text-white cursor-pointer ">
                <a href="#Contactus" className=" text-lg hover:underline">Contact Us</a>
              </div>
            </li>
            <li>
              <div onClick={(event) => executeInlineAction("mobileshowSection('Contactus', this)", event)} className="nav-item text-white cursor-pointer ">
                <Link to="/ta" className="text-white underline text-lg md:text-xl hover:text-amber-200">தமிழ்</Link>
              </div>
            </li>
          </ul>
        </nav>



        {/* Navigation */}

        <section className="max-w-full text-center mx-auto py-4 hidden lg:block ">
          <div className="flex justify-center items-center flex-wrap xl:flex-nowrap gap-1 xl:gap-3 px-2 w-full max-w-7xl mx-auto">

            <div onClick={(event) => executeInlineAction("showSection('Home', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Home">HOME</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div onClick={(event) => executeInlineAction("showSection('Aboutus', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Aboutus">ABOUT US</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div className="relative group flex-shrink-0 z-50">
              <div className="nav-item px-2 py-2 cursor-pointer relative z-10">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <span>SERVICES</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-50 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                <ul className="text-gray-950 text-left text-base pl-2">
                  <div onClick={(event) => executeInlineAction("showList('Tax_Management', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Tax_Management">Tax Management</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('E_Sevai', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#E_Sevai">E Sevai</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Water_Management', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Water_Management">Water Management</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Garbage_Management', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Garbage_Management">Garbage Management</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Electricity', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Electricity">Electricity</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Drainage', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Drainage">Drainage</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Disaster_Management', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Disaster_Management">Disaster Management</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Others', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Others">Others</a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="relative group z-50 flex-shrink-0">
              <div className="nav-item px-2 py-2 cursor-pointer relative z-10">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <span>EVENTS</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-50 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                <ul className="text-gray-950 text-left pl-2 text-base">
                  <div onClick={(event) => executeInlineAction("showList('AadharCamp', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer event-link" data-event-id="Event-1">
                    <a href="#AadharCamp">Aadhar Card Camp</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('MedicalCamp', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer event-link" data-event-id="Event-1">
                    <a href="#MedicalCamp">Medical Camp</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('GramaSabhaCamp', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer event-link" data-event-id="Event-2">
                    <a href="#GramaSabhaCamp">Grama Sabha</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('PanCardCamp', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer event-link" data-event-id="Event-3">
                    <a href="#PanCardCamp">Pan Card Camp</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('VoterIDCamp', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer event-link" data-event-id="Event-4">
                    <a href="#VoterIDCamp">Voter ID Camp</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('BeachCleaning', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer event-link" data-event-id="Event-5">
                    <a href="#BeachCleaning">Mass Beach Cleaning</a>
                  </div>
                </ul>
              </div>
            </div>

            <div onClick={(event) => executeInlineAction("showSection('Achievements', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Achievements">ACHIEVEMENTS</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div className="relative group flex-shrink-0 z-50">
              <div className="nav-item px-2 py-2 cursor-pointer relative z-10">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <span>INFRASTRUCTURE</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
              <div className="absolute left-0 mt-2 w-48 bg-slate-50 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                <ul className="text-gray-950 text-left pl-2 text-base">
                  <div onClick={(event) => executeInlineAction("showList('Anganvadi', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Anganvadi">Anganwadi</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Schools', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Schools">Schools</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Library', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Library">Library</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('HealthCare', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#HealthCare">Health Care</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('PublicToilet', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#PublicToilet">Public Toilet</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('PublicPostOffice', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#PublicPostOffice">Public Post Office</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('PublicHotels', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#PublicHotels">Public Hotels & Restaurants</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Meeting_Halls', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Meeting_Halls">Meeting Halls</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Ponds', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Ponds">Ponds</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Wells', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Wells">Wells</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('Roads', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#Roads">Roads</a>
                  </div>
                  <div onClick={(event) => executeInlineAction("showList('BusStand', this)", event)} className="px-8vw py-2 hover:bg-amber-100 cursor-pointer">
                    <a href="#BusStand">Bus Stand</a>
                  </div>

                </ul>
              </div>
            </div>

            <div onClick={(event) => executeInlineAction("showSection('Feedback', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <Link to="/feedback">FEEDBACKS</Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div onClick={(event) => executeInlineAction("showSection('Contactus', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Contactus">CONTACT US</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>
          </div>
        </section>


        <div className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-r from-amber-100 to-white">
          {/* Background Image htmlFor Desktop */}
          <div id="background-desktop" className="absolute top-0 left-0 w-full h-full hidden lg:block bg-move bg-cover"
            style={{ "backgroundImage": "url('/assets/images/photo_6339331154796201764_y.jpg')" }}>
          </div>

          {/* Background Image htmlFor Mobile */}
          {/* <div id="background-mobile"
                className="absolute inset-0 w-full h-full bg-cover bg-center block lg:hidden"
                style={{ "backgroundImage": "url('/assets/images/IMG_20250722_154846.jpg')", "backgroundPosition": "center center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}>
            </div> */}
          <div id="background-mobile"
            className="absolute inset-0 w-full h-full bg-cover bg-center block lg:hidden"
            style={{ "backgroundImage": "url('/assets/images/IMG_20250722_154846.jpg')", "backgroundPosition": "35% center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}>
          </div>


          {/* IMPORTANT: To move the flag GIF left → increase 'right' value (e.g. "18%"). To move right → decrease it (e.g. "2%"). This shifts the whole panel without shrinking content. */}
          <div id="notifications" className="absolute top-0 hidden lg:flex lg:flex-col w-[32%] h-full z-10 transition-all duration-300" style={{ right: "0%" }}>

            {/* GIF Division: top 70% of panel */}
            <div style={{ flex: "0 0 65%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "flex-start", minHeight: 0 }}>
              <img loading="lazy" decoding="async" src="https://cdn.pixabay.com/animation/2022/08/21/20/03/20-03-41-348_512.gif"
                alt="Happy 15th August"
                style={{ "width": "100%", "height": "100%", "objectFit": "contain", "display": "block", "transform": "scaleX(-1)" }} />
            </div>

            {/* Flag Text Division: bottom 30% — Premium animated tricolor hero headline */}
            <style>{`
              /* --- Keyframe: fade + slide up on page load --- */
              @keyframes indep-slidein {
                0%   { opacity: 0; transform: translateY(16px); }
                100% { opacity: 1; transform: translateY(0); }
              }

              /* --- Keyframe: saffron glow pulse (Happy) --- */
              @keyframes indep-glow-saffron {
                0%, 100% { text-shadow: 0 2px 8px #FF993360, 0 0 0px #FF993300; }
                50%       { text-shadow: 0 0 18px #FF9933cc, 0 0 36px #FF993366, 0 4px 16px #FF993340; }
              }

              /* --- Keyframe: green glow pulse (Day) --- */
              @keyframes indep-glow-green {
                0%, 100% { text-shadow: 0 2px 8px #13880860, 0 0 0px #13880800; }
                50%       { text-shadow: 0 0 18px #138808cc, 0 0 36px #13880866, 0 4px 16px #13880840; }
              }

              /* --- Keyframe: tricolor shimmer sweep across Independence --- */
              @keyframes indep-shimmer {
                0%   { background-position: -250% center; }
                100% { background-position:  250% center; }
              }

              /* --- Keyframe: gentle float / breathing for the text container --- */
              @keyframes indep-float {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-4px); }
              }

              /* --- Container: floats gently, filling the 30% panel --- */
              .indep-container {
                animation: indep-float 4s ease-in-out infinite;
                will-change: transform;
              }

              /* --- HAPPY: saffron, cursive signature font --- */
              .indep-happy {
                font-family: 'Great Vibes', cursive !important;
                font-weight: 400;
                font-size: clamp(1.2rem, 2.2vw, 1.8rem);
                color: #FF9933;
                letter-spacing: 0.02em;
                display: block;
                line-height: 1.2;
                /* Fade-in + glow pulse */
                animation: indep-slidein 0.55s ease both,
                           indep-glow-saffron 2.8s ease-in-out 0.55s infinite;
              }

              /* --- INDEPENDENCE: navy shimmer sweep, signature font --- */
              .indep-main {
                font-family: 'Great Vibes', cursive !important;
                font-weight: 400;
                font-size: clamp(1.6rem, 3.2vw, 2.6rem);
                letter-spacing: 0.02em;
                display: block;
                line-height: 1.2;
                /* Tricolor shimmer: navy → indigo → saffron → white → green → indigo → navy */
                background: linear-gradient(
                  90deg,
                  #1a237e 0%, #3949ab 20%,
                  #FF9933 35%, #ffffff 50%,
                  #138808 65%, #3949ab 80%,
                  #1a237e 100%
                );
                background-size: 250% auto;
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                /* Fade-in then shimmer sweep continuously */
                animation: indep-slidein 0.55s 0.15s ease both,
                           indep-shimmer 3.5s linear 0.7s infinite;
                /* Soft depth shadow */
                filter: drop-shadow(0 3px 6px rgba(26,35,126,0.25));
              }

              /* --- DAY: green, cursive signature font --- */
              .indep-day {
                font-family: 'Great Vibes', cursive !important;
                font-weight: 400;
                font-size: clamp(1.2rem, 2.2vw, 1.8rem);
                color: #138808;
                letter-spacing: 0.02em;
                display: block;
                line-height: 1.2;
                /* Fade-in + glow pulse */
                animation: indep-slidein 0.55s 0.3s ease both,
                           indep-glow-green 2.8s ease-in-out 0.85s infinite;
              }
            `}</style>
            <div
              className="indep-container"
              style={{ flex: "0 0 35%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "transparent", overflow: "visible", minHeight: 0, padding: "4px 8px", textAlign: "center", gap: "2px" }}
            >
              <span className="indep-happy">Happy</span>
              <span className="indep-main">Independence</span>
              <span className="indep-day">Day</span>
            </div>

          </div>
        </div>

        {/* Tamil Slogan Section (with animation, visible on all devices, placed under image) */}
        <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-amber-600 shadow-xl flex items-center justify-center px-6 z-20 relative overflow-hidden">
          {/* Decorative animated circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white animate-float"></div>
            <div className="absolute bottom-6 right-6 w-28 h-28 rounded-full bg-white animate-float2"></div>
          </div>

          {/* Optional animated particles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-ping"></div>
          </div>

          {/* Main content */}
          {/* <div className="text-center relative z-10">
              <h1 style={{ "color": "white", "fontSize": "2rem", "fontWeight": "bold" }}>
                சேவை என்பது தலைமைக்கானதல்ல
              </h1>

              <div className="flex justify-center mt-0 pt-0">
                <div className="w-[34vw] h-1 bg-white/60 rounded-full"></div>
              </div>
              <h1 style={{ "color": "white", "fontSize": "2rem", "fontWeight": "bold" }}>
                தலைமுறைக்கானது
              </h1>

              <div className="flex justify-center mt-0 pt-0">
                <div className="w-[20vw] h-1 bg-white/60 rounded-full"></div>
              </div>
            </div> */}
          <div className="text-center relative z-10">
            <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              சேவை என்பது தலைமைக்கானதல்ல
            </h1>

            <div className="flex justify-center mt-0 pt-0">
              <div className="w-[70vw] md:w-[50vw] lg:w-[34vw] h-1 bg-white/60 rounded-full"></div>
            </div>

            <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              தலைமுறைக்கானது
            </h1>

            <div className="flex justify-center mt-0 pt-0">
              <div className="w-[50vw] md:w-[30vw] lg:w-[20vw] h-1 bg-white/60 rounded-full"></div>
            </div>
          </div>
        </div>


        <style>{inlineStyles[2]}</style>



        {/* News Ticker (Visible only on small screens) */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-500 m-2 text-white px-3 py-1 rounded-lg flex items-center block lg:hidden">
          <span className="text-sm w-40 mr-8">Updates</span>
          <div className="overflow-hidden w-full" onMouseOver={(event) => executeInlineAction("pauseNewsTicker()", event)} onMouseOut={(event) => executeInlineAction("resumeNewsTicker()", event)}>
            <div className="ticker-content" id="newsTicker">
              {/* Updates will be loaded dynamically from updates.json */}
            </div>
          </div>
          <button className="ml-4 w-80 text-sm bg-slate-300 text-gray-00 px-3 py-1 rounded shadow" onClick={(event) => executeInlineAction("openNewsModal()", event)}>Read More</button>
        </div>

        <div id="newsModal" className="z-[9999] fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center hidden transition-opacity duration-300">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 p-0 rounded-2xl shadow-2xl w-[90vw] max-w-lg overflow-hidden border-2 border-amber-200">
            {/* Modal Header with decorative elements */}
            <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 p-4">
              <div className="absolute -top-4 -right-4 text-5xl text-amber-300/40">✨</div>
              <div className="absolute -bottom-6 -left-6 text-7xl text-amber-200/30 rotate-12">தமிழ்</div>

              <div className="relative z-10 flex justify-between items-center">
                <h2 className="text-2xl  text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  <span>புத்தாண்டு வாழ்த்துக்கள்!</span>
                </h2>
                <button onClick={(event) => executeInlineAction("closeNewsModal()", event)} className="text-amber-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-amber-100 text-sm mt-1">Happy Tamil New Year Updates</p>
            </div>

            {/* Modal Content */}
            <div className="max-h-[60vh] overflow-y-auto p-6" id="newsModalList">
              {/* Tamil New Year Featured Card */}
              <div className="mb-6 p-5 rounded-xl bg-white/90 border border-amber-100 shadow-sm relative overflow-hidden">
                <div className="absolute -top-3 -right-3 text-4xl text-amber-300/30">🎉</div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 p-2 bg-amber-500 rounded-lg shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className=" text-amber-800 mb-1">Tamil New Year 2024</h3>
                    <p className="text-amber-900 text-sm mb-2">Celebrating Puthandu on April 14 with traditional rituals and feasts.</p>
                    <p className="text-xs text-amber-600 font-tamil mb-2">புத்தாண்டு கொண்டாட்டங்கள் மற்றும் பாரம்பரிய சடங்குகள்</p>
                    <div className="text-xs text-amber-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Today, 10:30 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-amber-50 p-4 border-t border-amber-200 flex justify-between items-center">
              <div className="text-sm text-amber-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Updated just now
              </div>
            </div>
          </div>
        </div>







        <div id="eventModal" className="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center p-4 z-[9999] transition-opacity duration-300">
          <div id="modalContent" className="bg-slate-50 w-[80vw] sm:w-[65vw] max-w-4xl max-h-[90vh] sm:max-h-[80vh] p-4 sm:p-6 rounded-lg shadow-lg relative flex flex-col opacity-0 scale-95 transition-all duration-300 overflow-hidden">
            {/* Carousel */}
            <div className="relative w-full h-[40vh] sm:h-[45vh] overflow-hidden">
              <div id="carousel" className="flex transition-transform duration-500 ease-in-out h-full w-full"></div>
            </div>

            <style>{inlineStyles[3]}</style>
            {/* Content */}
            <div className="mt-3 sm:mt-4 p-3 sm:p-4 flex-1 overflow-y-auto max-h-[40vh] sm:max-h-[30vh]">
              <h2 id="eventTitle" className="text-2xl sm:text-3xl text-amber-500"></h2>
              <p className="text-sm sm:text-base"><strong>Documents Required:</strong></p>
              <ul id="documentsList" className="list-disc pl-5 text-sm sm:text-base grid grid-cols-2 gap-x-4 gap-y-1"></ul>
              <p id="eventTime" className="mt-2 text-sm sm:text-base"><strong>Time Period:</strong></p> {/* Added missing ID */}
              <div className="flex justify-end">
                <button id="cancelBtn" className="text-red-700 text-base sm:text-xl hover:text-red-900">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>




        {/* Home */}
        <div id="Home" className="content">
          {/* Panchayat Overview */}
          <section id="panchayat-overview" className="relative w-full  mx-auto p-6 sm:p-4 mb-8 lg:w-full">
            <h2 className="text-2xl sm:text-3xl  text-amber-600 mb-4 text-center sm:text-center">
              OVERVIEW OF KOVALAM
            </h2>
            <p className="text-gray-950 text-lg sm:text-xl leading-relaxed text-justify sm:text-left">
              Welcome to Kovalam, a picturesque coastal village in Chengalpattu District, Tamil Nadu.Located on the East Coast Road (ECR), Kovalam is a charming coastal peninsula village that offers breathtaking views of the Bay of Bengal. With its rich history, vibrant culture, and stunning natural beauty, Kovalam is a treasure trove waiting to be explored. Kovalam is a vibrant coastal settlement covering   around1.09 square kilometer,With a population of 10,887, it blends rich cultural heritage and modern development.
            </p>
          </section>

          <h2 className="text-2xl sm:text-3xl pl-6  text-justify sm:text-center  mb-4 text-amber-600">ELECTED BODIES OF KOVALAM</h2>

          <div className="max-w-full w-full mb-12 bg-gradient-to-br from-slate-50 to-amber-50 overflow-hidden transition-all duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.3)]">
            {/* Flex container that will arrange items differently based on screen size */}
            <div className="flex flex-col md:flex-row p-6">
              {/* Photo and name section (will appear stacked on mobile, side by side on desktop) */}
              <div className="flex flex-col md:flex-row items-center md:items-start mb-6 md:mb-0 md:mr-6">
                {/* Photo */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/president.jpg" alt="Shobana Thangam Sundar" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Name and title (centered below photo on mobile, to the right of photo on desktop) */}
                <div className="text-center md:text-left md:ml-6 mt-4 md:mt-0">
                  <h2 className="text-2xl  text-gray-950">SHOBANA THANGAM SUNDAR</h2>
                  <h3 className="text-amber-600 text-lg ">President, Kovalam Panchayat</h3>
                  <p className="text-lg sm:text-xl text-gray-950">Chengalpattu District, Tamil Nadu</p>

                  {/* Social icons (centered below name on mobile, left-aligned on desktop) */}
                  <div className="flex justify-center md:justify-start space-x-4 mt-3">
                    <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors" aria-label="Twitter">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 509 507.14">
                        <path fillRule="nonzero" d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-amber-600 hover:text-amber-800 transition-colors" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 512 512">
                        <path fillRule="nonzero" d="M170.663 256.157c-.083-47.121 38.055-85.4 85.167-85.482 47.121-.092 85.407 38.029 85.499 85.159.091 47.13-38.047 85.4-85.176 85.492-47.112.09-85.399-38.039-85.49-85.169zm-46.108.092c.141 72.602 59.106 131.327 131.69 131.185 72.592-.14 131.35-59.089 131.209-131.691-.141-72.577-59.114-131.336-131.715-131.194-72.585.141-131.325 59.114-131.184 131.7zm237.104-137.092c.033 16.954 13.817 30.682 30.772 30.649 16.961-.034 30.689-13.811 30.664-30.765-.033-16.954-13.818-30.69-30.78-30.656-16.962.033-30.689 13.818-30.656 30.772zm-208.696 345.4c-24.958-1.086-38.511-5.234-47.543-8.709-11.961-4.628-20.496-10.177-29.479-19.093-8.966-8.951-14.532-17.461-19.202-29.397-3.508-9.033-7.73-22.569-8.9-47.527-1.269-26.983-1.559-35.078-1.683-103.433-.133-68.338.116-76.434 1.294-103.441 1.069-24.941 5.242-38.512 8.709-47.536 4.628-11.977 10.161-20.496 19.094-29.478 8.949-8.983 17.459-14.532 29.403-19.202 9.025-3.526 22.561-7.715 47.511-8.9 26.998-1.278 35.085-1.551 103.423-1.684 68.353-.133 76.448.108 103.456 1.294 24.94 1.086 38.51 5.217 47.527 8.709 11.968 4.628 20.503 10.145 29.478 19.094 8.974 8.95 14.54 17.443 19.21 29.413 3.524 8.999 7.714 22.552 8.892 47.494 1.285 26.998 1.576 35.094 1.7 103.432.132 68.355-.117 76.451-1.302 103.442-1.087 24.957-5.226 38.52-8.709 47.56-4.629 11.953-10.161 20.488-19.103 29.471-8.941 8.949-17.451 14.531-29.403 19.201-9.009 3.517-22.561 7.714-47.494 8.9-26.998 1.269-35.086 1.56-103.448 1.684-68.338.133-76.424-.124-103.431-1.294zM149.977 1.773c-27.239 1.286-45.843 5.648-62.101 12.019-16.829 6.561-31.095 15.353-45.286 29.603C28.381 57.653 19.655 71.944 13.144 88.79c-6.303 16.299-10.575 34.912-11.778 62.168C.172 178.264-.102 186.973.031 256.489c.133 69.508.439 78.234 1.741 105.548 1.302 27.231 5.649 45.827 12.019 62.092 6.569 16.83 15.353 31.089 29.611 45.289 14.25 14.2 28.55 22.918 45.404 29.438 16.282 6.294 34.902 10.583 62.15 11.777 27.305 1.203 36.022 1.468 105.521 1.336 69.532-.133 78.25-.44 105.555-1.734 27.239-1.302 45.826-5.664 62.1-12.019 16.829-6.585 31.095-15.353 45.288-29.611 14.191-14.251 22.917-28.55 29.428-45.404 6.304-16.282 10.592-34.904 11.777-62.134 1.195-27.323 1.478-36.049 1.344-105.557-.133-69.516-.447-78.225-1.741-105.522-1.294-27.256-5.657-45.844-12.019-62.118-6.577-16.829-15.352-31.08-29.602-45.288-14.25-14.192-28.55-22.935-45.404-29.429-16.29-6.304-34.903-10.6-62.15-11.778C333.747.164 325.03-.101 255.506.031c-69.507.133-78.224.431-105.529 1.742z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* About section (will appear below photo+name on mobile, to the right on desktop) */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-xl  text-gray-950 mb-3 border-b-2 border-amber-200 pb-2">About</h3>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">Shobana Thangam Sundar is the President of the Kovalam Panchayat, a coastal village in Chengalpattu District, Tamil Nadu. As the president, she has been actively involved in various initiatives and events aimed at promoting the welfare of the community and the environment.</p>
                </div>
              </div>
            </div>

            {/* Rest of the content (always appears below) */}
            <div className="bg-white p-6 md:p-8 rounded-t-2xl">
              <div className="mb-6">
                <h3 className="text-xl  text-gray-950 mb-3 border-b-2 border-amber-200 pb-2">Key Initiatives</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Balar Sabha & Magila Sabha Initiative:</strong> Led by the President of Kovalam Panchayat, this initiative has achieved tremendous success in promoting community development and has significantly contributed to the overall well-being and progress of the community.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Panchayat Learning Centre:</strong> The establishment of a Learning Centre and visits by the SIRD Team enhance governance and boost community engagement within the Panchayat.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Digitized Office and Volunteer-Based Administration:</strong> Led by President Shobana Thangam Sundar BE, the digitization of records and volunteer support htmlFor admin tasks improve efficiency and reduce paperwork.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Systematic Garbage Collection:</strong> An efficient waste management system was established with door-to-door collection, waste segregation, and proper disposal methods.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Water Distribution Tracking System:</strong> Daily tracking ensures efficient water distribution across the village through a monitored and transparent system.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>International Standard Public Toilet:</strong> A modern, clean, and well-maintained public toilet was constructed to meet global standards—enhancing tourist experience, encouraging longer stays, and boosting local tourism.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Mass Beach Cleanup:</strong> In collaboration with NGOs and organizations, a large-scale beach cleanup drive was launched to foster environmental awareness and conservation.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>Village Fest:</strong> Organized to celebrate the community spirit and foster social cohesion, the fest exemplifies community-led initiatives encouraged by the Panchayat leadership.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>"Samabanthi Virundhu" in Grama Sabha:</strong> Practicing Samabanthi Virundhu during every Grama Sabha is a beautiful initiative that supports community bonding while preserving cultural heritage.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="text-lg  text-amber-800 mb-2">Commitment to Community</h4>
                <p className="text-lg sm:text-xl text-amber-700">Shobana Thangam Sundar has demonstrated her commitment to the well-being of the Kovalam community and the environment through her various initiatives and leadership.</p>
              </div>
            </div>
          </div>



          <div id="ElectedMembers" className="flex flex-wrap gap-6 mx-auto mb-6 ml-6 mr-6 justify-center place-items-center items-center">

            {/* <!image willl be loop */}
          </div>
        </div>

        <div id="Aboutus" className="content mt-10 hidden bg-slate-50">


          {/* Kovalam Section */}
          <section className="relative p-8 sm:p-12 mb-16 bg-gradient-to-b from-white to-blue-50 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('../assets/images/kovalam-bg.jpg')] opacity-25 bg-cover bg-center"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl  text-amber-600 drop-shadow-md">
                  <span className="inline-block pb-2">KOVALAM</span>
                </h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Geography Card */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600">GEOGRAPHY & CLIMATE</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    Kovalam is situated approximately 30 km south of Chennai, the capital city of Tamil Nadu. The village is nestled between the Bay of Bengal to the east and the backwaters of the Palar River to the west. The coastal peninsula village enjoys a tropical savanna climate, with warm summers and mild winters.
                  </p>
                </div>

                {/* History Card */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600">HISTORY & CULTURE</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    Kovalam has a rich cultural heritage, with a blend of traditional Tamil and coastal influences. The village is home to several ancient temples, churches, and mosques, reflecting its diverse history and community. The annual festivals, such as the Kovalam Beach Festival and the Pongal celebrations, showcase the vibrant culture and traditions of the village.
                  </p>
                </div>

                {/* Tourism Card */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-200">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600">TOURISM & ECONOMY</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    Kovalam's stunning coastline, scenic beaches, and water sports facilities make it a hotspot htmlFor tourists. Surfing and fishing are major attractions, employing many locals. Guesthouses along the seashore also generate income htmlFor young people. Additionally, nearby IT hubs and industries in Chennai provide diverse employment opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Demographics Section */}
          <section className="relative p-8 sm:p-12 mb-16 bg-gradient-to-b from-white to-amber-50 shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-[url('../assets/images/demographics-bg.jpg')] opacity-25 bg-cover bg-center"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl  text-amber-600 drop-shadow-md">
                  <span className="inline-block pb-2">DEMOGRAPHICS</span>
                </h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <div className="text-center">
                      <div className="text-5xl  text-amber-600 mb-2">10,887</div>
                      <div className="text-lg sm:text-xl text-gray-950">TOTAL POPULATION</div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <div className="text-center">
                        <div className="text-3xl  text-blue-500">4,867</div>
                        <div className="text-lg sm:text-xl text-gray-950">MALES</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl  text-pink-500">6,020</div>
                        <div className="text-lg sm:text-xl text-gray-950">FEMALES</div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 border-l-0 md:border-l-2 border-amber-200 md:pl-8">
                    <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                      Kovalam's population stands around 10,887 residents, consisting of 4,867 males and 6,020 females. The village is home to a diverse demographic that contributes to its vibrant cultural fabric. Kovalam's residents live across several distinct localities, each playing an essential role in the village's overall development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Table Section */}
          <section className="p-8 sm:p-12 mb-16 bg-gradient-to-b from-white to-slate-50">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl  text-amber-600 drop-shadow-md">
                <span className="inline-block pb-2">LOCALITY DETAILS</span>
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gradient-to-r from-stone-50 to-amber-100 text-white">
                    <tr>
                      <th className="px-6 py-4 text-center text-xl sm:text-2xl text-gray-950 uppercase tracking-wider">WARD</th>
                      <th className="px-6 py-4 text-center text-xl sm:text-2xl text-gray-950 uppercase tracking-wider">HABITATION</th>
                      <th className="px-6 py-4 text-center text-xl sm:text-2xl text-gray-950 uppercase tracking-wider">STREET NAME</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200" id="table-body">
                    {/* Rows will be inserted here */}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden bg-gradient-to-br from-orange-700 via-amber-800 to-orange-900 text-white py-24 px-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-20 left-10 w-40 h-40 bg-orange-400 rounded-full mix-blend-screen filter blur-xl animate-[float_6s_ease-in-out_infinite]"></div>
              <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-amber-300 rounded-full mix-blend-screen filter blur-xl animate-[float_6s_ease-in-out_2s_infinite]"></div>
            </div>

            {/* Content container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Section header with decorative elements */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="block w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mr-4"></span>
                  <h2 className="text-2xl sm:text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-orange-500">
                    KOVALAM TOURISM
                  </h2>
                  <span className="block w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent ml-4"></span>
                </div>

                <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed text-orange-100">
                  "Discover the charm of Kovalam, a vibrant tourism hub that beckons visitors with its:
                </p>
              </div>

              {/* Feature grid with icons and hover effects */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {/* Features */}
                {/* Repeat block with updated colors */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-umbrella-beach"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">Pristine Beaches</h3>
                  <p className="text-lg sm:text-xl text-orange-100">Serene waters and golden sands</p>
                </div>

                {/* Repeat htmlFor each feature, just update `text-cyan-300` to `text-amber-300` and text-gray-300 to text-orange-100 */}

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">Cultural Heritage</h3>
                  <p className="text-lg sm:text-xl text-orange-100">Traditional charm and history</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-binoculars"></i>
                  </div>
                  <h3 className="text-xl mb-2 text-white">Adventure</h3>
                  <p className="text-lg sm:text-xl text-orange-100">Endless opportunities htmlFor thrill</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">Seafood Cuisine</h3>
                  <p className="text-lg sm:text-xl text-orange-100">Delectable local specialties</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">Vibrant Nightlife</h3>
                  <p className="text-lg sm:text-xl text-orange-100">Entertainment options galore</p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-sun"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">Breathtaking Sunsets</h3>
                  <p className="text-lg sm:text-xl text-orange-100">Scenic views to remember</p>
                </div>
              </div>

              {/* Closing paragraph */}
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg sm:text-xl italic leading-relaxed text-orange-100 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  "Whether you're seeking tranquility or thrill, Kovalam is the perfect destination htmlFor an unforgettable experience. Come and immerse yourself in the natural beauty, warm hospitality, and unique culture of this captivating coastal village."
                </p>
              </div>
            </div>
          </section>



          {/* Historical View Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl  text-center text-amber-600">HISTORICAL VIEW</h2>
              <div className="w-24 h-1 bg-amber-400 mb-12 mx-auto mt-4 rounded-full"></div>

              {/* Kailasanathar Kovil Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex">
                  <div className="md:w-[50%] relative group overflow-hidden">

                    <div className="bg-no-repeat bg-center h-64 md:h-full w-full transition-all duration-500 group-hover:scale-110"
                      style={{ "backgroundImage": "url('/assets/images/temples/KAILASANATHARKOVIL1.jpg')", "backgroundSize": "100% 100%" }}>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl  text-white">KAILASANATHAR KOVIL</h3>
                      <div className="flex space-x-3 text-lg sm:text-xl mt-2">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          1200+ years
                        </span>
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Pallava Dynasty
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:w-[50%]">
                    <h3 className="text-2xl sm:text-3xl text-amber-600 mb-4">KAILASANATHAR KOVIL</h3>
                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl"><span className=" text-xl sm:text-2xl text-amber-600">History:</span> Kailasanathar Kovil in Kovalam, Chennai, has a rich history dating back to the Pallava dynasty (7th-9th centuries CE).</p>

                      <div className="bg-stone-200 p-4 rounded-lg">
                        <h4 className="text-stone-700 text-xl sm:text-2xl mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Mythology and Legend
                        </h4>
                        <p className="text-lg sm:text-xl">The temple is believed to be over 1,200 years old and is dedicated to Lord Shiva. According to legend, the temple was built by the Pallava king, Rajasimha (also known as Narasimhavarman II), who ruled from 700-728 CE.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className=" text-amber-600 text-xl sm:text-2xl mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Architecture and Significance
                          </h4>
                          <p className="text-lg sm:text-xl">The temple is an excellent example of Pallava architecture, with intricate carvings and sculptures adorning its walls. The sanctum sanctorum houses a magnificent lingam, which is believed to be a swayambhu (self-manifested) lingam.</p>
                        </div>

                        <div className="bg-lime-50 p-4 rounded-lg">
                          <h4 className=" text-amber-500 text-xl sm:text-2xl mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Historical Significance
                          </h4>
                          <p className="text-lg sm:text-xl">Kailasanathar Kovil is one of the oldest Shiva temples in the region and has been mentioned in several ancient texts, including the Tevaram hymns composed by the Nayanar saints.</p>
                        </div>
                      </div>

                      <div className="bg-slate-200 p-4 rounded-lg">
                        <h4 className=" text-slate-700 text-xl sm:text-2xl mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Festivals and Celebrations
                        </h4>
                        <p className="text-lg sm:text-xl">The temple celebrates several festivals throughout the year, including: Maha Shivaratri, Panguni Uthiram, Arudra Darisanam, Karthigai Deepam.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carmel Church Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex flex-row-reverse">
                  <div className="md:w-[50%] relative group overflow-hidden">
                    <div className="bg-no-repeat bg-center h-64 md:h-full w-full transition-all duration-500 group-hover:scale-110"
                      style={{ "backgroundImage": "url('/assets/images/temples/CARMELCHURCH.jpg')", "backgroundSize": "100% 100%" }}>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl  text-white">CARMEL CHURCH</h3>
                      <div className="flex space-x-3 mt-2 text-lg sm:text-xl">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          1770-1780
                        </span>
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Portuguese
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:w-[50%]">
                    <h3 className="text-2xl sm:text-3xl  text-amber-600 mb-4">CARMEL CHURCH</h3>
                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl"><span className="text-xl sm:text-2xl text-amber-600">History:</span> The Carmel Church in Kovalam, Chennai, has a rich history spanning over two centuries.</p>

                      <div className="bg-slate-200 p-4 rounded-lg">
                        <h4 className=" text-slate-700 mb-2 text-xl sm:text-2xl flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          The Vision and Completion
                        </h4>
                        <p className="text-lg sm:text-xl">The story goes that a wealthy Portuguese merchant, Sir John D'Monte, had a dream in which Our Lady of Mount Carmel appeared to him. She promised to cure his ailing wife, Mary, if he completed the church's construction.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-stone-200 p-4 rounded-lg">
                          <h4 className=" text-stone-700 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Architecture and Features
                          </h4>
                          <p className="text-lg sm:text-xl">The church's architecture reflects Portuguese influences, with a distinctive style reminiscent of the era. The church has a striking façade, with a tall belfry housing a 270 kg bell sourced from Poland in 2015.</p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className=" text-yellow-600 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            Annual Feast and Celebrations
                          </h4>
                          <p className="text-lg sm:text-xl">The Carmel Church in Kovalam celebrates its annual feast on July 16th, commemorating the completion of its construction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dargha Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex">
                  <div className="md:w-[50%] relative group overflow-hidden">
                    <div className="bg-no-repeat bg-center h-64 md:h-full w-full transition-all duration-500 group-hover:scale-110"
                      style={{ "backgroundImage": "url('/assets/images/temples/dargah.png')", "backgroundSize": "100% 100%" }}>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl  text-white">HAZRAT THAMEEM ANSARI DARGHA</h3>
                      <div className="flex space-x-3 mt-2 text-lg sm:text-xl">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          18th Century
                        </span>
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Islamic
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:w-[50%]">
                    <h3 className="text-2xl sm:text-3xl  text-amber-600 mb-4">HAZRAT THAMEEM ANSARI DARGHA</h3>
                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl"><span className="text-xl sm:text-2xl text-amber-600">History:</span> The Kovalam Thameem Ansari Bava Dargha, located in Kovalam, Tamil Nadu, has a rich history dating back to the 18th century.</p>

                      <div className="bg-lime-50 p-4 rounded-lg">
                        <h4 className=" text-amber-500 mb-2 text-xl sm:text-2xl  flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          Early Life and Legacy
                        </h4>
                        <p className="text-lg sm:text-xl">Hazrat Thameem Ansari was born in Medina, Saudi Arabia, and participated in the Battle of Badr. He visited the Indian subcontinent during the caliphate of Umar ibn al-Khattab.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-200 p-4 rounded-lg">
                          <h4 className=" text-slate-700 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            The Miracle of the Sea
                          </h4>
                          <p className="text-lg sm:text-xl">After his death, Hazrat Thameem Ansari's disciples cast his remains into the sea, as per his instructions. Miraculously, the remains stayed afloat htmlFor five years, guarded by large fish.</p>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className=" text-amber-600 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            Construction of the Dargah
                          </h4>
                          <p className="text-lg sm:text-xl">The Nawab, inspired by a dream, built the dargah in Kovalam to house the sacred remains of Hazrat Thameem Ansari.</p>
                        </div>
                      </div>

                      <div className="bg-stone-200 p-4 rounded-lg">
                        <h4 className=" text-stone-700 mb-2 text-xl sm:text-2xl flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          Festivals and Celebrations
                        </h4>
                        <p className="text-lg sm:text-xl">The dargah celebrates several festivals and events throughout the year, including: Urs Festival, Milad-un-Nabi, Ramadan and Eid-al-Fitr.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kovalam Beach Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex">
                  <div className="md:w-1/3 relative group overflow-hidden">
                    <div className="bg-cover bg-center h-64 md:h-full transition-all duration-500 group-hover:scale-110" style={{ "backgroundImage": "url(../assets/images/beach/beach.png)" }}></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl text-white">KOVALAM BEACH</h3>
                      <div className="flex space-x-3 mt-2 text-lg sm:text-xl">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          Blue Flag Certified
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl sm:text-3xl text-amber-600">KOVALAM BEACH</h3>
                      <div className="inline-flex items-center bg-amber-500 text-white px-4 py-2 rounded-full ml-4">
                        <span className="text-lg sm:text-xl">Blue Flag Certified</span>
                        <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl">Awarded the prestigious Blue Flag certification by the Tourism Department, Government of Tamil Nadu, in collaboration with INTACH.</p>

                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="text-xl sm:text-2xl text-amber-600 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          What is Blue Flag Certification?
                        </h4>
                        <p className="text-lg sm:text-xl">A globally recognized eco-label awarded to beaches meeting strict criteria htmlFor environmental management, water quality, safety, and amenities.</p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Cleanliness */}
                        <div className="bg-slate-200 p-4 rounded-lg">
                          <h4 className="text-xl sm:text-2xl text-slate-700 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Cleanliness
                          </h4>
                          <p className="text-lg sm:text-xl">Regular cleaning operations and efficient waste management systems maintain pristine conditions.</p>
                        </div>

                        {/* Safety */}
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Safety
                          </h4>
                          <p className="text-lg sm:text-xl">Lifeguards, first aid facilities, and emergency response plans ensure visitor safety.</p>
                        </div>

                        {/* Amenities */}
                        <div className="bg-lime-50 p-4 rounded-lg">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Amenities
                          </h4>
                          <p className="text-lg sm:text-xl">Food stalls, restaurants, shower facilities, and parking available htmlFor visitors.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="py-16 bg-gradient-to-r from-stone-50 to-amber-50 opacity-80 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[80vw] mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl text-amber-600 mb-4">TRANSPORTATION</h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
                <p className="text-lg sm:text-xl text-gray-950">
                  Kovalam, a beautiful coastal town in Chennai, offers various transportation facilities to neighboring towns.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Hero Section */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-600/70"></div>
                  <div className="relative h-full flex items-center px-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-white">Kovalam Transportation Network</h3>
                      <p className="text-lg sm:text-xl text-stone-100">Well-connected by bus routes, ensuring smooth transportation htmlFor residents and visitors.</p>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="p-6 md:p-8">
                  {/* Bus Services Section */}
                  <div className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="bg-amber-50 p-3 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="currentColor" viewBox="0 -960 960 960" stroke="currentColor">
                          <path d="M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40Zm242-640h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm100 240q25 0 42.5-17.5T400-380q0-25-17.5-42.5T340-440q-25 0-42.5 17.5T280-380q0 25 17.5 42.5T340-320Zm280 0q25 0 42.5-17.5T680-380q0-25-17.5-42.5T620-440q-25 0-42.5 17.5T560-380q0 25 17.5 42.5T620-320ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z" />
                        </svg>
                      </div>
                      <h4 className="text-xl sm:text-2xl text-amber-600">BUS SERVICES</h4>
                    </div>

                    <p className="text-lg sm:text-xl text-gray-950 mb-6">
                      Metropolitan Transport Corporation (MTC) operates bus services from Kovalam to various parts of Chennai. One such service is the MTC Bus 109, which connects Kovalam Bus Depot to Broadway, with 42 trips per day.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Route Information */}
                      <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                        <div className="flex items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          <h5 className="text-xl sm:text-2xl text-amber-800">Route Information</h5>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-950">
                          The MTC Bus 109 route covers several areas, including Kovalam, Neelankarai, Palavakkam, Thiruvanmiyur, Adyar, and Broadway.
                        </p>
                      </div>

                      {/* Bus Routes */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <div className="flex items-center mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <h5 className="text-xl sm:text-2xl  text-ammber-800">Bus Routes</h5>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">515 A</span>
                            <span className="text-lg sm:text-xl text-gray-950">Tambaram to Kovalam</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">588</span>
                            <span className="text-lg sm:text-xl text-gray-950">Kovalam to Mamallapuram</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">109</span>
                            <span className="text-lg sm:text-xl text-gray-950">Kovalam to Broadway</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">109 T</span>
                            <span className="text-lg sm:text-xl text-gray-950">Kovalam to Thiruvottriyur</span>
                          </li>
                          <li className="flex items-center">
                            <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">515 K</span>
                            <span className="text-lg sm:text-xl text-gray-950">Kovalam to Kilambakkam</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg px-6 py-4 border-l-4 border-amber-500">
                      <p className="text-lg sm:text-xl text-gray-950 italic">
                        These bus services are operated by the Metropolitan Transport Corporation (MTC), Chennai.
                      </p>
                    </div>
                  </div>

                  {/* Other Transportation Options */}
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="bg-amber-50 p-3 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <h4 className="text-xl sm:text-2xl  text-amber-600">Other Transportation Options</h4>
                    </div>

                    <p className="text-lg sm:text-xl text-gray-950 mb-8">
                      Besides bus services, you can also hire taxis or autorickshaws to travel to neighboring towns. Additionally, Kovalam is connected to Chennai Central Railway Station, which is about 30 km away.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4">
                      {/* Taxi Option */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-amber-50 p-2 rounded-lg mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                            </svg>
                          </div>
                          <h5 className="text-xl sm:text-2xl text-amber-600">Taxis</h5>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-950">Available htmlFor hire throughout Kovalam</p>
                      </div>

                      {/* Auto Option */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-amber-50 p-2 rounded-lg mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          <h5 className="text-xl sm:text-2xl text-amber-600">Autorickshaws</h5>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-950">Three-wheelers htmlFor local travel</p>
                      </div>

                      {/* Train Option */}
                      <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm">
                        <div className="flex items-center mb-3">
                          <div className="bg-amber-50 p-2 rounded-lg mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <h5 className="text-xl sm:text-2xl text-amber-600">Railway Connection</h5>
                        </div>
                        <p className="text-lg sm:text-xl text-gray-950">Chennai Central Railway Station (~30 km)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[80vw] mx-auto">
              {/* Header */}
              <header className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl sm:tracking-tight">
                  <span className="text-amber-600">OUR SERVICES</span>
                </h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
                <p className="mt-6 text-xl sm:text-2xl text-amber-500 ">
                  24X7 Dedicated Support htmlFor Your Safety & Well-being
                </p>
              </header>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Medical Facility */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover">
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-stone-100 p-4 rounded-lg">
                        <svg className="h-8 w-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl sm:text-2xl text-stone-600">24X7 MEDICAL FACILITY</h3>
                    </div>
                    <p className="text-lg sm:text-xl mt-6 text-gray-950">
                      Kovalam Panchayat ensures the well-being of its residents and visitors with a round-the-clock medical facility, offering emergency care, first aid, routine check-ups, and essential medications. Staffed by trained healthcare professionals, the center provides vital support, including maternal and child healthcare services.
                    </p>
                    <div className="mt-6 bg-stone-50 p-4 rounded-lg">
                      <p className="text-lg sm:text-xl text-stone-800">
                        <strong>Emergency Protocol:</strong>In case of critical emergencies, patients are quickly connected to nearby hospitals htmlFor advanced treatment.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Lifeguard Services */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover">
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-amber-50 p-4 rounded-lg">
                        <svg className="h-8 w-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl sm:text-2xl text-amber-600">LIFE GUARD SERVICES</h3>
                    </div>
                    <p className="text-lg sm:text-xl mt-6 text-gray-950">
                      Kovalam's lifeguard services ensure beach safety, with trained professionals stationed at key locations to monitor swimmers, surfers, and visitors. Equipped with rescue gear like life boys and first aid kits, lifeguards are always ready htmlFor rapid response to emergencies.
                    </p>
                    <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                      <p className="text-lg sm:text-xl  text-amber-800">
                        <strong>Safety First:</strong>They also educate the public on water safety, preventing accidents and promoting a secure beach experience.
                      </p>
                    </div>
                  </div>
                </article>

                {/* CCTV Surveillance */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover">
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-slate-100 p-4 rounded-lg">
                        <svg className="h-8 w-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl sm:text-2xl  text-slate-600">CCTV SURVELIANCE</h3>
                    </div>
                    <p className="text-lg sm:text-xl mt-6 text-gray-950">
                      Kovalam prioritizes security with a comprehensive CCTV surveillance system covering public areas and key locations. These high-tech cameras enhance public safety, deter crime, and enable quick response to incidents.
                    </p>
                    <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                      <p className="text-lg sm:text-xl   text-slate-800">
                        <strong>Active Monitoring:</strong>The surveillance network is actively monitored in coordination with law enforcement, ensuring a safe environment htmlFor all.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Fire & Safety */}
                <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover">
                  <div className="p-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-red-50 p-4 rounded-lg">
                        <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
                        </svg>
                      </div>
                      <h3 className="ml-4 text-xl sm:text-2xl  text-gray-950">FIRE & SAFETY DEPARTMENT</h3>
                    </div>
                    <p className="text-lg sm:text-xl mt-6 text-gray-950">
                      The Fire and Safety Department in Kovalam, Chennai, has indeed been established with minimal operators and equipped with fire vehicles to ensure the safety of the community At Present Temporarily.
                    </p>
                    <div className="mt-6 bg-red-50 p-4 rounded-lg">
                      <p className="text-lg sm:text-xl text-red-800">
                        <strong>State Support:</strong>The Tamil Nadu Fire and Rescue Services department is responsible htmlFor fire safety and rescue operations in the state, including Kovalam.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-[80vw]">
              <h2 className="text-2xl sm:text-3xl text-center mb-16 text-gray-950">
                <span className="text-amber-600">HEALTHCARE SERVICES IN KOVALAM</span>
              </h2>

              {/* Two-column layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Madha Pitha Hospital */}
                <div className="relative group">
                  {/* Image with hover overlay */}
                  <div className="h-64 overflow-hidden rounded-xl shadow-lg mb-6 relative">
                    <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
                      alt="Madha Pitha Hospital"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="absolute bottom-6 left-6 text-3xl  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Madha Pitha Hospital</h3>
                  </div>

                  {/* Content */}
                  <div className="px-4">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2 group-hover:hidden">Madha Pitha Hospital</h3>
                    <p className="text-lg sm:text-xl text-gray-950 mb-6">
                      The primary healthcare provider in Kovalam offering comprehensive medical services with advanced equipment and experienced professionals.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-amber-50 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl text-gray-950">Emergency Services</h4>
                          <p className="text-lg sm:text-xl  text-gray-950">24/7 ambulance with BLS & ALS support</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-amber-50 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl text-gray-950">Specialized Care</h4>
                          <p className="text-lg sm:text-xl  text-gray-950">Dentistry, surgeries, and emergency treatments</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-lg sm:text-xl mt-8 grid grid-cols-2 gap-3">
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">Dentistry</span>
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">Surgery</span>
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">ICU</span>
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">Lab Tests</span>
                    </div>
                  </div>
                </div>

                {/* Kovalam Sub Health Center */}
                <div className="relative group">
                  {/* Image with hover overlay */}
                  <div className="h-64 overflow-hidden rounded-xl shadow-lg mb-6 relative">
                    <img loading="lazy" decoding="async" src="/assets/images/sub-health.png" />{"alt=\"Kovalam Sub Health Center\"\r\n                 className=\"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110\">"}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="absolute bottom-6 left-6 text-3xl  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Sub Health Center</h3>
                  </div>

                  {/* Content */}
                  <div className="px-4">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2 group-hover:hidden">Sub Health Center</h3>
                    <p className="text-lg sm:text-xl text-gray-950 mb-6">
                      Government-run facility providing accessible primary healthcare services to the local community at minimal cost.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-amber-50 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl text-gray-950">Community Care</h4>
                          <p className="text-lg sm:text-xl text-gray-950">General medicine, pediatrics, and OB/GYN</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-amber-50 p-2 rounded-lg mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl text-gray-950">Preventive Health</h4>
                          <p className="text-lg sm:text-xl text-gray-950">Immunizations and public health programs</p>
                        </div>
                      </div>
                    </div>

                    <div className="text-lg sm:text-xl mt-8 grid grid-cols-2 gap-3">
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">Maternal Care</span>
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">Child Health</span>
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">Vaccinations</span>
                      <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">Outpatient</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Unified features ribbon */}
              <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl sm:text-2xl  text-center mb-8 text-gray-950">Our Shared Commitment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-2xl">Quality Care</h4>
                    <p className="text-lg sm:text-xl  text-gray-950 mt-1">Professional services meeting highest standards</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-2xl">Community Focus</h4>
                    <p className="text-lg sm:text-xl  text-gray-950 mt-1">Serving all residents with compassion</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-2xl">Rapid Response</h4>
                    <p className="text-lg sm:text-xl  text-gray-950 mt-1">Emergency services when you need them most</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


        <section id="HealthCare" className="content hidden py-16 bg-gradient-to-br from-amber-50 to-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl  text-center mb-12 text-amber-800">
              Healthcare Facilities in Kovalam
            </h2>

            {/* Madha Pitha Hospital Card */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16">
              <div className="lg:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-48 bg-amber-600 flex items-center justify-center">
                  <h3 className="text-3xl  text-white">Madha Pitha Hospital</h3>
                </div>
                <div className="p-8">
                  <p className="text-lg sm:text-xl text-gray-950 mb-6">
                    The only hospital in the area providing comprehensive medical services and emergency care,
                    along with ambulance services. Equipped with advanced medical equipment and staffed by
                    experienced professionals.
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl  text-amber-700 mb-3">Emergency Services</h4>
                    <ul className="text-lg sm:text-xl space-y-2">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>24/7 Ambulance Services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>Basic Life Support (BLS) and Advanced Life Support (ALS)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl  text-amber-700 mb-3">Key Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h5 className=" text-amber-800">Dentistry</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Cosmetic teeth shaping and whitening</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h5 className=" text-amber-800">Surgeries</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Performed by experienced surgeons</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h5 className=" text-amber-800">Emergency Care</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">24/7 emergency services</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h5 className=" text-amber-800">Ambulance Services</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Emergency transportation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospital Image Section */}
              <div className="lg:w-1/2 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-80"></div>
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/madha-pidha-hospital-chennai-3zx2z.avif"
                  alt="Quality Healthcare"
                  className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="text-3xl  text-white mb-2">Quality Healthcare</h3>
                  <p className="text-lg sm:text-xl text-amber-100">Advanced medical equipment and professional staff</p>
                </div>
              </div>
            </div>

            {/* Sub Health Center Card */}
            <div className="flex flex-col lg:flex-row-reverse gap-8">
              <div className="lg:w-1/2 bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-48 bg-amber-600 flex items-center justify-center">
                  <h3 className="text-3xl  text-white">Kovalam Sub Health Center</h3>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl  text-amber-700 mb-3">Overview</h4>
                    <ul className="text-lg sm:text-xl space-y-3">
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>Government-run healthcare facility providing free or low-cost services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>Primary healthcare including general medicine, pediatrics, and OB/GYN</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl  text-amber-700 mb-3">Services</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h5 className=" text-amber-800">Outpatient Services</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Consultations, vaccinations, minor procedures</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h5 className=" text-amber-800">Maternal & Child Care</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Prenatal, delivery, and postnatal care</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h5 className=" text-amber-800">Immunization</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Vaccinations against infectious diseases</p>
                      </div>
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                        <h5 className=" text-amber-800">Community Health</h5>
                        <p className="text-lg sm:text-xl  text-gray-950">Public health initiatives</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Center Image Section */}
              <div className="lg:w-1/2 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-80"></div>
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Community Healthcare"
                  className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                  <h3 className="text-3xl  text-white mb-2">Community Healthcare</h3>
                  <p className="text-lg sm:text-xl text-amber-100">Accessible and affordable medical services htmlFor all</p>
                </div>
              </div>
            </div>
          </div>

          {/* Unified features ribbon */}
          <div className="mt-16 flex justify-center">
            <div className="max-w-7xl w-full bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
              <h3 className="text-xl sm:text-2xl text-gray-950 mb-8">Our Shared Commitment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl">Quality Care</h4>
                  <p className="text-lg sm:text-xl text-gray-950 mt-1">Professional services meeting highest standards</p>
                </div>

                <div className="text-center">
                  <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl">Community Focus</h4>
                  <p className="text-lg sm:text-xl text-gray-950 mt-1">Serving all residents with compassion</p>
                </div>

                <div className="text-center">
                  <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl">Rapid Response</h4>
                  <p className="text-lg sm:text-xl text-gray-950 mt-1">Emergency services when you need them most</p>
                </div>
              </div>
            </div>
          </div>

        </section>



        <section id="PublicToilet" className="content hidden bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[80vw] mx-auto">
            {/* Header with Image Placeholder */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2 bg-teal-100 rounded-xl overflow-hidden">
                {/* Image placeholder - in a real implementation you would replace this with an actual image */}
                <div className="h-full w-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white text-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/infrastructure/publicToilet/image.png" alt="Public Toilet Facility" className="h-full w-full object-cover" />
                </div>

              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl text-amber-600 mb-4">PUBLIC TOILET FACILITY</h2>
                <div className="text-amber-600 text-xl sm:text-2xl  mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Kovalam Beach, Chennai
                </div>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">
                  Kovalam, being a popular tourist destination, indeed requires public toilets to maintain hygiene and provide convenience to visitors. The construction of public toilets by the Kovalam Panchayat is a commendable initiative.
                </p>
                <div className="bg-amber-50 px-4 py-3 rounded-lg border border-amber-100 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg sm:text-xl  text-amber-700">Constructed: October 2, 2022</span>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl sm:text-2xl text-center text-amber-600 mb-8">Key Benefits of the Facility</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Benefit 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl  text-amber-600 mb-2">Hygiene & Sanitation</h4>
                  <p className="text-lg sm:text-xl text-gray-950">Helps maintain cleanliness in the area, preventing the spread of diseases.</p>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl text-amber-600 mb-2">Tourist Convenience</h4>
                  <p className="text-lg sm:text-xl text-gray-950">Provides essential amenities htmlFor visitors to enjoy their time without worries.</p>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl text-amber-600 mb-2">Economic Boost</h4>
                  <p className="text-lg sm:text-xl text-gray-950">Enhances tourist experience leading to increased visits and local income generation.</p>
                </div>
              </div>

              {/* Additional Note */}
              <div className="mt-10 bg-stone-50 border-l-4 border-amber-500 rounded-r-lg p-4">
                <p className="text-lg sm:text-xl text-amber-500 ">This facility also serves as an important Own Source Revenue (OSR) stream htmlFor the Panchayat.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-12 sm:grid-cols-3 gap-4">
            {/* toilet Centers Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('toilet',1)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">COMMUNITY TOILETS</h6>
            </button>

            {/* Child Development Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('toilet',2)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">SCHOOL TOILETS</h6>
            </button>

            {/* Nutrition Programs Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('toilet',3)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">SMART TOILETS</h6>
            </button>
          </div>

          <div id="imageToiletContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {/* Images will be displayed here dynamically */}
          </div>
        </section>

        <section id="PublicPostOffice" className="content hidden bg-gradient-to-br from-stone-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[80vw] mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl text-amber-600 mb-4">PUBLIC POST OFFICE</h1>
              <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Top Banner */}
              <div className="bg-stone-600 p-6 text-white">
                <h2 className="text-xl sm:text-2xl text-white">Kovalam Post Office</h2>
                <p className="text-lg sm:text-xl text-white">Pin Code: <span className=" bg-stone-400 px-2 py-1 rounded">603112</span></p>
                <p className="text-lg sm:text-xl text-white mt-2">Kanchipuram District, Tamil Nadu, India</p>
              </div>

              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 p-6">
                {/* History Section */}
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600">History of Kovalam Post Office</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    The Kovalam post office has a history dating back to the British colonial era. During this time, the Indian postal system was established, and post offices were set up across the country to facilitate communication.
                  </p>
                </div>

                {/* Services Section */}
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600">Services Offered</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">Mail Services:</span> Letter and parcel delivery, money orders, and postal orders.</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">Savings Schemes:</span> Post office savings accounts, national savings certificates, and public provident fund accounts.</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">Insurance Services:</span> Postal life insurance and rural postal life insurance.</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">Bill Payment Services:</span> Payment of electricity, water, and telephone bills.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Footer */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg sm:text-xl  text-gray-500">Serving the community since colonial era</span>
                  </div>
                  <div className="text-lg sm:text-xl  text-gray-500">
                    #IndiaPost
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="PublicHotels" className="content hidden bg-gradient-to-b from-stone-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[80vw] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl text-amber-600 mb-4">PUBLIC HOTELS AND RESTAURANTS</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            {/* Luxury Hotels Section */}
            <div className="mb-20">
              <h3 className="text-xl sm:text-2xl text-amber-600 mb-8 pl-2 border-l-4 border-amber-500">Luxury Hotels</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Taj Fisherman's Cove */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover">
                  <div className="h-48 bg-cover bg-center flex items-center justify-center" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621974.jpg')" }}>
                    <span className="text-white text-xl  text-center px-4">Taj Fisherman's Cove</span>
                  </div>
                  <div className="p-6">
                    <p className="text-lg sm:text-xl text-gray-950 mb-4">A 5-star resort that offers luxurious rooms, suites, and villas, along with world-className amenities like a private beach, spa, and fine dining restaurants.</p>
                    <div className="text-lg sm:text-xl flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-lg sm:text-xl  ">5-star</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-lg sm:text-xl  ">Beachfront</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-lg sm:text-xl  ">Spa</span>
                    </div>
                  </div>
                </div>

                {/* Vivanta by Taj */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover">
                  <div className="h-48 bg-cover bg-center flex items-center justify-center" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621975.jpg')" }}>
                    <span className="text-white text-xl  text-center px-4">Vivanta by Taj - Fisherman's Cove</span>
                  </div>
                  <div className="p-6">
                    <p className="text-lg sm:text-xl text-gray-950 mb-4">Another luxury property from the Taj group, offering stylish rooms, multiple dining options, and a range of recreational activities.</p>
                    <div className="text-lg sm:text-xl flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-lg sm:text-xl  ">Luxury</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-lg sm:text-xl  ">Multiple Dining</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-lg sm:text-xl  ">Activities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurants and Resorts Section */}
            <div>
              <h3 className="text-xl sm:text-2xl text-amber-600 mb-8 pl-2 border-l-4 border-amber-500">More Restaurants and Resorts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* The Bay View */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621988.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">The Bay View</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-lg sm:text-xl text-gray-950">A seafood restaurant located within the Taj Fisherman's Cove resort, offering stunning views of the bay and a range of seafood dishes.</p>
                    <div className="text-lg sm:text-xl mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                      <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Fine Dining</span>
                    </div>
                  </div>
                </div>

                {/* Bella Vagues */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621991.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Bella Vagues</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A charming restaurant offering delightful cuisine and relaxing ambiance.</p>
                  </div>
                </div>

                {/* Sea View Inn */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/h11.png')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Sea View Inn</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside restaurant serving fresh seafood, local cuisine, and refreshing drinks.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Local Cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Sea La Vie */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621996.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Sea La Vie</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A stylish restaurant offering a range of international dishes, cocktails, and stunning sea views.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">International</span>
                      <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Cocktails</span>
                    </div>
                  </div>
                </div>

                {/* Coastal Paradise */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621995.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Coastal Paradise</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside restaurant serving traditional Indian cuisine, seafood, and local specialties.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Ocean Beach Resort */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621994.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Ocean Beach Resort</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside resort with a restaurant serving a range of international dishes, seafood, and refreshing drinks.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Resort</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Le Grace Beach View Resort */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621989.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Le Grace Beach View Resort</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside resort with a restaurant offering stunning views of the sea and a range of cuisines.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Resort</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Multi-cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Raj Beach Resort */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621986.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Raj Beach Resort</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside resort with a restaurant serving traditional Indian cuisine, seafood, and local specialties.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Kites-Covelong */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/h11.png')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Kites-Covelong</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside restaurant and resort offering a range of international dishes, seafood, and refreshing drinks.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">International</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Mervue Villa */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621987.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Mervue Villa</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside villa with a restaurant serving traditional Indian cuisine, seafood, and local specialties.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Iqbal Beach House */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621990.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Iqbal Beach House</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside restaurant serving fresh seafood, local cuisine, and refreshing drinks.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Local Cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Green Garden */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621993.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">Green Garden</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">A beachside restaurant serving traditional Indian cuisine, seafood, and local specialties.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* The Amuse Beach House */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                </div>
              </div>

              {/* Footer Note */}
              <div className="mt-16 text-lg sm:text-xl text-center text-gray-950 max-w-3xl mx-auto">
                <p>These are just a few examples of the many hotels, restaurants, and resorts available in Kovalam. Visitors can choose from a range of options to suit their budget and preferences.</p>
              </div>
            </div>
          </div>
        </section>

        <style>{inlineStyles[4]}</style>

        <div id="E_Sevai" className="content hidden">
          <section className="max-w-8xl mx-auto my-8 section">
            <h2 className="text-2xl sm:text-3xl  text-amber-600 mb-4 text-center">E-SEVAI SERVICE</h2>
          </section>

          <div id="certificatesListContainer" className="flex flex-wrap gap-6 max-w-8xl p-6">
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-1" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-1')", event)}>Community Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-2" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-2')", event)}>Income Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-3" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-3')", event)}>Residence Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-4" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-4')", event)}>Nativity Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-5" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-5')", event)}>Other Backward Class(OBC) Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-6" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-6')", event)}>First Graduate Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-7" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-7')", event)}>Tamil Medium Certificate (PSTM)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-8" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-8')", event)}>Widow Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-9" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-9')", event)}>Legal Heir Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-10" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-10')", event)}>No Male Child Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-11" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-11')", event)}>Destitute Widow Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-12" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-12')", event)}>Unmarried Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-13" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-13')", event)}>Indira Gandhi National Old Age Pension Scheme (IGNOPS)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-14" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-14')", event)}>Differently Abled Pension (DAPS)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-15" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-15')", event)}>Deserted Woman Certificate</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-16" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-16')", event)}>Renewal of Relief Assistance to Marine Fisherman During Ban Period</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-17" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-17')", event)}>Renewal of Special Allowance to Marine Fisherman During Fishing Lean Period</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-18" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-18')", event)}>Traffic Police</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-19" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-19')", event)}>Police Verification (NOC)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-20" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-20')", event)}>Department of Civil Supplies and Consumer Protection</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-21" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-21')", event)}>Department of Employment and Training</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-22" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-22')", event)}>Aadhar Card Address Change</a>
            </div>

          </div>
          <div style={{ "position": "fixed", "bottom": "40px", "right": "20px", "display": "flex", "gap": "15px" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Tax_Management',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Water_Management',this)", event)}>Next</a>
          </div>
        </div>

        <div id="Tax_Management" className="content hidden rounded-xl p-6 w-full max-w-full">
          <h1 className="text-2xl sm:text-3xl text-center text-amber-600 mb-6">TAX MANAGEMENT</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column: List of Taxes */}
            <div className="bg-slate-50 p-4 rounded-xl border border-amber-100">
              <h2 className="text-xl sm:text-2xl text-amber-700 mb-5 pb-2 border-b border-amber-200">List of Taxes</h2>
              <ul className="space-y-2 text-gray-950">
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Property Tax
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Professional Tax
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Water Tax
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Trade License
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-300 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Non Tax
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Item 1 */}
                <div className="flex flex-col items-center space-y-4">
                  {/* <img loading="lazy" decoding="async" src="/assets/images/taxs/t18.jpg" className="rounded-lg shadow" alt="Tax Image 1" /> */}
                  <img loading="lazy" decoding="async" src="/assets/images/taxs/t18.jpg" className="rounded-lg shadow" alt="Tax Image 1" />
                </div>
                {/* Item 2 */}
                <div className="flex flex-col items-center space-y-4">
                  <img loading="lazy" decoding="async" src="/assets/images/taxs/6248982738153621969.jpg" className="rounded-lg shadow" alt="Tax Image 2" />
                </div>
                {/* Item 2 */}
                <div className="flex flex-col items-center space-y-4">
                  <img loading="lazy" decoding="async" src="/assets/images/taxs/6248982738153621968.jpg" className="rounded-lg shadow" alt="Tax Image 2" />
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <img loading="lazy" decoding="async" src="/assets/images/taxs/t3.jpg" className="rounded-lg shadow" alt="Tax Image 2" />
                </div>
              </div>
            </div>

            {/* Right Column: Approvals */}
            <div className="bg-slate-50 p-4 rounded-lg border border-amber-100 flex flex-col h-full">
              <h2 className="text-xl sm:text-2xl text-amber-700 mb-5 pb-2 border-b border-amber-200">Approvals</h2>
              <ul className="space-y-2 text-gray-950 flex-grow">
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://onlineppa.tn.gov.in/SWP-web" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Building Approval
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://onlineppa.tn.gov.in/SWP-web" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Land Regularisation
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-3"></div>
                  <a href="https://onlineppa.tn.gov.in/SWP-web" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    Layout Approval
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
              {/* Images at the bottom */}
              <div className="grid grid-cols-2 gap-4 mt-auto p-4 mt-16">
                <img loading="lazy" decoding="async" src="/assets/images/taxs/cert6.png" className="rounded-lg shadow" alt="Approval Image 1" />
                <img loading="lazy" decoding="async" src="/assets/images/taxs/t7.jpg" className="rounded-lg shadow" alt="Approval Image 2" />
                <img loading="lazy" decoding="async" src="/assets/images/taxs/t21.jpg" className="rounded-lg shadow" alt="Approval Image 2" />
                <img loading="lazy" decoding="async" src="/assets/images/taxs/t6.jpg" className="rounded-lg shadow" alt="Approval Image 2" />
              </div>
            </div>
            <div style={{ "position": "fixed", "bottom": "80px", "right": "20px", "display": "flex", "gap": "15px" }}>
              {/* <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Water_Management',this)", event)}>Prev</a> */}
              <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('E_Sevai',this)", event)}>Next</a>
            </div>
          </div>
        </div>


        {/* water management */}
        <div id="Water_Management" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
          <h1 className="text-2xl sm:text-3xl text-amber-600 mb-8 text-center" data-aos="animate-fade-in">WATER MANAGEMENT</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* OHT Water */}
            <button
              onClick={(event) => executeInlineAction("showContent('OHTWaterProcess'); showTable('OHT'); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 0 512 512" fill="currentColor">
                <path d="M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144l0 80c0 17.7-14.3 32-32 32l-4.9 0 32 192 68.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-95.5 0c-.4 0-.8 0-1.1 0l-254.8 0c-.4 0-.8 0-1.1 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 32-192-4.9 0c-17.7 0-32-14.3-32-32l0-80c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9l160-80zM314.5 448L256 399.2 197.5 448l117 0zM197.8 256l-4.7 28.3L256 336.8l62.9-52.5L314.2 256l-116.5 0zm-13.9 83.2l-11.2 67L218.5 368l-34.6-28.8zM293.5 368l45.8 38.1-11.2-67L293.5 368zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" /></svg>

              <h6 className="text-lg sm:text-xl">OHT Water</h6>
            </button>

            {/* Well Water */}
            <button
              onClick={(event) => executeInlineAction("showContent('WellWaterProcess'); hideTable();", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 0 576 512" fill="currentColor">
                <path d="M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3l0 1.7c0 53-43 96-96 96s-96-43-96-96l0-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" /></svg>
              <h6 className="text-lg sm:text-xl">Well Water</h6>
            </button>

            {/* Hand Pump */}
            <button
              onClick={(event) => executeInlineAction("showContent('HandPumpWaterProcess');hideTable();", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 " height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-280h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM40-160v-320h80v40h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360v-40h80v320h-80v-40h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120v40H40Zm80-120v-80 80Zm720-320v-80 80ZM480-480Zm0 120q-33 0-56.5-23.5T400-440q0-23 9.5-45.5T446-550l34-50 34 50q27 42 36.5 64.5T560-440q0 33-23.5 56.5T480-360Z" /></svg>
              <h6 className="text-lg sm:text-xl">Hand Pump</h6>
            </button>

            {/* Lorry Water */}
            <button
              onClick={(event) => executeInlineAction("showContent('LorryWaterProcess'); hideTable(); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 -960 960 960" fill="currentColor"><path d="M280-120q-50 0-85-35t-35-85h-40q-33 0-56.5-23.5T40-320v-200h440v-160q0-33 23.5-56.5T560-760h80v-40q0-17 11.5-28.5T680-840h40q17 0 28.5 11.5T760-800v40h22q26 0 47 15t29 40l58 172q2 6 3 12.5t1 13.5v267H800q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-240q0-17-11.5-28.5T280-280q-17 0-28.5 11.5T240-240q0 17 11.5 28.5T280-200Zm400 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v120h71q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h111v-120H120Zm440 120h31q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h71v-120H560v120Zm0-200h276l-54-160H560v160ZM40-560v-60h40v-80H40v-60h400v60h-40v80h40v60H40Zm100-60h70v-80h-70v80Zm130 0h70v-80h-70v80Zm210 180H120h360Zm80 0h280-280Z" /></svg>
              <h6 className="text-lg sm:text-xl">Lorry Water</h6>
            </button>

            {/* OHT Cleaning */}
            <button
              onClick={(event) => executeInlineAction("showContent('OHTCleaningWaterProcess');hideTable(); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M680-640q-25 0-42.5-17.5T620-700q0-17 17-45t43-55q26 27 43 55t17 45q0 25-17.5 42.5T680-640Zm100 280q-42 0-71-29t-29-71q0-35 31-86.5t69-93.5q38 42 69 93.5t31 86.5q0 42-29 71t-71 29ZM360-240h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM240-80q-33 0-56.5-23.5T160-160v-320q0-90 57-156t143-80v-84h-80v-80h240q34 0 64 10.5t56 29.5l-58 58q-14-8-29.5-13t-32.5-5h-80v84q86 14 143 80t57 156v320q0 33-23.5 56.5T560-80H240Zm0-80h320v-320q0-66-47-113t-113-47q-66 0-113 47t-47 113v320Zm0 0h320-320Z" />
              </svg>
              <h6 className="text-lg sm:text-xl">OHT Cleaning</h6>
            </button>

            {/* Water Chlorination */}
            <button
              onClick={(event) => executeInlineAction("showContent('WaterChlorinationWaterProcess');hideTable(); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 -960 960 960" fill="currentColor">
                <path fillRule="evenodd" d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl">Water Chlorination</h6>
            </button>
          </div>
          <div style={{ "position": "fixed", "bottom": "0px", "right": "20px", "display": "flex", "gap": "15px" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('E_Sevai',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Garbage_Management',this)", event)}>Next</a>
          </div>

          <div id="OHTWaterProcess" className="hidden transition-all duration-500">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl text-amber-800 mb-2">OHT Water Supply Process</h1>
                <p className="text-lg sm:text-xl text-gray-950">How we deliver clean water efficiently</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Photo 1 - Water Sourcing */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/well-1.jpg" alt="Water sourcing from Tayur" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950">Water Sourcing</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">Water is sourced from Tayur, which is likely a nearby water source</p>
                  </div>
                </div>

                {/* Photo 2 - Storage in sump */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/beach/image.png" alt="Water storage in sump" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950">Storage in Sump</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">The water is stored in a sump</p>
                  </div>
                </div>

                {/* Photo 3 - Pumping to OHT */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/OHT-1.jpg" alt="Pumping water to OHT" className="w-full h-full object-fill" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950">Pumping to OHT</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">The water is then pumped from the sump to the overhead tank (OHT), which is located at the higher elevation</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/OHTCleaning/10.jpg" alt="Complete water supply system" className="w-full h-full object-fill" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950">Water Distribution</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">Clean water is now ready htmlFor distribution to the community</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                <h2 className="text-xl sm:text-2xl  text-amber-800 mb-3">Process Flow</h2>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-water"></i>
                    </div>
                    <span className="text-lg sm:text-xl ">Source</span>
                  </div>
                  <div className="hidden sm:block text-amber-600 mx-2">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-database"></i>
                    </div>
                    <span className="text-lg sm:text-xl ">Sump</span>
                  </div>
                  <div className="hidden sm:block text-amber-600 mx-2">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-gas-pump"></i>
                    </div>
                    <span className="text-lg sm:text-xl ">Pumping</span>
                  </div>
                  <div className="hidden sm:block text-amber-600 mx-2">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-tint"></i>
                    </div>
                    <span className="text-lg sm:text-xl ">OHT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="tableOHTContainer" className="place-items-center gap-6 mt-10"></div>



          <div id="WellWaterProcess" className="hidden transition-all duration-500">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">


              <div className="text-center mb-16">
                <h1 className="text-2xl sm:text-3xl text-amber-700 mb-3">Well Water Supply Process</h1>
                <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
                <p className="text-lg sm:text-xl text-gray-950 max-w-2xl mx-auto">From groundwater to your tap - our sustainable water delivery system</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                {/* Process Step 1 - Well */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-well"></i></span>
                    {/* Replace with actual image */}
                    <img loading="lazy" decoding="async" src="https://t4.ftcdn.net/jpg/00/67/46/35/360_F_67463530_W8YgA8CtpXHRXJ4btP6xje4B0MvVkI87.jpg" alt="Water well" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center  text-lg sm:text-xl">1</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Well</h3>
                    <p className="text-lg sm:text-xl text-gray-950">The water source is a well which collects groundwater</p>
                  </div>
                </div>

                {/* Process Step 2 - Sump */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-water-tower"></i></span>
                    {/* Replace with actual image */}
                    <img loading="lazy" decoding="async" src="https://heartlandinspections.com/wp-content/uploads/2022/10/new-sump-pump.webp" alt="Water sump tank" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center  text-lg sm:text-xl">2</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl   text-gray-950 mb-2">Sump</h3>
                    <p className="text-lg sm:text-xl text-gray-950">The water from the well is pumped into a sump, which is a large tank that stores water</p>
                  </div>
                </div>

                {/* Process Step 3 - Distribution */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-network-wired"></i></span>
                    {/* Replace with actual image */}
                    <img loading="lazy" decoding="async" src="https://damassets.autodesk.net/content/dam/autodesk/draftr/25657/2-1216x760-2.png" alt="Water distribution pipes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center  text-lg sm:text-xl">3</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Distribution</h3>
                    <p className="text-lg sm:text-xl text-gray-950">The water from the sump is distributed through a network of pipes</p>
                  </div>
                </div>

                {/* Process Step 4 - Tap */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-faucet"></i></span>
                    {/* Replace with actual image */}
                    <img loading="lazy" decoding="async" src="/assets/images/beach/tap water.jpg" alt="Clean water tap" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center  text-lg sm:text-xl">4</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Tap</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Water reaches households ending at a tap (faucet) where users can access clean water</p>
                  </div>
                </div>
              </div>
              {/* Stats Section */}
              <div className="grid md:grid-cols-3 mb-10 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-amber-600 text-2xl sm:text-3xl mb-2">1</div>
                  <h3 className="text-lg sm:text-xl  text-gray-950">Water Source</h3>
                  <p className="text-gray-500 text-base sm:text-sm">Sustainable well</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-amber-600 text-2xl sm:text-3xl mb-2">100%</div>
                  <h3 className="text-lg sm:text-xl  text-gray-950">Clean Water</h3>
                  <p className="text-gray-500 text-base sm:text-sm">Quality guaranteed</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-amber-600 text-2xl sm:text-3xl mb-2">24/7</div>
                  <h3 className="text-lg sm:text-xl  text-gray-950">Availability</h3>
                  <p className="text-gray-500 text-base sm:text-sm">Reliable supply</p>
                </div>
              </div>

              {/* Visual Process Flow */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-amber-100 mb-12">
                <h2 className="text-2xl  text-amber-800 mb-6 text-center">Water Journey Visualization</h2>
                <div className="relative">
                  {/* Process Line */}
                  <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-amber-200 transform -translate-y-1/2 z-0"></div>

                  <div className="relative z-10 grid grid-cols-4 gap-4">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-water text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">Well Source</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-tint text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">Sump Storage</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-network-wired text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">Pipe Network</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-faucet text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">Clean Tap Water</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="HandPumpWaterProcess" className="hidden transition-all duration-500">
            <div className="container mx-auto px-4 py-8">
              {/* Header Section */}
              <header className="mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl text-amber-800 mb-2">Kovalam Panchayat Hand Pump</h1>
                <p className="text-lg sm:text-xl text-gray-950">Status of all hand pumps installed to cater to tourists and locals</p>
              </header>

              {/* Hero Images */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/1.JPG" />
                  <div className="p-3 bg-white">
                      <p className="text-lg sm:text-xl text-gray-950">Hand pump at beach area</p>
                  </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/3.JPG" />
                  <div className="p-3 bg-white">
                      <p className="text-lg sm:text-xl text-gray-950">Hand pump in Ansari Nagar</p>
                  </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/4.JPG" />
                  <div className="p-3 bg-white">
                      <p className="text-lg sm:text-xl text-gray-950">Near cricket ground.</p>
                  </div>
              </div>
          </div> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center mb-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/1.JPG" className="mx-auto" />
                  <div className="p-3 bg-white text-center">
                    <p className="text-lg sm:text-xl text-gray-950">Hand pump at beach area</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/3.JPG" className="mx-auto" />
                  <div className="p-3 bg-white text-center">
                    <p className="text-lg sm:text-xl text-gray-950">Hand pump in Ansari Nagar</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/4.JPG" className="mx-auto" />
                  <div className="p-3 bg-white text-center">
                    <p className="text-lg sm:text-xl text-gray-950">Near cricket ground.</p>
                  </div>
                </div>
              </div>

              {/* Report Table */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="p-4 bg-amber-700 text-white">
                  <h2 className="text-xl sm:text-2xl ">Hand Pump Status Overview</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-lg sm:text-xl  text-gray-950 uppercase tracking-wider">S.No</th>
                        <th className="px-6 py-3 text-left text-lg sm:text-xl  text-gray-950 uppercase tracking-wider">Ward</th>
                        <th className="px-6 py-3 text-left text-lg sm:text-xl  text-gray-950 uppercase tracking-wider">Area</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Kundrukadu Marine Police Station</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">2</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Madha Kovil Sudugadu</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">3</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Cricket Ground</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">4</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Near Deejai Tank</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">5</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Near Anifa House</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">6</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Near Carmel Madha Stor</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">7</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">3</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Thulukanathamman Kovil Inside</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">3</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Near Surendhar House</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">9</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">4</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Kailashnadhar Kovil St</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">10</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">7</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Ansari Nagar (Babu Bai Opoosite)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">11</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">5</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Kanniyamman Kovil St (Near Shafi House)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">12</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">7</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Surf Turf (Near Sudukadu Inside)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">13</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Muslim T-Sunami Nagar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">14</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">8</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Semmenchery Kuppam (Near OHT Tank)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">15</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">9</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Near Patroja House</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">16</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">9</td>
                        <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">Semmancherrykuppam Beach Road</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Summary Section */}
              <div className="bg-amber-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl  text-amber-800 mb-4">Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg sm:text-xl  text-gray-500 mb-1">Total Hand Pumps</h4>
                    <p className="text-2xl  text-amber-700">16</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg sm:text-xl  text-gray-500 mb-1">Functional</h4>
                    <p className="text-2xl  text-green-600">16</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-lg sm:text-xl  text-gray-500 mb-1">Non-Functional</h4>
                    <p className="text-2xl  text-red-600">0</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="text-center text-lg sm:text-xl text-gray-500 mt-8">
                <p className="mt-1">Last updated: April 2025</p>
              </footer>
            </div>
          </div>

          <div id="LorryWaterProcess" className="hidden transition-all duration-500">
            <div className="container mx-auto px-4 py-8">
              {/* Header */}
              <header className="mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl  text-amber-800 mb-2">Lorry Water Supply Initiative</h1>
                <p className="text-lg sm:text-xl text-gray-950">Mitigating water scarcity during summer months</p>
              </header>

              {/* Hero Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/lorryWater/1.jpg" alt="Water lorry distribution" className="w-full h-48 object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Water lorry distribution in residential area</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/lorryWater/2.jpg" alt="Residents collecting water" className="w-full h-48 object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Residents collecting clean drinking water</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/lorryWater/3.jpg" alt="Water lorry filling" className="w-full h-48 object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Lorry being filled at water source</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/lorryWater/1.jpg" alt="Water distribution point" className="w-full h-48 object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Organized water distribution point</p>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl  text-gray-950">Lorry Water Supply</h2>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">Kovalam Panchayat arranged htmlFor lorry water supply to be distributed throughout the area providing residents with reliable source of clean drinking water during summer months when traditional water sources become scarce.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl  text-gray-950">Alternative Water Source</h2>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">By utilizing lorry water supply the panchayat ensured that residents had access to water despite the slowdown of the Thaiyur water supply. This proactive measure helped prevent water shortages in vulnerable areas.</p>
                </div>
              </div>

              {/* Stats */}
              {/* <div className="bg-amber-50 rounded-lg p-6 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="text-lg sm:text-xl  text-gray-950 mb-1">Areas Covered</h4>
                              <p className="text-2xl  text-amber-700">12+</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="text-lg sm:text-xl  text-gray-950 mb-1">Water Trips Daily</h4>
                              <p className="text-2xl  text-amber-600">8-10</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                              <h4 className="text-lg sm:text-xl  text-gray-950 mb-1">Residents Served</h4>
                              <p className="text-2xl  text-amber-700">5,000+</p>
                          </div>
                      </div>
                  </div> */}

            </div>
          </div>

          <div id="OHTCleaningWaterProcess" className="hidden transition-all duration-500">
            <div className="container mx-auto px-4 py-8">
              {/* Header */}
              <header className="mb-8 text-center">
                <h1 className="text-3xl  text-amber-800 mb-2">OHT Cleaning Program</h1>
                <p className="text-lg sm:text-xl text-gray-950">Ensuring clean drinking water through regular maintenance</p>
              </header>

              {/* Hero Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/C-1.JPG" alt="OHT tank exterior" className="w-full h-auto object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">OHT tank in residential area</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/C-3.JPG" alt="Cleaning process" className="w-full h-auto object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Trained personnel cleaning OHT</p>
                  </div>
                </div>
                {/* <div className="rounded-lg overflow-hidden shadow-md">
                          <img loading="lazy" decoding="async" src="/assets/images/OHTCleaning/3.jpg" alt="Inspection" className="w-full h-auto object-cover" />
                          <div className="p-3 bg-white">
                              <p className="text-lg sm:text-xl text-gray-950">Quality inspection during cleaning</p>
                          </div>
                      </div> */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/C-4.JPG" alt="Inspection" className="w-full h-[490px] object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Quality inspection during cleaning</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-6.JPG" alt="Equipment" className="w-full h-[490px] object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Professional cleaning equipment</p>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h2 className="text-xl  text-gray-950">Frequency</h2>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">OHT cleaning is done every 15 days to remove sediment, algae and other contaminants that may accumulate in the tanks. This regular schedule ensures consistent water quality htmlFor all residents.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h2 className="text-xl  text-gray-950">Manual Cleaning Process</h2>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">Trained personnel physically clean the OHTs to ensure removal of all impurities. The process includes scrubbing, disinfecting, and thorough rinsing to maintain hygienic water storage conditions.</p>
                </div>
              </div>

              {/* Cleaning Steps */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-4">Cleaning Procedure</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                    <p className="text-lg sm:text-xl text-gray-950">Draining the tank completely to remove all standing water</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                    <p className="text-lg sm:text-xl text-gray-950">Manual scrubbing of all interior surfaces with approved cleaning agents</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                    <p className="text-lg sm:text-xl text-gray-950">High-pressure rinsing to remove all debris and cleaning residues</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                    <p className="text-lg sm:text-xl text-gray-950">Disinfection with chlorine solution before refilling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="WaterChlorinationWaterProcess" className="hidden transition-all duration-500">
            <div className="container mx-auto px-4 py-8">
              {/* Header */}
              <header className="mb-8 text-center">
                <h1 className="text-2xl sm:text-3xl  text-amber-800 mb-2">Water Chlorination System</h1>
                <p className="text-lg sm:text-xl text-gray-950">Ensuring safe drinking water through advanced chlorination</p>
              </header>

              {/* Hero Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-2.JPG" alt="Chlorine dosing" className="w-full h-auto object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">
                      Water is collected in a tank or container.
                      A fixed dose of chlorine is added manually.
                      It is mixed thoroughly and left to react.
                      This is ideal htmlFor small-scale disinfection.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/waterTesting/2.png" alt="Water testing" className="w-full h-auto object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">Regular water quality testing</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-10.jpg" alt="OHT with system" className="w-full h-auto object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">
                      Chlorine is added steadily to flowing water.
                      A dosing pump controls the amount added.
                      Used in large water supply systems.
                      Ensures constant disinfection as water moves.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-8.jpg" alt="OHT with system" className="w-full h-auto object-cover" />
                  <div className="p-3 bg-white">
                    <p className="text-lg sm:text-xl text-gray-950">
                      Chlorine tablets dissolve as water flows.
                      Used in overhead tanks or handpumps.
                      Simple method with low maintenance.
                      Perfect htmlFor rural and emergency use.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl text-gray-950">Automatic Chlorination System</h2>
              </div>
              <div className="space-y-4 text-lg sm:text-xl text-gray-950">
                <p>Kovalam Panchayat uses an advanced automatic chlorination system to ensure consistent and accurate chlorination levels in all water supplies. This system is equipped with all OHT tanks throughout Kovalam panchayat.</p>

                <p>The automated system provides several advantages over manual chlorination:</p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Precise chlorine dosing based on water flow and quality parameters</li>
                  <li>Continuous monitoring of residual chlorine levels</li>
                  <li>Automatic adjustments to maintain optimal disinfection</li>
                  <li>Alerts htmlFor maintenance and low chemical supplies</li>
                  <li>Consistent water quality across all distribution points</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className=" text-lg sm:text-xl mb-2">Water Safety</h3>
                <p className="text-gray-950 text-lg sm:text-xl">Ensures elimination of harmful pathogens and bacteria in drinking water</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className=" text-lg sm:text-xl mb-2">Cost Effective</h3>
                <p className="text-gray-950 text-lg sm:text-xl">Reduces chemical waste and optimizes chlorine usage</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className=" text-lg sm:text-xl mb-2">24/7 Protection</h3>
                <p className="text-gray-950 text-lg sm:text-xl">Continuous monitoring and adjustment without manual intervention</p>
              </div>
            </div>
          </div>
        </div>
        <div id="imageWaterContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {/* Images will be displayed here dynamically */}

        </div>
      </div>

      <div id="Garbage_Management" className="content hidden rounded-xl p-6 w-full max-w-full" style={{ "backgroundImage": "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), \r\n        url('/assets/images/garbageCollection/gc1.png')", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}>
        <div className="max-w-[80vw] mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl  text-amber-800 mb-3">Kovalam Panchayat Waste Management</h1>
            <div className="w-24 h-1.5 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">A comprehensive garbage collection and management system serving all 9 wards</p>
          </div>

          {/* Key Contributors Section */}
          <div className="mb-20">
            <h2 className="text-2xl  text-amber-800 mb-8 text-center">Key Contributors</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Contributor 1 */}
              <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                  <span className="text-amber-500 text-5xl"><i className="fas fa-broom"></i></span>
                  {/* <img loading="lazy" decoding="async" src="sweepers.jpg" alt="Sweepers at work" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Sanitary workers</h3>
                  <p className="text-lg sm:text-xl text-gray-950">Responsible htmlFor collecting garbage from households and public areas</p>
                </div>
              </div>

              {/* Contributor 2 */}
              <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                  <span className="text-amber-500 text-5xl"><i className="fas fa-truck"></i></span>
                  {/* <img loading="lazy" decoding="async" src="garbage-truck.jpg" alt="Garbage collection vehicle" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Garbage Vehicles</h3>
                  <p className="text-lg sm:text-xl text-gray-950">Used htmlFor transporting collected garbage to designated segregation areas</p>
                </div>
              </div>

              {/* Contributor 3 */}
              <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                  <span className="text-amber-500 text-5xl"><i className="fas fa-users-cog"></i></span>
                  {/* <img loading="lazy" decoding="async" src="swm-team.jpg" alt="SWM team working" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">SWM Persons</h3>
                  <p className="text-lg sm:text-xl text-gray-950">Oversee the segregation and management of waste</p>
                </div>
              </div>

              {/* Contributor 4 */}
              <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                  <span className="text-amber-500 text-5xl"><i className="fas fa-hands-helping"></i></span>
                  {/* <img loading="lazy" decoding="async" src="plan-foundation.jpg" alt="Plan Foundation team" className="absolute inset-0 w-full h-full object-cover" /> */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Plan Foundation</h3>
                  <p className="text-lg sm:text-xl text-gray-950">Collaborates with the Panchayat to support waste segregation efforts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Flow Section */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl  text-amber-800 mb-8 text-center">Collection & Segregation Process</h2>

            {/* Visual Process Flow */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-amber-100">
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 ">1</div>
                  <h3 className="text-lg text-lg sm:text-xl  ">Coverage of all 9 wards</h3>
                </div>
                <div className="text-amber-600 mx-4 hidden md:block">
                  <i className="fas fa-arrow-right fa-lg"></i>
                </div>
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 ">2</div>
                  <h3 className="text-lg text-lg sm:text-xl ">Waste Collection</h3>
                </div>
                <div className="text-amber-600 mx-4 hidden md:block">
                  <i className="fas fa-arrow-right fa-lg"></i>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 ">3</div>
                  <h3 className="text-lg text-lg sm:text-xl ">Segregation</h3>
                </div>
              </div>

              {/* Segregation Categories */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="category-badge bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl  text-amber-800 mb-1">Decomposable Waste</h4>
                    <p className="text-gray-950 text-base ">Organic waste like food waste and yard trimmings</p>
                  </div>
                </div>
                <div className="category-badge bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                  <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <i className="fas fa-recycle"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl  text-amber-800 mb-1">Non-Decomposable Waste</h4>
                    <p className="text-gray-950 text-base ">Inorganic waste like plastics, metals, and glass</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Awareness Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-amber-100">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                  <div className="h-48 bg-amber-50 rounded-lg flex items-center justify-center">
                    <span className="text-amber-500 text-6xl"><i className="fas fa-chalkboard-teacher"></i></span>
                    {/* <img loading="lazy" decoding="async" src="awareness-program.jpg" alt="Awareness program" className="h-full w-full object-cover rounded-lg" /> */}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3">Community Awareness & Training</h3>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">5 dedicated SWM members conduct regular programs to educate residents about proper waste segregation and management practices.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base ">Workshops</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base ">Door-to-door</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base ">School Programs</span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base ">Community Meetings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <div className="text-amber-600 text-4xl  mb-2">9</div>
              <h3 className="text-lg sm:text-2xl  text-gray-950">Wards Covered</h3>
              <p className="text-gray-950 text-base ">Complete panchayat coverage</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <div className="text-amber-600 text-4xl  mb-2">2</div>
              <h3 className="text-lg sm:text-2xl   text-gray-950">Waste Categories</h3>
              <p className="text-gray-950 text-base ">Proper segregation system</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
              <div className="text-amber-600 text-4xl  mb-2">5</div>
              <h3 className="text-lg sm:text-2xl  text-gray-950">SWM Educators</h3>
              <p className="text-gray-950 text-base ">Driving community awareness</p>
            </div>
          </div>
        </div>
        <div id="garbageImageGallery" className="grid grid-cols-1 max-w-[80vw] mx-auto sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6 mb-8">
          <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100">
            <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/2022-08-22 10-50-16.jpeg" alt="Garbage Collection" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white ">Garbage Collection</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100">
            <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/IMG-20220226-WA0019.jpg" alt="Waste Management" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white ">Waste Management</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100">
            <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/IMG_20220225_101255.jpg" alt="Trash Cleanup" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white ">Trash Cleanup</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100 hidden sm:block">
            <img loading="lazy" decoding="async" src="/assets/images/garbageSegregation/IMG_9259.JPG" alt="Recycling Waste" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white ">Recycling Waste</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100 hidden md:block">
            <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/6253332796995127205.jpg" alt="Plastic Waste Management" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white ">Plastic Waste</span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100 hidden md:block">
            <img loading="lazy" decoding="async" src="/assets/images/garbageSegregation/IMG_9274.JPG" alt="Composting" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white ">Composting</span>
            </div>
          </div>
          <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Water_Management',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Electricity',this)", event)}>Next</a>
          </div>
        </div>
      </div>



      {/* Electricity */}
      <div id="Electricity" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl  text-amber-800 mb-4">Street Lighting Initiatives</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">Enhancing safety and accessibility through strategic lighting solutions in Kovalam</p>
          </header>

          {/* Streetlights Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
              <div className="lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl  text-gray-950 mb-6">Streetlights</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">Streetlights are designed to provide lighting htmlFor streets, roads, and public areas at night or in low-light conditions, ensuring safe navigation htmlFor all.</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-shield-alt text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Safety</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Improve visibility, reducing the risk of accidents and crimes during nighttime hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-lock text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Security</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Well-lit streets deter criminal activity and provide a sense of security htmlFor pedestrians and drivers.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-wheelchair text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Accessibility</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Enable people to navigate streets safely at night, promoting mobility and accessibility htmlFor all residents.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639678.jpg"
                    alt="Streetlights at night"
                    className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639677.jpg"
                    alt="Well-lit pedestrian path"
                    className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639679.jpg"
                    alt="Modern streetlight design"
                    className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639681.jpg"
                    alt="Streetlight maintenance"
                    className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* High Mast Lights Section */}
          <section className="bg-amber-50 rounded-xl p-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl  text-gray-950 mb-6">High Mast Lights</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">Under the leadership of <span className=" text-amber-700">Shobana Thangam Sundar BE</span>, President of Kovalam Panchayat, several initiatives have been implemented to benefit tourists and women, including the installation of high mast lights in beach areas.</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-tools text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Rusting and Corrosion Prevention</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Despite being in a coastal area, the high mast lights are well-maintained to prevent rusting and corrosion through specialized treatments.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-clipboard-check text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Regular Checks</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Systematic inspections and maintenance ensure the lights remain functional and effective throughout the year.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H4.JPG"
                    alt="High mast light at beach"
                    className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H3.JPG"
                    alt="Beach area lighting"
                    className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H2.JPG"
                    alt="High mast light maintenance"
                    className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H5.JPG"
                    alt="Coastal area lighting"
                    className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl  text-gray-950 mb-8">Lighting Initiative Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-moon"></i>
                </div>
                <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Extended Hours</h3>
                <p className="text-base sm:text-lg text-gray-950">Public spaces remain accessible and safe well into the night</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-umbrella-beach"></i>
                </div>
                <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Tourist Friendly</h3>
                <p className="text-base sm:text-lg text-gray-950">Beach areas are welcoming and secure htmlFor evening visitors</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-female"></i>
                </div>
                <h3 className="text-xl sm:text-2xl  text-gray-950 mb-2">Women's Safety</h3>
                <p className="text-base sm:text-lg text-gray-950">Improved lighting enhances security htmlFor women and children</p>
              </div>
            </div>
          </section>
          <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Garbage_Management',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Drainage',this)", event)}>Next</a>
          </div>
        </div>
      </div>

      {/* Drainage */}
      <div id="Drainage" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <div className="container mx-auto">
          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl   text-amber-800 mb-4">Drainage Maintenance System</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">Ensuring clean and efficient wastewater management in Kovalam</p>
          </header>

          {/* Open Drainage Section */}
          <section className="mb-20 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8">
                <h2 className="text-xl sm:text-2xl  text-gray-950 mb-6 flex items-center">
                  <i className="fas fa-water mr-3 text-amber-600"></i> Open Drainage Maintenance
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-broom text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">Regular Cleaning</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Open drains are regularly cleaned to prevent the accumulation of waste and debris, maintaining proper water flow.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-spray-can text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl  text-gray-950 mb-2">Bleaching Powder Treatment</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Bleaching powder is used to disinfect and deodorize the open drains, eliminating unpleasant odors and preventing bacterial growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-0">
                <div className="border border-gray-100">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/OP1.jpg"
                    alt="Open drain cleaning"
                    className="w-full h-full object-cover" />
                </div>
                <div className="border border-gray-100">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/OP2.jpg"
                    alt="Drain disinfection"
                    className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Closed Drainage Section */}
          <section className="mb-20 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Image Column */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="h-full">
                  <img loading="lazy" decoding="async"
                    src="/assets/images/drainage/banner.png"
                    alt="Closed drain inspection"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-1/2 order-1 lg:order-2 p-8">
                <h2 className="text-xl sm:text-2xl text-gray-950 mb-6 flex items-center">
                  <i className="fas fa-road mr-3 text-amber-600"></i> Closed Drainage Maintenance
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-hands-wash text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">Frequent Cleaning</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Closed drains are frequently cleaned to prevent clogging and soaking issues, ensuring smooth wastewater flow.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-shield-alt text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">Preventive Measures</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Regular maintenance helps prevent soak pit issues, ensuring the proper functioning of the entire drainage system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="text-center">
            <h2 className="text-xl sm:text-2xl   text-gray-950 mb-8">Drainage System Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-2xl sm:text-3xl  mb-4">
                  <i className="fas fa-bacteria"></i>
                </div>
                <h3 className="text-lg sm:text-xl  text-gray-950 mb-2">Hygiene</h3>
                <p className="text-lg text-gray-950">Prevents water stagnation and reduces disease-carrying pests</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-2xl sm:text-3xl  mb-4">
                  <i className="fas fa-tint"></i>
                </div>
                <h3 className="text-lg sm:text-xl  text-gray-950 mb-2">Water Conservation</h3>
                <p className="text-lg text-gray-950">Reuses treated water htmlFor sustainable resource management</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-2xl sm:text-3xl  mb-4">
                  <i className="fas fa-city"></i>
                </div>
                <h3 className="text-lg sm:text-xl  text-gray-950 mb-2">Community Health</h3>
                <p className="text-lg text-gray-950">Maintains clean public spaces and reduces environmental pollution</p>
              </div>
            </div>
          </section>

          {/* Soak Pit Process Section */}
          <section className="mb-12">
            <div className="bg-amber-50 rounded-xl p-8">
              <h2 className="text-xl sm:text-2xl  text-gray-950 mb-8 text-center">Soak Pit Process</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="drainage-card bg-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <i className="fas fa-filter text-amber-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg sm:text-xl text-gray-950">Filtration System</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">Soak pits are designed with multiple filtration layers to effectively filter wastewater, removing impurities and contaminants before the water percolates into the ground.</p>
                </div>

                <div className="drainage-card bg-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <i className="fas fa-recycle text-amber-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg sm:text-xl  text-gray-950">Water Reuse</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">Treated water from soak pits is reused htmlFor gardening and other non-potable purposes, promoting water conservation and reducing wastewater disposal in the community.</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d1.jpg"
                    alt="Soak pit structure"
                    className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d2.jpg"
                    alt="Water filtration"
                    className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d3.jpg"
                    alt="Water reuse"
                    className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d4.jpg"
                    alt="Maintained soak pit"
                    className="w-full h-48 object-cover" />
                </div>

              </div>
            </div>
          </section>
          <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Drainage',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Disaster_Management',this)", event)}>Next</a>
          </div>
        </div>
      </div>

      {/* Disaster Management */}
      <div id="Disaster_Management" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="relative rounded-xl overflow-hidden mb-16 h-96">
            <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_5758.HEIC.jpg"
              alt="Disaster management team"
              className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-amber-900 bg-opacity-50 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-2xl sm:text-3xl   text-white mb-4">Disaster Management Initiative</h1>
                <p className="text-lg sm:text-xl sm:text-xl text-amber-100 max-w-3xl mx-auto">Proactive cyclone preparedness htmlFor public safety in Kovalam</p>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <section className="mb-20 text-center max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-950 mb-8">
              To ensure public safety and minimize damage from cyclones occurring between November and January,
              Kovalam Panchayat has established a comprehensive disaster management plan with cutting-edge
              infrastructure and trained personnel.
            </p>
            <div className="w-32 h-1 bg-amber-600 mx-auto"></div>
          </section>

          {/* Key Initiatives */}
          <section className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Committee Card */}
            <div className="disaster-card bg-white rounded-xl shadow-lg p-8 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-users text-amber-600 text-2xl"></i>
                </div>
                <h2 className="text-2xl sm:text-3xl text-gray-950">Disaster Management Committee</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-950 mb-6">
                A dedicated committee of experts and local leaders oversees all aspects of disaster preparedness,
                response coordination, and relief efforts in Kovalam.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_5901.JPG"
                    alt="Committee meeting"
                    className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/6248982738153621976.jpg"
                    alt="Team training"
                    className="w-full h-48 object-cover" />
                </div>
              </div>
              <ul className="text-lg sm:text-xl space-y-3 text-gray-950">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>24/7 monitoring during cyclone season</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Coordination with state and national agencies</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Community awareness programs</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Early warning alerts via SMS, radio, and social media</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Evacuation plans htmlFor coastal and low-lying areas</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Inspection and reinforcement of cyclone shelters</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Backup power and water supply arrangements</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Rapid damage assessment and restoration planning</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>Regular mock drills to ensure emergency readiness</span>
                </li>
              </ul>
            </div>

            {/* War Room Card */}
            <div className="disaster-card bg-white rounded-xl shadow-lg p-8 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marked-alt text-amber-600 text-2xl"></i>
                </div>
                <h2 className="text-2xl sm:text-3xl  text-gray-950">Well-Equipped War Room</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-950 mb-6">
                Our state-of-the-art command center serves as the nerve center htmlFor all disaster management operations,
                equipped with cutting-edge technology htmlFor effective response coordination.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-lg overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/kit.HEIC.jpg"
                    alt="War room equipment"
                    className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_5760.HEIC.jpg"
                    alt="Monitoring systems"
                    className="w-full h-48 object-cover" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl text-gray-950 mb-4">Key Features:</h3>
              <div className="space-y-4">
                <div className="war-room-feature flex items-start p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="feature-icon bg-amber-100 p-2 rounded-full mr-4 text-amber-600 transition-all">
                    <i className="fas fa-cloud-sun"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-950">Real-time Weather Monitoring</h4>
                    <p className="text-lg sm:text-xl text-gray-950">Advanced systems tracking cyclone development and movement</p>
                  </div>
                </div>
                <div className="war-room-feature flex items-start p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="feature-icon bg-amber-100 p-2 rounded-full mr-4 text-amber-600 transition-all">
                    <i className="fas fa-broadcast-tower"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-950">Communication Networks</h4>
                    <p className="text-lg sm:text-xl text-gray-950">Redundant systems htmlFor uninterrupted coordination</p>
                  </div>
                </div>
                <div className="war-room-feature flex items-start p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="feature-icon bg-amber-100 p-2 rounded-full mr-4 text-amber-600 transition-all">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-950">Data Analysis Tools</h4>
                    <p className="text-lg sm:text-xl text-gray-950">Predictive analytics htmlFor informed decision-making</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Preparedness Section */}
          <section className="bg-amber-50 rounded-xl p-8 mb-20">
            <h2 className="text-2xl sm:text-3xl text-center text-gray-950 mb-8">Flood Management Measures</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-people-arrows"></i>
                </div>
                <h3 className="text-xl text-gray-950 mb-3">Evacuation & Shelters</h3>
                <p className="text-lg sm:text-xl text-gray-950">Identifying flood-prone areas and establishing emergency shelters htmlFor timely evacuation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-water"></i>
                </div>
                <h3 className="text-xl text-gray-950 mb-3">Excess Water Removal</h3>
                <p className="text-lg sm:text-xl text-gray-950">Utilizing JCB groovers to quickly remove water and prevent stagnation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-water-ladder"></i>
                </div>
                <h3 className="text-xl text-gray-950 mb-3">Low-Lying Area Management</h3>
                <p className="text-lg sm:text-xl text-gray-950">Improving drainage systems and creating flood-resistant infrastructure.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_6100.JPG"
                  alt="Emergency evacuation"
                  className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_4558.JPG"
                  alt="JCB removing water"
                  className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_4682.JPG"
                  alt="Improved drainage system"
                  className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_5760.HEIC.jpg"
                  alt="Emergency shelter"
                  className="w-full h-48 object-cover" />
              </div>

            </div>
          </section>
          <section className="bg-amber-50 rounded-xl p-8 mb-20">
            <h2 className="text-2xl sm:text-3xl text-center text-gray-950 mb-8">Cyclone Preparedness Measures</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3 className="text-xl  text-gray-950 mb-3">Early Warning Systems</h3>
                <p className="text-lg sm:text-xl text-gray-950">Automated alerts to residents via multiple channels when cyclones approach.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-ambulance"></i>
                </div>
                <h3 className="text-xl  text-gray-950 mb-3">Emergency Response</h3>
                <p className="text-lg sm:text-xl text-gray-950">Trained teams ready htmlFor evacuation and medical assistance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-box-open"></i>
                </div>
                <h3 className="text-xl  text-gray-950 mb-3">Relief Supplies</h3>
                <p className="text-lg sm:text-xl text-gray-950">Stockpiles of food, water and essentials at strategic locations.</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_6527.JPG"
                  alt="Emergency supplies"
                  className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/IMG_5989.JPG"
                  alt="Rescue training"
                  className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/6248982738153621977.jpg"
                  alt="Warning systems"
                  className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img loading="lazy" decoding="async" src="/assets/images/northEastMonsoon/6248982738153621978.jpg"
                  alt="Community drill"
                  className="w-full h-48 object-cover" />
              </div>
            </div>
          </section>


          {/* Call to Action
            <section className="text-center bg-amber-700 rounded-xl p-8 text-white">
                <h2 className="text-2xl sm:text-3xl sm:text-3xl  mb-4">Be Prepared!</h2>
                <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">Know your nearest evacuation centers and emergency contacts</p>
                <button className="text-lg sm:text-xl bg-white text-amber-700 px-6 py-3 rounded-lg  hover:bg-amber-50 transition-colors">
                    Download Preparedness Guide
                </button>
            </section>
            */}
        </div>
        <h1 className="text-2xl sm:text-3xl  text-amber-600 mb-8 text-center">DISASTER MANAGEMENT </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Flood Response Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('disaster',1)", event)}
            className="bg-white text-amber-700  px-4 py-4 rounded-xl shadow-sm border border-amber-200 hover:bg-amber-50 hover:border-amber-300  transition-all duration-200 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M80-80v-80q38 0 56.5-20t77.5-20q59 0 77 20t56 20q38 0 56-20t77-20q57 0 77.5 20t56.5 20q38 0 56-20t77-20q59 0 77 20t56 20v80q-58 0-77-20t-56-20q-37 0-56 20t-77 20q-58 0-77.5-20T480-120q-38 0-56 20t-77 20q-59 0-77-20t-56-20q-37 0-56 20T80-80Zm267-180q-57 0-77-20t-56-20q-35 0-56 20t-78 20v-80q38 0 56-20t77-20q6 0 12 .5t11 1.5l-38-140-55 72-63-50 311-384 461 176-29 75-84-34 81 301q14 8 27.5 15t32.5 7v80q-57-1-77-20.5T747-300q-38 0-56 20t-77 20q-57 0-77.5-20T480-300q-38 0-56 20t-77 20Zm0-80q30 0 46.5-14t50.5-22l-37-136 155-41 56 212q31-2 49-18.5t65-19.5l-86-321-229-84-157 188 69 254q4 1 8.5 1.5t9.5.5Zm149-222Z" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">FLOOD RESPONSE</h6>
          </button>

          {/* war room  Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('disaster',2)", event)}
            className="bg-white text-amber-700  px-4 py-4 rounded-xl shadow-sm border border-amber-200 hover:bg-amber-50 hover:border-amber-300  transition-all duration-200 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">WAR ROOM</h6>
          </button>

          {/* Fire Safety Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('disaster',3)", event)}
            className="bg-white text-amber-700  px-4 py-4 rounded-xl shadow-sm border border-amber-200 hover:bg-amber-50 hover:border-amber-300  transition-all duration-200 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">FIRE & SAFETY</h6>
          </button>
          <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Drainage',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Others',this)", event)}>Next</a>
          </div>
        </div>

        <div id="imageDisasterContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {/* Images will be displayed here dynamically */}
        </div>
      </div>

      {/* Other Services */}
      <section id="Others" className="content hidden mt-12 w-full max-w-full mx-auto">

        {/* Hero div with Photo */}
        <div className="relative h-64 md:h-96 bg-amber-600 overflow-hidden">
          <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Community Service"
            className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h2 className="text-2xl md:text-4xl  text-white text-center px-4">Building a Better Community Together</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Humanitarian Services */}
          <div className="mb-16">
            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Humanitarian Services"
                    className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl sm:text-2xl  text-amber-800 mb-4">Humanitarian Services</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">Actions taken to save lives, alleviate suffering, and maintain human dignity in response to crises, disasters, or ongoing vulnerabilities.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-amber-50 p-4 rounded">
                      <h3 className="text-xl sm:text-2xl  text-amber-700">Natural Disasters</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Floods, Cyclones etc.</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded">
                      <h3 className="text-xl sm:text-2xl  text-amber-700">Epidemics</h3>
                      <p className="text-lg sm:text-xl  text-gray-950">Disease outbreaks, Pandemics</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded">
                      <h3 className="text-xl sm:text-2xl  text-amber-700">Poverty</h3>
                      <p className="text-lg sm:text-xl  text-gray-950">Hunger and social inequality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50">
                <div className="border rounded overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/1.jpg"
                    alt="Medical Care"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl sm:text-2xl text-amber-700">Medical Care</h3>
                    <p className="text-lg sm:text-xl text-gray-950">During Covid-19, we organized vaccination programs with free lunch in partnership with STS Foundation.</p>
                  </div>
                </div>
                <div className="border rounded overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/2.jpg"
                    alt="Relief and Recovery"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl sm:text-2xl  text-amber-700">Relief and Recovery</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Distribution of essential items to people affected by flood or cyclone with stakeholders and public support of STS Foundation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tree Pruning */}
          <div className="mb-16">
            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3">
                  <img loading="lazy" decoding="async" src="/assets/images/others/tree1.jpg"
                    alt="Tree Pruning"
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl  text-amber-800 mb-4">Tree Pruning htmlFor Electrical Services & Festival Preparations</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">Kovalam Panchayat prioritizes public safety and efficient electrical services through regular tree pruning.</p>

                  <div className="grid md:grid-cols-1 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-amber-700 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Monthly Tree Pruning
                      </h3>
                      <ul className="mt-2 text-gray-950 pl-7 text-lg sm:text-xl ">
                        <li className="mb-1">• Electrical Wire Clearance</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-amber-700 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Festival Preparation
                      </h3>
                      <ul className="mt-2 text-gray-950 pl-7 text-lg sm:text-xl ">
                        <li className="mb-1">• Chariot (& Ratha) Pulling Route Clearance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-amber-50 p-4 rounded">
                    <p className="text-lg sm:text-xl text-amber-700">By these activities of Tree Pruning, Kovalam Panchayat ensures the reliable service supply of electrical services, supports festive celebrations and maintains a safe and beautiful environment htmlFor its residents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animal Control */}
          <div className="mb-16">
            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img loading="lazy" decoding="async" src="/assets/images/others/A1.JPG"
                    alt="Animal Control"
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl  text-amber-800 mb-4">Animal Control (Dogs)</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">Kovalam Panchayat has initiated an Animal Birth Control (ABC) Program to manage the street dog population and ensure public health and safety.</p>

                  <h3 className="text-xl sm:text-2xl  text-amber-700 mt-6 mb-2">Program Overview:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">1. Street Survey and Transportation</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">2. Capturing and Sterilizing</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">3. Spaying / Neutering</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">4. Post-Operation Care</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded md:col-span-2">
                      <p className="text-lg sm:text-xl text-gray-950">5. Release and Monitoring</p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl  text-amber-700 mt-6 mb-2">Benefits:</h3>
                  <div className="text-lg sm:text-xl flex flex-wrap gap-2">
                    <span className="bg-amber-100 text-amber-800 text-xs  px-3 py-1 text-lg sm:text-xl  rounded-full">Street Dog Population Control</span>
                    <span className="bg-amber-100 text-amber-800 text-xs  px-3 py-1 text-lg sm:text-xl  rounded-full">Improved Public Health</span>
                    <span className="bg-amber-100 text-amber-800 text-xs  px-3 py-1 text-lg sm:text-xl  rounded-full">Animal Welfare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elderly Assistance */}
          <div className="mb-16">
            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex flex-row-reverse">
                <div className="md:w-1/3">
                  <img loading="lazy" decoding="async" src="/assets/images/achievements/6248982738153622038.jpg"
                    alt="Elderly Assistance"
                    className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl  text-amber-800 mb-4">Elderly Assistance</h2>
                  <p className="text-lg sm:text-xl text-gray-950">Our Elderly Assistance Program is a collaborative effort with local NGOs, healthcare providers, and Community Volunteers to ensure comprehensive support htmlFor our senior citizens.</p>

                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-lg sm:text-xl text-yellow-700">We provide various services including healthcare checkups, companionship programs, and assistance with daily needs htmlFor our elderly community members.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mosquito Fogging */}
          <div>
            <div className="service-card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img loading="lazy" decoding="async" src="/assets/images/others/M1.jpg"
                    alt="Mosquito Fogging"
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl  text-amber-800 mb-4">Mosquito Fogging</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">Kovalam Panchayat conducts regular mosquito fogging operations to prevent the spread of mosquito-borne diseases.</p>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl text-gray-950 mb-2">Fogging Schedule:</h3>
                    <ul className="text-gray-950 text-lg sm:text-xl">
                      <li className="mb-1"><span className="text-lg sm:text-xl ">Frequency:</span> Twice a month</li>
                      <li><span className="text-lg sm:text-xl">Coverage:</span> All areas within the Panchayat are covered in a cyclical manner.</li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-amber-50 p-4 rounded">
                    <p className="text-lg sm:text-xl text-amber-700">By conducting regular mosquito fogging operations, Kovalam Panchayat demonstrates its commitment to protecting public health and preventing the spread of mosquito-borne diseases.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div style={{ "position": "fixed", "bottom": "8px", "right": "20px", "display": "flex", "gap": "15px" }}>
          <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Drainage',this)", event)}>Prev</a>
          {/* <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Disaster_Management',this)", event)}>Next</a> */}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="Achievements" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Hero div */}
          <header className="relative bg-gradient-to-r from-amber-500 to-amber-700 rounded-2xl p-8 mb-10 text-white overflow-hidden">
            <div className="hidden lg:block md:block ribbon">
              <span className="ribbon-content">BEST ADMINISTRATION AWARD</span>
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl  mb-4">OUR ACHIEVEMENTS!</h1>
              <p className="text-lg sm:text-xl  mb-6">Celebrating excellence in governance and community development</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-lg sm:text-xl ">Innovative Governance</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-lg sm:text-xl ">Community Development</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-lg sm:text-xl ">Citizen Welfare</span>
              </div>
            </div>
          </header>

          {/* Administration div */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Administration
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <p className="text-lg sm:text-xl text-gray-950 mb-6">Kovalam Panchayat has implemented a Volunteer-based System htmlFor Managing Public Queries and Concerns.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl   text-amber-900 mb-4">Key Features:</h3>
                  <ul className="space-y-3 text-lg sm:text-xl ">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Volunteer-based System: Trained volunteers are part of the query management team.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Query Management: A systematic process is in place to collect, track, and resolve public queries and concerns.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Multi-channel Reporting: Citizens can report issues through various channels (e.g., phone, email, in-person).</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Issue Tracking: Queries are tracked and monitored to ensure timely resolution.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img loading="lazy" decoding="async" src="/assets/images/awards/6235471922091639859.jpg" alt="Administration team" className="rounded-lg w-full h-auto shadow" />
                </div>
              </div>
            </div>

            {/* Award div */}
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl sm:text-2xl  text-amber-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                BEST ADMINISTRATION AWARD!
              </h3>
              <p className="text-lg sm:text-xl text-gray-950 mb-4">Kovalam Panchayat has been conferred with the prestigious "Best Administration Award" by the Collector htmlFor two consecutive years: 2022-2023 and 2024-2025.</p>
              <p className="text-lg sm:text-xl text-gray-950">This recognition is a testament to the Panchayat's dedication to innovative governance, community development, and citizen welfare.</p>
              <div>
                <img loading="lazy" decoding="async" src="/assets/images/awards/76 Republic Day award .JPG" alt="Administration team" className="rounded-lg w-full h-auto shadow" />
              </div>
            </div>
          </div>

          {/* Child Friendly Initiatives */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              CHILD FRIENDLY INITIATIVES
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">Balar Sabha Tour</h3>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">With collaboration of STS Foundation, organised a tour htmlFor underprivileged students promoting education and exploration.</p>
                <img loading="lazy" decoding="async" src="/assets/images/awards/6248982738153621953.jpg" alt="Student tour" className="rounded-lg w-full h-auto" />
                <img loading="lazy" decoding="async" src="/assets/images/awards/6248982738153621939.jpg" alt="Student tour" className="rounded-lg mt-2 w-full h-auto" />
              </div>
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">Distribution of Essential Items</h3>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">Collaborated with STS Foundation, provided school bags, lunch bags, and education stationery to students, supporting their education journey.</p>
                <img loading="lazy" decoding="async" src="/assets/images/awards/6248982738153621937.jpg" alt="Student tour" className="rounded-lg w-full h-auto" />
                <img loading="lazy" decoding="async" src="/assets/images/awards/6248982738153621952.jpg" alt="Student tour" className="rounded-lg mt-2 w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Women Empowerment */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              WOMEN EMPOWERMENT
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">Motivating Self-Help Groups</h3>
                <p className="text-lg sm:text-xl text-gray-950">Encouraged and supported Self Help Groups (SHGs) and PLF members.</p>
              </div>
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">Women's Day Celebration</h3>
                <p className="text-lg sm:text-xl text-gray-950">Organized Women's day events, including games and activities, and recognized women's achievements with gifts.</p>
              </div>
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">Community Engagement</h3>
                <p className="text-lg sm:text-xl text-gray-950">Promoted Community events like Valaiyapam (Seemantham) and provided millets to women, fostering social bonding and nutrition.</p>
              </div>
            </div>
          </div>

          {/* E-Governance */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              E-GOVERNANCE
            </h2>
            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg sm:text-xl text-gray-950">Kovalam Panchayat has implemented various e-governance initiatives to enhance transparency, efficiency, and citizen engagement.</p>
              <div className="flex gap-4 mt-2">
                <img loading="lazy" decoding="async" src="/assets/images/achievements/6248982738153622030.jpg"
                  alt="Student tour"
                  className="rounded-lg w-1/2 h-auto" />

                <img loading="lazy" decoding="async" src="/assets/images/achievements/6248982738153622031.jpg"
                  alt="Student tour"
                  className="rounded-lg w-1/2 h-auto" />
              </div>
            </div>
          </div>

          {/* Learning Centers */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              PANCHAYAT LEARNING CENTRES & SIRD VISIT
            </h2>
            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg sm:text-xl text-gray-950">Established a Learning Centre to enhance the capacity of Panchayat officials and through SIRD Visit, facilitated a visit from the State Institute of Rural Development to promote knowledge sharing and best practices.</p>
              <div className="flex gap-4 mt-2">
                <img loading="lazy" decoding="async" src="/assets/images/others/6248982738153621951.jpg"
                  alt="Student tour"
                  className="rounded-lg w-1/2 h-auto" />

                <img loading="lazy" decoding="async" src="/assets/images/others/6248982738153621950.jpg"
                  alt="Student tour"
                  className="rounded-lg w-1/2 h-auto" />
              </div>
            </div>
          </div>

          {/* Electricity Substation */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              ELECTRICITY SUBSTATION
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Text Section */}
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <p className="text-lg sm:text-xl text-gray-950 mb-4">
                  Kovalam Panchayat has identified a site htmlFor a new electricity substation, aiming to enhance power supply reliability and meet growing demand.
                </p>
                <p className="text-lg sm:text-xl text-gray-950">
                  The electrical substation project in Kovalam will significantly improve power supply reliability, support economic growth, and enhance the overall quality of life htmlFor the community.
                </p>
              </div>

              {/* Image Section */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <img loading="lazy" decoding="async" src="/assets/images/others/electrical-substation.jpg"
                    alt="Electricity substation"
                    className="w-full h-64 sm:h-full rounded-lg object-cover shadow" />
                </div>
                <div className="flex-1 sm:flex-2">
                  <img loading="lazy" decoding="async" src="https://electricalacademia.com/wp-content/uploads/2018/08/electrical-substation-1-1.webp"
                    alt="Electricity substation"
                    className="w-full h-64 sm:h-full rounded-lg object-cover shadow" />
                </div>
              </div>
            </div>
          </div>

          {/* Water Reservoir */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              WATER RESERVOIR
            </h2>
            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl sm:text-2xl  text-amber-900 mb-4">CHENNAI'S 6th RESERVOIR TO BE BUILT IN KOVALAM</h3>
              <p className="text-lg sm:text-xl text-gray-950 mb-4">A new reservoir will be constructed in Kovalam, Chennai to serve as the City's sixth reservoir. The project, announced by Minister Thangam Thennarasu, will be built at a cost of ₹360 Crore.</p>

              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h4 className="text-xl sm:text-2xl  text-amber-900 mb-2">KEY FEATURES:</h4>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Capacity: The reservoir will have a capacity of 1.6 TMC (Thousand Million Cubic feet).</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Land Area: The reservoir will spread across 4375 acres of land.</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Flood Water Harvesting: The reservoir will help harvest flood water, reducing the risk of flooding in the City.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="text-xl sm:text-2xl   text-amber-900 mb-2">Benefits:</h4>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Enhanced Water Security</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reduced Flood Risk</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Improved Water Management</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg sm:text-xl text-gray-950 mt-4">The construction of the new reservoir in Kovalam is expected to commence soon, providing a significant boost to Chennai's water infrastructure.</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl  text-amber-900 mb-6 text-center">GALLERY</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/achievements/a1.JPG" alt="Panchayat activities 1" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/achievements/a2.JPG" alt="Panchayat activities 2" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/awards/2022 award.jpg" alt="Panchayat activities 6" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/achievements/a3.JPG" alt="Panchayat activities 2" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              {/* <div className="bg-amber-100 rounded-xl flex items-center justify-center">
                          <div className="text-center p-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                              </svg>
                              <p className=" text-amber-800">More Achievements</p>
                          </div>
                      </div> */}
            </div>
          </div>
          {/* Security & CCTV Surveillance */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M12 11v10m0 0h-6m6 0h6M21 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
              </svg>
              SECURITY & CCTV SURVEILLANCE
            </h2>

            {/* Title Image */}
            <div className="mb-6">
              <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of 1.jpg" alt="CCTV office opening" className="rounded-xl w-full h-auto shadow-md" />
            </div>

            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg sm:text-xl text-gray-950 mb-4">
                Kovalam Panchayat is committed to public safety through a modern and comprehensive CCTV surveillance system. Strategically placed cameras cover public spaces, streets, government offices, and key community areas to deter crime, support law enforcement, and ensure rapid response to incidents.
              </p>

              {/* Objectives */}
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl sm:text-2xl text-amber-900 mb-2">Objectives:</h3>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Enhance public safety through constant monitoring of key areas.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Support law enforcement agencies with actionable video evidence.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ensure rapid response to accidents, emergencies, or suspicious activities.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Promote community confidence and deter criminal activity.
                  </li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl sm:text-2xl text-amber-900 mb-2">Key Features:</h3>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    High-resolution cameras with night vision and motion detection.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Real-time monitoring through a central CCTV control room.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Data storage with backup to support investigations.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Integration with local police and emergency services htmlFor faster response.
                  </li>
                </ul>
              </div>

              {/* Supporting Images */}
              <div className="grid md:grid-cols-5 gap-4 mt-6">
                <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of IMG_4888 2.JPG" alt="CCTV camera installation" className="rounded-lg w-full" style={{ "height": "18.3cap" }} />
                <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of IMG_4904 2.JPG" alt="Control room monitoring" className="rounded-lg w-full shadow" style={{ "height": "18.3cap" }} />
                <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of IMG_4909 2.JPG" alt="Night vision camera" className="rounded-lg w-full h-auto shadow" style={{ "height": "18.3cap" }} />
                <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of IMG_4915 2.JPG" alt="Camera maintenance" className="rounded-lg w-full h-auto shadow" style={{ "height": "18.3cap" }} />
                <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of WhatsApp Image 2025-01-10 at 15.26.53_e2e15a61.jpg" alt="Police coordination" className="rounded-lg w-full h-auto shadow" />
              </div>

              {/* Benefits & Impact */}
              <p className="text-lg sm:text-xl text-gray-950 mt-6">
                The CCTV surveillance initiative has strengthened public safety, minimized crime rates, and fostered trust between citizens and local authorities. It also ensures the protection of public property and provides valuable evidence during investigations. Through continuous monitoring and proactive response, Kovalam is setting a benchmark htmlFor a safer and more secure community.
              </p>

              <p className="text-lg sm:text-xl text-gray-950 mt-4">
                Beyond security, this system empowers the Panchayat to plan better urban management, monitor traffic patterns, and respond efficiently to civic issues. Residents and visitors can feel confident that Kovalam is a safe and well-monitored environment.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 text-center   rounded-lg p-4 mb-4">
            <p className="text-amber-700">Committed to excellence in governance and community development</p>
          </div>

        </div>
      </section>

      {/* AadharCamp */}
      <section id="AadharCamp" className="content hidden mt-12 bg-white">
        <header className="bg-amber-500 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl  mb-2">Aadhaar Services</h1>
            <p className="text-lg sm:text-xl text-amber-100">Kovalam Panchayat - Your Unique Identity</p>
          </div>
        </header>

        {/* Hero div */}
        <div className="py-12 bg-gradient-to-r from-amber-400 to-amber-600 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl  mb-4">Your 12-Digit Key to Government Services</h2>
              <p className="text-lg sm:text-xl text-amber-100 mb-6">Now with a permanent Aadhaar center in Kovalam Panchayat htmlFor your convenience</p>
              <a href="#services" className="text-lg sm:text-xl bg-white text-amber-600 px-6 py-2 rounded-lg  hover:bg-gray-100 transition">Learn More</a>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="aspect-[3/2] overflow-hidden">
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/1.JPG" alt="Aadhaar camp session" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div className="aspect-[3/2] overflow-hidden">
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/5.jpg" alt="Document verification" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* What is Aadhaar div */}
        <div id="services" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl  text-amber-600 mb-4">What is Aadhaar?</h2>
              <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">Aadhaar is a 12-digit unique identification number that serves as proof of identity and address htmlFor Indian residents.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl  text-amber-700 mb-3">Identity Verification</h3>
                <p className="text-lg sm:text-xl text-gray-950">Serves as proof of identity and address across India.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl  text-amber-700 mb-3">Government Services</h3>
                <p className="text-lg sm:text-xl text-gray-950">Enables access to government services and subsidies.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl  text-amber-700 mb-3">Financial Inclusion</h3>
                <p className="text-lg sm:text-xl text-gray-950">Facilitates digital payments and banking services.</p>
              </div>
            </div>

            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/4.JPG" alt="Aadhaar enrollment" className="rounded-lg shadow" />
                      <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/3.jpg" alt="Biometric collection" className="rounded-lg shadow" />
                      <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2909.JPG" alt="Help desk assistance" className="rounded-lg shadow" />
                      <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2953.JPG" alt="Completed application" className="rounded-lg shadow" />
                  </div> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/4.JPG" alt="Aadhaar enrollment" className="h-48 w-full object-cover rounded-lg shadow" />
              <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/3.jpg" alt="Biometric collection" className="h-48 w-full object-cover rounded-lg shadow" />
              <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2909.JPG" alt="Help desk assistance" className="h-48 w-full object-cover rounded-lg shadow" />
              <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2953.JPG" alt="Completed application" className="h-48 w-full object-cover rounded-lg shadow" />
            </div>
          </div>
        </div>

        {/* Camp Highlights div */}
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl  text-center text-amber-600 mb-12">Our Aadhaar Camp Highlights</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 text-2xl mb-4">1</div>
                <h3 className="text-xl sm:text-2xl  mb-3">Convenient Services</h3>
                <p className="text-lg sm:text-xl text-gray-950">We brought Aadhaar services to the doorstep of our residents, making it easier to enroll and update details.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 text-2xl mb-4">2</div>
                <h3 className="text-xl sm:text-2xl  mb-3">Community Outreach</h3>
                <p className="text-lg sm:text-xl text-gray-950">Our camps helped reach a larger audience, increasing awareness about Aadhaar's importance.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 text-2xl mb-4">3</div>
                <h3 className="text-xl sm:text-2xl  mb-3">Efficient Operations</h3>
                <p className="text-lg sm:text-xl text-gray-950">Streamlined processes minimized waiting times and ensured smooth experience htmlFor applicants.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/1.JPG" alt="Aadhaar camp crowd" className="rounded-lg shadow-lg w-full" />
              <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/2.JPG" alt="Staff assisting residents" className="rounded-lg shadow-lg w-full" />
            </div>
          </div>
        </div>

        {/* Permanent Center div */}
        <div className="py-12 bg-amber-500 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-2xl sm:text-3xl  mb-6">Permanent Aadhaar Center Now Open!</h2>
                <p className="text-lg sm:text-xl text-amber-100 mb-6">Building on our successful camps, we've established a permanent Aadhaar center in Kovalam Panchayat.</p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-amber-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl">Easy Access: No more waiting htmlFor camps or traveling to distant locations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl">Convenience: Get Aadhaar services at a time that suits you</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl">Improved Efficiency: Faster processing and reduced waiting times</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/aadhaar-banner.png" alt="Permanent Aadhaar center" className="rounded-lg shadow-lg w-full" style={{ "height": "45cap" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Benefits div */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl  text-center text-amber-600 mb-12">Additional Aadhaar Benefits</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl sm:text-2xl  mb-3">Prevents Fraud</h3>
                <p className="text-lg sm:text-xl text-gray-950">Helps prevent identity theft and fraudulent activities</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl sm:text-2xl  mb-3">Simplified Processes</h3>
                <p className="text-lg sm:text-xl text-gray-950">Makes passport application and tax filing easier</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl sm:text-2xl  mb-3">Welfare Delivery</h3>
                <p className="text-lg sm:text-xl text-gray-950">Ensures efficient delivery of government welfare schemes</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="GramaSabhaCamp" className="content hidden mt-12 bg-white">
        <section className="bg-gradient-to-tr from-amber-50 to-yellow-200 text-gray-950 py-20">
          <div className="max-w-[80vw] mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-2xl sm:text-3xl  mb-6">Empowering Communities Through Participation</h1>
              <p className="text-lg sm:text-xl   mb-8">Gramasabha provides a platform htmlFor residents to actively participate in local governance and decision-making processes.</p>
              <div className="flex space-x-4">
                <button className="border-2 border-amber-500 px-6 py-3 rounded-lg  hover:bg-amber-500  transition duration-300">Learn More</button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/6.JPG" alt="Community meeting" className="rounded-lg shadow-2xl h-80 object-cover" width="2000" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[80vw] mx-auto px-4">
            <h2 className="text-3xl  text-center mb-12 text-gray-950">Detailed Features of Gramasabha </h2>
            <div className="grid-container grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="grid-item bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   mb-3 text-gray-950">Addressing Local Issues</h3>
                <p className="text-lg sm:text-xl text-gray-950">Provides a platform htmlFor residents to raise concerns and discuss local issues like infrastructure development, public services, and community welfare.</p>
              </div>
              <div className="grid-item bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   mb-3 text-gray-950">Increasing Transparency</h3>
                <p className="text-lg sm:text-xl text-gray-950">Ensures transparency in panchayat decision-making processes and actions, promoting accountability and trust among residents.</p>
              </div>
              <div className="grid-item bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   mb-3 text-gray-950">Fostering Community Engagement</h3>
                <p className="text-lg sm:text-xl text-gray-950">Encourages active participation from residents in governance and decision-making, promoting a sense of ownership and responsibility.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[80vw] mx-auto px-4">
            <h2 className="text-3xl  text-center mb-12 text-gray-950">Gramasabha in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/5.JPG" alt="Village meeting" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">Ward-level Discussions</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/4.JPG" alt="Community participation" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">Open Forum Debates</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/3.JPG" alt="Group planning" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">Community Planning</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/2.JPG" alt="Voting process" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">Democratic Processes</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/1.JPG" alt="Women participation" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">Inclusive Participation</span>
                </div>
              </div>
              <div className="bg-amber-600 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="text-lg sm:text-xl   mb-2 text-center">Register htmlFor Next Meeting</h3>
                <p className="text-lg sm:text-xl text-center mb-4">Join your local Gramasabha and make your voice heard</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-[80vw] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                <h2 className="text-2xl sm:text-3xl  mb-6 text-gray-950">Key Features of Gramasabha Meetings</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-1">Ward-level meetings</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Conducted in every ward to ensure inclusive participation and address local issues specific to each area.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className=" text-lg sm:text-xl  text-gray-950 mb-1">Regular schedule</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Established to maintain consistency and ensure that issues are addressed in a timely manner.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className=" text-lg sm:text-xl  text-gray-950 mb-1">Open discussion</h3>
                      <p className="text-lg sm:text-xl text-gray-950">Encouraged among residents, promoting the exchange of ideas and perspectives.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/gramasaba oct.jpg" alt="Community decision making" className="rounded-xl shadow-lg w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 text-gray-950">
          <div className="max-w-[80vw] mx-auto px-4">
            <h2 className="text-3xl  text-center mb-12">Benefits of Gramasabha</h2>
            <div className="grid-container grid md:grid-cols-3 gap-8">
              <div className="grid-item bg-amber-100  p-6 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl   mb-3">Improved Governance</h3>
                <p className="text-lg sm:text-xl">Ensures that panchayat decisions reflect the needs and priorities of the community, leading to more effective governance.</p>
              </div>
              <div className="grid-item bg-amber-100  p-6 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl   mb-3">Enhanced Accountability</h3>
                <p className="text-lg sm:text-xl">Regular meetings hold elected representatives accountable htmlFor their actions, promoting transparency and trust.</p>
              </div>
              <div className="grid-item bg-amber-100 p-6 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl   mb-3">Empowering Citizens</h3>
                <p className="text-lg sm:text-xl">Provides a platform htmlFor citizens to voice their opinions and participate in decision-making, empowering them to take an active role in governance.</p>
              </div>
            </div>
          </div>
        </section>

      </section>
      <section id="PanCardCamp" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Header div */}
          <header className="bg-amber-50 rounded-xl p-6 mb-8 shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-2xl sm:text-3xl  text-amber-900 mb-3">PAN Card Services</h1>
                <p className="text-lg sm:text-xl text-amber-800">Now available permanently at Kovalam Panchayat</p>
                <div className="mt-6">
                  <a href="#services" className="bg-white text-amber-700 px-6 py-2 rounded-full  shadow-md hover:bg-amber-50 transition duration-300 inline-block">Our Services</a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/events/pan.png" alt="PAN Card Service" className=" w-full h-auto" />
              </div>
            </div>
          </header>

          {/* Introduction div */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-4">About Our PAN Card Facility</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">In the past, we successfully organized PAN CARD camps to provide essential services to our community. We're excited to now offer a permanent PAN card facility in Kovalam Panchayat!</p>
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Community Service" className="rounded-lg w-full h-auto" />
              </div>
              <div>
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Documents" className="rounded-lg w-full h-auto mb-4" />
                <p className="text-lg sm:text-xl text-gray-950">Our dedicated team will guide you through the entire process, ensuring a smooth and hassle-free experience htmlFor all your PAN card needs.</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">Our Previous Camps</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/IMG_2496.JPG" alt="Camp photo 1" className="rounded-lg w-full h-60 object-cover" />
              </div>
              <div>
                <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2909.JPG" alt="Camp photo 2" className="rounded-lg w-full h-60 object-cover" />
              </div>
              <div>
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/IMG_2511.JPG" alt="Camp photo 3" className="rounded-lg w-full h-60 object-cover" />
              </div>
            </div>
          </div>


          {/* Services div */}
          <div id="services" className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">Services Offered</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:border-amber-300 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2 text-center">New PAN Card</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">Apply htmlFor a new PAN card with ease. We'll help you with the entire application process.</p>
              </div>

              {/* Service 2 */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:border-amber-300 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2 text-center">PAN Card Corrections</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">Make corrections to your existing PAN card details like name, date of birth, etc.</p>
              </div>

              {/* Service 3 */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:border-amber-300 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2 text-center">PAN Card Reprint</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">Get a reprint of your lost or damaged PAN card with our assistance.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="VoterIDCamp" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Header div */}
          <header className="bg-amber-50 rounded-xl p-6 mb-8 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-2xl md:text-3xl  text-amber-900 mb-3">VOTER ID CAMP!</h1>
                <p className="text-lg sm:text-xl text-amber-800 mb-4">Now available through Kovalam Panchayat service window</p>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-amber-700">Easy and convenient process</span>
                </div>
                <a href="#services" className="text-lg sm:text-xl bg-white text-amber-700 px-6 py-2 rounded-full  shadow-md hover:bg-amber-50 transition duration-300 inline-block">Our Services</a>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/events/voterid.avif" alt="Voting awareness" className="rounded-lg shadow-lg w-full h-auto transform rotate-1" />
              </div>
            </div>
          </header>

          {/* Introduction div */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-4">Voter ID Services at Kovalam Panchayat</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-lg sm:text-xl text-gray-700 mb-4">Kovalam Panchayat has been actively involved in conducting Voter ID Camps in the past, providing residents with opportunities to register, update, or correct their Voter ID information.</p>
                <p className="text-lg sm:text-xl text-gray-700">To further enhance accessibility and convenience, Kovalam Panchayat has now shifted to providing Voter ID services through their window.</p>
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-lg sm:text-xl text-amber-700 ">"Your vote is your voice. Make sure it's counted with a valid Voter ID."</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/2.jpg" alt="Voting process" className="rounded-lg w-full h-48 object-cover shadow" />
                <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2953.JPG" alt="Documents" className="rounded-lg w-full h-48 object-cover shadow" />
              </div>
            </div>
          </div>

          {/* Process Flow */}
          <div className="bg-amber-50 rounded-xl p-6 mb-8">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">Simple 3-Step Process</h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center mb-6 md:mb-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-amber-600  text-xl">1</span>
                </div>
                <p className="text-lg sm:text-xl ">Visit Panchayat Office</p>
              </div>
              <div className="hidden md:block text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-center mb-6 md:mb-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-amber-600  text-xl">2</span>
                </div>
                <p className="text-lg sm:text-xl ">Submit Documents</p>
              </div>
              <div className="hidden md:block text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-amber-600  text-xl">3</span>
                </div>
                <p className="text-lg sm:text-xl ">Receive Acknowledgement</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">Our Previous Voter ID Camps</h2>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="overflow-hidden rounded-lg">
                          <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2909.JPG" alt="Camp photo 1" className="w-full h-40 object-cover hover:scale-110 transition duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg">
                          <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2925.JPG" alt="Camp photo 2" className="w-full h-40 object-cover hover:scale-110 transition duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg">
                          <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2953.JPG" alt="Camp photo 3" className="w-full h-40 object-cover hover:scale-110 transition duration-300" />
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2925.JPG" alt="Camp photo 3" className="w-full h-40 object-cover hover:scale-110 transition duration-300" />
                      </div>
                  </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2909.JPG" alt="Camp photo 1" className="w-full h-80 object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2925.JPG" alt="Camp photo 2" className="w-full h-80 object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/IMG_2527.JPG" alt="Camp photo 3" className="w-full h-30 object-cover hover:scale-110 transition duration-300" />
              </div>
            </div>

          </div>

          {/* Services div */}
          <div id="services" className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">Services Offered</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="service-card bg-amber-50 p-6 rounded-lg border border-amber-100 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl  text-amber-900 mb-2 text-center">New Voter Registration</h3>
                <p className="text-lg sm:text-xl text-gray-700 text-center">Apply htmlFor a new Voter ID card with proper documentation and guidance from our staff.</p>
              </div>

              {/* Service 2 */}
              <div className="service-card bg-amber-50 p-6 rounded-lg border border-amber-100 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   text-amber-900 mb-2 text-center">Voter ID Correction</h3>
                <p className="text-lg sm:text-xl text-gray-700 text-center">Correct errors or update information on existing Voter ID cards like name, address or photo.</p>
              </div>

              {/* Service 3 */}
              <div className="service-card bg-amber-50 p-6 rounded-lg border border-amber-100 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   text-amber-900 mb-2 text-center">Voter ID Replacement</h3>
                <p className="text-lg sm:text-xl text-gray-700 text-center">Obtain a duplicate Voter ID card in case of loss or damage to your original card.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="BeachCleaning" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Hero div */}
          <header className="rounded-2xl p-6 mb-8 shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-amber-500 opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h1 className="text-2xl sm:text-3xl  text-amber-900 mb-4">MASS BEACH CLEAN UP!</h1>
                <p className="text-lg sm:text:xl text-amber-800 mb-6">Weekly community-driven initiative to preserve the beauty of Kovalam Beach</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-amber-700 text-lg sm:text:xl">#CleanKovalam</span>
                  <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-amber-700 text-lg sm:text:xl">#PlasticFreeBeach</span>
                  <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-amber-700 text-lg sm:text:xl">#CommunityAction</span>
                </div>
                <a href="#join" className="text-lg sm:text:xl bg-amber-600 text-white px-6 py-3 rounded-full  shadow-lg hover:bg-amber-700 transition duration-300 inline-block">Join Next Cleanup</a>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/1.jpg" alt="Beach cleanup volunteers" className="rounded-xl shadow-2xl w-full h-auto border-4 border-white transform rotate-2" />
              </div>
            </div>
          </header>

          {/* Introduction div */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl   text-amber-900 mb-4">About the Initiative</h2>
                <p className="text-lg sm:text:xl text-gray-700 mb-4">Kovalam Panchayat has collaborated with various NGOs, community groups, and volunteer organizations to launch weekly Mass Beach Clean-up drive, aiming to maintain the beauty and cleanliness of Kovalam Beach.</p>
                <p className="text-lg sm:text:xl text-gray-700">NGOs like EFI, Exnora, and other local NGOs are actively involved in the cleanup efforts. NCC and NSS volunteers from colleges, Panchayat SHG women, children, and community volunteers participate in the drive.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_1452.HEIC.jpg" alt="Volunteers cleaning" className="rounded-lg w-full h-48 object-cover shadow-md" />
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_5377.HEIC.jpg" alt="Group photo" className="rounded-lg w-full h-48 object-cover shadow-md" />
              </div>
            </div>
          </div>

          {/* Importance div */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl sm:text-2xl   text-amber-900 mb-8 text-center">WHY THIS MATTERS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Environmental Conservation
                </h3>
                <p className="text-lg sm:text:xl text-gray-700">Protecting marine life and coastal ecosystems from pollution and plastic waste.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Public Health
                </h3>
                <p className="text-lg sm:text:xl text-gray-700">Reducing health hazards caused by beach litter and polluted shoreline.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Tourism & Economy
                </h3>
                <p className="text-lg sm:text:xl text-gray-700">Clean beaches attract more tourists, supporting local businesses and livelihoods.</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div id="gallery" className="bg-white rounded-2xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl   text-amber-900 mb-6 text-center">OUR CLEANUP IN ACTION</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_0002.JPG" alt="Cleanup photo 1" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_1452.HEIC.jpg" alt="Cleanup photo 2" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_2883.JPG" alt="Cleanup photo 3" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_2917.JPG" alt="Cleanup photo 4" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_5377.HEIC.jpg" alt="Cleanup photo 5" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_7179.HEIC.jpg" alt="Cleanup photo 6" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_9799.JPG" alt="Cleanup photo 7" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl bg-amber-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-lg sm:text:xl text-amber-800">Join us next week!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div id="join" className="bg-amber-600 rounded-2xl p-8 text-center text-white mb-8">
                    <h2 className="text-xl sm:text-2xl   mb-4">Weekly Beach Cleanup Drive</h2>
                    <p className="text-lg sm:text:xl mb-6">Every week, the Mass Beach clean-up drive will take place, covering different divs of Kovalam Beach.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#" className="text-lg sm:text:xl bg-white text-amber-700 px-6 py-3 rounded-full  shadow-lg hover:bg-amber-50 transition duration-300">Register as Volunteer</a>
                        <a href="#" className="text-lg sm:text:xl bg-amber-800 text-white px-6 py-3 rounded-full  shadow-lg hover:bg-amber-900 transition duration-300">Download Schedule</a>
                    </div>
                </div> */}


          {/* Simple but Elegant Partners Section */}
          <div className="bg-white py-12 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-amber-800 mb-3">Our Trusted Partners</h2>
                <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {/* Partner 1 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">EFI</div>
                </div>

                {/* Partner 2 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">Exnora</div>
                </div>

                {/* Partner 3 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">NCC</div>
                </div>

                {/* Partner 4 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">NSS</div>
                </div>

                {/* Partner 5 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">SHG Women</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-amber-600">Collaborating htmlFor greater impact</p>
              </div>
            </div>
          </div>

          {/* Objectives div */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl text-amber-900 mb-6 text-center">OUR OBJECTIVES</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Beach Conservation</h3>
                <p className="text-lg sm:text:xl text-gray-700">Preserving our precious coastal ecosystem htmlFor future generations</p>
              </div>
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Waste Management</h3>
                <p className="text-lg sm:text:xl text-gray-700">Proper disposal and recycling of collected waste materials</p>
              </div>
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Community Engagement</h3>
                <p className="text-gray-700">Bringing together residents htmlFor a common environmental cause</p>
              </div>
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Tourism Promotion</h3>
                <p className="text-lg sm:text:xl text-gray-700">Maintaining clean beaches to attract more visitors</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="MedicalCamp" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Hero div */}
          <header className="bg-amber-50 rounded-2xl p-8 mb-10 shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-2xl sm:text-3xl  text-amber-900 mb-4">MEDICAL CAMPS IN KOVALAM</h1>
                <p className="text-lg sm:text-xl text-amber-800 mb-6">Providing accessible healthcare to our community</p>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base sm:text-lg text-amber-700 ">Free medical services htmlFor those in need</span>
                </div>
                <a href="#services" className="bg-white text-lg sm:text-xl text-amber-600 px-8 py-3 rounded-full  shadow-md hover:bg-amber-50 transition duration-300 inline-block">View Services</a>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/1.jpg" alt="Medical camp" className="rounded-xl shadow-xl w-full h-auto border-4 border-white" />
              </div>
            </div>
          </header>

          {/* Introduction div */}
          <div className="bg-white rounded-2xl p-8 mb-10 shadow-md">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl  text-amber-900 mb-4">Community Healthcare Initiative</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">Kovalam Panchayat has organized medical camps in collaboration with renowned institutions. These camps have been instrumental in providing accessible healthcare services to the local community.</p>
                <p className="text-lg sm:text-xl text-gray-950">The medical camp organized by Kovalam Panchayat, in collaboration with esteemed healthcare institutions, including government hospitals, demonstrates a commitment to improving the health and well-being of the local community.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/2.jpg" alt="Doctor consultation" className="rounded-lg w-full h-48 object-cover shadow" />
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/3.jpg" alt="Medical checkup" className="rounded-lg w-full h-48 object-cover shadow" />
              </div>
            </div>
          </div>

          {/* Participating Institutions */}
          <div id="services" className="bg-amber-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl sm:text-3xl  text-amber-900 mb-8 text-center">PARTICIPATING INSTITUTIONS</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">Government Hospital</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">Chettinad Health Care</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">NIEPMD</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">Tagore Medical College</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-amber-900">Saveetha Physiotherapy</h3>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-2xl p-6 mb-10 shadow-md">
            <h2 className="text-2xl sm:text-3xl text-amber-900 mb-6 text-center">MEDICAL CAMP GALLERY</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/1.jpg" alt="Medical camp 1" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/2.jpg" alt="Medical camp 2" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/3.jpg" alt="Medical camp 3" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/4.jpg" alt="Medical camp 4" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>

            </div>
          </div>

          {/* Services Provided */}
          <div className="bg-white rounded-2xl p-8 mb-10 shadow-md">
            <h2 className="text-2xl sm:text-3xl  text-amber-900 mb-8 text-center">HEALTHCARE SERVICES PROVIDED</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">General Health Checkups</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Comprehensive health assessments htmlFor all age groups</p>
                  </div>
                </div>
              </div>
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Specialist Consultations</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Access to expert doctors in various medical fields</p>
                  </div>
                </div>
              </div>
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Diagnostic Tests</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Basic diagnostic services including blood tests</p>
                  </div>
                </div>
              </div>
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Medication Dispensing</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Essential medicines provided when available</p>
                  </div>
                </div>
              </div>
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">Physiotherapy</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Basic physiotherapy services and guidance</p>
                  </div>
                </div>
              </div>
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl text-amber-900 mb-2">Health Education</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Preventive healthcare awareness sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      <section id="Anganvadi" className="content hidden bg-white py-16 px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl text-amber-500 mb-4">ANGANWADI</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-full mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-stone-600 to-stone-400 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-lg">
            <div className="max-w-5xl">
              <h1 className="text-2xl sm:text-3xl  mb-6">ANGANWADI CENTERS</h1>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-90">
                Government-sponsored child-care and mother-care centers providing essential services to children, pregnant women, and nursing mothers.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Services */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services Card */}
              <div className="bg-stone-50 rounded-2xl p-8 border-l-8 border-yellow-200">
                <h2 className="text-xl sm:text-2xl text-amber-600 mb-6">SERVICES</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">Supplementary Nutrition</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Providing nutritious food to children, pregnant women, and nursing mothers.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">Immunization</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Conducting immunization sessions htmlFor children and pregnant women.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">Health Check-ups</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Regular health check-ups htmlFor children and pregnant women.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">Referral Services</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Referring children and pregnant women to hospitals htmlFor specialized care.</p>
                  </div>
                </div>
              </div>

              {/* Locations Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-amber-200">
                <h2 className="text-xl sm:text-2xl text-amber-600 mb-6">OUR CENTERS IN KOVALAM PANCHAYAT</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl  text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">1</span>
                      Kailasanathar Kovil Street
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">Provides all Anganwadi services to the local community.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">2</span>
                      Ansari Nagar
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">Serving the Ansari Nagar neighborhood with childcare services.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className=" text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">3</span>
                      Padavattamman Kovil Street
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">Focuses on maternal health and preschool education.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className=" text-lg sm:text-xl text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">4</span>
                      Sengeniyamman Kovil Street
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">Provides nutrition programs and health education.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl md:col-span-2">
                    <h3 className=" text-lg sm:text-xl text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">5</span>
                      Semmencherry Kuppam
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">Serves the coastal community with comprehensive Anganwadi services.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-8">
              {/* About Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400">
                <h2 className="text-xl sm:text-2xl  text-amber-600 mb-6">ABOUT ANGANWADI</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">
                  Anganwadi is a government-sponsored child-care and mother-care center in India, established under the Integrated Child Development Services (ICDS) program.
                </p>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl text-amber-600 mb-3">Main Objective</h3>
                  <p className="text-lg sm:text-xl text-gray-950">
                    To provide essential services to children, pregnant women, and nursing mothers in underserved communities.
                  </p>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="bg-gray-400 rounded-2xl p-8 text-white">
                <h2 className="text-xl sm:text-2xl mb-6">KEY BENEFITS</h2>
                <ul className="text-lg sm:text-xl space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Improved nutrition htmlFor children and mothers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Better health through regular check-ups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Early childhood education foundation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Women empowerment through education</span>
                  </li>
                </ul>
              </div>

              {/* Eligibility Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-xl sm:text-2xl text-amber-600 mb-6">ELIGIBILITY</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl ml-3 text-gray-950">Children aged 0-6 years</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl ml-3 text-gray-950">Pregnant women from economically disadvantaged backgrounds</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl ml-3 text-gray-950">Nursing mothers from economically disadvantaged backgrounds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 gap-4">
          {/* Anganvadi Centers Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('anganvadi',1)", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">ANGANWADI CENTERS</h6>
          </button>

          {/* Child Development Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('anganvadi',2)", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">CHILD DEVELOPMENT</h6>
          </button>
        </div>

        <div id="imageAnganvadiContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {/* Images will be displayed here dynamically */}
        </div>

      </section>



      {/* Schools */}
      <section id="Schools" className="content hidden py-16 bg-gradient-to-br from-stone-50 to-amber-50 w-full">
        <div className="overflow-hidden rounded-lg h-200 w-full shadow-lg p-4"
          style={{ "backgroundImage": "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),\r\n              url('/assets/images/infrastructure/ECRSchool/ground-view.png')", "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat" }}>
          <div className="w-full mx-auto px-0">
            <div className="max-w-full mx-auto">
              {/* Header Section */}
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl text-amber-500 mb-4">EDUCATIONAL INSTITUTIONS</h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Main Content Grid */}
              <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8">
                {/* Left Column - School Importance */}
                <div className="lg:w-3/4">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* School Header */}
                    <div className="bg-stone-500 p-6 md:p-8">
                      <h3 className="text-xl sm:text-2xl text-white">SCHOOLS</h3>
                      <p className="text-lg sm:text-xl text-stone-100 mt-2">Kovalam Panchayat is committed to quality education with its 6 schools</p>
                    </div>

                    {/* School Importance */}
                    <div className="p-6 md:p-8">
                      <p className="text-lg sm:text-xl text-gray-950 mb-8 leading-relaxed">
                        Schools play a vital role in the development of individuals and society as a whole. Kovalam Panchayat, with its 6 schools, has been instrumental in providing quality education to its residents. Here are some key reasons highlighting the importance of schools:
                      </p>

                      {/* Improved Benefits Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Intellectual Development */}
                        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">Intellectual and Cognitive Development</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-slate-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Knowledge Acquisition:</strong> Schools provide a structured environment htmlFor students to acquire knowledge in various subjects.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-slate-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Critical Thinking:</strong> Schools help students develop critical thinking and problem-solving skills.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Social Development */}
                        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">Social and Emotional Development</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Socialization:</strong> Schools offer opportunities htmlFor students to interact with peers and develop social skills.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Emotional Intelligence:</strong> Schools help students recognize and manage their emotions.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Personal Growth */}
                        <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-stone-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">Personal Growth and Development</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-stone-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Character Building:</strong> Schools play a significant role in shaping students' values and character.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-stone-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Self-Esteem:</strong> Schools provide opportunities to develop confidence through various activities.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Society Contribution */}
                        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">Contribution to Society</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Informed Citizens:</strong> Schools help create informed and engaged citizens.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>Social Mobility:</strong> Schools promote social mobility and equality.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Schools List (Sticky on large screens) */}
                <div className="lg:w-1/4 lg:sticky lg:top-4 lg:self-start">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-stone-500 p-6 md:p-8">
                      <h3 className="text-xl sm:text-2xl text-white">LIST OF SCHOOLS IN KOVALAM</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="text-lg sm:text-xl space-y-4">
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">Government Higher Secondary School, Ecr Main Road.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">Panchayat Union Primary School, Kailasanathar Kovil Street.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">Panchayat Union Primary School, Semmencherry Kuppam</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">Sir John De Monte Rc Primary School, Madha Kovil Street.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">St.Joseph Higeher Secondary School, Madha Kovil Street.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">Gurukulam Trust Children School, Madha Kovil Street.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-12 sm:grid-cols-3 gap-4">
            {/* Government Schools Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('school',1)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">GOVERNMENT SCHOOLS</h6>
            </button>

            {/* School Infrastructure Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('school',2)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V16a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-5.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">SCHOOL INFRASTRUCTURE</h6>
            </button>

            {/* Student Programs Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('school',3)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">STUDENT PROGRAMS</h6>
            </button>
          </div>

          <div id="imageSchoolContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {/* Images will be displayed here dynamically */}
          </div>
        </div>
      </section>


      {/* LIBRARY SECTION */}

      <section id="Library" className="content hidden relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl text-amber-500 mb-4">LIBRARY</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
          </div>
          {/* Background Image with Overlay */}
          {/* Overview Column */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative bg-cover bg-center"
            style={{ "backgroundImage": "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=2070&q=80')" }}>
            <div className="absolute inset-0 bg-white bg-opacity-75 rounded-xl"></div>
            <div className="relative">
              <div className="max-w-7xl mx-auto relative z-10">

                {/* Library Header */}
                <div className="text-center mb-16">
                  <h1 className="text-2xl sm:text-3xl text-amber-600 sm:text-5xl">
                    KOVALAM PANCHAYAT LIBRARY
                  </h1>
                  <p className="mt-4 text-xl sm:text-2xl text-gray-950">
                    A public library located in Kovalam, Chennai
                  </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12 mb-16">

                  {/* Overview Column */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h2 className="ml-4 text-xl sm:text-2xl  text-amber-600">Overview</h2>
                    </div>
                    <ul className="text-lg sm:text-xl space-y-4 text-gray-950">
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">1.</span>
                        <span>Kovalam Library is a public library, open to all residents of Kovalam and surrounding areas.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">2.</span>
                        <span>Membership to the library is free, making it accessible to people from all walks of life.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Facilities Column */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h2 className="ml-4 text-xl sm:text-2xl text-amber-600">Facilities</h2>
                    </div>
                    <ul className="text-lg sm:text-xl space-y-4 text-gray-950">
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">1.</span>
                        <span>The library has a vast collection of books, including fiction, non-fiction, and reference materials.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">2.</span>
                        <span>The library has a spacious reading room, providing a quiet and comfortable space htmlFor readers.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">3.</span>
                        <span>The library subscribes to various newspapers and magazines, keeping readers informed about current events.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Services Column */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="bg-amber-50 p-3 rounded-lg">
                        <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h2 className="ml-4 text-xl sm:text-2xl  text-amber-600">Services</h2>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg  text-gray-950 mb-4">Free Facilities htmlFor Exam Preparation</h3>
                      <ul className="text-lg sm:text-xl space-y-4 text-gray-950">
                        <li className="flex">
                          <span className="mr-3 text-amber-500 ">1.</span>
                          <span>Free Printouts: Students can avail free printout facilities htmlFor their study materials.</span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-amber-500 ">2.</span>
                          <span>Free Xeroxing: The library also provides free xeroxing services htmlFor students to copy and study relevant documents.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Separate Benefits Section */}
                <div className="relative bg-gradient-to-r from-stone-50 to-amber-50 rounded-2xl p-10 text-white overflow-hidden">
                  {/* Subtle pattern overlay */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
                  <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                      <h2 className="text-xl sm:text-2xl text-amber-600  mb-4">Benefits of this Initiative</h2>
                      <p className="text-lg sm:text-xl text-gray-950">How our free services help students succeed</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Benefit 1 */}
                      <div className="bg-white bg-opacity-75 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                        <h3 className="text-amber-600  mb-3"><span className="text-xl sm:text-2xl mr-2 text-amber-600 mb-2">1. </span>Financial Relief</h3>
                        <p className="text-lg sm:text-xl text-gray-950">This initiative provides financial relief to students who may struggle to afford printing and xeroxing costs.</p>
                      </div>

                      {/* Benefit 2 */}
                      <div className="bg-white bg-opacity-75 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                        <h3 className="text-amber-600 mb-3"><span className="text-xl sm:text-2xl  mr-2 text-amber-600 mb-2">2. </span>Convenience</h3>
                        <p className="text-lg sm:text-xl text-gray-950">Students can focus on their studies without worrying about the expenses associated with printing and copying study materials.</p>
                      </div>

                      {/* Benefit 3 */}
                      <div className="bg-white bg-opacity-75 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                        <h3 className="text-amber-600 mb-3"><span className="text-xl sm:text-2xl mr-2  text-amber-600 mb-2">3. </span>Equal Opportunities</h3>
                        <p className="text-lg sm:text-xl text-gray-950">This initiative ensures equal opportunities htmlFor all students, regardless of their financial background, to access resources that can aid their exam preparation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                  <p className="text-lg sm:text-xl text-gray-950 ">
                    Visit Kovalam Library today and explore these wonderful resources!
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 gap-4">
            {/* Community Halls Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('library',1)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">LIBRARY HALLS</h6>
            </button>

            {/* Conference Facilities Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('library',2)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">LIBRARY FACILITIES</h6>
            </button>
          </div>

          <div id="imageLibraryContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {/* Images will be displayed here dynamically */}
          </div>

        </div></section>
      {/* Meeting Halls */}

      <section id="Meeting_Halls" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Hero div */}
          <header className="bg-gradient-to-br from-amber-600 to-yellow-600  rounded-2xl p-8 mb-10 text-white overflow-hidden">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl  mb-4">Meeting Halls</h1>
                <p className="text-lg sm:text-xl mb-6">Modern spaces htmlFor community gatherings and social activities</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-base sm:text-lg ">Community Development</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-base sm:text-lg ">Social Welfare</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-base sm:text-lg ">Public Spaces</span>
                </div>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/panchayat.jpg" alt="Community meeting hall" className="rounded-xl shadow-2xl w-full h-auto border-4 border-white" />
              </div>
            </div>
          </header>

          {/* Introduction div */}
          <div className="bg-white rounded-2xl p-8 mb-10 shadow-md">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl  text-amber-900 mb-4">Community Meeting Halls</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">Kovalam Panchayat has collaborated with STS Foundation to establish a modern meeting hall, facilitating community gatherings, events, and social activities.</p>
                <p className="text-lg sm:text-xl text-gray-950">The meeting hall tie-up with STS Foundation is a testament to Kovalam Panchayat's commitment to community development and social welfare.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/6248982738153621938.jpg" alt="Meeting hall interior" className="rounded-lg w-full h-48 object-cover shadow" />
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m4.jpg" alt="Community gathering" className="rounded-lg w-full h-48 object-cover shadow" />
              </div>
            </div>
          </div>

          {/* Hall Locations */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">OUR MEETING HALL LOCATIONS</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Hall 1 */}
              <div className="transition transform hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl shadow-md">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl  text-amber-900 mb-2 text-center">Ansari Nagar Macaan</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">Modern facility htmlFor community events and gatherings</p>
              </div>

              {/* Hall 2 */}
              <div className="transition transform hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl shadow-md">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl  text-amber-900 mb-2 text-center">Pudhu Majith Street Macaan</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">Spacious venue htmlFor social and cultural activities</p>
              </div>

              {/* Hall 3 */}
              <div className="transition transform hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl shadow-md">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   text-amber-900 mb-2 text-center">Kundrukadu</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">Community space htmlFor meetings and celebrations</p>
              </div>
            </div>
          </div>

          {/* Features div */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-10">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-8 text-center">HALL FEATURES & AMENITIES</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Spacious Layout
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">Ample room htmlFor community gatherings, meetings, and events</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Audio-Visual Equipment
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">Basic sound system and projection capabilities available</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Clean Facilities
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">Well-maintained spaces with regular cleaning</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  Flexible Seating
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">Configurable arrangements htmlFor different event types</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Event Support
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">Basic assistance available htmlFor community events</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  Accessible Location
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">Conveniently situated in neighborhood centers</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-2xl p-6 mb-10 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">MEETING HALL GALLERY</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m1.jpg" alt="Meeting hall 1" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m2.jpg" alt="Meeting hall 2" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m5.jpg" alt="Meeting hall 3" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m6.jpg" alt="Meeting hall 4" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
              </div>
              {/* <div className="overflow-hidden rounded-xl">
                            <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m3.jpg" alt="Meeting hall 5" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m3.jpg" alt="Meeting hall 6" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
                        </div>
                        <div className="overflow-hidden rounded-xl">
                            <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m3.jpg" alt="Meeting hall 7" className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
                        </div> */}
            </div>
          </div>

          {/* Booking Information */}
          {/* <div className="bg-amber-600 rounded-2xl p-8 text-white text-center mb-10">
                    <h2 className="text-xl sm:text-2xl  mb-4">BOOK A MEETING HALL</h2>
                    <p className="text-lg sm:text-xl mb-6">Available htmlFor community events, social gatherings, and public meetings</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#" className="text-lg sm:text-xl bg-white text-amber-600 px-8 py-3 rounded-full  shadow-lg hover:bg-amber-50 transition duration-300">View Availability</a>
                        <a href="#" className="text-lg sm:text-xl bg-amber-800 text-white px-8 py-3 rounded-full  shadow-lg hover:bg-amber-900 transition duration-300">Contact htmlFor Booking</a>
                    </div>
                </div> */}

          {/* Partnership div */}
          <div className="bg-white rounded-2xl p-6 shadow-md mb-10">
            <h2 className="text-2xl sm:text-4xl  text-amber-900 mb-6 text-center">IN COLLABORATION WITH</h2>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 px-8 py-6 rounded-lg mb-4">
                <h3 className="text-xl sm:text-3xl  text-center">STS Foundation</h3>
              </div>
              <p className="text-lg sm:text-xl text-gray-950 text-center max-w-2xl">Our partnership with STS Foundation enables us to provide these modern community spaces htmlFor the benefit of all Kovalam residents.</p>
            </div>
          </div>

          <div className="text-center text-gray-950 bg-amber-50 rounded-lg p-4 mb-4">
            <p className="text-amber-700">Creating spaces htmlFor community connection and growth</p>
          </div>
        </div>
      </section>

      {/* Ponds */}

      <section id="Ponds" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl  text-amber-600 mb-4">Pond Restoration Initiative</h1>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">Kovalam Panchayat's commitment to water conservation and community spaces</p>
          </header>

          {/* Main Content Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="h-64 md:h-96 bg-cover bg-center" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/6235471922091639869.jpg')" }}></div>

            <div className="p-8">
              <h2 className="text-xl sm:text-2xl sm:text-2xl  text-brown-800 mb-6">Revitalizing Kovalam's Water Heritage</h2>
              <p className="text-lg sm:text-xl text-gray-950 mb-6">
                Kovalam Panchayat has initiated efforts to restore six ponds in the area, including historic Dargha Kulam, to enhance water conservation, biodiversity, and eco-tourism.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Pond Restoration Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl   text-amber-600 mb-4">Pond Restoration</h3>

                  <div className="space-y-6">
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="text-xl sm:text-2xl  text-brown-800 mb-3">1. Dredging and Desilting</h4>
                      <p className="text-lg sm:text-xl text-gray-950">Removing silt and debris from the ponds to increase water storage capacity and improve water quality.</p>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="text-xl sm:text-2xl   text-brown-800 mb-3">2. User Friendly Infrastructure</h4>
                      <p className="text-lg sm:text-xl text-gray-950">Creating walking paths, seating areas, and other amenities to make the ponds accessible and enjoyable htmlFor the public.</p>
                    </div>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-48 bg-cover bg-center rounded-lg" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/C3.png')" }}></div>
                  <div className="h-48 bg-cover bg-center rounded-lg" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/C5.png')" }}></div>
                  <div className="h-48 bg-cover bg-center rounded-lg" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/C6.png')" }}></div>
                  <div className="h-48 bg-cover bg-center rounded-lg" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/C1.png')" }}></div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="bg-green-50 p-8 rounded-xl">
                <h3 className="text-xl sm:text-2xl  text-brown-800 mb-6 text-center">Project Benefits</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">💧</div>
                    <h4 className=" text-xl sm:text-2xl mb-2">Water Conservation</h4>
                    <p className="text-lg sm:text-xl text-gray-950">Improved groundwater recharge and water availability</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">🦆</div>
                    <h4 className=" text-xl sm:text-2xl mb-2">Biodiversity</h4>
                    <p className="text-lg sm:text-xl text-gray-950">Enhanced habitats htmlFor aquatic plants and animals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">👨‍👩‍👧‍👦</div>
                    <h4 className=" text-xl sm:text-2xl mb-2">Community Space</h4>
                    <p className="text-lg sm:text-xl text-gray-950">Beautiful public spaces htmlFor recreation and relaxation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Image */}
          <div className="h-64 md:h-96 bg-cover bg-center rounded-xl mb-12" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/6235471922091639870.jpg')" }}></div>

          <p className="text-lg sm:text-xl text-center text-gray-950 py-8">Kovalam Panchayat - Preserving our water heritage htmlFor future generations</p>

        </div>
      </section>

      {/* Wells */}

      <div id="Wells" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl text-amber-600 mb-8 text-center" data-aos="animate-fade-in">Wells</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pond Restoration Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('well',1);hideTable();", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">WELL CLEANING</h6>
          </button>

          {/* Water Conservation Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('well',2);hideTable();", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42a3.5 3.5 0 00-1.58-1.665L5.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">WELL CONSERVATION</h6>
          </button>

          {/* Community Ponds Button */}
          {/* <button
                    onClick={(event) => executeInlineAction("showImages('well',3); showTable('Wells');", event)}
                    className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                    </svg>
                    <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">COMMUNITY WELLS</h6>
                </button> */}
        </div>

        <div id="imageWellContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {/* Images will be displayed here dynamically */}
        </div>
        <div id="tableWellsContainer" className="place-items-center gap-6 mt-10" ></div>
      </div>

      {/* Roads */}
      <section id="Roads" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <div className="max-w-[80vw] mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl  text-amber-800 mb-4">Road Infrastructure Development</h1>
            <div className="w-24 h-2 bg-amber-500 mx-auto"></div>
          </div>

          {/* Main Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-xl text-2xl  text-gray-950 mb-6">Transforming Kovalam's Connectivity</h2>
              <p className="text-lg sm:text-xl  text-gray-950 leading-relaxed mb-6">
                During its tenure, Kovalam Panchayat has undertaken significant efforts to upgrade the road infrastructure, transforming the area's connectivity and quality of life.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl text-2xl  text-amber-800 mb-4">Paver Block Roads Initiative</h3>
                <ul className="text-lg sm:text-xl space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Constructed numerous paver block roads</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Increased groundwater levels during rainfall by allowing water to percolate</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prevented water stagnation on roads, reducing flood risks</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img loading="lazy" decoding="async" src="/assets/images/ROAD/annaNagar/DJI_0700.JPG" alt="Kovalam Paver Block Road" className="w-full h-auto" />
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="mb-16">
            <h3 className="text-xl text-2xl  text-gray-950 mb-8 text-center">Road Infrastructure Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Photo 1 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/annaNagar/42.jpg" alt="Road Construction" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">New road construction in progress</p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/annaNagar/Anna nagar paver block road .jpg" alt="Completed Road" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">Recently completed paver block road</p>
                </div>
              </div>

              {/* Photo 3 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/nachiyarKullam/nachiyar kulam road.jpg" alt="Rainwater Percolation" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">Paver blocks allowing water percolation</p>
                </div>
              </div>

              {/* Photo 4 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/senginiyammanKovilSt/32.jpg" alt="Flood Prevention" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">Improved drainage preventing flooding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial/Conclusion Section */}
          <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl p-8 text-gray-950 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <p className="text-lg sm:text-xl italic mb-6">
              "The transformation of Kovalam's roads is a testament to our commitment to improving the lives of residents and promoting sustainable development."
            </p>
            <p className="text-lg sm:text-xl ">- Kovalam Panchayat</p>
          </div>

          {/* Before/After Section (Bonus) */}
          <div className="mt-16">
            <h3 className="text-2xl  text-gray-950 mb-8 text-center">Road Transformation</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl text-2xl  text-red-600 mb-4 text-center">Before</h4>
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/old_road.jpg" alt="Old Road Condition" className="w-full rounded-lg shadow" />
                <p className="text-lg sm:text-xl text-gray-950 mt-2 text-center">Previous road condition with poor drainage</p>
              </div>
              <div>
                <h4 className="text-xl text-2xl text-amber-600 mb-4 text-center">After</h4>
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/senginiyammanKovilSt/32.jpg" alt="New Paver Block Road" className="w-full rounded-lg shadow" />
                <p className="text-lg sm:text-xl text-gray-950 mt-2 text-center">Current upgraded paver block road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BusStand */}
      <div className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl text-amber-600 mb-8 text-center" data-aos="animate-fade-in">BUS STAND</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Bus Stand Construction Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('busStand',1)", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3zM3 5h2v2H3V5zm4 0h2v2H7V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5z" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">BUS STAND CONSTRUCTION</h6>
          </button>

          {/* Bus Stop Facilities Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('busStand',2)", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">BUS STOP FACILITIES</h6>
          </button>

          {/* Passenger Amenities Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('busStand',3)", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">PASSENGER AMENITIES</h6>
          </button>
        </div>

        <div id="imageBusStandContainer" className="place-items-center grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {/* Images will be displayed here dynamically */}
        </div>
      </div>

      <section id="BusStand" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <div className="max-w-[80vw] mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-800 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl  mb-4">Wi-Fi Enabled Bus Stand</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-6">A modern and citizen-friendly initiative by Kovalam Panchayat</p>
              <div className="w-20 h-1.5 text-ce bg-amber-400"></div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl   text-gray-950 mb-6">Connecting Kovalam to the Future</h2>
              <p className="text-lg sm:text-xl text-gray-950 leading-relaxed mb-6">
                Kovalam Panchayat has introduced a modern and citizen-friendly initiative by launching a Wi-Fi-enabled bus stand, and is a shining example of innovative governance, prioritizing citizen convenience, safety, and connectivity.
              </p>

              {/* Features List */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl   text-gray-950">Free High-Speed Wi-Fi</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Reliable internet access htmlFor all commuters</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-gray-950">Enhanced Safety</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Well-lit area with security features</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-gray-950">Real-Time Updates</h3>
                    <p className="text-lg sm:text-xl text-gray-950">Bus schedules and route information</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
              <img loading="lazy" decoding="async" src="/assets/images/busStop/bus stop .jpg" alt="Kovalam Wi-Fi Bus Stand" className="w-full h-auto" />
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl  text-gray-950 mb-8 text-center">Modern Amenities htmlFor Commuters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Photo 1 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/busStop/IMG_6476.JPG" alt="Commuters using Wi-Fi" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">Residents enjoying free internet access</p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/busStop/IMG_6494.JPG" alt="Bus Stand at Night" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">Well-lit facility htmlFor night-time safety</p>
                </div>
              </div>

              {/* Photo 3 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/busStop/IMG_6526.JPG" alt="Digital Information Board" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">Digital displays with real-time updates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-amber-50 rounded-xl p-8 md:p-12 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <h3 className="text-xl sm:text-2xl  text-gray-950 mb-6">A Model of Innovative Governance</h3>
              <p className="text-lg sm:text-xl text-gray-950 mb-8">
                The Wi-Fi enabled bus stand initiative demonstrates Kovalam Panchayat's commitment to leveraging technology htmlFor public benefit, setting a benchmark htmlFor smart urban infrastructure in the region.
              </p>
              <div className="flex flex-wrap justify-center text-lg sm:text-xl gap-4">
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  <span className="text-lg sm:text-xl  text-amber-600">500+</span> daily users
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  <span className="text-lg sm:text-xl  text-amber-600">24/7</span> free access
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  <span className="text-lg sm:text-xl  text-amber-600">100Mbps</span> high-speed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Feedback Section */}
      {/* Light Theme Feedback Section */}
      <div id="Feedback" className="feedback-content content rounded-xl p-6 w-full mx-auto mt-12 bg-white relative overflow-hidden hidden">
        {/* Decorative elements */}
        <div className="feedback-top-border absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-amber-500"></div>
        <div className="feedback-decorative-circle-1 absolute -top-20 -right-20 w-40 h-40 rounded-full bg-amber-100 opacity-40"></div>
        <div className="feedback-decorative-circle-2 absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-100 opacity-40"></div>

        <div className="feedback-inner-container relative z-10">
          <h1 className="feedback-title text-2xl sm:text-3xl  text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-4 text-center">
            Voices of Appreciation
          </h1>
          <p className="feedback-subtitle text-center text-gray-950 mb-8 max-w-2xl mx-auto text-lg sm:text-xl">
            Your experiences inspire us to do better. Share your thoughts and join our community of supporters.
          </p>




          <div className="feedback-carousel-container relative mb-12">
            <div id="feedback-carousel-track" className="flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth px-4">

              {/* YouTube Video Card 1 */}
              <div className="min-w-[300px] max-w-[350px] snap-start overflow-hidden p-3">
                <iframe
                  className="rounded-xl w-full h-[200px]"
                  src="https://www.youtube.com/embed/sTZbDTDYggk"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>

              {/* YouTube Video Card 2 */}
              <div className="min-w-[300px] max-w-[350px] snap-start overflow-hidden p-3">
                <iframe
                  className="rounded-xl w-full h-[200px]"
                  src="https://www.youtube.com/embed/sxy8jbTT7zY"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>

              {/* YouTube Video Card 3 */}
              <div className="min-w-[300px] max-w-[350px] snap-start overflow-hidden p-3">
                <iframe
                  className="rounded-xl w-full h-[200px]"
                  src="https://www.youtube.com/embed/o1zQz66_Upg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>

              {/* YouTube Video Card 4 */}
              <div className="min-w-[300px] max-w-[350px] snap-start overflow-hidden p-3">
                <iframe
                  className="rounded-xl w-full h-[200px]"
                  src="https://www.youtube.com/embed/FvdiCigEw4k"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen>
                </iframe>
              </div>

            </div>

            {/* Left Nav Button */}
            <button className="feedback-carousel-nav feedback-carousel-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Nav Button */}
            <button className="feedback-carousel-nav feedback-carousel-next absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Interactive Feedback Form */}
          <div className="feedback-form-container bg-amber-50 rounded-xl p-6 border border-amber-100">
            <h3 className="feedback-form-title text-2xl sm:text-3xl  text-amber-600 mb-4">Share Your Thoughts</h3>

            <div className="feedback-form-grid flex flex-col md:flex-row gap-6">
              <div className="feedback-form-col-1 flex-1">
                <div className="feedback-form-group mb-4">
                  <label className="feedback-form-label block text-lg sm:text-xl text-gray-950 mb-2">Your Name</label>
                  <input type="text" className="feedback-form-input w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-950 focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>

                <div className="feedback-form-group mb-4">
                  <label className="feedback-form-label block text-lg sm:text-xl text-gray-950 mb-2">Your Rating</label>
                  <div className="feedback-rating-stars flex space-x-2">
                    <button type="button" className="feedback-rating-star text-2xl" data-value="1" aria-label="Rate 1 out of 5" aria-pressed="false">☆</button>
                    <button type="button" className="feedback-rating-star text-2xl" data-value="2" aria-label="Rate 2 out of 5" aria-pressed="false">☆</button>
                    <button type="button" className="feedback-rating-star text-2xl" data-value="3" aria-label="Rate 3 out of 5" aria-pressed="false">☆</button>
                    <button type="button" className="feedback-rating-star text-2xl" data-value="4" aria-label="Rate 4 out of 5" aria-pressed="false">☆</button>
                    <button type="button" className="feedback-rating-star text-2xl" data-value="5" aria-label="Rate 5 out of 5" aria-pressed="false">☆</button>
                  </div>
                </div>

                <div className="feedback-form-group mb-4">
                  <label className="feedback-form-label block text-lg sm:text-xl text-gray-950 mb-2">Feedback Type</label>
                  <div className="feedback-tags-container flex flex-wrap gap-2">
                    <button type="button" className="feedback-type-tag text-lg sm:text-xl feedback-type-tag-active" aria-pressed="true">Excellent</button>
                    <button type="button" className="feedback-type-tag text-lg sm:text-xl" aria-pressed="false">Good</button>
                    <button type="button" className="feedback-type-tag text-lg sm:text-xl" aria-pressed="false">Satisfactory</button>
                    <button type="button" className="feedback-type-tag text-lg sm:text-xl" aria-pressed="false">Poor</button>
                  </div>
                </div>
              </div>

              <div className="feedback-form-col-2 flex-1">
                <div className="feedback-form-group mb-4">
                  <label className="feedback-form-label block text-lg sm:text-xl text-gray-950 mb-2">Your Feedback</label>
                  <textarea className="feedback-form-textarea w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-950 focus:ring-2 focus:ring-amber-400 focus:border-transparent h-32" placeholder="Share your experience..."></textarea>
                </div>

                <div className="feedback-form-actions flex flex-col sm:flex-row justify-between items-center gap-4">
                </div>
              </div>
            </div>

            <div className="feedback-submit-container mt-6 flex justify-end">
              <button className="feedback-submit-btn text-lg sm:text-xl bg-gradient-to-r from-amber-400 to-amber-500 text-white  py-3 px-8 rounded-full shadow-lg hover:shadow-amber-400/40 transition-all duration-300 transform hover:scale-110">
                Share Your Feedback
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Submitted Feedbacks Section */}
            <div className="feedback-list-wrapper mt-10 pt-8 border-t border-amber-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Citizen Feedbacks</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Authentic thoughts and experiences shared by citizens</p>
                </div>
                <span id="feedback-count-badge" className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full border border-amber-200">0 Feedbacks</span>
              </div>
              <div id="feedback-items-container" className="max-h-[560px] overflow-y-auto space-y-4 pr-2">
                {/* Dynamically populated by feedback.js */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="Contactus" className="content hidden mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl  text-amber-600 drop-shadow-md">
            <span className="inline-block pb-2">CONTACT US</span>
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="lg:flex gap-8 items-stretch">
          {/* Left Column */}
          <div className=" text-center hover:shadow-[0px_20px_30px_rgba(255,165,0,0.3)] transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between w-full lg:w-1/2 mb-8 lg:mb-0 h-full">
            {/* Image with subtle frame */}
            <div className="relative overflow-hidden rounded-2xl group h-auto w-full">
              <img loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/assets/images/panchayat.jpg" alt="Kovalam Panchayat Office" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className=" rounded-2xl p-6 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.3)] transition-all duration-500 w-full lg:w-1/2 flex flex-col justify-between h-full">
            <div>
              {/* Header with decorative element */}
              <div className="mb-6 relative">
                <h2 className="text-3xl font-bold text-amber-700 mb-2">Kovalam Panchayat</h2>
                <div className="w-20 h-1 bg-amber-500 rounded-full"></div>
              </div>

              <div className="space-y-6">
                {/* Address with elegant card effect */}
                <div className="flex items-start bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/30">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-800  text-lg sm:text-xl leading-relaxed">
                    <span className=" text-amber-800">Plot No.: 2/235, Desai Street,</span><br />
                    Kovalam, Thiruporur Taluk,<br />
                    Chengalpattu District - 603 112.
                  </p>
                </div>

                {/* Email with hover effect */}
                <div className="flex items-center bg-white/50 p-4 rounded-xl backdrop-blur-sm border border-white/30">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-700" fill="currentColor" viewBox="0 -960 960 960">
                      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
                    </svg>
                  </div>
                  <a href="mailto:president@kovalampanchayat.com" className="text-amber-700 hover:text-amber-800 transition-colors duration-300 text-lg sm:text-xl underline underline-offset-4 decoration-amber-500/30 hover:decoration-amber-500">
                    president@kovalampanchayat.com
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map with elegant border */}
            <div className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg relative w-full mt-6 border-4 border-white border-opacity-20 h-64">
              <div className="h-full relative">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8525936432616!2d80.2482747!3d12.788078599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251897ad65d73%3A0xf5e6fab92934a693!2sKovalam%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1741531454317!5m2!1sen!2sin"
                  style={{ "border": "0" }} allowFullScreen loading="lazy">
                </iframe>
              </div>

              {/* Enhanced Floating Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a href="https://maps.app.goo.gl/YT8rZxWDvX7uoqPc6" target="_blank" className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center z-10 hover:scale-110 transform">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="text-lg sm:text-xl">View Official Map</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 p-6 text-center">
          <h2 className="text-2xl sm:text-3xl text-amber-600 mb-6">Visiting Hours</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Weekdays Card */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-3">Monday - Saturday</h3>
              <p className="text-lg sm:text-xl text-amber-600 ">9:00 AM - 6:30 PM</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="inline-block px-2 py-1 text-xs  bg-amber-200 text-amber-800 rounded">Open All Day</span>
              </div>
            </div>

            {/* Sunday Card */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 opacity-80">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-3">Sunday</h3>
              <p className="text-lg sm:text-xl text-gray-500 ">Closed</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="inline-block px-2 py-1 text-xs  bg-gray-200 text-gray-600 rounded">Day Off</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <p className="mt-8 text-sm text-gray-500 italic">
            * Special holiday hours may apply. Please check with us htmlFor updates.
          </p>
        </div>

        {/* Social Icons with floating effect */}
        <div className="mt-8 lg:mt-12">
          <h3 className="text-center text-2xl sm:text-3xl text-amber-600 mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/cfkovalampanchayat?igsh=MWt5ZzExZmlpOGtzdw%3D%3D&utm_source=qr" target="_blank" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-amber-600 hover:text-amber-800">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://x.com/cfkovalam?s=21" target="_blank" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-amber-600 hover:text-amber-800">
              <i className="fab fa-x-twitter fa-lg"></i>
            </a>
            <a href="https://youtube.com/@cfkovalampanchayat?si=zMdKhWIIgGv1vMYT" target="_blank" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-amber-600 hover:text-amber-800">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
            <a href="https://www.facebook.com/share/19zQFA4KiF/?mibextid=wwXIfr" target="_blank" className="bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-amber-600 hover:text-amber-800">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
          </div>
        </div>

      </div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-center py-4 mt-6">
        <h6 className="text-sm">&copy; 2025 Kovalam Panchayat. All rights reserved.</h6>
      </footer>

      {/* Scripts */}
    </>
  );
}

