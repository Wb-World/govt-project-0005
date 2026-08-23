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

export default function TamilPage() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => bootLegacyPage('/assets/js/react-runtime-ta.js'), []);

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
            {/* English only on desktop */}
            <Link to="/en" className="hidden lg:inline-block px-6 py-3 mr-10 bg-orange-500 text-white text-base md:text-lg font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
              <b>English</b>
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
                <Link to="/en" className="text-white underline text-lg md:text-xl hover:text-amber-200">English</Link>
              </div>
            </li>
          </ul>
        </nav>

{/* {ndsfnfnfnsfn} */}
        <section className="max-w-full text-center mx-auto py-4 hidden lg:block ">
          <div className="flex justify-center items-center flex-wrap xl:flex-nowrap gap-1 xl:gap-0 px-2 w-full max-w-7xl mx-auto">

            <div onClick={(event) => executeInlineAction("showSection('Home', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Home">முகப்பு</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div onClick={(event) => executeInlineAction("showSection('Aboutus', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Aboutus">எங்களை பற்றி</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div className="relative group flex-shrink-0 z-50">
              <div className="nav-item px-2 py-2 cursor-pointer relative z-10">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <span>சேவைகள்</span>
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
                  <span>நிகழ்வுகள்</span>
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
                  <a href="#Achievements">சாதனைகள்</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div className="relative group flex-shrink-0 z-50">
              <div className="nav-item px-2 py-2 cursor-pointer relative z-10">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <span>அளவமைப்பு</span>
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
                  <Link to="/feedback">கருத்துக்கள்</Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>

            <div onClick={(event) => executeInlineAction("showSection('Contactus', this)", event)} className="group relative">
              <div className="nav-item px-2 py-2 rounded-full cursor-pointer">
                <h1 className="text-base xl:text-lg font-semibold tracking-normal whitespace-nowrap text-gray-950 group-hover:text-amber-600 transition-colors duration-300 relative">
                  <a href="#Contactus">எங்களை தொடர்புக்கொள்ள</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </h1>
              </div>
            </div>
          </div>
        </section>


        <div className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-r from-amber-100 to-white">
          {/* Background Image htmlFor Desktop */}
          <div id="background-desktop" className="absolute top-0 left-0 w-full h-full hidden lg:block bg-move bg-cover"
            style={{ "backgroundImage": "url('/assets/images/photo_6339331154796201764_y.jpg')" }}></div>

          {/* Background Image htmlFor Mobile */}
          <div id="background-mobile"
            className="absolute inset-0 w-full h-full bg-cover bg-center block lg:hidden"
            style={{ "backgroundImage": "url('/assets/images/IMG_20250722_154846.jpg')", "backgroundPosition": "35% center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover" }}>
          </div>


          {/* IMPORTANT: To move the flag GIF left → increase 'right' value (e.g. "18%"). To move right → decrease it (e.g. "2%"). This shifts the whole panel without shrinking content. */}
          <div id="notifications" className="absolute top-0 hidden lg:flex lg:flex-col w-[32%] h-full z-10 transition-all duration-300" style={{ right: "8%" }}>

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

              /* --- HAPPY: saffron, uppercase, wide tracking, large bold --- */
              .indep-happy {
                font-family: 'Great Vibes', cursive;
                font-weight: 400;
                font-size: clamp(1rem, 2vw, 1.6rem);
                color: #FF9933;
                letter-spacing: 0.02em;
                display: block;
                line-height: 1.2;
                /* Fade-in + glow pulse */
                animation: indep-slidein 0.55s ease both,
                           indep-glow-saffron 2.8s ease-in-out 0.55s infinite;
              }

              /* --- INDEPENDENCE: navy shimmer sweep, largest word --- */
              .indep-main {
                font-family: 'Great Vibes', cursive;
                font-weight: 400;
                font-size: clamp(1.3rem, 2.8vw, 2.2rem);
                letter-spacing: 0.02em;
                display: block;
                line-height: 1.2;
                /* Tricolor shimmer: navy → indigo → white → indigo → navy */
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
                /* Soft depth shadow on the element itself (not text-shadow for clipped text) */
                filter: drop-shadow(0 3px 6px rgba(26,35,126,0.25));
              }

              /* --- DAY: green, wide tracking, bold --- */
              .indep-day {
                font-family: 'Great Vibes', cursive;
                font-weight: 400;
                font-size: clamp(1rem, 2vw, 1.6rem);
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
              <span className="indep-happy lato-black">Happy</span>
              <span className="indep-main lato-black">Independence</span>
              <span className="indep-day lato-black">Day</span>
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
              கோவளத்தின் தொகுப்பு கண்ணோட்டம்
            </h2>
            <p className="text-gray-950 text-lg sm:text-xl leading-relaxed text-justify sm:text-left">
              செங்கல்பட்டு மாவட்டத்தில் உள்ள ஒரு அழகான கடலோர கிராமமான கோவளத்திற்கு வரவேற்கிறோம். கிழக்குக் கடலோர சாலை (ECR) வழியில் அமைந்துள்ள இந்தக் கோவளம், வங்காள விரிகுடாவின் கண்கவர் தழுவல்களை வழங்கும் ஒரு கவர்ச்சிகரமான கடற்கரைத் தோப்புக் கிராமமாகும். இதன் செழுமையான வரலாறு, வண்ணமயமான கலாச்சாரம் மற்றும் கண்கொள்ளாக் காட்சியளிக்கும் இயற்கை அழகு ஆகியவை இந்தக் கோவளத்தை கண்டறியத் தகுந்த ஒரு புதையல் போல மாற்றுகின்றன.
              சுமார் 1.09 சதுர கிலோமீட்டர் பரப்பளவில் அமைந்துள்ள இந்த செயல்விழிப்புள்ள கடற்கரை குடியிருப்பு, 10,887 மக்களை உள்ளடக்கியது. இது பாரம்பரிய கலாச்சாரச் செல்வத்தையும், நவீன வளர்ச்சியையும் நன்கு இணைத்துக்கொள்கிறது.
            </p>
          </section>

          <h2 className="text-2xl sm:text-3xl pl-6  text-justify sm:text-center  mb-4 text-amber-600">கோவளத்தின் தேர்ந்தெடுக்கப்பட்ட பொது பிரமுகர்கள்</h2>

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
                  <h2 className="text-2xl  text-gray-950">சோபனா தங்கம் சுந்தர்</h2>
                  <h3 className="text-amber-600 text-lg ">தலைவர், கோவளம் பஞ்சாயத்து</h3>
                  <p className="text-lg sm:text-xl text-gray-950">செங்கல்பட்டு மாவட்டம், தமிழ்நாடு</p>

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
                  <h3 className="text-xl  text-gray-950 mb-3 border-b-2 border-amber-200 pb-2">விவரம்</h3>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">செங்கல்பட்டு மாவட்டத்தில் உள்ள கடலோர கிராமமான கோவளத்தின் பஞ்சாயத்து தலைவராக சோபனா தங்கம் சுந்தர் செயல்பட்டு வருகிறார். சமூக நலனையும் சுற்றுச்சூழல் பாதுகாப்பையும் மேம்படுத்தும் நோக்கில் பல்வேறு திட்டங்கள் மற்றும் நிகழ்வுகளில் அவர் செயல்பட்டு வருகிறார்.</p>
                </div>
              </div>
            </div>

            {/* Rest of the content (always appears below) */}
            <div className="bg-white p-6 md:p-8 rounded-t-2xl">
              <div className="mb-6">
                <h3 className="text-xl  text-gray-950 mb-3 border-b-2 border-amber-200 pb-2">முக்கிய முயற்சிகள்</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>பாலர் சபா மற்றும் மகிள சபா திட்டம்:</strong>சமூக வளர்ச்சிக்கு ஊக்கமளிக்கும் இந்த முயற்சி, சமூக நலனில் முக்கியமான மாற்றங்களை ஏற்படுத்தியுள்ளது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>பஞ்சாயத்து கற்றல் மையம்:</strong> கற்றல் மையத்தின் தொடக்கம் மற்றும் SIRD குழுவின் பார்வை மூலம் நிர்வாக மேம்பாடு மற்றும் சமூக பங்கேற்பு ஊக்கமளிக்கப்பட்டுள்ளது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>மின்னணு அலுவலகம் மற்றும் தன்னார்வ அடிப்படையிலான நிர்வாகம்:</strong> பஞ்சாயத்து தலைவர் சோபனா தங்கம் சுந்தரின் தலைமையில் பதிவுகள் மின்னாக்கம் செய்யப்பட்டு நிர்வாகம் எளிமையாகியுள்ளது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>முறைமைப்படுத்தப்பட்ட குப்பை சேகரிப்பு:</strong> வீடு தோறும் குப்பை சேகரிப்பு, வகைப்படுத்தல் மற்றும் சரியான அகற்றும் முறைகள் மூலம் கழிவுகள் மேலாண்மை மேம்படுத்தப்பட்டுள்ளது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>தண்ணீர் விநியோக கண்காணிப்பு முறை:</strong> தினசரி கண்காணிப்பு மூலம் கிராமம் முழுவதும் தண்ணீர் சரிவர விநியோகிக்கப்படுவது உறுதிசெய்யப்படுகிறது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>சர்வதேச தரத்திற்கு ஒத்த பொதுப் பரிசுத்த கழிப்பிடம்:</strong> சுற்றுலாப் பயணிகளை ஈர்க்கும் வகையில் நவீன வசதிகளுடன் சுத்தமான கழிப்பிடம் கட்டப்பட்டுள்ளது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>பெரும் கடற்கரை தூய்மை இயக்கம்:</strong> ஏன்ஜிஓக்கள் மற்றும் நிறுவனங்களுடன் இணைந்து, சுற்றுச்சூழல் விழிப்புணர்வு ஏற்படுத்தும் நோக்கில் கடற்கரை தூய்மை இயக்கம் நடைபெற்றது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>கிராம விழா:</strong> சமூக ஒற்றுமையை வலுப்படுத்தும் வகையில் திருவிழா நடத்தப்படுகிறது.
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl ml-3 text-gray-950">
                      <strong>"சமபந்தி விருந்து" கிராம சபையில்:</strong> ஒவ்வொரு கிராம சபைக்கும் பிறகு "சமபந்தி விருந்து" நடத்துவது சமூக உறவுகளை வலுப்படுத்தும் பாரம்பரிய கலாச்சார முயற்சியாகும்.
                    </p>
                  </li>

                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <h4 className="text-lg text-amber-800 mb-2">சமூக நலத்திற்கு அர்ப்பணிப்பு:</h4>
                <p className="text-lg sm:text-xl text-amber-700">
                  சோபனா தங்கம் சுந்தர், கோவளம் மக்களின் நலன் மற்றும் சுற்றுச்சூழல் பாதுகாப்பு குறித்த தனது அர்ப்பணிப்பை இத்திட்டங்கள் மூலம் நிரூபித்துள்ளார்.
                </p>
              </div>
            </div>
          </div>



          <div id="ElectedMembers" className="flex flex-wrap gap-6 mx-auto mb-6 ml-6 mr-6 justify-center place-items-center items-center">

            {/* Member 1 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/vice president.jpg" alt="P.அதிலட்சுமி பெருமாள்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">P.அதிலட்சுமி பெருமாள்</h2>
                  <h3 className="text-amber-600 text-sm">துணைத் தலைவர் (வார்டு 2)</h3>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/yasminBashar.png" alt="B.யாஸ்மின் பாஸ்கர்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">B.யாஸ்மின் பாஸ்கர்</h2>
                  <h3 className="text-amber-600 text-sm">மன்ற உறுப்பினர்</h3>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 1  ward.jpg" alt="A.முகமது இலியாஸ்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">A.முகமது இலியாஸ்</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 1)</h3>
                </div>
              </div>
            </div>

            {/* Member 4 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 3 ward.jpg" alt="G.சத்யா கணேஷ்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">G.சத்யா கணேஷ்</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 3)</h3>
                </div>
              </div>
            </div>

            {/* Member 5 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 4 ward.jpg" alt="V.பத்மாவதி வீரராகவன்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">V.பத்மாவதி வீரராகவன்</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 4)</h3>
                </div>
              </div>
            </div>

            {/* Member 6 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 5 ward.jpg" alt="S.தனலட்சுமி சங்கர்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">S.தனலட்சுமி சங்கர்</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 5)</h3>
                </div>
              </div>
            </div>

            {/* Member 7 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 6 ward.jpg" alt="A.சந்திரபாபு" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">A.சந்திரபாபு</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 6)</h3>
                </div>
              </div>
            </div>

            {/* Member 8 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 7 ward.jpg" alt="M.பல்கிஸ் மௌலா" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">M.பல்கிஸ் மௌலா</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 7)</h3>
                </div>
              </div>
            </div>

            {/* Member 9 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 8 ward.jpg" alt="M.தனலட்சுமி முருகன்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">M.தனலட்சுமி முருகன்</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 8)</h3>
                </div>
              </div>
            </div>

            {/* Member 10 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/round 9 ward.jpg" alt="சம்பத்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">J.சம்பத்</h2>
                  <h3 className="text-amber-600 text-sm">வார்டு உறுப்பினர் (வார்டு 9)</h3>
                </div>
              </div>
            </div>

            {/* Member 11 */}
            <div className="max-w-lg w-full bg-slate-50 rounded-xl overflow-hidden transition-all p-2 duration-300 hover:shadow-[0px_20px_30px_rgba(255,165,0,0.5)] transition-shadow">
              <div className="flex items-center mb-0 pb-0 space-x-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <img loading="lazy" decoding="async" src="/assets/images/members/clerk passport.jpg" alt="S.மதன் ராஜ்" className="w-full h-full object-fill transition-transform duration-300" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg sm:text-xl text-gray-950">S.மதன் ராஜ்</h2>
                  <h3 className="text-amber-600 text-sm">ஊராட்சி செயலாளர் - D.A.E</h3>
                </div>
              </div>
            </div>

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
                    <h3 className="text-xl sm:text-2xl text-amber-600">புவியியல் மற்றும் காலநிலை:</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    சென்னை மாநகரின் தெற்கே சுமார் 30 கிலோமீட்டர் தொலைவில் கோவளம் அமைந்துள்ளது. இந்தக் கிராமம் கிழக்கில் வங்காள விரிகுடாவையும், மேற்கில் பாலாறு ஆற்றின் பின்னேரிப் பகுதிகளையும் ஒட்டிய அமைப்புடன் உள்ளது. கடலோரத் தீவுக்கிராமமான கோவளம், வெப்பமண்டல சவன்ன காலநிலையைக் கொண்டுள்ளது, இதில் வெயில்கடுந்த கோடைகாலமும், மிதமான குளிர்காலமும் காணப்படுகிறது.
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
                    <h3 className="text-xl sm:text-2xl text-amber-600">கோவளம்  -  வரலாறும் கலாச்சாரமும்</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    கோவளம் ஒரு சிறப்பான கலாச்சார பின்புலம் கொண்ட கடற்கரை கிராமமாகும், இதில் மரபு தமிழ் பண்பாட்டும், கடற்கரைப் பகுதியில் வாழும் மக்களின் வழக்கங்களும் இணைந்து காணப்படுகின்றன. இந்த கிராமத்தில் பல பண்டைய கோவில்கள், தேவாலயங்கள் மற்றும் மசூதிகள் உள்ளன, இது இந்த இடத்தின் பல்வகைமையும், தாராள சிந்தனையையும் பிரதிபலிக்கின்றன.
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
                    <h3 className="text-xl sm:text-2xl text-amber-600">சுற்றுலா மற்றும் பொருளாதாரம்</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    கோவளத்தில் உள்ள அழகான கடற்கரை, பசுமையான கடற்கரைகள் மற்றும் நீர்மூழ்கல் விளையாட்டு வசதிகள் இதனை ஒரு பிரபலமான சுற்றுலா இடமாக மாற்றுகின்றன.பல உள்ளூராட்சி மீனவர்கள் உள்ளூர்ப் பொருளாதாரத்திற்கு முக்கிய பங்காற்றுகின்றனர். சென்னை அருகிலுள்ள தகவல் தொழில்நுட்ப மையங்கள் மற்றும் தொழில்கள் உள்ளூர் மக்களுக்கு வேலை வாய்ப்புகளை வழங்குகின்றன.
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
                <h2 className="text-2xl sm:text-3xl text-amber-600 drop-shadow-md">
                  <span className="inline-block pb-2">மக்கள் தொகை (Demographics)</span>
                </h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <div className="text-center">
                      <div className="text-5xl text-amber-600 mb-2">10,887</div>
                      <div className="text-lg sm:text-xl text-gray-950">மொத்த மக்கள் தொகை</div>
                    </div>

                    <div className="flex justify-between mt-8">
                      <div className="text-center">
                        <div className="text-3xl text-blue-500">4,867</div>
                        <div className="text-lg sm:text-xl text-gray-950">ஆண்கள்</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl text-pink-500">6,020</div>
                        <div className="text-lg sm:text-xl text-gray-950">பெண்கள்</div>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-1/2 border-l-0 md:border-l-2 border-amber-200 md:pl-8">
                    <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                      கோவளத்தின் மக்கள் தொகை சுமார் 10,887 ஆகும், இதில் 4,867 ஆண்கள் மற்றும் 6,020 பெண்கள் உள்ளனர்.
                      இந்த கிராமம் அதன் வசிப்போரின் பன்முக கலாச்சார அமைப்புக்கு முக்கிய பங்களிப்பு வழங்கும் வகையில் பரபரப்பான சமூகத்தை கொண்டுள்ளது.
                      கோவளத்தின் மக்கள் பல்வேறு பிரிவுகளில் வாழ்கின்றனர், ஒவ்வொன்றும் கிராமத்தின் மொத்த மேம்பாட்டில் முக்கிய பங்கு வகிக்கின்றது.
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
                <span className="inline-block pb-2">உள்ளூர் விவரங்கள்</span>
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="bg-gradient-to-r from-stone-50 to-amber-100 text-white">
                    <tr>
                      <th className="px-6 py-4 text-center text-xl sm:text-2xl text-gray-950 uppercase tracking-wider">வார்டு</th>
                      <th className="px-6 py-4 text-center text-xl sm:text-2xl text-gray-950 uppercase tracking-wider">குடியிருப்பு</th>
                      <th className="px-6 py-4 text-center text-xl sm:text-2xl text-gray-950 uppercase tracking-wider">தெரு பெயர்கள்</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">

                    {/* வார்டு 1 */}
                    <tr>
                      <td rowSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">1</span>
                        </div>
                      </td>
                      <td rowSpan="3" className="border border-gray-300 px-4 py-2 text-gray-950">குன்னுக்காடு</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">புது மசூதி தெரு</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">முத்துமாரியம்மன் கோவில் தெரு</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">கார்மேல் நகர்</td>
                    </tr>

                    {/* வார்டு 2 */}
                    <tr className="bg-gray-100">
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">2</span>
                        </div>
                      </td>
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-gray-950">கோவளம் குப்பம்</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">பஜனை கோவில் தெரு</td>
                    </tr>

                    {/* வார்டு 3 */}
                    <tr>
                      <td rowSpan="4" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">3</span>
                        </div>
                      </td>
                      <td rowSpan="4" className="border border-gray-300 px-4 py-2 text-gray-950">கோட்டை காலனி</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">மாதா கோவில் தெரு</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">நாடு காலனி</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">முத்துமாரியம்மன் கோவில் தெரு</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">தேசாய் தெரு</td>
                    </tr>

                    {/* வார்டு 4 */}
                    <tr>
                      <td rowSpan="5" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">4</span>
                        </div>
                      </td>
                      <td rowSpan="5" className="border border-gray-300 px-4 py-2 text-gray-950">கோவளம்</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">கைலாசநாதர் கோவில் தெரு</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">கோவளம் மெயின் ரோடு</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">பிள்ளையார் கோவில் தெரு</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">ஏகவள்ளியம்மன் கோவில் தெரு</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">தர்கா தெரு</td>
                    </tr>

                    {/* வார்டு 5 */}
                    <tr className="bg-gray-100">
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">5</span>
                        </div>
                      </td>
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-gray-950">கோவளம் குப்பம்</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">கன்னியம்மன் கோவில் தெரு</td>
                    </tr>

                    {/* வார்டு 6 */}
                    <tr>
                      <td rowSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">6</span>
                        </div>
                      </td>
                      <td rowSpan="3" className="border border-gray-300 px-4 py-2 text-gray-950">நாச்சியார் குளம் காலனி</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">வணிகர் தெரு</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">நாச்சியார் குளம்</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">செங்கேணியம்மன் கோவில் தெரு</td>
                    </tr>

                    {/* வார்டு 7 */}
                    <tr className="bg-gray-100">
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">7</span>
                        </div>
                      </td>
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-gray-950">அன்சாரி நகர்</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">அன்சாரி நகர்</td>
                    </tr>

                    {/* வார்டு 8 */}
                    <tr>
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">8</span>
                        </div>
                      </td>
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-gray-950">செம்மஞ்சேரி</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">படவேட்டம்மன் கோவில் தெரு</td>
                    </tr>

                    {/* வார்டு 9 */}
                    <tr className="bg-gray-100">
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-center">
                        <div className="relative inline-block w-16 h-10 text-amber-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-full h-full" fill="currentColor">
                            <path d="m80-160 240-320L80-800h520q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H80Zm160-80h360l180-240-180-240H240l180 240-180 240Zm270-240Z" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-black font-semibold text-base">9</span>
                        </div>
                      </td>
                      <td rowSpan="1" className="border border-gray-300 px-4 py-2 text-gray-950">செம்மஞ்சேரி குப்பம்</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-950">நாகாலம்மன் கோவில் தெரு</td>
                    </tr>

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
                    கோவளம் சுற்றுலா
                  </h2>
                  <span className="block w-16 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent ml-4"></span>
                </div>

                <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed text-orange-100">
                  "சிறப்பம்சங்களைச் சமர்ப்பிக்கும் கோவளத்தின் அழகை காணுங்கள்  -  இது ஒரு பரபரப்பான சுற்றுலா மையமாக திகழ்கிறது:"
                </p>
              </div>

              {/* Feature grid with icons and hover effects */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {/* Feature 1 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-umbrella-beach"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">சுத்தமான கடற்கரைகள்</h3>
                  <p className="text-lg sm:text-xl text-orange-100">அமைதியான நீர்ப்பரப்புகள் மற்றும் பொன்னிற மணல்</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">பண்பாட்டு பாரம்பரியம்</h3>
                  <p className="text-lg sm:text-xl text-orange-100">பாரம்பரியமும் வரலாற்றுச் சிறப்பும்</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-binoculars"></i>
                  </div>
                  <h3 className="text-xl mb-2 text-white">சாகச அனுபவங்கள்</h3>
                  <p className="text-lg sm:text-xl text-orange-100">திகிலான அனுபவங்களுக்கு முடிவே இல்லை</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">கடல் உணவுகள்</h3>
                  <p className="text-lg sm:text-xl text-orange-100">வாய்சலிக்க வைக்கும் உள்ளூர் சிறப்புவகைகள்</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-music"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">விழாக்கொண்டாட்ட இரவு வாழ்க்கை</h3>
                  <p className="text-lg sm:text-xl text-orange-100">பல்வேறு பொழுதுபோக்கு அம்சங்கள்</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-orange-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 hover:-translate-y-1">
                  <div className="text-amber-300 text-4xl sm:text-4xl mb-4">
                    <i className="fas fa-sun"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-2 text-white">முகப்பு வெயிலின் அழகு</h3>
                  <p className="text-lg sm:text-xl text-orange-100">மறக்க முடியாத காட்சிகள்</p>
                </div>
              </div>

              {/* Closing paragraph */}
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg sm:text-xl italic leading-relaxed text-orange-100 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  "அமைதி வேண்டுமா அல்லது சாகசமா  -  எந்த தேடலாக இருந்தாலும், கோவளம் உங்களுக்கு மறக்க முடியாத அனுபவத்தை வழங்கும் சிறந்த இடமாகும். இயற்கையின் அழகு, உற்சாகமான வரவேற்பு, தனித்துவமான கலாச்சாரம் ஆகியவற்றில் மூழ்கி மகிழுங்கள்  -  இந்த கிராமத்தின் இனிமையை அனுபவிக்க வாருங்கள்!"
                </p>
              </div>
            </div>
          </section>

          {/* Historical View Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl  text-center text-amber-600">வரலாற்றுப் பார்வை</h2>
              <div className="w-24 h-1 bg-amber-400 mb-12 mx-auto mt-4 rounded-full"></div>

              {/* Kailasanathar Kovil Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex">
                  <div className="md:w-[50%] relative group overflow-hidden">

                    <div className="bg-no-repeat bg-center h-64 md:h-full w-full transition-all duration-500 group-hover:scale-110"
                      style={{ "backgroundImage": "url('/assets/images/temples/KAILASANATHARKOVIL1.jpg')", "backgroundSize": "100% 100%" }}>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl  text-white">கைலாசநாதர் கோவில்</h3>
                      <div className="flex space-x-3 text-lg sm:text-xl mt-2">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          1200+ ஆண்டுகள் பழமை
                        </span>
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          பல்லவ அரசமரபு
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:w-[50%]">
                    <h3 className="text-2xl sm:text-3xl text-amber-600 mb-4">கைலாசநாதர் கோவில்</h3>
                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl"><span className="text-xl sm:text-2xl text-amber-600">வரலாறு:</span> சென்னையின் கோவளத்தில் உள்ள கைலாசநாதர் கோவில், பல்லவ அரசமரபிற்குட்பட்ட காலத்தைச் சேர்ந்ததாகும் (7-ம் நூற்றாண்டிலிருந்து 9-ம் நூற்றாண்டு CE வரை).</p>

                      <div className="bg-stone-200 p-4 rounded-lg">
                        <h4 className="text-stone-700 text-xl sm:text-2xl mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          இதிகாசமும் புராணங்களும்
                        </h4>
                        <p className="text-lg sm:text-xl">இந்த கோவில் 1,200 ஆண்டுகள் பழமை வாய்ந்ததாக நம்பப்படுகிறது. இது திருமலை நாதரானLordநாதரான சிவனுக்கு அர்ப்பணிக்கப்பட்டது. புராணக் கதைகளின்படி, இந்த கோவிலை பல்லவ மன்னனான இராசசிம்மன் (அல்லது நரசிம்மவர்மன் II), 700-728 CE காலப்பகுதியில் கட்டியதாக கூறப்படுகிறது.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="text-amber-600 text-xl sm:text-2xl mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            கலைநயமும் முக்கியத்துவமும்
                          </h4>
                          <p className="text-lg sm:text-xl">இந்த கோவில் பல்லவக் கட்டிடக்கலையின் சிறந்த எடுத்துக்காட்டாகும். இதன் சுவர்களில் நுணுக்கமான சிற்பங்களும் அலங்காரங்களும் காணப்படுகின்றன. கருவறையில் ஒரு சிறப்பான சிவலிங்கம் உள்ளது, இச்சுயம்பு (தானாக உருவான) சிவலிங்கமாக நம்பப்படுகிறது.</p>
                        </div>

                        <div className="bg-lime-50 p-4 rounded-lg">
                          <h4 className="text-amber-500 text-xl sm:text-2xl mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            வரலாற்று முக்கியத்துவம்
                          </h4>
                          <p className="text-lg sm:text-xl">கைலாசநாதர் கோவில் தெரு பகுதியில் உள்ள இக்கோவில் மிக பழமையான சிவன் கோவில்களில் ஒன்றாகும். இது பண்டைய தமிழ் இலக்கியங்களில், குறிப்பாக நாயனமார்களால் எழுதப்பட்ட தேவார பாடல்களில் குறிப்பிடப்பட்டுள்ளது.</p>
                        </div>
                      </div>

                      <div className="bg-slate-200 p-4 rounded-lg">
                        <h4 className="text-slate-700 text-xl sm:text-2xl mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          பண்டிகைகள் மற்றும் விழாக்கள்
                        </h4>
                        <p className="text-lg sm:text-xl">இந்த கோவிலில் வருடத்தின் பல்வேறு விழாக்கள் கொண்டாடப்படுகின்றன, அவை: மகா சிவராத்திரி, பங்குனி உத்திரம், ஆருத்ரா தரிசனம், கார்த்திகை தீபம்.</p>
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
                      <h3 className="text-2xl sm:text-3xl text-white">கார்மேல் திருச்சபை</h3>
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
                          போர்த்துக்கீசியர்
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:w-[50%]">
                    <h3 className="text-2xl sm:text-3xl text-amber-600 mb-4">கார்மேல் திருச்சபை</h3>
                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl"><span className="text-xl sm:text-2xl text-amber-600">வரலாறு:</span> சென்னையின் கோவளத்தில் உள்ள கார்மேல் திருச்சபை இருநூறு ஆண்டுகளுக்கும் மேலான வரலாற்றைக் கொண்டுள்ளது.</p>

                      <div className="bg-slate-200 p-4 rounded-lg">
                        <h4 className="text-slate-700 mb-2 text-xl sm:text-2xl flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          தரிசனமும் நிறைவேற்றலும்
                        </h4>
                        <p className="text-lg sm:text-xl">ஒரு காலத்தில் செல்வந்தமான போர்த்துக்கீசிய வர்த்தகர் சர்ஜான் டி'மோண்டி கனவில் கர்மேல் மாதா அவரை தரிசித்ததாக கூறப்படுகிறது. அவரது மனைவி மரியா நோயால் பாதிக்கப்பட்டிருந்தாள். கனவில், அவர் ஒரு திருச்சபையை கட்டி முடித்தால் மரியா அவரின் உடல்நலம் மேம்படும் என்றும், எனது ஆசீர்வாதம் உண்டாகும் என்றும் மாதா வாக்குறுதி அளித்தாராம்.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-stone-200 p-4 rounded-lg">
                          <h4 className="text-stone-700 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            கட்டிடக்கலை மற்றும் சிறப்பம்சங்கள்
                          </h4>
                          <p className="text-lg sm:text-xl">இந்த திருச்சபையின் கட்டிடக்கலை போர்த்துக்கீசிய தாக்கங்களைத் தாங்கி, அந்த காலத்துக்கேற்ப அமைந்துள்ளது. உயரமான மாடம் மற்றும் 2015ஆம் ஆண்டு போலந்தில் இருந்து கொண்டு வரப்பட்ட 270 கிலோ எடையுடைய மணி இதன் சிறப்பம்சங்களாகும்.</p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className="text-yellow-600 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            ஆண்டுதோறும் நடைபெறும் திருவிழா
                          </h4>
                          <p className="text-lg sm:text-xl">இந்த திருச்சபையின் ஆண்டு விழா ஜூலை 16ஆம் தேதி மிக சிறப்பாகக் கொண்டாடப்படுகிறது. இது திருச்சபையின் கட்டுமானம் முடிக்கப்பட்டதை நினைவுகூரும் விழாவாகும்.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Dargha Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-[50%] relative group overflow-hidden">
                    <div className="bg-no-repeat bg-center h-64 md:h-full w-full transition-all duration-500 group-hover:scale-110"
                      style={{ "backgroundImage": "url('/assets/images/temples/dargah.png')", "backgroundSize": "100% 100%" }}>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl text-white">ஹஜ்ரத் தமீம் அன்சாரி பாவா தர்கா</h3>
                      <div className="flex space-x-3 mt-2 text-lg sm:text-xl">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          18ம் நூற்றாண்டு
                        </span>
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          இஸ்லாமியர்
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-8 md:w-[50%]">
                    <h3 className="text-2xl sm:text-3xl text-amber-600 mb-4">ஹஜ்ரத் தமீம் அன்சாரி பாவா தர்கா</h3>
                    <div className="space-y-4 text-gray-950">
                      {/* History */}
                      <p className="text-lg sm:text-xl"><span className="text-xl sm:text-2xl text-amber-600">வரலாறு:</span> தமிழ்நாட்டின் கோவளத்தில் அமைந்த கோவளத் தமீம் அன்சாரி பாவா தர்கா 18ம் நூற்றாண்டின் வரலாற்றைக் கொண்டுள்ளது.</p>

                      {/* Early Life */}
                      <div className="bg-lime-50 p-4 rounded-lg">
                        <h4 className="text-amber-500 mb-2 text-xl sm:text-2xl flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          ஆரம்ப வாழ்க்கை மற்றும் பாரம்பரியம்
                        </h4>
                        <p className="text-lg sm:text-xl">ஹஜ்ரத் தமீம் அன்சாரி சவுதி அரேபியாவின் மதீனாவில் பிறந்தார். பதுர் போரில் பங்கேற்றார். உமர் இப்னு அல்-கத்தாப் காலத்தில் இந்திய துணைக்கண்டத்தைப் பயணித்தார்.</p>
                      </div>

                      {/* Miracle of the Sea & Construction */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-200 p-4 rounded-lg">
                          <h4 className="text-slate-700 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            கடல் அதிசயம்
                          </h4>
                          <p className="text-lg sm:text-xl">அவர் மறைவடைந்த பிறகு, ஹஜ்ரத் தமீம் அன்சாரியின் சீடர்கள் அவரது உடலை கடலில் விட்டனர். அதிசயமாக, அது ஐந்து ஆண்டுகளாக நீரில் மிதந்து பெரிய மீன்கள் பாதுகாத்தன.</p>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="text-amber-600 mb-2 text-xl sm:text-2xl flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            தர்கா கட்டிடக்கலை
                          </h4>
                          <p className="text-lg sm:text-xl">ஒரு நவாப் கனவில் கிடைத்த ஊக்கத்தின்படி, ஹஜ்ரத் தமீம் அன்சாரியின் புனித உடலை நிலைத்திட கோவளத்தில் இந்த தர்காவை கட்டினார்.</p>
                        </div>
                      </div>

                      {/* Festivals */}
                      <div className="bg-stone-200 p-4 rounded-lg">
                        <h4 className="text-stone-700 mb-2 text-xl sm:text-2xl flex items-center">
                          திருவிழாக்கள் மற்றும் கொண்டாட்டங்கள்
                        </h4>
                        <p className="text-lg sm:text-xl">இந்த தர்காவில் ஆண்டு முழுவதும் பல்வேறு திருவிழாக்கள் கொண்டாடப்படுகின்றன, அவை: ஊர்சு திருவிழா, மிலாதுன் நபி, ரமலான் மற்றும் ஈது-அல்-பித்ர்.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Kovalam Beach Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-1/3 relative group overflow-hidden">
                    <div className="bg-cover bg-center h-64 md:h-full transition-all duration-500 group-hover:scale-110" style={{ "backgroundImage": "url(../assets/images/beach/beach.png)" }}></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl sm:text-3xl text-white">கோவளம் கடற்கரை</h3>
                      <div className="flex space-x-3 mt-2 text-lg sm:text-xl">
                        <span className="flex items-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          நீலக்கொடி சான்றிதழ் பெற்றது
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl sm:text-3xl text-amber-600">கோவளம் கடற்கரை</h3>
                      <div className="inline-flex items-center bg-amber-500 text-white px-4 py-2 rounded-full ml-4">
                        <span className="text-lg sm:text-xl">நீலக்கொடி சான்றிதழ் பெற்றது</span>
                        <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-4 text-gray-950">
                      <p className="text-lg sm:text-xl">தமிழ்நாடு அரசு சுற்றுலா துறை மற்றும் இந்திய பாரம்பரியக் கலைகளுக்கான தேசிய அறக்கட்டளையுடன் இணைந்து வழங்கும் பிரபலமான நீலக்கொடி சான்றிதழ் பெற்றது.</p>

                      {/* Blue Flag Explanation */}
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="text-xl sm:text-2xl text-amber-600 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          நீலக்கொடி சான்றிதழ் என்றால் என்ன?
                        </h4>
                        <p className="text-lg sm:text-xl">சுற்றுச்சூழல் மேலாண்மை, நீர் தரம், பாதுகாப்பு மற்றும் வசதிகள் போன்ற கடுமையான தரநிலைகளை பூர்த்தி செய்யும் கடற்கரைகளுக்கு வழங்கப்படும் உலகளாவிய முக்கியத்துவம் வாய்ந்த சான்றிதழ்.</p>
                      </div>

                      {/* Features Grid */}
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Cleanliness */}
                        <div className="bg-slate-200 p-4 rounded-lg">
                          <h4 className="text-xl sm:text-2xl text-slate-700 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            தூய்மை
                          </h4>
                          <p className="text-lg sm:text-xl">தூய்மையான பராமரிப்பு மற்றும் செயல்திறனுள்ள கழிவுப் போக்குதல் முறைகள் மூலம் கடற்கரை பராமரிக்கப்படுகிறது.</p>
                        </div>

                        {/* Safety */}
                        <div className="bg-amber-50 p-4 rounded-lg">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            பாதுகாப்பு
                          </h4>
                          <p className="text-lg sm:text-xl">பாதுகாப்பு முகாமாளர்கள், முதல் மருத்துவ உதவி வசதி மற்றும் அவசரநிலை நடவடிக்கைகள் பயணிகளின் பாதுகாப்பை உறுதி செய்கின்றன.</p>
                        </div>

                        {/* Amenities */}
                        <div className="bg-lime-50 p-4 rounded-lg">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            வசதிகள்
                          </h4>
                          <p className="text-lg sm:text-xl">உணவகங்கள், உணவுக் கடைகள், குளியல் வசதிகள் மற்றும் வாகன நிறுத்தும் இடங்கள் பயணிகளுக்கு வழங்கப்படுகின்றன.</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <section className="py-16 bg-gradient-to-r from-stone-50 to-amber-50 opacity-80 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-[80vw] mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                      <h2 className="text-2xl sm:text-3xl text-amber-600 mb-4">போக்குவரத்து</h2>
                      <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
                      <p className="text-lg sm:text-xl text-gray-950">
                        சென்னை நகரத்தில் உள்ள அழகான கடலோர நகரமான கோவளத்தில், அருகிலுள்ள நகரங்களுக்கான பல்வேறு போக்குவரத்து வசதிகள் உள்ளன.
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
                            <h3 className="text-xl sm:text-2xl  text-white">கோவளம் போக்குவரத்து வளையம்</h3>
                            <p className="text-lg sm:text-xl text-stone-100">பேருந்து பாதைகள் மூலம் நன்கு இணைக்கப்பட்டுள்ளது, இது குடியிருப்பாளர்களும் பயணிகளும் சிரமமின்றி பயணிக்க உதவுகிறது.</p>
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
                            <h4 className="text-xl sm:text-2xl text-amber-600">பேருந்து சேவைகள்</h4>
                          </div>

                          <p className="text-lg sm:text-xl text-gray-950 mb-6">
                            சென்னை மாநகரப் போக்குவரத்துக் கழகம் (MTC) கோவளத்திலிருந்து சென்னை மாநகரின் பல பகுதிகளுக்கு பேருந்து சேவைகளை இயக்குகிறது. அதில் ஒன்று MTC பேருந்து 109, இது கோவளம் பேருந்து நிலையத்திலிருந்து ப்ராட்வே வரை 42 முறை இயக்கப்படுகிறது.
                          </p>

                          <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Route Information */}
                            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                              <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                <h5 className="text-xl sm:text-2xl text-amber-800">பாதை தகவல்</h5>
                              </div>
                              <p className="text-lg sm:text-xl text-gray-950">
                                MTC பேருந்து 109 பாதையில், கோவளம், நீலாங்கரை, பாலவாக்கம், திருவான்மியூர், அடையாறு மற்றும் ப்ராட்வே ஆகிய பகுதிகள் அடங்கும்.
                              </p>
                            </div>

                            {/* Bus Routes */}
                            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                              <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <h5 className="text-xl sm:text-2xl  text-ammber-800">பேருந்து வழிகள்</h5>
                              </div>
                              <ul className="space-y-3">
                                <li className="flex items-center">
                                  <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">515 A</span>
                                  <span className="text-lg sm:text-xl text-gray-950">தாம்பரம் முதல் கோவளம்</span>
                                </li>
                                <li className="flex items-center">
                                  <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">588</span>
                                  <span className="text-lg sm:text-xl text-gray-950">கோவளம் முதல் மாமல்லபுரம்</span>
                                </li>
                                <li className="flex items-center">
                                  <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">109</span>
                                  <span className="text-lg sm:text-xl text-gray-950">கோவளம் முதல் ப்ராட்வே</span>
                                </li>
                                <li className="flex items-center">
                                  <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">109 T</span>
                                  <span className="text-lg sm:text-xl text-gray-950">கோவளம் முதல் திருவொற்றியூர்</span>
                                </li>
                                <li className="flex items-center">
                                  <span className="text-lg sm:text-xl bg-stone-500 text-white  rounded-lg px-3 py-1 text-sm mr-3">515 K</span>
                                  <span className="text-lg sm:text-xl text-gray-950">கோவளம் முதல் கிளாம்பாக்கம்</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-lg px-6 py-4 border-l-4 border-amber-500">
                            <p className="text-lg sm:text-xl text-gray-950 italic">
                              இந்த பேருந்து சேவைகள் அனைத்தும் சென்னை மாநகரப் போக்குவரத்துக் கழகத்தால் (MTC) இயக்கப்படுகின்றன.
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
                            <h4 className="text-xl sm:text-2xl  text-amber-600">பிற போக்குவரத்து விருப்பங்கள்</h4>
                          </div>

                          <p className="text-lg sm:text-xl text-gray-950 mb-8">
                            பேருந்து சேவைகளுடன் கூடுதலாக, அருகிலுள்ள நகரங்களுக்கு செல்ல டாக்ஸிகள் அல்லது ஆட்டோ ரிக்ஷாக்களையும் வாடகைக்கு எடுக்கலாம். மேலும், கோவளம் ~30 கி.மீ தொலைவில் உள்ள சென்னை சென்ட்ரல் ரயில் நிலையத்துடன் இணைக்கப்பட்டுள்ளது.
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
                                <h5 className="text-xl sm:text-2xl text-amber-600">டாக்ஸிகள்</h5>
                              </div>
                              <p className="text-lg sm:text-xl text-gray-950">கோவளத்தில் முழுவதும் வாடகைக்கு கிடைக்கும்</p>
                            </div>

                            {/* Auto Option */}
                            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm">
                              <div className="flex items-center mb-3">
                                <div className="bg-amber-50 p-2 rounded-lg mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                <h5 className="text-xl sm:text-2xl text-amber-600">ஆட்டோ ரிக்ஷாக்கள்</h5>
                              </div>
                              <p className="text-lg sm:text-xl text-gray-950">உள்ளூர் பயணங்களுக்கு மூன்று சக்கர வாகனங்கள்</p>
                            </div>

                            {/* Train Option */}
                            <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all shadow-sm">
                              <div className="flex items-center mb-3">
                                <div className="bg-amber-50 p-2 rounded-lg mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                  </svg>
                                </div>
                                <h5 className="text-xl sm:text-2xl text-amber-600">ரயில் இணைப்பு</h5>
                              </div>
                              <p className="text-lg sm:text-xl text-gray-950">சென்னை சென்ட்ரல் ரயில் நிலையம் (~30 கி.மீ)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

            </div>
            <section id="services" className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-[80vw] mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                  <h2 className="text-2xl sm:text-3xl sm:tracking-tight">
                    <span className="text-amber-600">எங்கள் சேவைகள்</span>
                  </h2>
                  <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
                  <p className="mt-6 text-xl sm:text-2xl text-amber-500">
                    உங்கள் பாதுகாப்புக்கும் நலனுக்கும் 24x7 அர்ப்பணிப்பு சேவை
                  </p>
                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

                  {/* 24X7 Medical Facility */}
                  <article className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover">
                    <div className="p-8">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-stone-100 p-4 rounded-lg">
                          <svg className="h-8 w-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                          </svg>
                        </div>
                        <h3 className="ml-4 text-xl sm:text-2xl text-stone-600">24X7 மருத்துவ வசதி</h3>
                      </div>
                      <p className="text-lg sm:text-xl mt-6 text-gray-950">
                        கோவளம் பஞ்சாயத்து தன்னுடைய குடியிருப்பாளர்கள் மற்றும் பயணிகளின் நலனுக்காக 24 மணி நேர மருத்துவ வசதியை வழங்குகிறது. இது அவசர சிகிச்சை, முதல் உதவி, வழக்கமான பரிசோதனைகள் மற்றும் அத்தியாவசிய மருந்துகளை கொண்டுள்ளது. நிபுணத்துவம் வாய்ந்த சுகாதார ஊழியர்கள் இங்கு பணியாற்றுகிறார்கள். தாய்மார்களுக்கும் குழந்தைகளுக்கும் தேவையான சுகாதார சேவைகளும் இங்கு வழங்கப்படுகின்றன.
                      </p>
                      <div className="mt-6 bg-stone-50 p-4 rounded-lg">
                        <p className="text-lg sm:text-xl text-stone-800">
                          <strong>அவசர நெருக்கடியான நிலைகள்:</strong> நோயாளிகள் அருகிலுள்ள மிக முன்னேறிய மருத்துவமனைகளுடன் உடனடியாக இணைக்கப்படுவார்கள்.
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
                        <h3 className="ml-4 text-xl sm:text-2xl text-amber-600">மீட்பு காப்போர் சேவைகள்</h3>
                      </div>
                      <p className="text-lg sm:text-xl mt-6 text-gray-950">
                        கோவளத்தின் மீட்புக்காப்போர் சேவை, கடற்கரையில் பாதுகாப்பை உறுதி செய்கின்றது. திறமையுடன் பயிற்சி பெற்ற மீட்பு ஊழியர்கள் முக்கியமான இடங்களில் கண்காணிக்க நியமிக்கப்படுகின்றனர். இவர்கள் லைஃப்பாய், முதல் உதவி பெட்டிகள் போன்ற பாதுகாப்பு உபகரணங்களுடன் சீராக தயாராக உள்ளனர்.
                      </p>
                      <div className="mt-6 bg-amber-50 p-4 rounded-lg">
                        <p className="text-lg sm:text-xl text-amber-800">
                          <strong>பாதுகாப்பு முதன்மை:</strong> அவர்கள் பொது மக்களுக்கு நீர் பாதுகாப்பு பற்றியும் விழிப்புணர்வையும் ஏற்படுத்துகிறார்கள், இது விபத்துகளை தடுக்கும் மற்றும் பாதுகாப்பான கடற்கரை அனுபவத்தை உறுதி செய்கின்றது.
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
                        <h3 className="ml-4 text-xl sm:text-2xl text-slate-600">சிசிடிவி கண்காணிப்பு</h3>
                      </div>
                      <p className="text-lg sm:text-xl mt-6 text-gray-950">
                        கோவளத்தில், பொது இடங்களையும் முக்கியமான பகுதிகளையும் உள்ளடக்கிய உயர்தொழில்நுட்ப சிசிடிவி கண்காணிப்பு முறைமை அமல்படுத்தப்பட்டுள்ளது. இது பொது மக்களின் பாதுகாப்பை மேம்படுத்துகிறது, குற்றங்களைத் தடுக்கும், மற்றும் சம்பவங்களுக்கு விரைவான நடவடிக்கையை உறுதி செய்கிறது.
                      </p>
                      <div className="mt-6 bg-slate-50 p-4 rounded-lg">
                        <p className="text-lg sm:text-xl text-slate-800">
                          <strong>செயல்பாட்டில் கண்காணிப்பு:</strong> இந்த கண்காணிப்பு முறைமை, காவல்துறையுடன் இணைந்து செயல்படுகிறது, மேலும் அனைத்து மக்களுக்கும் பாதுகாப்பான சூழலை உருவாக்குகிறது.
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
                        <h3 className="ml-4 text-xl sm:text-2xl text-gray-950">தீயணைப்பு மற்றும் மீட்பு நிலையம்</h3>
                      </div>
                      <p className="text-lg sm:text-xl mt-6 text-gray-950">
                        சென்னை கோவளத்தில் தீயணைப்பு மற்றும் மீட்பு நிலையம், தற்போதைக்கு குறைந்த ஊழியர்களுடன் மற்றும் தீயணைப்பு உபகரணங்களுடன் நிறுவப்பட்டிருக்கிறது, இது சமூகத்தின் பாதுகாப்பை உறுதி செய்கின்றது.
                      </p>
                      <div className="mt-6 bg-red-50 p-4 rounded-lg">
                        <p className="text-lg sm:text-xl text-red-800">
                          <strong>மாநில ஆதரவு:</strong> தமிழ்நாடு தீயணைப்பு மற்றும் மீட்பு நிலையம் மாநிலம் முழுவதும், கோவளம் உட்பட, தீ பாதுகாப்பும் மீட்பு நடவடிக்கைகளையும் மேற்கொள்கிறது.
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </section></div>
        <section id="HealthCare" className="content hidden py-16 bg-gradient-to-br from-amber-50 to-stone-50">
          <div className="container mx-auto px-4 max-w-[80vw]">
            <h2 className="text-2xl sm:text-3xl text-center mb-16 text-gray-950">
              <span className="text-amber-600">கோவளத்தில் சுகாதார சேவைகள்</span>
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
                  <h3 className="absolute bottom-6 left-6 text-3xl  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">மாதா பிதா மருத்துவமனை</h3>
                </div>

                {/* Content */}
                <div className="px-4">
                  <h3 className="text-xl sm:text-2xl text-gray-950 mb-2 group-hover:hidden">மாதா பிதா மருத்துவமனை</h3>
                  <p className="text-lg sm:text-xl text-gray-950 mb-6">
                    கோவளத்தில் முதன்மை மருத்துவ சேவைகளை வழங்கும் முக்கிய மருத்துவமனை. மேம்பட்ட உபகரணங்களும் அனுபவமிக்க மருத்துவ நிபுணர்களும் உள்ளனர்.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-amber-50 p-2 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl text-gray-950">அவசர சேவைகள்</h4>
                        <p className="text-lg sm:text-xl  text-gray-950">24/7 ஆம்புலன்ஸ் (BLS & ALS ஆதரவு உடன்)</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-amber-50 p-2 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl text-gray-950">திறமையான சிகிச்சை</h4>
                        <p className="text-lg sm:text-xl  text-gray-950">பல் மருத்துவம், அறுவை சிகிச்சைகள், அவசர சிகிச்சைகள்</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-lg sm:text-xl mt-8 grid grid-cols-2 gap-3">
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">பல் மருத்துவம்</span>
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">அறுவை சிகிச்சை</span>
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">தீவிர சிகிச்சை பிரிவு (ICU)</span>
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-lg sm:text-xl  text-center">ஆய்வுகள் (லேப் டெஸ்ட்)</span>
                  </div>
                </div>
              </div>

              {/* Kovalam Sub Health Center */}
              <div className="relative group">
                {/* Image with hover overlay */}
                <div className="h-64 overflow-hidden rounded-xl shadow-lg mb-6 relative">
                  <img loading="lazy" decoding="async" src="/assets/images/sub-health.png"
                    alt="Kovalam Sub Health Center"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 className="absolute bottom-6 left-6 text-3xl  text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">கோவளம் துணை சுகாதார மையம்</h3>
                </div>

                {/* Content */}
                <div className="px-4">
                  <h3 className="text-xl sm:text-2xl text-gray-950 mb-2 group-hover:hidden">கோவளம் துணை சுகாதார மையம்</h3>
                  <p className="text-lg sm:text-xl text-gray-950 mb-6">
                    அரசு நிர்வாகத்தில் செயல்படும் இந்த மையம், உள்ளூர் சமூகத்திற்கு குறைந்த செலவில் அடிப்படை மருத்துவ சேவைகளை வழங்குகிறது.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-amber-50 p-2 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl text-gray-950">சமூக சிகிச்சை</h4>
                        <p className="text-lg sm:text-xl text-gray-950">பொதுவான மருத்துவம், குழந்தைகள் நல மருத்துவம், மகப்பேறு மற்றும் மகளிர் நலவியல்</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-amber-50 p-2 rounded-lg mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl text-gray-950">முன்கூட்டிய சுகாதாரம்</h4>
                        <p className="text-lg sm:text-xl text-gray-950">தடுப்பூசி மற்றும் பொது சுகாதார திட்டங்கள்</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-lg sm:text-xl mt-8 grid grid-cols-2 gap-3">
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">தாய் மருத்துவ சேவை</span>
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">குழந்தை நலம்</span>
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">தடுப்பூசிகள்</span>
                    <span className="bg-amber-50 text-amber-800 py-2 px-3 rounded-full text-xl sm:text-2xl  text-center">வெளி நோயாளர் சேவை</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Unified features ribbon */}
            <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl sm:text-2xl  text-center mb-8 text-gray-950">நம்முடைய ஒருங்கிணைந்த உறுதி</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl">தரமான சிகிச்சை</h4>
                  <p className="text-lg sm:text-xl  text-gray-950 mt-1">மிக உயர்ந்த தரச்சான்றுகளுக்கு ஏற்ப மருத்துவ சேவைகள்</p>
                </div>

                <div className="text-center">
                  <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl">சமூக கவனம்</h4>
                  <p className="text-lg sm:text-xl  text-gray-950 mt-1">கோவளத்தின் அனைத்து மக்களுக்கும் இரக்கம் மற்றும் அக்கறையுடன் சேவை</p>
                </div>

                <div className="text-center">
                  <div className="bg-amber-100 w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl">விரைவான பதில்</h4>
                  <p className="text-lg sm:text-xl  text-gray-950 mt-1">அவசர நேரங்களில் உடனடி சேவைகள்</p>
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
                <h2 className="text-2xl sm:text-3xl text-amber-600 mb-4">பொது கழிவறை வசதி</h2>
                <div className="text-amber-600 text-xl sm:text-2xl  mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  கோவளம் கடற்கரை,சென்னை
                </div>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">
                  கோவளம், பிரபலமான சுற்றுலாத்தளம் ஆகும் என்பதால், பார்வையாளர்களுக்கு சுயவசதி மற்றும் சுகாதார நிலைமையை பராமரிக்க பொதுக் கழிவறை வசதி தேவைப்படுகிறது. கோவளம் ஊராட்சி இந்த பொதுக் கழிவறைகளை கட்டியமைத்துள்ளது என்பது பாராட்டத்தக்க முன்னெடுப்பாகும்.
                </p>
                <div className="bg-amber-50 px-4 py-3 rounded-lg border border-amber-100 inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg sm:text-xl  text-amber-700">கட்டிடம் தேதி அக்டோபர் 2, 2022</span>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl sm:text-2xl text-center text-amber-600 mb-8">வசதியின் முக்கிய நன்மைகள்</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Benefit 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl  text-amber-600 mb-2">சுகாதாரம் மற்றும் பராமரிப்பு</h4>
                  <p className="text-lg sm:text-xl text-gray-950">பரப்பில் சுத்தத்தன்மையை காக்க உதவுகிறது. நோய்கள் பரவுதல் தடுப்பு.</p>
                </div>

                {/* Benefit 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl text-amber-600 mb-2">சுற்றுலாப் பார்வையாளர்களுக்கு வசதிகள்</h4>
                  <p className="text-lg sm:text-xl text-gray-950">பார்வையாளர்கள் தங்கள் தளர்ச்சி நேரத்தை தடங்கமின்றி பயன்பெற இவை அடிப்படை வசதிகளை வழங்குகின்றன.</p>
                </div>

                {/* Benefit 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl text-amber-600 mb-2">பொருளாதார ஊக்குவிப்புகள்</h4>
                  <p className="text-lg sm:text-xl text-gray-950">சுற்றுலாப் பயண அனுபவத்தை மேம்படுத்துவதன் மூலம் அதிகமான வருகைகள் கிடைக்கும்.உள்ளூர் வருமானம் அதிகரிக்கும்.</p>
                </div>
              </div>

              {/* Additional Note */}
              <div className="mt-10 bg-stone-50 border-l-4 border-amber-500 rounded-r-lg p-4">
                <p className="text-lg sm:text-xl text-amber-500 ">இதன் மூலம் ஊராட்சைக்கு தொடர்புடைய ஓர் பங்கு வருவாய் (ஓஎஸ்ஆர்) வசதி உருவாகிறது.</p>
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
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">பொதுக் கழிவறைகள்</h6>
            </button>

            {/* Child Development Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('toilet',2)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">பள்ளி கழிவறைகள்</h6>
            </button>

            {/* Nutrition Programs Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('toilet',3)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">ஸ்மார்ட் கழிவறைகள்</h6>
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
              <h1 className="text-2xl sm:text-3xl text-amber-600 mb-4">பொது தபால் அலுவலகம் – கோவளம்</h1>
              <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Top Banner */}
              <div className="bg-stone-600 p-6 text-white">
                <h2 className="text-xl sm:text-2xl text-white">கோவளம் தபால் அலுவலகம் </h2>
                <p className="text-lg sm:text-xl text-white">அஞ்சல் குறியீடு: <span className=" bg-stone-400 px-2 py-1 rounded">603112</span></p>
                <p className="text-lg sm:text-xl text-white mt-2">காஞ்சிபுரம் மாவட்டம், தமிழ்நாடு, இந்தியா</p>
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
                    <h3 className="text-xl sm:text-2xl text-amber-600">கோவளம் தபால் அலுவலகத்தின் வரலாறு</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950 leading-relaxed">
                    கோவளம் தபால் அலுவலகம் பிரிட்டிஷ் காலனித்துவ காலம் தொடக்கம் வரலாற்றைப் பெற்றுள்ளது.அந்தக் காலத்தில் இந்திய அஞ்சல் துறை உருவாக்கப்பட்டு, நாடு முழுவதும் தொடர்பை எளிதாக்க பல தபால் அலுவலகங்கள் நிறுவப்பட்டன.
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
                    <h3 className="text-xl sm:text-2xl text-amber-600">வழங்கப்படும் சேவைகள்</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">அஞ்சல் சேவைகள்:</span>கடிதம், பார்சல் விநியோகம், பணவரவு, அஞ்சல் வரவு.</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">சேமிப்பு திட்டங்கள்:</span>தபால் சேமிப்பு கணக்குகள், தேசிய சேமிப்பு சான்றிதழ், பொது பங்களிப்பு நிதி (PPF).</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">காப்பீட்டு சேவைகள்:</span>தபால் வாழ் காப்பீடு, கிராமப்புற வாழ் காப்பீடு.</p>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      </div>
                      <p className="text-lg sm:text-xl ml-3 text-gray-950"><span className="">பில் கட்டணம் சேவைகள்:</span>மின்சாரம், குடிநீர், தொலைபேசி பில்களை செலுத்துதல்.</p>
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
                    <span className="text-lg sm:text-xl  text-gray-500">கோவளம் தபால் அலுவலகம் காலனித்துவ காலம் முதல் இன்றுவரை மக்களுக்கு சிறப்பான சேவையை வழங்கி வருகிறது.</span>
                  </div>
                  <div className="text-lg sm:text-xl  text-gray-500">
                    #இந்தியஅஞ்சல்
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="PublicHotels" className="content hidden bg-gradient-to-b from-stone-50 to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[80vw] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl text-amber-600 mb-4">பொது ஹோட்டல்கள் மற்றும் உணவகங்கள் – கோவளம்</h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>

            {/* Luxury Hotels Section */}
            <div className="mb-20">
              <h3 className="text-xl sm:text-2xl text-amber-600 mb-8 pl-2 border-l-4 border-amber-500">ஆடம்பர ஹோட்டல்கள்</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Taj Fisherman's Cove */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover">
                  <div className="h-48 bg-cover bg-center flex items-center justify-center" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621974.jpg')" }}>
                    <span className="text-white text-xl  text-center px-4">தாஜ் ஃபிஷர்மேன்ஸ் கோவ்</span>
                  </div>
                  <div className="p-6">
                    <p className="text-lg sm:text-xl text-gray-950 mb-4">5 நட்சத்திர ரிசார்ட், தனியார் கடற்கரை, ஸ்பா மற்றும் உயர்தர உணவகங்களுடன், லக்ஷுரி அறைகள், சுவீட்கள் மற்றும் வில்லாக்களுடன் உலகத்தர வசதிகள் கொண்டது.                      .</p>
                    <div className="text-lg sm:text-xl flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-lg sm:text-xl  ">5 நட்சத்திர</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-lg sm:text-xl  ">தனியார் கடற்கரை</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-lg sm:text-xl  ">ஸ்பா</span>
                    </div>
                  </div>
                </div>

                {/* Vivanta by Taj */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover">
                  <div className="h-48 bg-cover bg-center flex items-center justify-center" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621975.jpg')" }}>
                    <span className="text-white text-xl  text-center px-4">விவான்தா பை தாஜ் – ஃபிஷர்மேன்ஸ் கோவ்</span>
                  </div>
                  <div className="p-6">
                    <p className="text-lg sm:text-xl text-gray-950 mb-4">தாஜ் குழுமத்தின் மற்றொரு ஆடம்பர ஹோட்டல், நவீன வடிவமைப்புள்ள அறைகள் மற்றும் பல்வேறு உணவுப் பரிமாறுதல் மற்றும் பொழுதுபோக்கு வசதிகள் கொண்டது.</p>
                    <div className="text-lg sm:text-xl flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-lg sm:text-xl">லக்ஷுரி</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-lg sm:text-xl">பலவகை உணவகங்கள்</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-lg sm:text-xl">செயற்பாடுகள்</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurants and Resorts Section */}
            <div>
              <h3 className="text-xl sm:text-2xl text-amber-600 mb-8 pl-2 border-l-4 border-amber-500">உணவகங்கள் மற்றும் ரிசார்ட்கள்</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* The Bay View */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621988.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">ி பே வியூ</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-lg sm:text-xl text-gray-950">தாஜ் ஃபிஷர்மேன்ஸ் கோவ் ரிசார்ட்டின் கடல் உணவகம் வளைகுடா காட்சியுடன் சிறந்த கடல் உணவு வகைகள்</p>
                    <div className="text-lg sm:text-xl mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                      <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs">Fine Dining</span>
                    </div>
                  </div>
                </div>

                {/* Bella Vagues */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621991.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">பெல்லா வேக்ஸ்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">அமைதியான சூழலில் சுவையான உணவு வழங்கும் உணவகம்</p>
                  </div>
                </div>

                {/* Sea View Inn */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/h11.png')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">சி வியூ இன்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை உணவகம், புதிய கடல் உணவு, உள்ளூர் உணவுகள், குளிர்ந்த பானங்கள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Local Cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Sea La Vie */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621996.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">சி லா வீ</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">நவீன உணவகம் பன்னாட்டு உணவுகள், காக்டெயில்கள், கடற்காட்சிகள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">International</span>
                      <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Cocktails</span>
                    </div>
                  </div>
                </div>

                {/* Coastal Paradise */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621995.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">கோஸ்டல் பாரடைஸ்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை உணவகம் இந்திய பாரம்பரிய உணவு, கடல் உணவு, உள்ளூர் சிறப்புகள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Ocean Beach Resort */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621994.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">ஓஷன் பீச் ரிசார்ட்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை ரிசார்ட்.ன்னாட்டு உணவுகள், கடல் உணவு, குளிர்ந்த பானங்கள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Resort</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Le Grace Beach View Resort */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621989.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">லே கிரேஸ் பீச் வியூ ரிசார்ட்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை ரிசார்ட் கடற்காட்சி உணவருந்தும் மையம், பல்வேறு சுவை உணவுகள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Resort</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Multi-cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Raj Beach Resort */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621986.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">ராஜ் பீச் ரிசார்ட்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">இந்திய உணவுகளும், கடல் உணவுகளும், உள்ளூர் சிறப்புகளும்.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Kites-Covelong */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/h11.png')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">கைட்ஸ் – கோவேலாங்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை உணவகம் மற்றும் ரிசார்ட் பன்னாட்டு உணவு, கடல் உணவு, குளிர்ந்த பானங்கள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">International</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Mervue Villa */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621987.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">மெர்வ்யூ வில்லா</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை வில்லா உணவகம் இந்திய பாரம்பரிய உணவு, கடல் உணவு, உள்ளூர் சிறப்புகள்.</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs">Indian Cuisine</span>
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                    </div>
                  </div>
                </div>

                {/* Iqbal Beach House */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621990.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">இக்பால் பீச் ஹவுஸ்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை உணவகம் புதிய கடல் உணவு, உள்ளூர் உணவு, குளிர்ந்த பானங்கள்</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Seafood</span>
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs">Local Cuisine</span>
                    </div>
                  </div>
                </div>

                {/* Green Garden */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  <div className="h-40 bg-cover bg-center flex items-end p-4" style={{ "backgroundImage": "url('/assets/images/infrastructure/hotels/6248982738153621993.jpg')" }}>
                    <h4 className="text-lg text-white bg-black bg-opacity-50 p-2 rounded">கிரீன் கார்டன்</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-950 text-lg sm:text-xl">கடற்கரை உணவகம் இந்திய பாரம்பரிய உணவு, கடல் உணவு, உள்ளூர் சிறப்புகள்</p>
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
                <p>
                  கோவளத்தில் பல்வேறு ஹோட்டல்கள், உணவகங்கள் மற்றும் ரிசார்ட்கள் உள்ளன. பயணிகள் தங்கள் செலவுத்திறன் மற்றும் விருப்பத்திற்கு ஏற்ப இதில் தெரிவுசெய்து மகிழக்கூடிய அனுபவத்தை பெறலாம். சமூகச் சந்திப்புகள் மற்றும் சமூக நிகழ்வுகளுக்கான நவீன இடங்களாகச் சந்திப்பு மண்டபங்கள் செயல்படுகின்றன. சமூக முன்னேற்றம், சமூக நலன் மற்றும் பொதுமக்கள் பயன்பாட்டிற்காக கோவளம் பஞ்சாயத்து, STS அறக்கட்டளையுடன் இணைந்து நவீன சந்திப்பு மண்டபத்தை நிறுவியுள்ளது. இந்த ஒத்துழைப்பு, சமூக முன்னேற்றம் மற்றும் நலனுக்கான கோவளம் பஞ்சாயத்தின் அர்ப்பணிப்பை வெளிப்படுத்துகிறது.
                </p>
              </div>
            </div>
          </div>
        </section>

        <style>{inlineStyles[4]}</style>

        <div id="E_Sevai" className="content hidden">
          <section className="max-w-8xl mx-auto my-8 section">
            <h2 className="text-2xl sm:text-3xl  text-amber-600 mb-4 text-center">இ-சேவை சேவைகள்</h2>
          </section>

          <div id="certificatesListContainer" className="flex flex-wrap gap-6 max-w-8xl p-6">
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-1" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-1')", event)}>சாதிச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-2" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-2')", event)}>வருமானச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-3" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-3')", event)}>இருப்பிடச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-4" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-4')", event)}>பிறப்பிடச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-5" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-5')", event)}>இதர பிற்படுத்தப்பட்ட வகுப்பினர் சான்றிதழ் (OBC)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-6" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-6')", event)}>முதல் பட்டதாரி சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-7" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-7')", event)}>தமிழ் வழி கல்விச் சான்றிதழ் (PSTM)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-8" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-8')", event)}>விதவைச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-9" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-9')", event)}>வாரிசுச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-10" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-10')", event)}>ஆண் குழந்தை இல்லை சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-11" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-11')", event)}>ஆதரவற்ற விதவைச் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-12" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-12')", event)}>திருமணமாகாத சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-13" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-13')", event)}>இந்திரா காந்தி தேசிய முதியோர் ஓய்வூதியம் (IGNOPS)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-14" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-14')", event)}>மாற்றுத்திறனாளி ஓய்வூதியச் சான்றிதழ் (DAPS)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-15" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-15')", event)}>கைவிடப்பட்ட பெண் சான்றிதழ்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-16" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-16')", event)}>மீனவர் நிவாரண உதவி (தடை காலம்)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-17" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-17')", event)}>மீனவர் சிறப்பு உதவித்தொகை புதுப்பித்தல்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-18" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-18')", event)}>போக்குவரத்து காவல்</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-19" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-19')", event)}>காவல் சரிபார்ப்பு (NOC)</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-20" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-20')", event)}>நுகர்வோர் பாதுகாப்புத் துறை</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-21" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-21')", event)}>வேலைவாய்ப்பு மற்றும் பயிற்சித் துறை</a>
            </div>
            <div className="certificate-item bg-slate-50 shadow-lg p-4 border-b-2 border border-amber-400 rounded-lg">
              <a href="#Certificate-22" className="text-gray-950" onClick={(event) => executeInlineAction("openServiceModal('Certificate-22')", event)}>ஆதார் முகவரி மாற்றம்</a>
            </div>

          </div>
          <div style={{ "position": "fixed", "bottom": "40px", "right": "20px", "display": "flex", "gap": "15px" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Tax_Management',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Water_Management',this)", event)}>Next</a>
          </div>
        </div>

        <div id="Tax_Management" className="content hidden rounded-xl p-6 w-full max-w-full">
          <h1 className="text-2xl sm:text-3xl text-center text-amber-600 mb-6">வரி மேலாண்மை</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column: List of Taxes */}
            <div className="bg-slate-50 p-4 rounded-xl border border-amber-100">
              <h2 className="text-xl sm:text-2xl text-amber-700 mb-5 pb-2 border-b border-amber-200">வரி வகைகள்</h2>
              <ul className="space-y-2 text-gray-950">
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    சொத்து வரி
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    தொழில்முறை வரி
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    தண்ணீர் வரி
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-400 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    வணிக உரிமம்
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-300 mr-3"></div>
                  <a href="https://vptax.tnrd.tn.gov.in/" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    வரியில்லா வசூல்
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
              <h2 className="text-xl sm:text-2xl text-amber-700 mb-5 pb-2 border-b border-amber-200">அனுமதிகள்</h2>
              <ul className="space-y-2 text-gray-950 flex-grow">
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://onlineppa.tn.gov.in/SWP-web" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    கட்டிடம் அனுமதி
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                  <a href="https://onlineppa.tn.gov.in/SWP-web" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    நிலம் ஒழுங்குபடுத்தல்
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="flex items-center p-3 rounded-lg transition-all duration-200 group-hover:bg-amber-50 group-hover:shadow-sm border border-transparent group-hover:border-amber-200">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-3"></div>
                  <a href="https://onlineppa.tn.gov.in/SWP-web" className="w-full h-full block text-lg text-left" onClick={(event) => executeInlineAction("window.location.href=this.href;", event)}>
                    தளவமைப்பு அனுமதி
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
              </ul>
              {/* Images at the bottom */}
              <div className="grid grid-cols-2 gap-4 mt-auto p-4 mt-16">
                <img loading="lazy" decoding="async" src="/assets/images/taxs/cert6.png" className="rounded-lg shadow" alt="அனுமதி படம் 1" />
                <img loading="lazy" decoding="async" src="/assets/images/taxs/t7.jpg" className="rounded-lg shadow" alt="அனுமதி படம் 2" />
                <img loading="lazy" decoding="async" src="/assets/images/taxs/t21.jpg" className="rounded-lg shadow" alt="அனுமதி படம் 3" />
                <img loading="lazy" decoding="async" src="/assets/images/taxs/t6.jpg" className="rounded-lg shadow" alt="அனுமதி படம் 4" />
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
          <h1 className="text-2xl sm:text-3xl text-amber-600 mb-8 text-center" data-aos="animate-fade-in">நீர் மேலாண்மை</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* OHT Water */}
            <button
              onClick={(event) => executeInlineAction("showContent('OHTWaterProcess'); showTableta('OHT'); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 0 512 512" fill="currentColor">
                <path d="M241.7 3.4c9-4.5 19.6-4.5 28.6 0l160 80c15.8 7.9 22.2 27.1 14.3 42.9C439 137.5 427.7 144 416 144l0 80c0 17.7-14.3 32-32 32l-4.9 0 32 192 68.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-95.5 0c-.4 0-.8 0-1.1 0l-254.8 0c-.4 0-.8 0-1.1 0L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 32-192-4.9 0c-17.7 0-32-14.3-32-32l0-80c-11.7 0-23-6.5-28.6-17.7c-7.9-15.8-1.5-35 14.3-42.9l160-80zM314.5 448L256 399.2 197.5 448l117 0zM197.8 256l-4.7 28.3L256 336.8l62.9-52.5L314.2 256l-116.5 0zm-13.9 83.2l-11.2 67L218.5 368l-34.6-28.8zM293.5 368l45.8 38.1-11.2-67L293.5 368zM176 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0z" /></svg>
              <h6 className="text-lg sm:text-xl">OHT நீர்</h6>
            </button>

            {/* Well Water */}
            <button
              onClick={(event) => executeInlineAction("showContent('WellWaterProcess'); hideTable();", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 0 576 512" fill="currentColor">
                <path d="M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3l0 1.7c0 53-43 96-96 96s-96-43-96-96l0-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" /></svg>
              <h6 className="text-lg sm:text-xl">கிணற்று நீர்</h6>
            </button>

            {/* Hand Pump */}
            <button
              onClick={(event) => executeInlineAction("showContent('HandPumpWaterProcess');hideTable();", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 " height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-280h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM40-160v-320h80v40h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360v-40h80v320h-80v-40h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120v40H40Zm80-120v-80 80Zm720-320v-80 80ZM480-480Zm0 120q-33 0-56.5-23.5T400-440q0-23 9.5-45.5T446-550l34-50 34 50q27 42 36.5 64.5T560-440q0 33-23.5 56.5T480-360Z" /></svg>
              <h6 className="text-lg sm:text-xl">கை பம்ப்</h6>
            </button>

            {/* Lorry Water */}
            <button
              onClick={(event) => executeInlineAction("showContent('LorryWaterProcess'); hideTable(); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 -960 960 960" fill="currentColor"><path d="M280-120q-50 0-85-35t-35-85h-40q-33 0-56.5-23.5T40-320v-200h440v-160q0-33 23.5-56.5T560-760h80v-40q0-17 11.5-28.5T680-840h40q17 0 28.5 11.5T760-800v40h22q26 0 47 15t29 40l58 172q2 6 3 12.5t1 13.5v267H800q0 50-35 85t-85 35q-50 0-85-35t-35-85H400q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T320-240q0-17-11.5-28.5T280-280q-17 0-28.5 11.5T240-240q0 17 11.5 28.5T280-200Zm400 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-440v120h71q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h111v-120H120Zm440 120h31q17-19 40-29.5t49-10.5q26 0 49 10.5t40 29.5h71v-120H560v120Zm0-200h276l-54-160H560v160ZM40-560v-60h40v-80H40v-60h400v60h-40v80h40v60H40Zm100-60h70v-80h-70v80Zm130 0h70v-80h-70v80Zm210 180H120h360Zm80 0h280-280Z" /></svg>
              <h6 className="text-lg sm:text-xl">லாரி நீர்</h6>
            </button>

            {/* OHT Cleaning */}
            <button
              onClick={(event) => executeInlineAction("showContent('OHTCleaningWaterProcess');hideTable(); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M680-640q-25 0-42.5-17.5T620-700q0-17 17-45t43-55q26 27 43 55t17 45q0 25-17.5 42.5T680-640Zm100 280q-42 0-71-29t-29-71q0-35 31-86.5t69-93.5q38 42 69 93.5t31 86.5q0 42-29 71t-71 29ZM360-240h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80ZM240-80q-33 0-56.5-23.5T160-160v-320q0-90 57-156t143-80v-84h-80v-80h240q34 0 64 10.5t56 29.5l-58 58q-14-8-29.5-13t-32.5-5h-80v84q86 14 143 80t57 156v320q0 33-23.5 56.5T560-80H240Zm0-80h320v-320q0-66-47-113t-113-47q-66 0-113 47t-47 113v320Zm0 0h320-320Z" />
              </svg>
              <h6 className="text-lg sm:text-xl">OHT சுத்தம்</h6>
            </button>

            {/* Water Chlorination */}
            <button
              onClick={(event) => executeInlineAction("showContent('WaterChlorinationWaterProcess');hideTable(); ", event)}
              className="bg-white text-amber-500  px-4 py-3 rounded-lg shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 hover:text-amber-800 transition-all duration-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-500" viewBox="0 -960 960 960" fill="currentColor">
                <path fillRule="evenodd" d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" clipRule="evenodd" />
              </svg>
              <h6 className="text-lg sm:text-xl">நீர் குளோரினேஷன்</h6>
            </button>
          </div>

          <div style={{ "position": "fixed", "bottom": "0px", "right": "20px", "display": "flex", "gap": "15px" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('E_Sevai',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Garbage_Management',this)", event)}>Next</a>
          </div>

          <div id="OHTWaterProcess" className="hidden transition-all duration-500">
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl text-amber-800 mb-2">OHT தண்ணீர் விநியோக செயல்முறை</h1>
                <p className="text-lg sm:text-xl text-gray-950">தூய்மையான குடிநீரை திறமையாக வழங்குவது எப்படி</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Photo 1 - Water Sourcing */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/well-1.jpg" alt="தண்ணீர் ஆதாரம்" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                      <h3 className="text-xl sm:text-2xl text-gray-950">தண்ணீர் ஆதாரம்</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">தண்ணீர் தையூர் என்ற அருகிலுள்ள நீர் மூலத்திலிருந்து பெறப்படுகிறது.</p>
                  </div>
                </div>

                {/* Photo 2 - Storage in sump */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/beach/water source.jpg" alt="சம்பில் சேமிப்பு" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                      <h3 className="text-xl sm:text-2xl text-gray-950">சம்பில் சேமிப்பு</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">இந்த தண்ணீர் ஒரு சம்பில் (தாழ்வான இடத்தில் அமைந்த நீர்தொட்டி) தற்காலிகமாக சேமிக்கப்படுகிறது.</p>
                  </div>
                </div>

                {/* Photo 3 - Pumping to OHT */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/OHT-1.jpg" alt="OHT-க்கு பம்ப் செய்தல்" className="w-full h-full object-fill" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                      <h3 className="text-xl sm:text-2xl text-gray-950">மேல்நிலை நீர்த்தேக்கத் தொட்டிக்கு (OHT) பம்ப் செய்யல்</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">சம்பில் இருந்து தண்ணீர் மேல்நிலை நீர்த்தேக்கத் தொட்டிக்கு (OHT) பம்ப் மூலம் ஏற்றி வைக்கப்படுகிறது.</p>
                  </div>
                </div>

                {/* Photo 4 - Water Distribution */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-100 flex items-center justify-center">
                    <img loading="lazy" decoding="async" src="/assets/images/OHTCleaning/10.jpg" alt="தண்ணீர் விநியோகம்" className="w-full h-full object-fill" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                      <h3 className="text-xl sm:text-2xl text-gray-950">தண்ணீர் விநியோகம்</h3>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-950">OHT-இல் இருந்து தண்ணீர் பெருமளவில் பொதுமக்களுக்கு விநியோகிக்கப்படுகிறது, பெரும்பாலும் ஈர்ப்பு விசை மூலம்.</p>
                  </div>
                </div>
              </div>

              {/* Process Flow */}
              <div className="bg-amber-50 rounded-lg p-6 border border-amber-100">
                <h2 className="text-xl sm:text-2xl text-amber-800 mb-3">செயல்முறை ஓட்டம் (ப்ராசஸ் ப்ளோ)</h2>
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-water"></i>
                    </div>
                    <span className="text-lg sm:text-xl">தையூர் (மூலம்)</span>
                  </div>
                  <div className="hidden sm:block text-amber-600 mx-2">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-database"></i>
                    </div>
                    <span className="text-lg sm:text-xl">சம்ப்</span>
                  </div>
                  <div className="hidden sm:block text-amber-600 mx-2">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col items-center mb-4 sm:mb-0">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-gas-pump"></i>
                    </div>
                    <span className="text-lg sm:text-xl">பம்பிங்</span>
                  </div>
                  <div className="hidden sm:block text-amber-600 mx-2">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white mb-2">
                      <i className="fas fa-tint"></i>
                    </div>
                    <span className="text-lg sm:text-xl">மேல்நிலை நீர்த்தேக்கத் தொட்டி (OHT)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>




          <div id="tableOHTContainer" className="place-items-center gap-6 mt-10"></div>

          <div id="WellWaterProcess" className="hidden transition-all duration-500">
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-2xl sm:text-3xl text-amber-700 mb-3">கிணற்றிலிருந்து தண்ணீர் விநியோக செயல்முறை</h1>
                <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
                <p className="text-lg sm:text-xl text-gray-950 max-w-2xl mx-auto">
                  தண்ணீர் நிலத்தடத்தில் இருந்து உங்கள் குடிநீர் குழாய்வரை - எங்கள் நிலைத்தன்மை கொண்ட விநியோக முறை
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                {/* Process Step 1 - Well */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-well"></i></span>
                    <img loading="lazy" decoding="async" src="https://t4.ftcdn.net/jpg/00/67/46/35/360_F_67463530_W8YgA8CtpXHRXJ4btP6xje4B0MvVkI87.jpg" alt="Water well" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg sm:text-xl">1</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">தண்ணீர் ஆதாரம் – கிணறு(தொட்டி)</h3>
                    <p className="text-lg sm:text-xl text-gray-950">தண்ணீர் நிலத்தடத்திலிருந்து கிணற்றின் மூலம் பெறப்படுகிறது. இது இயற்கையான நீர் மூலமாகும்.</p>
                  </div>
                </div>

                {/* Process Step 2 - Sump */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-water-tower"></i></span>
                    <img loading="lazy" decoding="async" src="https://heartlandinspections.com/wp-content/uploads/2022/10/new-sump-pump.webp" alt="Water sump tank" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg sm:text-xl">2</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">சம்ப் – தற்காலிக சேமிப்பு தொட்டி</h3>
                    <p className="text-lg sm:text-xl text-gray-950">கிணற்றிலிருந்து பம்ப் செய்யப்படும் தண்ணீர் ஒரு பெரிய சம்ப் (தண்ணீர் சேமிப்பு தொட்டி) இல் சேமிக்கப்படுகிறது.</p>
                  </div>
                </div>

                {/* Process Step 3 - Distribution */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-network-wired"></i></span>
                    <img loading="lazy" decoding="async" src="https://damassets.autodesk.net/content/dam/autodesk/draftr/25657/2-1216x760-2.png" alt="Water distribution pipes" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg sm:text-xl">3</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">விநியோகம் – குழாய் குழுவுகள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">சம்பிலிருந்து தண்ணீர் குழாய்களின் வலையமைப்பின் மூலம் வீடுகளுக்கு விநியோகிக்கப்படுகிறது.</p>
                  </div>
                </div>

                {/* Process Step 4 - Tap */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-faucet"></i></span>
                    <img loading="lazy" decoding="async" src="/assets/images/beach/tap water.jpg" alt="Clean water tap" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg sm:text-xl">4</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2"> உபயோகிப்பு – குழாய் / டாப்பு</h3>
                    <p className="text-lg sm:text-xl text-gray-950">இறுதியாக, தண்ணீர் வீடுகளின் குழாய்கள் வழியாக மக்கள் பயன்படுத்தும் தூய்மையான நீராக கிடைக்கிறது</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 mb-10 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-amber-600 text-2xl sm:text-3xl mb-2">1</div>
                <h3 className="text-lg sm:text-xl  text-gray-950">தண்ணீர் மூலம்</h3>
                <p className="text-gray-500 text-base sm:text-sm">நிலையான கிணறு– இயற்கையான ஆதாரம்</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-amber-600 text-2xl sm:text-3xl mb-2">100%</div>
                <h3 className="text-lg sm:text-xl  text-gray-950">தூய்மை</h3>
                <p className="text-gray-500 text-base sm:text-sm">100% தூய்மை – தர உறுதி</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-amber-600 text-2xl sm:text-3xl mb-2">24/7</div>
                <h3 className="text-lg sm:text-xl  text-gray-950">வழங்கல் நேரம்</h3>
                <p className="text-gray-500 text-base sm:text-sm">24/7 – நம்பிக்கையான தொடர்ச்சியான விநியோகம்</p>
              </div>
            </div>


            {/* Visual Process Flow */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-amber-100 mb-12">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-amber-100 mb-12">
                <h2 className="text-2xl  text-amber-800 mb-6 text-center">தண்ணீர் பயணத்தின் காணொளி (Visualization)</h2>
                <div className="relative">
                  {/* Process Line */}
                  <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-1 bg-amber-200 transform -translate-y-1/2 z-0"></div>

                  <div className="relative z-10 grid grid-cols-4 gap-4">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-water text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">கிணறு(தொட்டி)</span>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-tint text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">சம்பு (சேமிப்பு)</span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-network-wired text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">குழாய் வலையமைப்பு</span>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-3 shadow-lg">
                        <i className="fas fa-faucet text-2xl"></i>
                      </div>
                      <span className="text-base sm:text-sm  text-gray-950 text-center">குழாய் வலையமைப்பு</span>
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
                <h1 className="text-2xl sm:text-3xl text-amber-800 mb-2">கடற்கரைப் பகுதியில் உள்ள கையிணைத் தண்ணீர் பம்புகள் (Hand Pumps)</h1>
                <p className="text-lg sm:text-xl text-gray-950">மொத்த கையினைப் பம்புகள்: 16 | இயங்குகிறவை: 16 | பழுதானவை: 0</p>
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center mb-8">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/1.JPG" className="mx-auto" />
                  <div className="p-3 bg-white text-center">
                    <p className="text-lg sm:text-xl text-gray-950">கடற்கரைப் பகுதி (Beach Area)</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/3.JPG" className="mx-auto" />
                  <div className="p-3 bg-white text-center">
                    <p className="text-lg sm:text-xl text-gray-950">அன்சாரி நகர் (Ansari Nagar)</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/handPump/4.JPG" className="mx-auto" />
                  <div className="p-3 bg-white text-center">
                    <p className="text-lg sm:text-xl text-gray-950">செம்மஞ்சேரி குப்பம் கடற்கரை சாலை (Semmancherry kuppam Beach Road)</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Report Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-4 bg-amber-700 text-white">
                <h2 className="text-xl sm:text-2xl ">🔍 கையிணைப் பம்புகள் – நிலை விவரங்கள் (Hand Pump Status Overview)</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-lg sm:text-xl  text-gray-950 uppercase tracking-wider">எண்</th>
                      <th className="px-6 py-3 text-left text-lg sm:text-xl  text-gray-950 uppercase tracking-wider"> வார்டு </th>
                      <th className="px-6 py-3 text-left text-lg sm:text-xl  text-gray-950 uppercase tracking-wider">இடம்</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">குன்றுகாடு மரைன் போலீஸ் ஸ்டேஷன்</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">மாதா கோவில் சுடுகாடு</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">கிரிக்கெட் மைதானம்</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">டீஜேய் டாங்க் அருகில்</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">அனிஃபா வீடு அருகில்</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">6</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">கார்மேல் மாதா ஸ்டோர் அருகில்</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">துலுக்கானத்தம்மன் கோவில் உள்ளே</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">8</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">சுரேந்தர் வீடு அருகில்</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">9</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">கைலாசநாதர் கோவில் தெரு</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">10</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">அன்சாரி நகர் (பாபுபாய் எதிரில்)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">11</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">5</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">கண்ணியம்மன் கோவில் தெரு (ஷாபி வீடு அருகில்)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">12</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">7</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">சர்ஃப் டர்ஃப் (சுடுகாடு உள்ளே)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">13</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">8</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">முஸ்லிம் சுனாமி நகர்</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">14</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">8</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">செம்மஞ்சேரி குப்பம் (OHT தொட்டி அருகில்)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">15</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">9</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">பட்ரோஜா வீடு அருகில்</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">16</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">9</td>
                      <td className="px-6 py-4 whitespace-nowrap text-lg sm:text-xl text-gray-950">செம்மஞ்சேரி குப்பம் பீச் சாலை</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


            {/* Summary Section */}
            <div className="bg-amber-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl text-amber-800 mb-4">சுருக்கம்  (Summary)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg sm:text-xl text-gray-500 mb-1">🔢 மொத்த கையிணைப் பம்புகள்: 16</h4>
                  <p className="text-2xl text-amber-700">16</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg sm:text-xl text-gray-500 mb-1">✅ இயங்கும் பம்புகள்: 16</h4>
                  <p className="text-2xl text-green-600">16</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg sm:text-xl text-gray-500 mb-1">❌ பழுதான பம்புகள்: 0</h4>
                  <p className="text-2xl text-red-600">0</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-lg sm:text-xl text-gray-500 mt-8">
              <p className="mt-1">சமீபத்திய புதுப்பிப்பு: ஏப்ரல் 2025</p>
            </footer>

          </div>
        </div>

        <div id="LorryWaterProcess" className="hidden transition-all duration-500">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl  text-amber-800 mb-2">லாரி தண்ணீர் விநியோக முயற்சி</h1>
              <p className="text-lg sm:text-xl text-gray-950">📦 தண்ணீர் விநியோக செயல்முறை:</p>
            </header>

            {/* Hero Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/lorryWater/1.jpg" alt="Water lorry distribution" className="w-full h-48 object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">🚛 தண்ணீர் லாரி விநியோகம்</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/lorryWater/2.jpg" alt="Residents collecting water" className="w-full h-48 object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">👥 குடிமக்கள் தண்ணீர் பெறுதல்</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/lorryWater/3.jpg" alt="Water lorry filling" className="w-full h-48 object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">🏞️ தண்ணீர் மூலத்தில் லாரி நிரப்புதல்</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/lorryWater/1.jpg" alt="Water distribution point" className="w-full h-48 object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">📍 ஒழுங்கமைக்கப்பட்ட விநியோக மையம்</p>
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
                  <h2 className="text-xl sm:text-2xl  text-gray-950">🌞 கோடை தண்ணீர் தீர்வு - கோவளம் பஞ்சாயத்து நடவடிக்கை</h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-950">கோவளம் பஞ்சாயத்து, கோடை காலங்களில் நிலையான தண்ணீர் ஆதாரங்கள் குறையும் போது, மக்கள் தண்ணீர் பற்றாக்குறை எதிர்கொள்ள, குடிமக்களுக்கு நம்பகமான தூய்மையான குடிநீரை வழங்க லாரி மூலம் நீர் விநியோகத்தை ஏற்பாடு செய்தது.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl  text-gray-950">🔄 மாற்றுத் தண்ணீர் மூலம்</h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-950">தையூர் மூலத்திலிருந்து குடிநீர் கிடைப்பதில் சிக்கல் ஏற்படுவதால், கோவளம் பஞ்சாயத்து, மக்கள் குடிநீர் குறைபாடின்றி பெற லாரி மூலம் நீர் விநியோகம் செய்தது.
                  இந்த முன் எச்சரிக்கை நடவடிக்கை, பாதிக்கப்படக்கூடிய பகுதிகளில் தண்ணீர் பற்றாக்குறையைத் தவிர்க்க உதவியது.</p>
              </div>
            </div>
          </div>
        </div>


        <div id="OHTCleaningWaterProcess" className="hidden transition-all duration-500">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
              <h1 className="text-3xl text-amber-800 mb-2">OHT சுத்தம் செய்தல் திட்டம்</h1>
              <p className="text-lg sm:text-xl text-gray-950">தொடர்ந்த பராமரிப்பின் மூலம் தூய்மையான குடிநீரை உறுதி செய்தல்</p>
            </header>

            {/* Hero Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/C-1.JPG" alt="OHT தொட்டி வெளியே" className="w-full h-auto object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">OHT தொட்டி வெளியம்</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/C-3.JPG" alt="சுத்தம் செயல்முறை" className="w-full h-auto object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">சுத்தம் செய்யும் செயல்முறை</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/C-4.JPG" alt="தர பரிசோதனை" className="w-full h-[490px] object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">தர பரிசோதனை</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-6.JPG" alt="சாதனங்கள்" className="w-full h-[490px] object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">பயன்படும் உபகரணங்கள்</p>
                </div>
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
                <h2 className="text-xl text-gray-950">அடிக்கடி சுத்தம் செய்யும் அவகாசம்</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-950">OHT தொட்டிகள் ஒவ்வொரு 15 நாட்களுக்கும் ஒருமுறை சுத்தம் செய்யப்படுகிறது. இது தொட்டிகளில் தேங்கும் கழிவுகள், பசுங்கொத்துகள் மற்றும் பிற மாசுகளை நீக்குவதற்காக செய்யப்படுகிறது. இந்த நடைமுறை, அனைத்து குடிமக்களுக்கும் தூய்மை மற்றும் தரமான குடிநீரை உறுதி செய்கிறது.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h2 className="text-xl text-gray-950">கைமுறை சுத்தம் செய்யும் நடைமுறை</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-950">பயிற்சி பெற்ற பணியாளர்கள் கைமுறையில் OHT-களை சுத்தம் செய்கிறார்கள். இதில் அனைத்து மாசுபாடுகளையும் அகற்றும் பணிகள் இடம்பெறும். செயல்முறையில் குத்தியழுத்தல், கிருமிநாசினி பயன்படுத்துதல், மற்றும் நன்றாக கழுவுதல் உள்ளிட்டவை அடங்கும். இது சுகாதாரமான நீர் சேமிப்பு நிலையை பராமரிக்க உதவுகிறது.</p>
            </div>
          </div>

          {/* Cleaning Steps */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl sm:text-2xl text-amber-800 mb-4">சுத்தம் செய்யும் நடைமுறை (Cleaning Procedure)</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">1</div>
                <p className="text-lg sm:text-xl text-gray-950">தொட்டியில் உள்ள நீரை முழுமையாக வெளியேற்றுதல்</p>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">2</div>
                <p className="text-lg sm:text-xl text-gray-950">அனைத்து உள்ளக மேற்பரப்புகளையும் அங்கீகரிக்கப்பட்ட சுத்தி முகவரிகளால் கைமுறையில் தேய்த்தல்</p>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">3</div>
                <p className="text-lg sm:text-xl text-gray-950">அனைத்து கழிவுகள் மற்றும் சுத்தி முகவரி மீதமுள்ளதை அகற்ற அதிக அழுத்தத்தில் குளிர் நீர் கொண்டு கழுவுதல்</p>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">4</div>
                <p className="text-lg sm:text-xl text-gray-950">மீண்டும் நிரப்பும் முன் குளோரின் கரைசலால் கிருமிநாசனம் செய்தல்</p>
              </div>
            </div>
          </div>
        </div>

        <div id="WaterChlorinationWaterProcess" className="hidden transition-all duration-500">
          <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <header className="mb-8 text-center">
              <h1 className="text-2xl sm:text-3xl text-amber-800 mb-2">தண்ணீர் குளோரின் சேர்க்கும் அமைப்பு</h1>
              <p className="text-lg sm:text-xl text-gray-950">முன்னேற்றமான குளோரினேற்றம் மூலம் பாதுகாப்பான குடிநீரை உறுதி செய்தல்</p>
            </header>

            {/* Hero Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-2.JPG" alt="குளோரின் சேர்க்கை" className="w-full h-auto object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">
                    தண்ணீர் ஒரு தொட்டியில் அல்லது கொண்டெயினரில் சேகரிக்கப்படுகிறது. ஒரு நிர்ணயிக்கப்பட்ட அளவிலான குளோரின் கைமுறையில் சேர்க்கப்படுகிறது. அது நன்றாகக் கலக்கப்பட்டு, பிரிக்க வைக்கப்படுகிறது. இது சிறிய அளவிலான கிருமி நீக்கம் (disinfection) தேவைகளுக்கு ஏற்றது.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/waterTesting/2.png" alt="நீர் பரிசோதனை" className="w-full h-auto object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">தண்ணீர் தரம் பரிசோதனை செய்யப்படுகிறது.</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-10.jpg" alt="OHT அமைப்புடன்" className="w-full h-auto object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">
                    குளோரின் தொடர்ச்சியாக பாயும் தண்ணீரில் சேர்க்கப்படுகிறது. ஒரு டோசிங் பம்ப் (dosing pump) குளோரைன் சேர்க்கும் அளவைக் கட்டுப்படுத்துகிறது. இது பெரிய அளவிலான தண்ணீர் விநியோக அமைப்புகளில் பயன்படுத்தப்படுகிறது. தண்ணீர் நகரும் போதே தொடர்ச்சியான கிருமி நீக்கம் உறுதி செய்யப்படுகிறது.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img loading="lazy" decoding="async" src="/assets/images/OHTChlorination/CH-8.jpg" alt="OHT அமைப்புடன்" className="w-full h-auto object-cover" />
                <div className="p-3 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">
                    குளோரின் மாத்திரைகள் தண்ணீர் பாயும் போதே கரைகின்றன. இது மேல்நிலைத் தொட்டிகள் அல்லது கையினைப் பம்புகளில் பயன்படுத்தப்படுகிறது. இது எளிய முறையாகும் மற்றும் குறைந்த பராமரிப்பு தேவைப்படுவதாகும். மக்கள் தொகை குறைவான பகுதிகள் மற்றும் அவசர சூழ்நிலைகளுக்கு மிகவும் பொருத்தமானது.
                  </p>
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
                <h2 className="text-2xl text-gray-950">தானியங்கி குளோரினேற்ற அமைப்பு</h2>
              </div>
              <div className="space-y-4 text-lg sm:text-xl text-gray-950">
                <p>கோவளம் பஞ்சாயத்து, அனைத்து OHT தொட்டிகளிலும் மேம்பட்ட தானியங்கி குளோரினேற்ற அமைப்பை பயன்படுத்தி, அனைத்து குடிநீர் விநியோகங்களிலும் தொடர்ச்சியான மற்றும் துல்லியமான குளோரின் அளவீடுகளை உறுதி செய்கிறது.</p>

                <p>தானியங்கி அமைப்பின் பலன்கள் :</p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>தண்ணீர் ஓட்டம் மற்றும் தர அளவுகளின் அடிப்படையில் துல்லியமான குளோரின் சேர்க்கை</li>
                  <li>மீதமுள்ள குளோரின் அளவின் தொடர்ச்சியான கண்காணிப்பு</li>
                  <li>சிறந்த கிருமிநாசன நிலையை பராமரிக்க தானாகவே சரிசெய்தல்</li>
                  <li>பராமரிப்பு தேவை மற்றும் கமிக்கல் குறைவுகளை பற்றிய எச்சரிக்கைகள்</li>
                  <li>அனைத்து விநியோக இடங்களிலும் ஒரே மாதிரியான தண்ணீர் தரம்</li>
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
                <h3 className="text-lg sm:text-xl mb-2">தண்ணீர் பாதுகாப்பு</h3>
                <p className="text-gray-950 text-lg sm:text-xl">குடிநீரில் உள்ள தீங்கு விளைவிக்கும் கிருமிகளையும்,பாக்டீரியாவையும் நீக்குவதை உறுதிப்படுத்துகிறது</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl mb-2">செலவு குறைவு</h3>
                <p className="text-gray-950 text-lg sm:text-xl">இரசாயன கழிவுகளை குறைத்து, குளோரின் பயன்பாட்டை மேம்படுத்துகிறது.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl mb-2">24/7 பாதுகாப்பு</h3>
                <p className="text-gray-950 text-lg sm:text-xl">கைமுறை செயற்பாடின்றி தொடர்ச்சியான கண்காணிப்பு மற்றும் சரிசெய்தல்.</p>
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
              <h1 className="text-4xl text-amber-800 mb-3">கோவளம் பஞ்சாயத்து கழிவுப்பொருள் மேலாண்மை</h1>
              <div className="w-24 h-1.5 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">அனைத்து 9 வார்டுகளையும் கொண்ட முழுமையான குப்பை சேகரிப்பு மற்றும் மேலாண்மை திட்டம்</p>
            </div>

            {/* Key Contributors Section */}
            <div className="mb-20">
              <h2 className="text-2xl text-amber-800 mb-8 text-center">முக்கிய பங்களிப்பாளர்கள்</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Contributor 1 */}
                <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-broom"></i></span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">தூய்மை பணியாளர்கள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">வீடுகள் மற்றும் பொது இடங்களில் இருந்து குப்பைகளை சேகரிக்கும் பொறுப்பில் உள்ளவர்கள்</p>
                  </div>
                </div>

                {/* Contributor 2 */}
                <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-truck"></i></span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">குப்பை வாகனங்கள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">சேகரிக்கப்பட்ட குப்பைகளை நிர்ணயிக்கப்பட்ட பகுப்பாய்வு பகுதிகளுக்கு கடத்த பயன்படுத்தப்படும் வாகனங்கள்/p&gt;
                    </p></div>
                </div>

                {/* Contributor 3 */}
                <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-users-cog"></i></span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">SWM பணியாளர்கள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">கழிவுப் பொருட்களின் பகுப்பாய்வு மற்றும் மேலாண்மையை மேற்பார்வையிடுவோர்</p>
                  </div>
                </div>

                {/* Contributor 4 */}
                <div className="process-card bg-white rounded-lg shadow-md overflow-hidden border border-amber-100">
                  <div className="h-48 bg-amber-50 flex items-center justify-center relative">
                    <span className="text-amber-500 text-5xl"><i className="fas fa-hands-helping"></i></span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">திட்ட அடித்தளம் (Plan Foundation) </h3>
                    <p className="text-lg sm:text-xl text-gray-950">பஞ்சாயத்துடன் இணைந்து குப்பை வகைப்படுத்தல் முயற்சிகளை ஆதரிக்கும் அமைப்பு</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Flow Section */}
            <div className="mb-20">
              <h2 className="text-2xl sm:text-3xl text-amber-800 mb-8 text-center">சேகரிப்பு மற்றும் வகைப்படுத்தல் செயல்முறை</h2>

              {/* Visual Process Flow */}
              <div className="bg-white rounded-xl shadow-sm p-6 mb-10 border border-amber-100">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 ">1</div>
                    <h3 className="text-lg sm:text-xl">அனைத்து 9 வார்டுகளையும் உள்ளடக்கிய கவரேஜ்</h3>
                  </div>
                  <div className="text-amber-600 mx-4 hidden md:block">
                    <i className="fas fa-arrow-right fa-lg"></i>
                  </div>
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 ">2</div>
                    <h3 className="text-lg sm:text-xl">குப்பை சேகரிப்பு</h3>
                  </div>
                  <div className="text-amber-600 mx-4 hidden md:block">
                    <i className="fas fa-arrow-right fa-lg"></i>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-10 h-10 flex items-center justify-center mr-3 ">3</div>
                    <h3 className="text-lg sm:text-xl">வகைப்படுத்தல்</h3>
                  </div>
                </div>

                {/* Segregation Categories */}
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  <div className="category-badge bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-leaf"></i>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl text-amber-800 mb-1">அழுகக்கூடிய கழிவுகள்</h4>
                      <p className="text-gray-950 text-base">உணவு கழிவு மற்றும் தோட்ட கழிவு போன்ற உயிரியல் கழிவுகள்</p>
                    </div>
                  </div>
                  <div className="category-badge bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <i className="fas fa-recycle"></i>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl text-amber-800 mb-1">அழுகாத கழிவுகள்</h4>
                      <p className="text-gray-950 text-base">பிளாஸ்டிக், உலோகங்கள் மற்றும் கண்ணாடி போன்ற அகயவியக்க கழிவுகள்</p>
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
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl sm:text-2xl text-amber-800 mb-3">சமூக விழிப்புணர்வு மற்றும் பயிற்சி</h3>
                    <p className="text-lg sm:text-xl text-gray-950 mb-4">5 பேர் கொண்ட அர்ப்பணிக்கப்பட்ட SWM குழு மக்கள் இடையே சரியான குப்பை வகைப்படுத்தல் மற்றும் மேலாண்மை முறைகள் குறித்து வழக்கமான விழிப்புணர்வு நிகழ்ச்சிகளை நடத்துகின்றனர்.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base">பயிற்சிகள்</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base">வீடு தேடி செல்வது</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base">பள்ளி திட்டங்கள்</span>
                      <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-base">சமூக கூட்டங்கள்</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
                <div className="text-amber-600 text-4xl mb-2">9</div>
                <h3 className="text-lg sm:text-2xl text-gray-950">வார்டுகள் உள்ளடக்கம்</h3>
                <p className="text-gray-950 text-base">முழு பஞ்சாயத்து கவரேஜ்</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
                <div className="text-amber-600 text-4xl mb-2">2</div>
                <h3 className="text-lg sm:text-2xl text-gray-950">கழிவு வகைகள்</h3>
                <p className="text-gray-950 text-base">சரியான வகைப்படுத்தல் அமைப்பு</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-100">
                <div className="text-amber-600 text-4xl mb-2">5</div>
                <h3 className="text-lg sm:text-2xl text-gray-950">SWM கல்வியாளர்கள்</h3>
                <p className="text-gray-950 text-base">சமூக விழிப்புணர்வை ஊக்குவிக்கின்றனர்</p>
              </div>
            </div>
          </div>
          <div id="garbageImageGallery" className="grid grid-cols-1 max-w-[80vw] mx-auto sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6 mb-8">
            <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100">
              <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/2022-08-22 10-50-16.jpeg" alt="Garbage Collection" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">குப்பை சேகரிப்பு</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100">
              <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/IMG-20220226-WA0019.jpg" alt="Waste Management" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">கழிவுப் பொருள் மேலாண்மை</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100">
              <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/IMG_20220225_101255.jpg" alt="Trash Cleanup" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">கழிவு சுத்தம்</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100 hidden sm:block">
              <img loading="lazy" decoding="async" src="/assets/images/garbageSegregation/IMG_9259.JPG" alt="Recycling Waste" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">மீள்சுழற்சி கழிவு</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100 hidden md:block">
              <img loading="lazy" decoding="async" src="/assets/images/garbageCollection/6253332796995127205.jpg" alt="Plastic Waste Management" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">பிளாஸ்டிக் கழிவு மேலாண்மை</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-md border border-amber-100 hidden md:block">
              <img loading="lazy" decoding="async" src="/assets/images/garbageSegregation/IMG_9274.JPG" alt="Composting" className="w-full h-[352px] object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white">உரமாக்கம் (கம்போஸ்டிங்)</span>
              </div>
            </div>

            {/* Prev/Next Buttons */}
            <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
              <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Water_Management',this)", event)}>முந்தையது</a>
              <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Electricity',this)", event)}>அடுத்தது</a>
            </div>
            {/* <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Water_Management',this)", event)}>Prev</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Electricity',this)", event)}>Next</a>
          </div> */}
          </div>
        </div>


      </div>
      {/* Electricity */}
      <div id="Electricity" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <header className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl text-amber-800 mb-4">தெருவிளக்குத் திட்டங்கள்</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">கோவளத்தில் பாதுகாப்பும் அணுகலும்கொண்ட தெருவிளக்குத் தீர்வுகள்</p>
          </header>

          {/* Streetlights Section */}
          <section className="mb-20">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
              <div className="lg:w-1/2">
                <h2 className="text-2xl sm:text-3xl text-gray-950 mb-6">தெருவிளக்குகள்</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">தெருவிளக்குகள், சாலைகள், வீதிகள் மற்றும் பொது பகுதிகளுக்கு இரவு நேரம் அல்லது குறைந்த ஒளி நிலைகளில் ஒளியளிக்க வடிவமைக்கப்பட்டவை. இது பாதுகாப்பான பயணத்தை உறுதி செய்கிறது.</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-shield-alt text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">பாதுகாப்பு</h3>
                      <p className="text-lg sm:text-xl text-gray-950">ஒளியுடன் உள்ள இடங்களில் தெரிவை மேம்படுத்துவதன் மூலம் விபத்துகள் மற்றும் குற்றச்செயல்கள் குறைக்கப்படுகின்றன.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-lock text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">பாதுகாப்பு உணர்வு</h3>
                      <p className="text-lg sm:text-xl text-gray-950">நன்கு ஒளியுள்ள தெருக்கள் குற்ற செயல்களைத் தடுக்கின்றன மற்றும் நடந்து செல்லும் பொதுமக்கள் மற்றும் வாகன ஓட்டிகள் பாதுகாப்பாக உணர உதவுகின்றன.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-wheelchair text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">அணுகல் வசதி</h3>
                      <p className="text-lg sm:text-xl text-gray-950">இரவு நேரத்தில் மக்கள் பாதுகாப்பாக நகர்வதை சாத்தியமாக்குவதால், அனைத்து குடிமக்களுக்கும் செல்லும் வசதி மற்றும் அணுகல் மேம்படுகிறது.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639678.jpg" alt="வீதிப் விளக்குகள் இரவில்" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639677.jpg" alt="நன்றாக விளக்கப்பட்ட பாதை" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639679.jpg" alt="நவீன வீதிப் விளக்கு வடிவமைப்பு" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/cctv/6235471922091639681.jpg" alt="வீதிப் விளக்கு பராமரிப்பு" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* High Mast Lights Section */}
          <section className="bg-amber-50 rounded-xl p-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl text-gray-950 mb-6">உயர் மின்விளக்குகள்</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">கோவலம் பஞ்சாயத்து தலைவர் <span className="text-amber-700">ஷோபனா தங்கம் சுந்தர் தலைமையில், </span> சுற்றுலாப் பயணிகள் மற்றும் பெண்களுக்கு பயனளிக்கும் வகையில் கடற்கரைப் பகுதிகளில் உயர் மின்விளக்குகள் நிறுவுதல் உட்பட பல முயற்சிகள் செயல்படுத்தப்பட்டுள்ளன.</p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-tools text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">துருப்பிடித்தல் மற்றும் அரிப்பைத் தடுத்தல்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">கடலோரப் பகுதியில் உயர் மின் விளக்குகள் அமைக்கப்பட்டு இருந்தாலும் தொடர் பராமரிப்பு காரணமாக உயர் மின் கம்பம் துருப்பிடித்தல் மற்றும் அரிப்பு தடுக்கப்படுகிறது,</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <i className="fas fa-clipboard-check text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">வழக்கமான சோதனைகள்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">முறையான ஆய்வுகள் மற்றும் பராமரிப்பு ஆண்டு முழுவதும் விளக்குகள் செயல்படுவதையும் பயனுள்ளதாக இருப்பதையும் உறுதி செய்கிறது.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H4.JPG" alt="கடற்கரை உயர் மாஸ்ட் விளக்கு" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H3.JPG" alt="கடற்கரை பகுதி விளக்குகள்" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H2.JPG" alt="உயர் மாஸ்ட் விளக்கு பராமரிப்பு" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img loading="lazy" decoding="async" src="/assets/images/streetLights/H5.JPG" alt="கடற்கரை பகுதி வெளிச்சம்" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="text-center">
            <h2 className="text-2xl sm:text-3xl text-gray-950 mb-8">ஒளி திட்டத்தின் தாக்கம் (Lighting Initiative Impact)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-moon"></i>
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">நேரத்தை நீட்டித்தல்</h3>
                <p className="text-base sm:text-lg text-gray-950">பொது இடங்கள் இரவிலும் பாதுகாப்பாகவும் அணுகக்கூடியதாகவும் இருக்கின்றன.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-umbrella-beach"></i>
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">சுற்றுலாப் பயணிகளுக்கு ஏற்றது</h3>
                <p className="text-base sm:text-lg text-gray-950">கடற்கரை பகுதிகள் இரவு நேர பயணிகளுக்கு வரவேற்பாகவும் பாதுகாப்பாகவும் உள்ளன.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-female"></i>
                </div>
                <h3 className="text-xl sm:text-2xl text-gray-950 mb-2">பெண்கள் பாதுகாப்பு</h3>
                <p className="text-base sm:text-lg text-gray-950">அனைத்து பகுதிகளிலும் தெருவிளக்குகள் பொருத்தப்பட்டுள்ளதால் பெண்கள் மற்றும் குழந்தைகளின் பாதுகாப்பு உறுதி செய்யப்படுகின்றது.</p>
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
            <h1 className="text-2xl sm:text-3xl text-amber-800 mb-4">வடிகால் பராமரிப்பு அமைப்பு</h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">கோவளத்தில் சுத்தமான மற்றும் திறமையான கழிவு நீர் மேலாண்மையை உறுதி செய்தல்</p>
          </header>

          {/* Open Drainage Section */}
          <section className="mb-20 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8">
                <h2 className="text-xl sm:text-2xl text-gray-950 mb-6 flex items-center">
                  <i className="fas fa-water mr-3 text-amber-600"></i> திறந்தவெளி வடிகால் பராமரிப்பு
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-broom text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">வழக்கமான சுத்தம் செய்தல்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">கழிவுகள் மற்றும் குப்பைகள் குவிவதைத் தடுக்கவும், சரியான நீர் ஓட்டத்தை பராமரிக்கவும் திறந்த வடிகால்களை தொடர்ந்து சுத்தம் செய்யப்படுகிறது.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-spray-can text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">பிளீச்சிங் பவுடர் சுத்திகரிப்பு</h3>
                      <p className="text-lg sm:text-xl text-gray-950">திறந்த வடிகால்களை கிருமி நீக்கம் செய்து, துர்நாற்றத்தை நீக்கவும், பாக்டீரியா வளர்ச்சியைத் தடுக்கவும் ப்ளீச்சிங் பவுடர் பயன்படுத்தப்படுகிறது.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 gap-0">
                <div className="border border-gray-100">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/OP1.jpg" alt="திறந்த கால்வாய் சுத்தம்" className="w-full h-full object-cover" />
                </div>
                <div className="border border-gray-100">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/OP2.jpg" alt="கால்வாய் கிருமிநாசினி சிகிச்சை" className="w-full h-full object-cover" />
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
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/banner.png" alt="மூடிய கால்வாய் ஆய்வு" className="w-full h-full object-cover block" />
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:w-1/2 order-1 lg:order-2 p-8">
                <h2 className="text-xl sm:text-2xl text-gray-950 mb-6 flex items-center">
                  <i className="fas fa-road mr-3 text-amber-600"></i> மூடிய வடிகால் பராமரிப்பு
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-hands-wash text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">அடிக்கடி சுத்தம் செய்தல்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">மூடிய வடிகால் அடைப்புகள் மற்றும் ஊறவைத்தல் சிக்கல்களைத் தடுக்க மூடிய வடிகால்களை அடிக்கடி சுத்தம் செய்து, சீரான கழிவுநீர் ஓட்டத்தை உறுதி செய்கிறது.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4 flex-shrink-0">
                      <i className="fas fa-shield-alt text-amber-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-2">தடுப்பு நடவடிக்கைகள்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">வழக்கமான பராமரிப்பு சோக் பிட் சிக்கல்களைத் தடுக்க உதவுகிறது, முழு வடிகால் அமைப்பின் சரியான செயல்பாட்டை உறுதி செய்கிறது.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="text-center">
            <h2 className="text-xl sm:text-2xl text-gray-950 mb-8">வடிகால் அமைப்பின் நன்மைகள்</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-2xl sm:text-3xl mb-4">
                  <i className="fas fa-bacteria"></i>
                </div>
                <h3 className="text-lg sm:text-xl text-gray-950 mb-2">சுகாதாரம்</h3>
                <p className="text-lg text-gray-950">நீர் தேங்குவதைத் தடுக்கிறது மற்றும் நோய் பரப்பும் பூச்சிகளைக் குறைக்கிறது</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-2xl sm:text-3xl mb-4">
                  <i className="fas fa-tint"></i>
                </div>
                <h3 className="text-lg sm:text-xl text-gray-950 mb-2">நீர் பாதுகாப்பு</h3>
                <p className="text-lg text-gray-950">நிலையான வள மேலாண்மைக்காக சுத்திகரிக்கப்பட்ட தண்ணீரை மீண்டும் பயன்படுத்துகிறது</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-amber-600 text-2xl sm:text-3xl mb-4">
                  <i className="fas fa-city"></i>
                </div>
                <h3 className="text-lg sm:text-xl text-gray-950 mb-2">சமூக நலம்சமூக சுகாதாரம்</h3>
                <p className="text-lg text-gray-950">சுத்தமான பொது இடங்களைப் பராமரிக்கிறது மற்றும் சுற்றுச்சூழல் மாசுபாட்டைக் குறைக்கிறது</p>
              </div>
            </div>
          </section>

          {/* Soak Pit Process Section */}
          <section className="mb-12">
            <div className="bg-amber-50 rounded-xl p-8">
              <h2 className="text-xl sm:text-2xl text-gray-950 mb-8 text-center">சோக் பிட்டு செயல்முறை</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="drainage-card bg-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <i className="fas fa-filter text-amber-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg sm:text-xl text-gray-950">வடிகட்டுதல் அமைப்பு</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">சோக் பிட்கள் பல வடிகட்டுதல் அடுக்குகளுடன் வடிவமைக்கப்பட்டுள்ளன, இதனால் நீர் தரையில் ஊடுருவுவதற்கு முன்பு அசுத்தங்கள் மற்றும் மாசுபாடுகளை நீக்குகிறது.</p>
                </div>

                <div className="drainage-card bg-white p-6 rounded-lg shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <i className="fas fa-recycle text-amber-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg sm:text-xl text-gray-950">நீர் மறுபயன்பாடு</h3>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-950">சோக் பிட்களில் இருந்து சுத்திகரிக்கப்பட்ட நீர் தோட்டக்கலை மற்றும் பிற குடிக்க முடியாத நோக்கங்களுக்காக மீண்டும் பயன்படுத்தப்படுகிறது, இது நீர் பாதுகாப்பை ஊக்குவிக்கிறது மற்றும் சமூகத்தில் கழிவுநீர் அகற்றலைக் குறைக்கிறது.</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d1.jpg" alt="சோக் பிட்டு கட்டமைப்பு" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d2.jpg" alt="நீர் வடிகட்டி" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d3.jpg" alt="நீர் மறுபயன்பாடு" className="w-full h-48 object-cover" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img loading="lazy" decoding="async" src="/assets/images/drainage/d4.jpg" alt="பராமரிக்கப்பட்ட சோக் பிட்டு" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </section>

          {/* Prev/Next Buttons */}
          <div style={{ "position": "fixed", "bottom": "4px", "right": "20px", "display": "flex", "gap": "15px", "padding": "5cap" }}>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Electricity',this)", event)}>முந்தையது</a>
            <a style={{ "backgroundColor": "orange", "color": "white", "padding": "10px 18px", "border": "none", "borderRadius": "6px", "fontSize": "16px", "cursor": "pointer" }} onClick={(event) => executeInlineAction("showList('Disaster_Management',this)", event)}>அடுத்தது</a>
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
                <h1 className="text-2xl sm:text-3xl   text-white mb-4">விபத்து மேலாண்மை முன்முயற்சி</h1>
                <p className="text-lg sm:text-xl sm:text-xl text-amber-100 max-w-3xl mx-auto">கோவளத்தில் பொதுமக்கள் பாதுகாப்புக்காக முன்நோக்கி சுழற்காற்று தயார்நிலை திட்டம்</p>
              </div>
            </div>
          </div>

          {/* Introduction Section */}
          <section className="mb-20 text-center max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-950 mb-8">
              நவம்பர் முதல் ஜனவரி வரை ஏற்படும் சுழற்காற்றுகளால் ஏற்படும் சேதங்களை குறைத்து, பொதுமக்கள் பாதுகாப்பை உறுதி செய்ய, கோவளம் பஞ்சாயத்து முன்னேற்றமடைந்த கட்டமைப்புகளும், பயிற்சி பெற்ற பணியாளர்களும் கொண்ட முழுமையான விபத்து மேலாண்மை திட்டத்தை உருவாக்கியுள்ளது.
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
                <h2 className="text-2xl sm:text-3xl text-gray-950">விபத்து மேலாண்மை குழு</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-950 mb-6">
                நிபுணர்கள் மற்றும் உள்ளூர் தலைவர்களால் உருவாக்கப்பட்ட தனிப்பட்ட குழு, கோவளத்தில் உள்ள அனைத்து விபத்து தயார்நிலை, மீட்பு ஒருங்கிணைப்பு மற்றும் நிவாரண முயற்சிகளையும் மேற்பார்வை செய்கிறது.
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
                  <span>குழு கூட்டம்</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>அணியின் பயிற்சி</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>சுழற்காற்று பருவத்தில் 24/7 கண்காணிப்பு</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>மாநில மற்றும் தேசிய நிறுவனங்களுடன் ஒருங்கிணைப்பு</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>சமூக விழிப்புணர்வு நிகழ்ச்சிகள்</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>SMS, வானொலி மற்றும் சமூக ஊடகங்கள் வாயிலாக எச்சரிக்கை அறிவிப்புகள்</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>கடற்கரை மற்றும் தாழ்வான பகுதிகளுக்கான வெளியேற்ற திட்டங்கள்</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>சுழற்காற்று பாதுகாப்புக் குடில்களின் ஆய்வு மற்றும் உறுதிப்படுத்தல்</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-amber-500 mr-2 mt-1"></i>
                  <span>மாற்றுத் தண்ணீர் மற்றும் மின்சாரம் வசதிகள்</span>
                </li>
              </ul>
            </div>

            {/* War Room Card */}
            <div className="disaster-card bg-white rounded-xl shadow-lg p-8 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marked-alt text-amber-600 text-2xl"></i>
                </div>
                <h2 className="text-2xl sm:text-3xl  text-gray-950">நன்கு உட்பொதிந்த வார் ரூம் (War Room)</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-950 mb-6">
                நவீன தொழில்நுட்பம் கொண்ட கட்டுப்பாட்டு மையம் (Command Center) அனைத்து விபத்து மேலாண்மை நடவடிக்கைகளுக்கும் மையச் செயலகமாக (nerve center) செயல்படுகிறது. இது துல்லியமான பதிலளிக்கைக்கான முன்னேற்றமடைந்த உபகரணங்களுடன் கூடியது.
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

              <h3 className="text-2xl sm:text-3xl text-gray-950 mb-4">முக்கிய அம்சங்கள்:</h3>
              <div className="space-y-4">
                <div className="war-room-feature flex items-start p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="feature-icon bg-amber-100 p-2 rounded-full mr-4 text-amber-600 transition-all">
                    <i className="fas fa-cloud-sun"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-950">நேரடி வானிலை கண்காணிப்பு</h4>
                    <p className="text-lg sm:text-xl text-gray-950">சுழற்காற்று உருவாகும் விதம் மற்றும் இயக்கத்தை பின்தொடர நவீன அமைப்புகள்</p>
                  </div>
                </div>
                <div className="war-room-feature flex items-start p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="feature-icon bg-amber-100 p-2 rounded-full mr-4 text-amber-600 transition-all">
                    <i className="fas fa-broadcast-tower"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-950">தொடர்பு வலையமைப்புகள்</h4>
                    <p className="text-lg sm:text-xl text-gray-950">தடையின்றி ஒருங்கிணைக்க மாற்றுப்பாதை (redundant) அமைப்புகள்</p>
                  </div>
                </div>
                <div className="war-room-feature flex items-start p-3 rounded-lg hover:bg-amber-50 transition-colors">
                  <div className="feature-icon bg-amber-100 p-2 rounded-full mr-4 text-amber-600 transition-all">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-950">தரவு பகுப்பாய்வு கருவிகள்</h4>
                    <p className="text-lg sm:text-xl text-gray-950">துல்லியமான முடிவெடுப்பதற்கான முன்னறிவிப்பு பகுப்பாய்வுகள்</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Preparedness Section */}
          <section className="bg-amber-50 rounded-xl p-8 mb-20">
            <h2 className="text-2xl sm:text-3xl text-center text-gray-950 mb-8">வெள்ள மேலாண்மை நடவடிக்கைகள்</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-people-arrows"></i>
                </div>
                <h3 className="text-xl text-gray-950 mb-3">வெளியேற்றம் & தற்காலிக குடிகள்</h3>
                <p className="text-lg sm:text-xl text-gray-950">வெள்ளப்பாதிக்கேற்பும் பகுதிகளை அடையாளம் காண்பதும், அவசர தங்குமிடங்களை ஏற்படுத்துவது</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-water"></i>
                </div>
                <h3 className="text-xl text-gray-950 mb-3">அதிக நீர் அகற்றுதல்</h3>
                <p className="text-lg sm:text-xl text-gray-950">நீர் தேங்கலைத் தவிர்க்க JCB இயந்திரங்களை பயன்படுத்தி விரைவாக நீர் அகற்றுதல்</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-water-ladder"></i>
                </div>
                <h3 className="text-xl text-gray-950 mb-3">தாழ்வான பகுதிகளின் மேலாண்மை</h3>
                <p className="text-lg sm:text-xl text-gray-950">நீர் வடிகால் அமைப்புகளை மேம்படுத்துதல் மற்றும் வெள்ளத்தை தாங்கக்கூடிய கட்டமைப்புகள்</p>
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
            <h2 className="text-2xl sm:text-3xl text-center text-gray-950 mb-8">சுழற்காற்று தயார்நிலை நடவடிக்கைகள்</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3 className="text-xl  text-gray-950 mb-3">முன்னறிவு எச்சரிக்கை அமைப்புகள்</h3>
                <p className="text-lg sm:text-xl text-gray-950">சுழற்காற்று அருகில் வந்தால் பல ஊடக வழிகளில் பொதுமக்களுக்கு தானாகவே எச்சரிக்கைகள் அனுப்பப்படும்.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-ambulance"></i>
                </div>
                <h3 className="text-xl  text-gray-950 mb-3">அவசர பதில் குழு</h3>
                <p className="text-lg sm:text-xl text-gray-950">பயிற்சி பெற்ற குழுக்கள் வெளியேற்றம் மற்றும் மருத்துவ உதவிக்காக தயார் நிலையில் உள்ளனர்.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-amber-600 text-4xl mb-4">
                  <i className="fas fa-box-open"></i>
                </div>
                <h3 className="text-xl  text-gray-950 mb-3">நிவாரணப் பொருட்கள்</h3>
                <p className="text-lg sm:text-xl text-gray-950">உணவு, குடிநீர் மற்றும் அத்தியாவசியங்கள் முக்கிய இடங்களில் குவிக்கப்பட்டுள்ளன.</p>
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
        <h1 className="text-2xl sm:text-3xl  text-amber-600 mb-8 text-center">விபத்து மேலாண்மை</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Flood Response Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('disaster',1)", event)}
            className="bg-white text-amber-700  px-4 py-4 rounded-xl shadow-sm border border-amber-200 hover:bg-amber-50 hover:border-amber-300  transition-all duration-200 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M80-80v-80q38 0 56.5-20t77.5-20q59 0 77 20t56 20q38 0 56-20t77-20q57 0 77.5 20t56.5 20q38 0 56-20t77-20q59 0 77 20t56 20v80q-58 0-77-20t-56-20q-37 0-56 20t-77 20q-58 0-77.5-20T480-120q-38 0-56 20t-77 20q-59 0-77-20t-56-20q-37 0-56 20T80-80Zm267-180q-57 0-77-20t-56-20q-35 0-56 20t-78 20v-80q38 0 56-20t77-20q6 0 12 .5t11 1.5l-38-140-55 72-63-50 311-384 461 176-29 75-84-34 81 301q14 8 27.5 15t32.5 7v80q-57-1-77-20.5T747-300q-38 0-56 20t-77 20q-57 0-77.5-20T480-300q-38 0-56 20t-77 20Zm0-80q30 0 46.5-14t50.5-22l-37-136 155-41 56 212q31-2 49-18.5t65-19.5l-86-321-229-84-157 188 69 254q4 1 8.5 1.5t9.5.5Zm149-222Z" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">வெள்ள பதிலளிப்பு</h6>
          </button>

          {/* war room  Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('disaster',2)", event)}
            className="bg-white text-amber-700  px-4 py-4 rounded-xl shadow-sm border border-amber-200 hover:bg-amber-50 hover:border-amber-300  transition-all duration-200 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">வார் ரூம்</h6>
          </button>

          {/* Fire Safety Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('disaster',3)", event)}
            className="bg-white text-amber-700  px-4 py-4 rounded-xl shadow-sm border border-amber-200 hover:bg-amber-50 hover:border-amber-300  transition-all duration-200 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">தீ மற்றும் பாதுகாப்பு</h6>
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
            <h2 className="text-2xl md:text-4xl  text-white text-center px-4">ஒருங்கிணைந்த சமூகத்திற்கான கட்டமைப்பு</h2>
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
                  <h2 className="text-xl sm:text-2xl  text-amber-800 mb-4">மனிதநேய சேவைகள்</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">நெருக்கடிகள், பேரழிவுகள் அல்லது தொடர்ச்சியான பாதிப்புகளுக்கு பதிலளிக்க, வாழ்வை காக்க, வேதனையை குறைக்க, மற்றும் மனித மரியாதையை பராமரிக்க மேற்கொள்ளப்படும் நடவடிக்கைகள்.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-amber-50 p-4 rounded">
                      <h3 className="text-xl sm:text-2xl  text-amber-700">இயற்கை பேரழிவுகள்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">வெள்ளம், சுழற்காற்று போன்றவை</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded">
                      <h3 className="text-xl sm:text-2xl  text-amber-700">தொற்று பரவல்கள்</h3>
                      <p className="text-lg sm:text-xl  text-gray-950">நோய்த் தொற்றுகள்,</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded">
                      <h3 className="text-xl sm:text-2xl  text-amber-700">வறுமை</h3>
                      <p className="text-lg sm:text-xl  text-gray-950">பட்டினி மற்றும் சமூக சமத்துவமின்மை</p>
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
                    <h3 className="text-xl sm:text-2xl text-amber-700">மருத்துவ சேவை</h3>
                    <p className="text-lg sm:text-xl text-gray-950">கோவிட்-19 காலத்தில், STS அறக்கட்டளையுடன் இணைந்து தடுப்பூசி முகாம்கள் மற்றும் இலவச மதிய உணவுகள் வழங்கப்பட்டன.</p>
                  </div>
                </div>
                <div className="border rounded overflow-hidden">
                  <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/2.jpg"
                    alt="Relief and Recovery"
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl sm:text-2xl  text-amber-700">நிவாரணம் மற்றும் மீட்பு</h3>
                    <p className="text-lg sm:text-xl text-gray-950">வெள்ளம் அல்லது சுழற்காற்றால் பாதிக்கப்பட்ட மக்களுக்கு அத்தியாவசிய பொருட்கள் விநியோகம், பங்குதாரர்கள் மற்றும் பொதுமக்களின் ஆதரவுடன், STS அறக்கட்டளை மூலம் முன்னெடுக்கப்பட்டது.</p>
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
                  <h2 className="text-2xl  text-amber-800 mb-4">மரக்கிளை வெட்டுதல்</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">மின் சேவைகள் மற்றும் திருவிழா தயாரிப்புக்கான மரக்கிளை வெட்டுதல்
                    கோவளம் பஞ்சாயத்து, பொதுமக்கள் பாதுகாப்பு மற்றும் சரிவர மின் சேவைகள் வழங்குவதை முன்னுரிமையாகக் கொண்டு, மரக்கிளைகளை முறையாக வெட்டுகிறது.</p>

                  <div className="grid md:grid-cols-1 gap-6 mt-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-amber-700 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        மாதந்தோறும் மரக்கிளை வெட்டுதல்:
                      </h3>
                      <ul className="mt-2 text-gray-950 pl-7 text-lg sm:text-xl ">
                        <li className="mb-1">• மின் கம்பி தடையில்லா சேவை</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl  text-amber-700 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        திருவிழா தயாரிப்பு:
                      </h3>
                      <ul className="mt-2 text-gray-950 pl-7 text-lg sm:text-xl ">
                        <li className="mb-1">• தேரோட்டம் மற்றும் பாதை தடைநீக்கம்</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 bg-amber-50 p-4 rounded">
                    <p className="text-lg sm:text-xl text-amber-700">இந்த நடவடிக்கைகள் மூலம், மின் சேவைகளின் நம்பகத்தன்மை, திருவிழாக்களில் பாதுகாப்பு, மற்றும் அழகான மற்றும் பாதுகாப்பான சூழல் உருவாக்கப்படுகிறது.</p>
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
                  <h2 className="text-2xl  text-amber-800 mb-4">மிருகக் கட்டுப்பாடு (நாய்கள்)</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">தெரு நாய்களின் எண்ணிக்கையை கட்டுப்படுத்த மற்றும் பொதுச் சுகாதாரத்தையும், பாதுகாப்பையும் உறுதி செய்ய, கோவளம் பஞ்சாயத்து மிருகப் பிறப்பு கட்டுப்பாட்டு திட்டம் (ABC Program) ஒன்றை ஆரம்பித்துள்ளது.</p>

                  <h3 className="text-xl sm:text-2xl  text-amber-700 mt-6 mb-2">திட்ட மேலோட்டம்:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">1. தெரு ஆய்வு மற்றும் போக்குவரத்து
                        (Street Survey and Transportation)</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">2. பிடித்தல் மற்றும் பீடுசெய்தல்
                        (Capturing and Sterilizing)</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">3. மறுபிறவி தடுப்பு (ஸ்பெயிங் / ந்யூட்டரிங்)
                        (Spaying / Neutering)</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded">
                      <p className="text-lg sm:text-xl text-gray-950">4. சிகிச்சைக்குப் பிறகான பராமரிப்பு
                        (Post-Operation Care)</p>
                    </div>
                    <div className="bg-amber-50 p-3 rounded md:col-span-2">
                      <p className="text-lg sm:text-xl text-gray-950">5. விடுவித்தல் மற்றும் கண்காணிப்பு
                        (Release and Monitoring)</p>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl  text-amber-700 mt-6 mb-2">நன்மைகள்:</h3>
                  <div className="text-lg sm:text-xl flex flex-wrap gap-2">
                    <span className="bg-amber-100 text-amber-800 text-xs  px-3 py-1 text-lg sm:text-xl  rounded-full">தெரு நாய்களின் கட்டுப்பாடு</span>
                    <span className="bg-amber-100 text-amber-800 text-xs  px-3 py-1 text-lg sm:text-xl  rounded-full">பொதுச் சுகாதாரம் மேம்பாடு</span>
                    <span className="bg-amber-100 text-amber-800 text-xs  px-3 py-1 text-lg sm:text-xl  rounded-full">மிருக நலன் பாதுகாப்பு</span>
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
                  <h2 className="text-2xl  text-amber-800 mb-4">முதியவர்களுக்கு உதவி</h2>
                  <p className="text-lg sm:text-xl text-gray-950">“நமது மூப்பினருக்கான உதவித் திட்டம்” என்பது, மூத்த குடிமக்களுக்கு முழுமையான ஆதரவை வழங்கும் நோக்கில், உள்ளூர் தொண்டு நிறுவனங்கள், மருத்துவ சேவை வழங்குநர்கள் மற்றும் சமூகத் தன்னார்வலர்களுடன் இணைந்து செயல்படும் ஒரு கூட்டாண்மை முயற்சி ஆகும்.</p>

                  <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-lg sm:text-xl text-yellow-700">இந்த திட்டத்தின் கீழ், மருத்துவ பரிசோதனைகள், தோழமை திட்டங்கள், மற்றும் அன்றாட தேவைகளுக்கான உதவிகள் வழங்கப்படுகின்றன.</p>
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
                  <h2 className="text-2xl  text-amber-800 mb-4">கொசு ஒழிப்பு</h2>
                  <p className="text-lg sm:text-xl text-gray-950 mb-4">கொசுக்களால் பரவும் நோய்கள் பரவாமல் தடுக்க கோவளம் பஞ்சாயத்து வழக்கமான கொசு ஒழிப்பு நடவடிக்கைகளை மேற்கொள்கிறது.</p>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-lg sm:text-xl text-gray-950 mb-2">புகைமூட்டும் பணிக்கான அட்டவணை:</h3>
                    <ul className="text-gray-950 text-lg sm:text-xl">
                      <li className="mb-1"><span className="text-lg sm:text-xl ">அடிக்கடி:</span> மாதத்தில் இருமுறை</li>
                      <li><span className="text-lg sm:text-xl">விநியோகம்:</span>பஞ்சாயத்திற்குள் உள்ள அனைத்து பகுதிகளும் சுழற்சி முறையில் முழுமையாக புகைமூட்டும் பணியில் உட்படுத்தப்படுகின்றன.</li>
                    </ul>
                  </div>

                  <div className="mt-6 bg-amber-50 p-4 rounded">
                    <p className="text-lg sm:text-xl text-amber-700">கொசு மூலம் பரவும் நோய்கள் தடையின்றி பரவாமல் இருக்க, கோவளம் பஞ்சாயத்து பொதுமக்களின் சுகாதாரத்தை பாதுகாக்கும் வகையில் நியமிதமாக புகைமூட்டும் பணிகளை நடத்துகிறது.</p>
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
              <span className="ribbon-content">சிறந்த நிர்வாகத்திற்கான விருது</span>
            </div>
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl  mb-4">எங்கள் சாதனைகள்!</h1>
              <p className="text-lg sm:text-xl  mb-6">சிறந்த ஆட்சி மற்றும் சமூக முன்னேற்றத்தில் எட்டிய வெற்றிகள்</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-lg sm:text-xl ">புதுமையான ஆட்சி</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-lg sm:text-xl ">சமூக முன்னேற்றம்</span>
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-lg sm:text-xl ">குடிமக்கள் நலன்</span>
              </div>
            </div>
          </header>

          {/* Administration div */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              நிர்வாகத் திறன்
            </h2>
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <p className="text-lg sm:text-xl text-gray-950 mb-6">கோவளம் ஊராட்சி, மக்கள் குறைகள் மற்றும் கேள்விகளை விரைவாக கையாளவும் தீர்க்கவும், தன்னார்வலர்களை அடிப்படையாகக் கொண்ட புதிய முறையை நடைமுறைப்படுத்தியுள்ளது.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl   text-amber-900 mb-4">முக்கிய அம்சங்கள்:</h3>
                  <ul className="space-y-3 text-lg sm:text-xl ">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>தன்னார்வலர் அடிப்படையிலான அணுகுமுறை: பயிற்சி பெற்ற தன்னார்வலர்கள் கேள்வி மேலாண்மை குழுவில் இணைக்கப்பட்டுள்ளனர்.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>கேள்வி மேலாண்மை முறை: பொதுமக்களின் கேள்விகள் மற்றும் குறைகள் பதிவு, கண்காணிப்பு மற்றும் தீர்வுப் பெறுவதற்கான ஒழுங்குமுறை அமைப்பு.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>பல்சந்தை புகார் பதிவு: தொலைபேசி, மின்னஞ்சல் மற்றும் நேரடி சந்திப்பு மூலமாகவும் குடிமக்கள் தங்கள் பிரச்சினைகளைக் கூற முடியும்.</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>சிக்கல் கண்காணிப்பு: ஒவ்வொரு கேள்வியும் காலக்கெடுவில் தீர்க்கப்படுகிறதா என்பதை உறுதி செய்ய கண்காணிப்பு நடைமுறை உள்ளது.</span>
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
                சிறந்த நிர்வாக விருது
              </h3>
              <p className="text-lg sm:text-xl text-gray-950 mb-4">கோவளம் ஊராட்சி, 2022-2023 மற்றும் 2024-2025 ஆம் ஆண்டுகளில் தொடர்ந்து "சிறந்த நிர்வாக விருது" பெற்ற பெருமையை பெற்றுள்ளது.</p>
              <p className="text-lg sm:text-xl text-gray-950">இந்த விருது, புதுமையான ஆட்சி, சமூக முன்னேற்றம் மற்றும் குடிமக்கள் நலனில் ஊராட்சியின் சிறப்பான அர்ப்பணிப்புக்கு அமைந்த அங்கீகாரம் ஆகும்.</p>
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
              குழந்தைகள் நட்பு முயற்சிகள்
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">பாலர் சபை சுற்றுப்பயணம்: </h3>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">STS அறக்கட்டளையுடன் இணைந்து, பின்தங்கிய மாணவர்களுக்கு கல்வி மற்றும் அறிவுப் பரப்பை ஊக்குவிக்கும் பயணம்.</p>
                <img loading="lazy" decoding="async" src="/assets/images/awards/6248982738153621953.jpg" alt="Student tour" className="rounded-lg w-full h-auto" />
                <img loading="lazy" decoding="async" src="/assets/images/awards/6248982738153621939.jpg" alt="Student tour" className="rounded-lg mt-2 w-full h-auto" />
              </div>
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">கல்வி பொருட்கள் வழங்கல்:</h3>
                <p className="text-lg sm:text-xl text-gray-950 mb-4"> பள்ளிப்பைகள், உணவுப்பைகள், கல்வி உபகரணங்கள் வழங்கப்பட்டு, மாணவர்களின் கல்வி பயணத்திற்கு ஆதரவு வலுப்படுத்தப்பட்டது.</p>
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
              பெண்கள் முன்னேற்றம்
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">சுய உதவி குழுக்களுக்கு ஊக்கம்:</h3>
                <p className="text-lg sm:text-xl text-gray-950">சுய உதவி குழுக்கள் மற்றும் PLF உறுப்பினர்கள் ஊக்குவிக்கப்பட்டு ஆதரவு அளிக்கப்பட்டது.</p>
              </div>
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">பெண்கள் தின விழா:</h3>
                <p className="text-lg sm:text-xl text-gray-950">பெண்களுக்கான விளையாட்டு, கலாச்சார நிகழ்வுகள் நடத்தப்பட்டு, சிறப்பு பரிசுகள் வழங்கப்பட்டன.</p>
              </div>
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-3">சமூக பிணைப்பு:</h3>
                <p className="text-lg sm:text-xl text-gray-950"> வளையாப்பம் (சீமந்தம்) போன்ற சமூக நிகழ்வுகள் ஊக்குவிக்கப்பட்டு, சமூக ஊட்டச்சத்திற்காக சிறுதானியங்கள் வழங்கப்பட்டன.</p>
              </div>
            </div>
          </div>

          {/* E-Governance */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              மின் ஆட்சிமுறை
            </h2>
            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg sm:text-xl text-gray-950">வெளிப்படைத்தன்மை, திறம்பட செயல்பாடு மற்றும் குடிமக்கள் பங்கேற்பை உறுதி செய்ய, பல்வேறு மின்சார ஆட்சி முயற்சிகள் நடைமுறைப்படுத்தப்பட்டுள்ளன.</p>
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
              ஊராட்சி கற்றல் மையம் மற்றும் SIRD பார்வை
            </h2>
            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg sm:text-xl text-gray-950">ஊராட்சி நிர்வாக அதிகாரிகளின் திறன் மேம்பாட்டிற்காக கற்றல் மையம் நிறுவப்பட்டது. மாநில ஊரக மேம்பாட்டு நிறுவனம் (SIRD) பயணத்தின் மூலம் சிறந்த நடைமுறைகள் மற்றும் அறிவு பகிர்வு மேற்கொள்ளப்பட்டது.</p>
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
              மின்சார துணை நிலையம்
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Text Section */}
              <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
                <p className="text-lg sm:text-xl text-gray-950 mb-4">
                  கோவளம் ஊராட்சியில் புதிய மின்சார துணை நிலையம் அமைக்க தளம் ஒதுக்கப்பட்டுள்ளது.
                </p>
                <p className="text-lg sm:text-xl text-gray-950">
                  இந்த திட்டம் மின்விநியோக நம்பகத் தன்மையை உறுதி செய்வதோடு, பொருளாதார வளர்ச்சிக்கும் பொதுமக்களின் வாழ்க்கைத் தரத்திற்கும் உதவியாக இருக்கும்.
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
              நீர்த்தேக்கம்
            </h2>
            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl sm:text-2xl  text-amber-900 mb-4">சென்னையின் ஆறாவது நீர்த்தேக்கம் கோவளத்தில் உருவாக உள்ளது.</h3>
              <p className="text-lg sm:text-xl text-gray-950 mb-4">மாண்புமிகு மந்திரி தங்கம் தென்னரசு அவர்கள் அறிவித்தபடி, இந்தத் திட்டம் ரூ.360 கோடி செலவில் அமல்படுத்தப்படுகிறது.</p>

              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h4 className="text-xl sm:text-2xl  text-amber-900 mb-2">முக்கிய அம்சங்கள்:</h4>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>திறன்: 1.6 TMC (ஆயிரம் மில்லியன் கனஅடி)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>நிலப்பரப்பு: 4375 ஏக்கர்</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>வெள்ளநீர் சேமிப்பு: நகரின் நீர் மேலாண்மையை மேம்படுத்துவதுடன், வெள்ள அபாயத்தையும் குறைக்கும்.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="text-xl sm:text-2xl   text-amber-900 mb-2">நன்மைகள்:</h4>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>நம்பகமான நீர் பாதுகாப்பு</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>வெள்ள அபாயத் தடுப்பு</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>நீர் மேலாண்மை திறன் உயர்வு.</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg sm:text-xl text-gray-950 mt-4">கோவளத்தில் புதிய நீர்த்தேக்கம் கட்டும் பணி விரைவில் தொடங்கும் என எதிர்பார்க்கப்படுகிறது. இது சென்னையின் நீர் உள்கட்டமைப்புக்கு ஒரு குறிப்பிடத்தக்க ஊக்கத்தை அளிக்கும்.</p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h2 className="text-2xl  text-amber-900 mb-6 text-center">காட்சியகம்</h2>
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
              பாதுகாப்பும் CCTV கண்காணிப்பும்
            </h2>

            {/* Title Image */}
            <div className="mb-6">
              <img loading="lazy" decoding="async" src="/assets/images/cctv/Copy of 1.jpg" alt="CCTV office opening" className="rounded-xl w-full h-auto shadow-md" />
            </div>

            <div className="achievement-card bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg sm:text-xl text-gray-950 mb-4">
                கோவளம் ஊராட்சி, பொதுமக்கள் பாதுகாப்பிற்காக நவீன CCTV கண்காணிப்பை அறிமுகப்படுத்தியுள்ளது. முக்கிய சாலைகள், பொதுவிடங்கள், அரசுத்துறைகள் உட்பட பல இடங்களில் கேமராக்கள் நிறுவப்பட்டுள்ளன.
              </p>

              {/* Objectives */}
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl sm:text-2xl text-amber-900 mb-2">நோக்கங்கள்:</h3>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    முக்கியப் பகுதிகளைத் தொடர்ந்து கண்காணிப்பதன் மூலம் பொது பாதுகாப்பை மேம்படுத்துதல்.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    சட்ட அமலாக்க முகமைகளுக்கு நடவடிக்கை எடுக்கக்கூடிய காணொளி ஆதாரங்களுடன் ஆதரவளித்தல்.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    விபத்துக்கள், அவசரநிலைகள் அல்லது சந்தேகத்திற்குரிய நடவடிக்கைகளுக்கு விரைவான பதிலளிப்பை உறுதிப்படுத்துதல்.
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    சமூக நம்பிக்கையை மேம்படுத்துதல் மற்றும் குற்றச் செயல்களைத் தடுத்தல்.
                  </li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-amber-50 p-4 rounded-lg mb-4">
                <h3 className="text-xl sm:text-2xl text-amber-900 mb-2">முக்கிய அம்சங்கள்:</h3>
                <ul className="space-y-2 text-lg sm:text-xl">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    உயர் தெளிவுள்ள கேமராக்கள், இரவுக் காட்சி வசதி, இயக்க உணர்வு தொழில்நுட்பம்
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    நேரடி கண்காணிப்புக்கான மையக் கட்டுப்பாட்டு அறை
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    சேமிப்பு மற்றும் போலீசுடன் ஒருங்கிணைந்த வேகமான நடவடிக்கை
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    வேகமான பதிலளிப்புக்காக, உள்ளூர் காவல்துறை மற்றும் அவசர சேவைகளுடன் ஒருங்கிணைத்தல்.
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
                இத்திட்டம் குற்றங்களைக் குறைத்து, பொதுமக்களின் நம்பிக்கையை உயர்த்தியுள்ளது.
              </p>

              <p className="text-lg sm:text-xl text-gray-950 mt-4">
                கூடுதலாக, நகர போக்குவரத்து மற்றும் பிற குடிமக்கள் சேவைகளின் மேலாண்மைக்கும் உதவும் வகையில் செயல்படுகின்றது.
              </p></div>
          </div>

          <div className="bg-amber-50 text-center   rounded-lg p-4 mb-4">
            <p className="text-amber-700">சிறந்த ஆட்சி மற்றும் சமூக முன்னேற்றத்தில் முன்னுதாரணமாக விளங்க உறுதியாகின்றோம்.</p>
          </div>

        </div>


      </section>

      {/* AadharCamp */}
      <section id="AadharCamp" className="content hidden mt-10 bg-white">
        <header className="bg-amber-500 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl  mb-2">ஆதார் சேவைகள்</h1>
            <p className="text-lg sm:text-xl text-amber-100">கோவளம் பஞ்சாயத்து – உங்கள் தனித்துவமான அடையாளம்</p>
          </div>
        </header>

        {/* Hero div */}
        <div className="py-12 bg-gradient-to-r from-amber-400 to-amber-600 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl  mb-4">அரசு சேவைகளுக்கான உங்கள் 12 இலக்க சாவி!</h2>
              <p className="text-lg sm:text-xl text-amber-100 mb-6">இப்போது உங்கள் வசதிக்காக கோவளம் பஞ்சாயத்தில் நிரந்தர ஆதார் மையம் செயல்பாட்டில் உள்ளது!</p>
              <a href="#services" className="text-lg sm:text-xl bg-white text-amber-600 px-6 py-2 rounded-lg  hover:bg-gray-100 transition">மேலும் அறிய...</a>
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
              <h2 className="text-3xl  text-amber-600 mb-4">✅ ஆதார் என்பது என்ன?</h2>
              <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">ஆதார் என்பது இந்திய குடிமக்களுக்கு அடையாளம் மற்றும் முகவரி ஆதாரமாக இருக்கும் 12 இலக்க தனித்துவமான அடையாள எண் ஆகும்.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl  text-amber-700 mb-3">🔹 அடையாளச் சரிபார்ப்பு</h3>
                <p className="text-lg sm:text-xl text-gray-950">இந்தியாவின் எங்கும் அடையாளம் மற்றும் முகவரி ஆதாரமாக பயன்படுகிறது.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl  text-amber-700 mb-3">🔹 அரசு சேவைகள்</h3>
                <p className="text-lg sm:text-xl text-gray-950">விவசாய மானியம், நலத்திட்டங்கள் போன்ற அரசுச் சேவைகளுக்கு அணுகலை வழங்குகிறது.</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl sm:text-2xl  text-amber-700 mb-3">🔹 நிதி உள்ளடக்கம்</h3>
                <p className="text-lg sm:text-xl text-gray-950">டிஜிட்டல் பணம் பரிமாற்றம் மற்றும் வங்கிச் சேவைகளுக்கு ஆதாரமாக பயன்படுகிறது.</p>
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
            <h2 className="text-3xl  text-center text-amber-600 mb-12">ஆதார் முகாமின் முக்கிய அம்சங்கள்:</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 text-2xl mb-4">1</div>
                <h3 className="text-xl sm:text-2xl  mb-3">வசதிகர சேவைகள்</h3>
                <p className="text-lg sm:text-xl text-gray-950">ஆதார் சேவைகளை எங்கள் குடியிருப்பாளர்களின் வீட்டு வாசலிலேயே கொண்டு வந்து, பதிவு செய்யவும் விவரங்களை புதுப்பிக்கவும் எளிதாக்கியுள்ளோம்.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 text-2xl mb-4">2</div>
                <h3 className="text-xl sm:text-2xl  mb-3">சமூகத்தை சென்றடையும் முயற்சி</h3>
                <p className="text-lg sm:text-xl text-gray-950">முகாம்கள் மூலம் ஆதாரின் முக்கியத்துவம் குறித்து விழிப்புணர்வு ஏற்படுத்தி, அதிகமான மக்களை சேவைக்கு கொண்டு வந்தோம்.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-amber-600 text-2xl mb-4">3</div>
                <h3 className="text-xl sm:text-2xl  mb-3">தடையற்ற செயல்பாடு</h3>
                <p className="text-lg sm:text-xl text-gray-950">முன்னேற்றப்பட்ட செயல்முறை மூலம், காத்திருக்க வேண்டிய நேரம் குறைந்தது மற்றும் விண்ணப்பதாரர்களுக்கான அனுபவம் மேம்பட்டது.</p>
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
                <h2 className="text-2xl sm:text-3xl  mb-6">📢 இப்போது நிரந்தர ஆதார் மையம் செயல்பாட்டில்!!</h2>
                <p className="text-lg sm:text-xl text-amber-100 mb-6">முகாம்களின் வெற்றியைத் தொடர்ந்து, கோவளம் பஞ்சாயத்தில் ஒரு நிரந்தர ஆதார் மையம் அமைக்கப்பட்டுள்ளது.</p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-amber-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl">✔️ எளிய அணுகல்: முகாம் காத்திருக்க தேவையில்லை – நீண்டதூர பயணம் இல்லாமல் உள்ளூர் சேவைகள்</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl">✔️ வசதியான நேரம்: உங்களுக்கே ஏற்ற நேரத்தில் சேவைகளை பெறுங்கள்</p>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-600 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg sm:text-xl">✔️ விரைவு சேவை: செயல்முறை வேகம் அதிகரிக்கிறது, காத்திருக்கும் நேரம் குறைகிறது</p>
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
            <h2 className="text-3xl  text-center text-amber-600 mb-12">மற்ற ஆதார் நன்மைகள்:</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl sm:text-2xl  mb-3">🔒 மோசடிகள் தடுப்பு</h3>
                <p className="text-lg sm:text-xl text-gray-950">அடையாளத் திருட்டு மற்றும் மோசடிகளை தடுக்கும்</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl sm:text-2xl  mb-3">🧾 எளிய செயல்முறைகள்</h3>
                <p className="text-lg sm:text-xl text-gray-950">பாஸ்போர்ட் விண்ணப்பம், வரி தாக்கல் போன்றவற்றை எளிமையாக்குகிறது</p>
              </div>
              <div className="border-l-4 border-amber-500 pl-6">
                <h3 className="text-xl sm:text-2xl  mb-3">🎯 நலத்திட்ட விநியோகம்</h3>
                <p className="text-lg sm:text-xl text-gray-950">அரசு நலத்திட்டங்களை திறம்பட பெற உதவுகிறது</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="GramaSabhaCamp" className="content hidden mt-12 bg-white">
        <section className="bg-gradient-to-tr from-amber-50 to-yellow-200 text-gray-950 py-20">
          <div className="max-w-[80vw] mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-2xl sm:text-3xl  mb-6">மக்கள் பங்கேற்பில் ஊக்கமளித்து சமூகத்தை வலுப்படுத்துதல்</h1>
              <p className="text-lg sm:text-xl   mb-8">கிராம சபை என்பது பொதுமக்கள் உள்ளூர் நிர்வாகம் மற்றும் முடிவெடுத்தல் செயல்களில் நேரடியாக பங்கேற்கும் ஒரு முக்கிய மேடையாகும்.</p>
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
            <h2 className="text-3xl  text-center mb-12 text-gray-950">கிராம சபையின் விரிவான அம்சங்கள் </h2>
            <div className="grid-container grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="grid-item bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   mb-3 text-gray-950">✅ உள்ளூர் பிரச்சனைகள் குறித்து பேசும் மேடை</h3>
                <p className="text-lg sm:text-xl text-gray-950">– குடியிருப்பாளர்கள் தங்களது புகார்கள், குறைகள் மற்றும் எதிர்பார்ப்புகளை பகிர்ந்து கொள்ளக்கூடிய இடமாக உள்ளது.
                  – அடிப்படை வசதிகள், பொதுச் சேவைகள், சமூக நலன் போன்றவை குறித்து விவாதிக்க உதவுகிறது.</p>
              </div>
              <div className="grid-item bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   mb-3 text-gray-950">✅ வெளிப்படைத்தன்மையை அதிகரிக்கிறது</h3>
                <p className="text-lg sm:text-xl text-gray-950">– பஞ்சாயத்து நடவடிக்கைகள் மற்றும் முடிவெடுப்புகள் வெளிப்படையாக நடைபெற, மக்கள் நம்பிக்கையுடன் பங்கேற்கும் சூழலை உருவாக்குகிறது.</p>
              </div>
              <div className="grid-item bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   mb-3 text-gray-950">✅ சமூக பங்கேற்பை ஊக்குவிக்கிறது</h3>
                <p className="text-lg sm:text-xl text-gray-950">– நிர்வாகத்தில் குடிமக்கள் நேரடியாக பங்கேற்று, தங்களது உரிமையும் பொறுப்பும் உணர உதவுகிறது.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-[80vw] mx-auto px-4">
            <h2 className="text-3xl  text-center mb-12 text-gray-950">நடப்பில் உள்ள கிராம சபை
              (Gramasabha in Action)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/5.JPG" alt="Village meeting" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">வார்டு நிலை விவாதங்கள்
                    (Ward-level Discussions)</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/4.JPG" alt="Community participation" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">சமூகப் பங்கேற்பு
                    (Community Participation)</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/3.JPG" alt="Group planning" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">திறந்த மேடைக் கலந்துரையாடல்கள்
                    (Open Forum Debates)</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/2.JPG" alt="Voting process" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">ஜனநாயக செயல்முறைகள்
                    (Democratic Processes)</span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img loading="lazy" decoding="async" src="/assets/images/gramaSabha/1.JPG" alt="Women participation" className="w-full h-64 object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white  text-lg">நபரின் பங்கேற்பு
                    (Citizen Participation)</span>
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
                <h2 className="text-2xl sm:text-3xl  mb-6 text-gray-950">கிராம சபை கூட்டங்களின் முக்கிய அம்சங்கள்</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl text-gray-950 mb-1">🔸 வார்டு கூட்டங்கள்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">– ஒவ்வொரு வார்டிலும் நடைபெறுவதால், ஒவ்வொரு பகுதியில் உள்ள பிரச்சனைகளையும் நேரடியாக தீர்க்க உதவுகிறது.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className=" text-lg sm:text-xl  text-gray-950 mb-1">🔸 முறையான நேரஅட்டவணை</h3>
                      <p className="text-lg sm:text-xl text-gray-950">– வழக்கமான கால அட்டவணை மூலம், பிரச்சனைகள் தாமதமின்றி எடுத்துக்கொள்ளப்படுகின்றன.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className=" text-lg sm:text-xl  text-gray-950 mb-1">🔸 திறந்த விவாதம்</h3>
                      <p className="text-lg sm:text-xl text-gray-950">– குடிமக்களிடையே சிந்தனைகள் மற்றும் பார்வைகளை பகிர்வதற்கான சூழல் உருவாகிறது.</p>
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
            <h2 className="text-3xl  text-center mb-12">🎯 கிராம சபையின் நன்மைகள்</h2>
            <div className="grid-container grid md:grid-cols-3 gap-8">
              <div className="grid-item bg-amber-100  p-6 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl   mb-3">✔️ மேம்பட்ட நிர்வாகம்</h3>
                <p className="text-lg sm:text-xl">– பஞ்சாயத்து முடிவுகள் மக்களின் தேவைகள் மற்றும் முன்னுரிமைகளை பிரதிபலிக்கும் வகையில் அமையும்.</p>
              </div>
              <div className="grid-item bg-amber-100  p-6 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl   mb-3">✔️ கணக்கெடுப்பு மற்றும் நம்பிக்கை</h3>
                <p className="text-lg sm:text-xl">– தொடர்ந்து நடைபெறும் கூட்டங்கள், தேர்ந்தெடுக்கப்பட்ட பிரதிநிதிகள் பொறுப்புடன் செயல்படுகிறார்களா என்பதை கண்காணிக்க உதவுகிறது.</p>
              </div>
              <div className="grid-item bg-amber-100 p-6 rounded-xl backdrop-filter backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl   mb-3">✔️ குடிமக்கள் அதிகாரம்</h3>
                <p className="text-lg sm:text-xl">– குடிமக்கள் தங்களது கருத்துகளை வெளிப்படுத்தும் வாய்ப்பு பெறுவதன் மூலம், ஆட்சியில் நேரடியாக பங்கேற்கும் நிலை ஏற்படுகிறது.</p>
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
                <h1 className="text-2xl sm:text-3xl  text-amber-900 mb-3">PAN அட்டை சேவைகள்</h1>
                <p className="text-lg sm:text-xl text-amber-800">இப்போது நிரந்தரமாக கோவளம் பஞ்சாயத்தில் கிடைக்கிறது!</p>
                <div className="mt-6">
                  <a href="#services" className="bg-white text-amber-700 px-6 py-2 rounded-full  shadow-md hover:bg-amber-50 transition duration-300 inline-block">எங்கள் சேவைகள்</a>
                </div>
              </div>
              <div className="md:w-1/2">
                <img loading="lazy" decoding="async" src="/assets/images/events/pan.png" alt="PAN Card Service" className=" w-full h-auto" />
              </div>
            </div>
          </header>

          {/* Introduction div */}
          <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-4">🏢 PAN அட்டை மையம் – எங்கள் சேவை பற்றி </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">முன்னதாக, PAN அட்டை முகாம்கள் மூலம் பொதுமக்களுக்கு தேவையான சேவைகளை நாங்கள் சிறப்பாக வழங்கியுள்ளோம்.</p>
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Community Service" className="rounded-lg w-full h-auto" />
              </div>
              <div>
                <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Documents" className="rounded-lg w-full h-auto mb-4" />
                <p className="text-lg sm:text-xl text-gray-950">இப்போது, உங்கள் வசதிக்காக நிரந்தர PAN அட்டை மையம் கோவளம் பஞ்சாயத்தில் செயல்படுகிறது என்பதை மகிழ்ச்சியுடன் தெரிவித்துக் கொள்கிறோம்!</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">📸 முந்தைய முகாம்களின் புகைப்படங்கள்:</h2>
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
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">💼 வழங்கப்படும் சேவைகள்:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:border-amber-300 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2 text-center">🆕 புதிய PAN அட்டை</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">புதிய PAN அட்டையை எளிதாகப் பெறுங்கள் – விண்ணப்பம் முதல் சமர்ப்பிப்பு வரை முழு உதவி வழங்கப்படும்.</p>
              </div>

              {/* Service 2 */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:border-amber-300 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2 text-center">📝 PAN அட்டை திருத்தங்கள்</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">உங்கள் PAN அட்டையில் உள்ள பெயர், பிறந்த தேதி போன்ற விவரங்களில் திருத்தங்கள் செய்ய உதவுகிறோம்.</p>
              </div>

              {/* Service 3 */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 hover:border-amber-300 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2 text-center">🧾 PAN அட்டை மறுஅச்சடிப்பு</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">இழந்த அல்லது சேதமடைந்த PAN அட்டையை மீண்டும் அச்சடிக்க உதவுகிறோம்.</p>
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
                <h1 className="text-2xl md:text-3xl  text-amber-900 mb-3">🗳️ தேர்தல் அடையாள அட்டை முகாம்!</h1>
                <p className="text-lg sm:text-xl text-amber-800 mb-4">இப்போது கோவளம் பஞ்சாயத்து சேவை மையம் மூலம் பெறலாம். </p>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-amber-700">✅ எளிதான மற்றும் வசதியான செயல்முறை</span>
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
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-4">🏛️ கோவளம் பஞ்சாயத்தில் வாக்காளர் அடையாள அட்டை சேவைகள்</h2>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-lg sm:text-xl text-gray-700 mb-4">கோவளம் பஞ்சாயத்து, முந்தைய காலங்களில் பல்வேறு
                  🔹 வாக்காளர் அடையாள அட்டை முகாம்கள் நடத்தி,
                  பொதுமக்களுக்கு பதிவு, திருத்தம் மற்றும் புதுப்பிப்பு சேவைகளை எளிமையாகக் கிடைக்கும் வகையில் வழங்கியுள்ளது.</p>
                <p className="text-lg sm:text-xl text-gray-700">இப்போது, மக்களுக்கு மேலும் எளிமையாகவும் எப்போதும் அணுகக்கூடியவையாகவும் இருக்க,
                  பஞ்சாயத்து சேவை ஜன்னல் மூலமாக நிரந்தர வோட்டர் ID சேவைகள் வழங்கப்படுகின்றன.</p>
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                  <p className="text-lg sm:text-xl text-amber-700 ">🗣️ "உங்கள் வாக்கே உங்கள் குரல். சரியான வாக்காளர் அடையாள அட்டையுடன் உங்கள் வாக்கு பதிவாகும் என்பதை உறுதிப்படுத்துங்கள்."</p>
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
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">எளிய 3 படி செயல்முறை:</h2>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center mb-6 md:mb-0">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                  <span className="text-amber-600  text-xl">1</span>
                </div>
                <p className="text-lg sm:text-xl ">பஞ்சாயத்து அலுவலகத்திற்கு வருகை தாருங்கள் </p>
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
                <p className="text-lg sm:text-xl ">தேவையான ஆவணங்களை சமர்ப்பியுங்கள்</p>
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
                <p className="text-lg sm:text-xl ">உறுதிப்பத்திரம் (Acknowledgement) பெற்றுக்கொள்ளுங்கள்</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">📸 முந்தைய வோட்டர் ID முகாம்கள்:</h2>
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
                <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2909.JPG" alt="– முகாம் படம் 1" className="w-full h-80 object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img loading="lazy" decoding="async" src="/assets/images/voterIDCamp/IMG_2925.JPG" alt="– முகாம் படம் 2" className="w-full h-80 object-cover hover:scale-110 transition duration-300" />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img loading="lazy" decoding="async" src="/assets/images/aadhar_camp/IMG_2527.JPG" alt="– முகாம் படம் 3" className="w-full h-30 object-cover hover:scale-110 transition duration-300" />
              </div>
            </div>

          </div>

          {/* Services div */}
          <div id="services" className="bg-white rounded-xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">📌 வழங்கப்படும் சேவைகள்:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Service 1 */}
              <div className="service-card bg-amber-50 p-6 rounded-lg border border-amber-100 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl  text-amber-900 mb-2 text-center">🆕 புதிய வாக்காளர் அட்டை பதிவு</h3>
                <p className="text-lg sm:text-xl text-gray-700 text-center">தேவையான ஆவணங்களுடன், எளிமையான வழிகாட்டியுடன் புதிய வோட்டர் ID-க்கு விண்ணப்பியுங்கள்.</p>
              </div>

              {/* Service 2 */}
              <div className="service-card bg-amber-50 p-6 rounded-lg border border-amber-100 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   text-amber-900 mb-2 text-center">📝 வாக்காளர் அட்டை திருத்தம்</h3>
                <p className="text-lg sm:text-xl text-gray-700 text-center">பெயர், முகவரி, புகைப்படம் போன்றவற்றில் உள்ள பிழைகளை திருத்தவும், தகவல்களை புதுப்பிக்கவும் உதவுகிறோம்.</p>
              </div>

              {/* Service 3 */}
              <div className="service-card bg-amber-50 p-6 rounded-lg border border-amber-100 transition duration-300">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   text-amber-900 mb-2 text-center">🧾 மீண்டும் அச்சிடுதல் (மாற்று அட்டை)</h3>
                <p className="text-lg sm:text-xl text-gray-700 text-center">இழந்த அல்லது சேதமடைந்த வாக்காளர் அட்டை -க்கு மாற்று அட்டை பெற உதவுகிறோம்.</p>
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
                <h1 className="text-2xl sm:text-3xl  text-amber-900 mb-4">🌊 கூட்டு கடற்கரை சுத்தம் செய்யும் இயக்கம்!</h1>
                <p className="text-lg sm:text:xl text-amber-800 mb-6">கோவளம் கடற்கரையின் அழகை பாதுகாக்க, வாரந்தோறும் மக்கள் ஒற்றுமையாக நடாத்தும் சுத்தமாக்கும் முயற்சி</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-amber-700 text-lg sm:text:xl">#கிளீன்_கோவளம்</span>
                  <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-amber-700 text-lg sm:text:xl">#பிளாஸ்டிக்_இல்லா_கடற்கரை</span>
                  <span className="bg-white bg-opacity-80 px-3 py-1 rounded-full text-amber-700 text-lg sm:text:xl">#சமூகநலம்</span>
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
                <h2 className="text-xl sm:text-2xl   text-amber-900 mb-4">🌟 இயக்கத்தைப் பற்றி</h2>
                <p className="text-lg sm:text:xl text-gray-700 mb-4">கோவளம் பஞ்சாயத்து, பல்வேறு தன்னார்வ அமைப்புகள், சமூகக் குழுக்கள், மற்றும் விருப்பதாரர்கள் உடன் இணைந்து, வாரந்தோறும் கூட்டு கடற்கரை சுத்தமாக்கும் இயக்கத்தை முன்னெடுத்து வருகிறது.</p>
                <p className="text-lg sm:text:xl text-gray-700">✅ இதில் EFI, Exnora, மற்றும் பிற உள்ளூர் தன்னார்வ அமைப்புகள் தீவிரமாக பங்கேற்கின்றன.
                  ✅ NCC, NSS மாணவர்கள், தொழிற் குழு பெண்கள் (SHG), குழந்தைகள் மற்றும் சமூக விருப்பதாரர்கள் அனைவரும் பங்கேற்று ஒரு பெரிய மாற்றத்தை உருவாக்குகிறார்கள்.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_1452.HEIC.jpg" alt="Volunteers cleaning" className="rounded-lg w-full h-48 object-cover shadow-md" />
                <img loading="lazy" decoding="async" src="/assets/images/beachCleaning/IMG_5377.HEIC.jpg" alt="Group photo" className="rounded-lg w-full h-48 object-cover shadow-md" />
              </div>
            </div>
          </div>

          {/* Importance div */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl sm:text-2xl   text-amber-900 mb-8 text-center">❗ ஏன் இது முக்கியம்?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  🌿 சுற்றுச்சூழல் பாதுகாப்பு
                </h3>
                <p className="text-lg sm:text:xl text-gray-700">– கடல்சார் உயிரினங்களையும், கரையோர சூழலையும் பிளாஸ்டிக் மற்றும் கழிவுகளிலிருந்து காப்பாற்றுகிறது.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  🏥 பொதுச் சுகாதாரம்
                </h3>
                <p className="text-lg sm:text:xl text-gray-700">– கடற்கரை கழிவுகளால் ஏற்படும் உடல் நல பாதிப்புகளை குறைக்கிறது.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  🏖️ சுற்றுலா மற்றும் உள்ளூர் பொருளாதாரம்
                </h3>
                <p className="text-lg sm:text:xl text-gray-700">– தூய்மையான கடற்கரை அதிக சுற்றுலா பயணிகளை ஈர்த்து, உள்ளூர் வர்த்தகங்களை ஊக்குவிக்கிறது.</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div id="gallery" className="bg-white rounded-2xl p-6 mb-8 shadow-md">
            <h2 className="text-xl sm:text-2xl   text-amber-900 mb-6 text-center">🔍 சுத்தம் செய்யும் பணிகள் நேரில்...</h2>
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
                  <p className="text-lg sm:text:xl text-amber-800">📆 அடுத்த வார சுத்தமாக்கல் பணியில் நீங்கள் பங்கேற்க தயாரா?</p>
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
                <h2 className="text-2xl sm:text-3xl font-semibold text-amber-800 mb-3">🤝 எங்கள் நம்பத்தகுந்த சகயோகிகள்</h2>
                <div className="w-20 h-1 bg-amber-400 mx-auto"></div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                {/* Partner 1 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">EFI (Environmental Foundation of India)</div>
                </div>

                {/* Partner 2 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">Exnora</div>
                </div>

                {/* Partner 3 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">NCC  மாணவர்கள்</div>
                </div>

                {/* Partner 4 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">NSS  மாணவர்கள்</div>
                </div>

                {/* Partner 5 */}
                <div className="bg-amber-50 px-6 py-4 rounded-lg border border-amber-200 text-center min-w-[120px] hover:bg-amber-100 transition-colors">
                  <div className="text-amber-700 font-medium">தொழிற் குழு பெண்கள் (SHG)</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-amber-600">🌱 பெரிய மாற்றத்திற்கு ஒருங்கிணைந்த கூட்டாய்வு!</p>
              </div>
            </div>
          </div>

          {/* Objectives div */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl text-amber-900 mb-6 text-center">🎯 எங்கள் நோக்கங்கள்:</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🌊 கடற்கரை பாதுகாப்பு</h3>
                <p className="text-lg sm:text:xl text-gray-700">– எதிர்கால தலைமுறைக்காக கடலோர சூழலைப் பாதுகாக்கும் முயற்சி.</p>
              </div>
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">♻️ கழிவுப்பொருள் மேலாண்மை</h3>
                <p className="text-lg sm:text:xl text-gray-700">– சேகரிக்கப்பட்ட கழிவுகளை சரியான முறையில் நிர்வகித்து, மறுசுழற்சி செய்யும் செயல்.</p>
              </div>
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">👨‍👩‍👧‍👦 சமூக பங்கேற்பு</h3>
                <p className="text-gray-700">– சுற்றுச்சூழலுக்காக மக்களை ஒன்றிணைக்கும் சமூகச் செயல்.</p>
              </div>
              <div className="card-hover bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300 text-center">
                <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🌍 சுற்றுலா மேம்பாடு</h3>
                <p className="text-lg sm:text:xl text-gray-700">– தூய்மையான கடற்கரைகள், அதிக சுற்றுலாப் பயணிகளை ஈர்த்து, சமூக வளர்ச்சிக்கு வழிவகுக்கும்.</p>
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
                <h1 className="text-2xl sm:text-3xl  text-amber-900 mb-4">கோவளம் மருத்துவ முகாம்கள்M</h1>
                <p className="text-lg sm:text-xl text-amber-800 mb-6">எங்கள் சமூகத்திற்கு எளிதில் கிடைக்கும் மருத்துவ சேவைகள்</p>
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base sm:text-lg text-amber-700 ">🩺 தேவைப்படும் அனைவருக்கும் இலவச மருத்துவ சேவைகள்!</span>
                </div>
                <a href="#services" className="bg-white text-lg sm:text-xl text-amber-600 px-8 py-3 rounded-full  shadow-md hover:bg-amber-50 transition duration-300 inline-block">📌 சேவைகளைப் பார்க்கவும்</a>
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
                <h2 className="text-2xl sm:text-3xl  text-amber-900 mb-4">🏥 சமூக மருத்துவ சேவையின் முன்னெடுப்பு</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-4">கோவளம் பஞ்சாயத்து, அரசு மருத்துவமனைகள் மற்றும் சிறந்த தனியார் மருத்துவ நிறுவனங்களுடன் இணைந்து பல்வேறு மருத்துவ முகாம்கள் ஏற்பாடு செய்துள்ளது.</p>
                <p className="text-lg sm:text-xl text-gray-950">இந்த முகாம்கள், மக்கள் நலன் மற்றும் சுகாதார மேம்பாட்டுக்கான பஞ்சாயத்தின் உறுதியான முயற்சியை பிரதிபலிக்கின்றன.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/2.jpg" alt="Doctor consultation" className="rounded-lg w-full h-48 object-cover shadow" />
                <img loading="lazy" decoding="async" src="/assets/images/medicalCamp/3.jpg" alt="Medical checkup" className="rounded-lg w-full h-48 object-cover shadow" />
              </div>
            </div>
          </div>

          {/* Participating Institutions */}
          <div id="services" className="bg-amber-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl sm:text-3xl  text-amber-900 mb-8 text-center">👨‍⚕️ பங்குபெற்ற மருத்துவ நிறுவனங்கள்:</h2>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">அரசு மருத்துவமனை</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">செட்டிநாடு ஹெல்த் கேர்</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">NIEPMD(பல குறைபாடுகள் உள்ள நபர்களின் அதிகாரமளிப்புக்கான தேசிய நிறுவனம்)</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl  text-amber-900">தாகூர் மருத்துவக் கல்லூரி</h3>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center flex flex-col items-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl text-amber-900">சவித்தா பிசியோதெரபி</h3>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="bg-white rounded-2xl p-6 mb-10 shadow-md">
            <h2 className="text-2xl sm:text-3xl text-amber-900 mb-6 text-center">📸 மருத்துவ முகாம் புகைப்படங்கள்</h2>
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
            <h2 className="text-2xl sm:text-3xl  text-amber-900 mb-8 text-center">✅ மருத்துவ முகாமில் வழங்கப்படும் சேவைகள்:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="service-card bg-amber-50 p-6 rounded-xl border border-amber-100 transition duration-300">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-lg mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🔹 பொதுவான உடல்நிலை பரிசோதனை</h3>
                    <p className="text-lg sm:text-xl text-gray-950">– அனைத்து வயதினருக்கும் முழுமையான பரிசோதனை</p>
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
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🔹 நிபுணர் ஆலோசனைகள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">– பல்வேறு மருத்துவ துறைகளில் சிறப்பு மருத்துவர் ஆலோசனைகள்</p>
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
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🔹 நோயறிதல் பரிசோதனைகள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">– இரத்தம் போன்ற அடிப்படை பரிசோதனைகள்</p>
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
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🔹 மருந்துகள் வழங்கல்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">– தேவையான மருந்துகள் இருப்பின் வழங்கப்படும்</p>
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
                    <h3 className="text-xl sm:text-2xl  text-amber-900 mb-2">🔹 பிசியோதெரபி சேவை</h3>
                    <p className="text-lg sm:text-xl text-gray-950">– அடிப்படை பிசியோதெரபி மற்றும் வழிகாட்டுதல்</p>
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
                    <h3 className="text-xl sm:text-2xl text-amber-900 mb-2">🔹 சுகாதாரக் கல்வி</h3>
                    <p className="text-lg sm:text-xl text-gray-950">– நோய் தடுப்பு விழிப்புணர்வு மற்றும் ஆரோக்கிய வாழ்க்கை நடைமுறை குறித்து ஆலோசனை</p>
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
          <h2 className="text-2xl sm:text-3xl text-amber-500 mb-4">ஆங்கன்வாடி</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-full mx-auto">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-stone-600 to-stone-400 rounded-3xl p-8 md:p-12 mb-16 text-white shadow-lg">
            <div className="max-w-5xl">
              <h1 className="text-2xl sm:text-3xl  mb-6">ஆங்கன்வாடி மையங்கள்.</h1>
              <p className="text-xl sm:text-2xl leading-relaxed opacity-90">
                அரசு நிதியுதவி பெறும் குழந்தைகள் பராமரிப்பு மற்றும் தாய்மார்கள் நல மையங்கள், குழந்தைகள், கர்ப்பிணிப் பெண்கள் மற்றும் பாலூட்டும் தாய்மார்களுக்கு அத்தியாவசிய சேவைகளை வழங்குகின்றன.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Services */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services Card */}
              <div className="bg-stone-50 rounded-2xl p-8 border-l-8 border-yellow-200">
                <h2 className="text-xl sm:text-2xl text-amber-600 mb-6">சேவைகள்</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">துணை ஊட்டச்சத்து</h3>
                    <p className="text-lg sm:text-xl text-gray-950">குழந்தைகள், கர்ப்பிணிப் பெண்கள் மற்றும் பாலூட்டும் தாய்மார்களுக்கு ஊட்டச்சத்து நிறைந்த உணவை வழங்குதல்.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">நோய்த்தடுப்பு</h3>
                    <p className="text-lg sm:text-xl text-gray-950">குழந்தைகள் மற்றும் கர்ப்பிணிப் பெண்களுக்கு நோய்த்தடுப்பு அமர்வுகளை நடத்துதல்.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">சுகாதார பரிசோதனைகள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">குழந்தைகள் மற்றும் கர்ப்பிணிப் பெண்களுக்கு வழக்கமான சுகாதாரப் பரிசோதனைகள்.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl text-amber-600 mb-2">பரிந்துரை சேவைகள்</h3>
                    <p className="text-lg sm:text-xl text-gray-950">குழந்தைகள் மற்றும் கர்ப்பிணிப் பெண்களுக்குச் சிறப்பு சிகிச்சைக்காக மருத்துவமனைகளுக்குப் பரிந்துரை செய்தல்.</p>
                  </div>
                </div>
              </div>

              {/* Locations Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-amber-200">
                <h2 className="text-xl sm:text-2xl text-amber-600 mb-6">கோவளம் பஞ்சாயத்தில் உள்ள நமது மையங்கள்.</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl  text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">1</span>
                      கைலாசநாதர் கோவில் தெரு
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">உள்ளூர் சமூகத்திற்கு அனைத்து ஆங்கன்வாடி சேவைகளையும் வழங்குகிறது.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-lg sm:text-xl text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">2</span>
                      அன்சாரி நகர்
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">அன்சாரி நகர் பகுதிக்கு குழந்தைகள் பராமரிப்பு சேவைகளை வழங்குதல்.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className=" text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">3</span>
                      Padavattamman Kovil Street
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">தாய்மார்களின் ஆரோக்கியம் மற்றும் மழலையர் பள்ளி கல்வியில் கவனம் செலுத்துகிறது.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className=" text-lg sm:text-xl text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">4</span>
                      செங்கனியம்மன் கோவில் தெரு
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">ஊட்டச்சத்து திட்டங்கள் மற்றும் சுகாதாரக் கல்வியை வழங்குகிறது.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl md:col-span-2">
                    <h3 className=" text-lg sm:text-xl text-amber-600 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-amber-400 text-white rounded-full flex items-center justify-center mr-3">5</span>
                      செம்மஞ்சேரி குப்பம்
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-950">கடற்கரை சமூகத்திற்கு விரிவான ஆங்கன்வாடி சேவைகளை வழங்குகிறது.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards */}
            <div className="space-y-8">
              {/* About Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-yellow-400">
                <h2 className="text-xl sm:text-2xl  text-amber-600 mb-6">ஆங்கன்வாடி பற்றி</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">
                  ஆங்கன்வாடி என்பது, ஒருங்கிணைந்த குழந்தைகள் மேம்பாட்டு சேவைகள் (ICDS) திட்டத்தின் கீழ் இந்தியாவில் நிறுவப்பட்ட, அரசு நிதியுதவி பெறும் குழந்தைகள் மற்றும் தாய்மார்களுக்கான ஒரு பராமரிப்பு மையமாகும்.
                </p>
                <div className="bg-amber-50 p-6 rounded-xl">
                  <h3 className="text-lg sm:text-xl text-amber-600 mb-3">முக்கிய நோக்கம்</h3>
                  <p className="text-lg sm:text-xl text-gray-950">
                    தேவைப்படும் சமூகங்களில் உள்ள குழந்தைகள், கர்ப்பிணிப் பெண்கள் மற்றும் பாலூட்டும் தாய்மார்களுக்கு அத்தியாவசிய சேவைகளை வழங்குதல்.
                  </p>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="bg-gray-400 rounded-2xl p-8 text-white">
                <h2 className="text-xl sm:text-2xl mb-6">முக்கிய நன்மைகள்</h2>
                <ul className="text-lg sm:text-xl space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>குழந்தைகள் மற்றும் தாய்மார்களுக்கு மேம்பட்ட ஊட்டச்சத்து</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>வழக்கமான பரிசோதனைகள் மூலம் மேம்பட்ட உடல்நலம்</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>ஆரம்ப கால குழந்தைப் பருவ கல்வி அடித்தளம்</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>கல்வி மூலம் பெண்களை மேம்படுத்துதல்.</span>
                  </li>
                </ul>
              </div>

              {/* Eligibility Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-xl sm:text-2xl text-amber-600 mb-6">தகுதி</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl ml-3 text-gray-950">0-6 வயது வரையிலான குழந்தைகள்</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl ml-3 text-gray-950">பொருளாதார ரீதியாகப் பின்தங்கியுள்ள கர்ப்பிணிப் பெண்கள்.</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <span className="text-lg sm:text-xl ml-3 text-gray-950">பொருளாதார ரீதியாகப் பின்தங்கியுள்ள பாலூட்டும் தாய்மார்கள்</span>
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
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">ஆங்கன்வாடி மையங்கள்</h6>
          </button>

          {/* Child Development Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('anganvadi',2)", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">குழந்தை வளர்ச்சி</h6>
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
                <h2 className="text-2xl sm:text-3xl text-amber-500 mb-4">கல்வி நிறுவனங்கள்</h2>
                <div className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>
              </div>

              {/* Main Content Grid */}
              <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8">
                {/* Left Column - School Importance */}
                <div className="lg:w-3/4">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    {/* School Header */}
                    <div className="bg-stone-500 p-6 md:p-8">
                      <h3 className="text-xl sm:text-2xl text-white">பள்ளிகள்</h3>
                      <p className="text-lg sm:text-xl text-stone-100 mt-2">கோவளம் ஊராட்சி அதன் 6 பள்ளிகளுடன் தரமான கல்விக்கு உறுதியளிக்கிறது.</p>
                    </div>

                    {/* School Importance */}
                    <div className="p-6 md:p-8">
                      <p className="text-lg sm:text-xl text-gray-950 mb-8 leading-relaxed">
                        பள்ளிகள் தனிப்பட்ட நபர்கள் மற்றும் சமூகத்தின் ஒட்டுமொத்த வளர்ச்சிக்கு ஒரு முக்கிய பங்கை வகிக்கின்றன. கோவளம் ஊராட்சி, அதன் 6 பள்ளிகளுடன், அதன் குடியிருப்பாளர்களுக்கு தரமான கல்வியை வழங்குவதில் முக்கியப் பங்கு வகித்துள்ளது. பள்ளிகளின் முக்கியத்துவத்தை எடுத்துரைக்கும் சில முக்கிய காரணங்கள் இங்கே:
                      </p>

                      {/* Improved Benefits Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Intellectual Development */}
                        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-slate-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">அறிவுசார் மற்றும் அறிவாற்றல் வளர்ச்சி</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-slate-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>அறிவு பெறுதல்:</strong> பள்ளிகள் மாணவர்களுக்கு பல்வேறு பாடங்களில் அறிவைப் பெறுவதற்கான ஒரு கட்டமைக்கப்பட்ட சூழலை வழங்குகின்றன.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-slate-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>திறனாய்வு சிந்தனை:</strong> பள்ளிகள் மாணவர்கள் விமர்சன சிந்தனை மற்றும் சிக்கல் தீர்க்கும் திறன்களை வளர்த்துக் கொள்ள உதவுகின்றன.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Social Development */}
                        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">சமூக மற்றும் உணர்ச்சி வளர்ச்சி.</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>சமூகமயமாக்குதல்:</strong> பள்ளிகள் மாணவர்களுக்குத் தங்கள் சக நண்பர்களுடன் பழகவும், சமூகத் திறன்களை வளர்த்துக் கொள்ளவும் வாய்ப்புகளை வழங்குகின்றன.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>உணர்ச்சி நுண்ணறிவு:</strong>பள்ளிகள் மாணவர்கள் தங்கள் உணர்ச்சிகளை அடையாளம் காணவும், நிர்வகிக்கவும் உதவுகின்றன.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Personal Growth */}
                        <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-stone-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">தனிப்பட்ட வளர்ச்சி மற்றும் மேம்பாடு</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-stone-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>நல்லொழுக்க உருவாக்கம்.</strong> பள்ளிகள் மாணவர்களின் விழுமியங்கள் மற்றும் குணநலன்களை உருவாக்குவதில் ஒரு முக்கியப் பங்கு வகிக்கின்றன.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-stone-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>தன்னம்பிக்கை:</strong>பள்ளிகள் பல்வேறு செயல்பாடுகள் மூலம் தன்னம்பிக்கையை வளர்த்துக் கொள்ள வாய்ப்புகளை வழங்குகின்றன.</span>
                            </li>
                          </ul>
                        </div>

                        {/* Society Contribution */}
                        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-100">
                          <h4 className="text-xl sm:text-2xl text-amber-600 mb-4">சமூகத்திற்கு பங்களிப்பு</h4>
                          <ul className="text-lg sm:text-xl space-y-3">
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>தகவலறிந்த குடிமக்கள்.</strong> பள்ளிகள் தகவலறிந்த மற்றும் ஈடுபாடுள்ள குடிமக்களை உருவாக்க உதவுகின்றன.</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-amber-500 mr-2">•</span>
                              <span className="text-gray-950"><strong>சமூக அசைவுத்திறன்:</strong> பள்ளிகள் சமூக அசைவுத்திறன் மற்றும் சமத்துவத்தை ஊக்குவிக்கின்றன.</span>
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
                      <h3 className="text-xl sm:text-2xl text-white">கோவளத்தில் உள்ள பள்ளிகளின் பட்டியல்</h3>
                    </div>
                    <div className="p-6 md:p-8">
                      <ul className="text-lg sm:text-xl space-y-4">
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">அரசு மேல்நிலைப் பள்ளி, ஈ.சி.ஆர் பிரதான சாலை.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">பஞ்சாயத்து ஒன்றிய தொடக்கப் பள்ளி, கைலாசநாதர் கோவில் தெரு.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">சர் ஜான் டெ மொண்டே ஆர்.சி. தொடக்க பள்ளி, மாதா கோவில் தெரு.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">சர் ஜான் டெ மொண்டே ஆர்.சி. தொடக்க பள்ளி, மாதா கோவில் தெரு.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">புனித ஜோசப் மேல்நிலைப் பள்ளி, மாதா கோவில் தெரு.</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-stone-600 mr-3 mt-1">➢</span>
                          <span className="text-gray-950">குருக்குலம் டிரஸ்ட் குழந்தைகள் பள்ளி, மாதா கோவில் தெரு.</span>
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
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">அரசுப் பள்ளிகள்</h6>
            </button>

            {/* School Infrastructure Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('school',2)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V16a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-5.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">பள்ளி உள்கட்டமைப்பு</h6>
            </button>

            {/* Student Programs Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('school',3)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">மாணவர் திட்டங்கள்</h6>
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
            <h2 className="text-2xl sm:text-3xl text-amber-500 mb-4">நூலகம்</h2>
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
                    கோவளம் பஞ்சாயத்து நூலகம்
                  </h1>
                  <p className="mt-4 text-xl sm:text-2xl text-gray-950">
                    சென்னை, கோவளம் பகுதியில் அமைந்த பொதுப்புத்தகாலயம்
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
                      <h2 className="ml-4 text-xl sm:text-2xl  text-amber-600">மேலோட்டம்</h2>
                    </div>
                    <ul className="text-lg sm:text-xl space-y-4 text-gray-950">
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">1.</span>
                        <span>கோவளம் நூலகம் ஒரு பொதுப்புத்தகாலயம் ஆகும், இது கோவளம் மற்றும் சுற்றியுள்ள பகுதிகளில் வசிக்கும் அனைத்து குடியிருப்பாளர்களுக்கும் திறந்திருக்கும்.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">2.</span>
                        <span>நூலக உறுப்பினர் ஆனல் இலவசமாக இருக்கும், இதனால் வாழ்க்கையின் அனைத்து நிலைவர்களுக்கும் அது எளிதில் அணுகக்கூடியதாக இருக்கும்.</span>
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
                      <h2 className="ml-4 text-xl sm:text-2xl text-amber-600">வசதிகள்</h2>
                    </div>
                    <ul className="text-lg sm:text-xl space-y-4 text-gray-950">
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">1.</span>
                        <span>நூலகத்தில் கற்பனை, கற்பனையற்ற மற்றும் குறிப்பியல் நூல்கள் உட்பட விரிவான புத்தகச் சேகரிப்பு உள்ளது.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">2.</span>
                        <span>நூலகத்தில் விசாலமான வாசிப்பறை உள்ளது, இது வாசகர்களுக்கு அமைதியான மற்றும் வசதியான இடத்தை வழங்குகிறது.</span>
                      </li>
                      <li className="flex">
                        <span className="mr-3 text-amber-500 ">3.</span>
                        <span>நூலகம் பல நாளிதழ்கள் மற்றும் பத்திரிகைகளை சந்தா செய்துள்ளது, வாசகர்களுக்கு தற்போதைய நிகழ்வுகள் பற்றிய தகவலை வழங்குவதற்காக.</span>
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
                      <h2 className="ml-4 text-xl sm:text-2xl  text-amber-600">சேவைகள்</h2>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg  text-gray-950 mb-4">தேர்வுத் தயாரிப்பிற்கான இலவச வசதிகள்</h3>
                      <ul className="text-lg sm:text-xl space-y-4 text-gray-950">
                        <li className="flex">
                          <span className="mr-3 text-amber-500 ">1.</span>
                          <span>இலவச பிரிண்டவுட்கள்: மாணவர்கள் தங்களின் படிப்புக் குறிப்புகளுக்கு இலவச பிரிண்டவுட் வசதியைப் பயன்படுத்தலாம்.</span>
                        </li>
                        <li className="flex">
                          <span className="mr-3 text-amber-500 ">2.</span>
                          <span>இலவச ஜெராக்ஸிங்: மாணவர்கள் தொடர்புடைய ஆவணங்களை நகலெடுத்து படிக்க நூலகம் இலவச ஜெராக்ஸிங் சேவைகளையும் வழங்குகிறது.</span>
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
                      <h2 className="text-xl sm:text-2xl text-amber-600  mb-4">இந்த முயற்சியின் நன்மைகள்</h2>
                      <p className="text-lg sm:text-xl text-gray-950">எங்கள் இலவச சேவைகள் மாணவர்களின் வெற்றியை எப்படித் தூண்டும்</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Benefit 1 */}
                      <div className="bg-white bg-opacity-75 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                        <h3 className="text-amber-600  mb-3"><span className="text-xl sm:text-2xl mr-2 text-amber-600 mb-2">1. </span>நிதி நிவாரணம்</h3>
                        <p className="text-lg sm:text-xl text-gray-950">அச்சிடுதல் மற்றும் ஜெராக்ஸிங் செலவுகளைச் சமாளிக்க சிரமப்படக்கூடிய மாணவர்களுக்கு இந்த முயற்சி நிதி நிவாரணத்தை வழங்குகிறது.</p>
                      </div>

                      {/* Benefit 2 */}
                      <div className="bg-white bg-opacity-75 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                        <h3 className="text-amber-600 mb-3"><span className="text-xl sm:text-2xl  mr-2 text-amber-600 mb-2">2. </span>வசதி</h3>
                        <p className="text-lg sm:text-xl text-gray-950">படிப்புக் குறிப்புகளை அச்சிடுதல் மற்றும் நகலெடுத்தல் செலவுகளைப் பற்றிக் கவலைப்படாமல், மாணவர்கள் தங்கள் படிப்பில் கவனம் செலுத்த முடியும்.</p>
                      </div>

                      {/* Benefit 3 */}
                      <div className="bg-white bg-opacity-75 p-6 rounded-xl backdrop-blur-sm hover:bg-opacity-20 transition">
                        <h3 className="text-amber-600 mb-3"><span className="text-xl sm:text-2xl mr-2  text-amber-600 mb-2">3. </span>சம வாய்ப்புகள்</h3>
                        <p className="text-lg sm:text-xl text-gray-950">மாணவர்கள் எந்த நிதி பின்னணியிலிருந்தாலும், அவர்களின் தேர்வுத் தயாரிப்புக்கு உதவும் வளங்களை அணுகுவதற்கான சம வாய்ப்புகளை இந்த முயற்சி உறுதி செய்கிறது.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                  <p className="text-lg sm:text-xl text-gray-950 ">
                    இன்று கோவளம் நூலகத்தைச் சென்று, இந்த அற்புதமான வளங்களை ஆராயுங்கள்!
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
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">நூலக மண்டபங்கள்</h6>
            </button>

            {/* Conference Facilities Button */}
            <button
              onClick={(event) => executeInlineAction("showImages('library',2)", event)}
              className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">நூலக வசதிகள்</h6>
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
                <h1 className="text-3xl md:text-4xl  mb-4">சங்கமண்டபங்கள்</h1>
                <p className="text-lg sm:text-xl mb-6">சமூகச் சந்திப்புகள் மற்றும் சமூக செயல்பாடுகளுக்கான நவீன இடங்கள்</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-base sm:text-lg ">சமூக வளர்ச்சி</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-base sm:text-lg ">சமூக நலன்</span>
                  <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-white text-base sm:text-lg ">பொது இடங்கள்</span>
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
                <h2 className="text-xl sm:text-2xl  text-amber-900 mb-4">சமூக சங்கமண்டபங்கள்</h2>
                <p className="text-lg sm:text-xl text-gray-950 mb-6">கோவளம் பஞ்சாயத்து, சமூக சந்திப்புகள், நிகழ்வுகள் மற்றும் சமூக செயல்பாடுகளை மேம்படுத்த, STS நிறுவனம் உடன் இணைந்து நவீன சங்கமண்டபத்தை நிறுவியுள்ளது.</p>
                <p className="text-lg sm:text-xl text-gray-950">STS நிறுவனத்துடன் சங்கமண்டப ஒத்துழைப்பு, கோவளம் பஞ்சாயத்து சமூக வளர்ச்சி மற்றும் சமூக நலனுக்கான அர்ப்பணிப்பின் சான்றாகும்.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/6248982738153621938.jpg" alt="Meeting hall interior" className="rounded-lg w-full h-48 object-cover shadow" />
                <img loading="lazy" decoding="async" src="/assets/images/infrastructure/meeting hall/m4.jpg" alt="Community gathering" className="rounded-lg w-full h-48 object-cover shadow" />
              </div>
            </div>
          </div>

          {/* Hall Locations */}
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-6 text-center">எங்கள் சங்கமண்டப இடங்கள்</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Hall 1 */}
              <div className="transition transform hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl shadow-md">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl  text-amber-900 mb-2 text-center">அன்சாரி நகர் மாகான்</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">சமூக நிகழ்வுகள் மற்றும் சந்திப்புகளுக்கான நவீன வசதி</p>
              </div>

              {/* Hall 2 */}
              <div className="transition transform hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl shadow-md">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl  text-amber-900 mb-2 text-center">புது மஜித் தெரு மாகான்</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">சமூக மற்றும் கலாச்சார செயல்பாடுகளுக்கான விசாலமான இடம்</p>
              </div>

              {/* Hall 3 */}
              <div className="transition transform hover:-translate-y-1 hover:shadow-lg bg-white p-6 rounded-xl shadow-md">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl   text-amber-900 mb-2 text-center">குன்றுக்காடு</h3>
                <p className="text-lg sm:text-xl text-gray-950 text-center">சந்திப்புகள் மற்றும் கொண்டாட்டங்களுக்கு சமூக இடம்</p>
              </div>
            </div>
          </div>

          {/* Features div */}
          <div className="bg-amber-50 rounded-2xl p-8 mb-10">
            <h2 className="text-xl sm:text-2xl  text-amber-900 mb-8 text-center">மண்டப அம்சங்கள் மற்றும் வசதிகள்</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  விசாலமான அமைப்பு
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">சமூக சந்திப்புகள், கூட்டங்கள் மற்றும் நிகழ்வுகளுக்கான போதுமான இடம்</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  ஒலி-காணொளி உபகரணங்கள்
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">அடிப்படை ஒலி அமைப்பு மற்றும் ஒளிப்படத் திறன்கள் கிடைக்கின்றன</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  சுத்தமான வசதிகள்
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">நன்கு பராமரிக்கப்பட்ட இடங்கள், நிரந்தர சுத்திகரிப்புடன்</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  மாற்றக்கூடிய இருக்கை அமைப்பு
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">விதவிதமான நிகழ்வுகளுக்கு ஏற்ப ஏற்படுத்தக்கூடிய அமைப்புகள்</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  நிகழ்வு ஆதரவு
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">சமூக நிகழ்வுகளுக்கான அடிப்படை உதவி வழங்கப்படுகிறது</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl sm:text-2xl  text-amber-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  அணுகக்கூடிய இடம்
                </h3>
                <p className="text-lg sm:text-xl text-gray-950">சுற்றுப்புற மையங்களில் வசதியான இடத்தில் அமைந்துள்ளது</p>
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
            <h2 className="text-2xl sm:text-4xl  text-amber-900 mb-6 text-center">இணைந்து செயல்படுபவர்</h2>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 px-8 py-6 rounded-lg mb-4">
                <h3 className="text-xl sm:text-3xl  text-center">STS அறக்கட்டளை</h3>
              </div>
              <p className="text-lg sm:text-xl text-gray-950 text-center max-w-2xl">STS அறக்கட்டளையுடன் எங்களுடைய ஒத்துழைப்பு, கோவளத்தின் அனைத்து குடிமக்களுக்கும் பயன்படும் வகையில் இந்நவீன சமூக இடங்களை வழங்குவதற்கு வழிவகுக்கிறது.</p>
            </div>
          </div>

          <div className="text-center text-gray-950 bg-amber-50 rounded-lg p-4 mb-4">
            <p className="text-amber-700">சமூக இணைப்பு மற்றும் வளர்ச்சிக்கான இடங்களை உருவாக்குதல் </p>
          </div>
        </div>
      </section>

      {/* Ponds */}

      <section id="Ponds" className="content hidden mt-12 bg-white">
        <div className="max-w-[80vw] mx-auto px-4 py-8">
          {/* Header Section */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl  text-amber-600 mb-4">கோவளத்தின் நீர்ப்பாரம்பரியத்தை மீட்டெடுப்போம்</h1>
            <p className="text-lg sm:text-xl text-gray-950 max-w-3xl mx-auto">
              கோவளம் பஞ்சாயத்து, வரலாற்றுச் சிறப்புமிக்க தர்கா குளம் உட்பட, மொத்தம் ஆறு குளங்களை சீரமைக்கும் பணிகளைத் தொடங்கியுள்ளது.
              இது நீர் பாதுகாப்பு, உயிர்ச் செல்வம் (biodiversity) மற்றும் சூழலியல் சுற்றுலாவை மேம்படுத்தும் நோக்குடன் முன்னெடுக்கப்படுகிறது.
            </p>
          </header>

          {/* Main Content Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            {/* Hero Image */}
            <div className="h-64 md:h-96 bg-cover bg-center" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/6235471922091639869.jpg')" }}></div>

            <div className="p-8">
              <h2 className="text-xl sm:text-2xl text-brown-800 mb-6">கிணறு சுத்திகரிப்பு மற்றும் பாதுகாப்பு</h2>
              <p className="text-lg sm:text-xl text-gray-950 mb-6">
                கிணறுகளில் சேறு மற்றும் அவிழிகளை அகற்றி, நீர் சேமிப்பு திறனை உயர்த்துதல்.
                மேலும், கிணறு நீர் பாதுகாப்பு மற்றும் நிலைத்தன்மை காக்க நடவடிக்கைகள் மேற்கொள்ளப்படுகின்றன.
                இது குடிமக்களுக்கு நீர் விநியோகத்தை உறுதி செய்வதில் உதவுகிறது.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Pond Restoration Section */}
                <div>
                  <h3 className="text-xl sm:text-2xl text-amber-600 mb-4">குளம் புதுப்பித்தல் பணிகள்</h3>

                  <div className="space-y-6">
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="text-xl sm:text-2xl text-brown-800 mb-3">1. ஆழ்தொட்டு சுத்திகரித்தல்</h4>
                      <p className="text-lg sm:text-xl text-gray-950">
                        குளங்களில் உள்ள சேறு மற்றும் கழிவுகளை அகற்றி, நீர் சேமிப்பு திறனை அதிகரித்தல் மற்றும் நீர்த் தரத்தை மேம்படுத்தல்.
                      </p>
                    </div>

                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="text-xl sm:text-2xl text-brown-800 mb-3">2. மக்கள் நட்பு உட்கட்டமைப்பு</h4>
                      <p className="text-lg sm:text-xl text-gray-950">
                        நடைப்பாதைகள், அமரும் இடங்கள் மற்றும் பிற வசதிகளை உருவாக்கி, பொது மக்களுக்கு சுலபமாகவும் பயனுள்ளதாகவும் மாற்றுதல்.
                      </p>
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
                <h3 className="text-xl sm:text-2xl text-brown-800 mb-6 text-center">திட்டத்தின் நன்மைகள்</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">💧</div>
                    <h4 className=" text-xl sm:text-2xl mb-2">நீர் பாதுகாப்பு</h4>
                    <p className="text-lg sm:text-xl text-gray-950">
                      நிலத்தடி நீர் நிரப்பு திறன் அதிகரிப்பு மற்றும் நீர் கிடைப்பில் முன்னேற்றம்
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">🦆</div>
                    <h4 className=" text-xl sm:text-2xl mb-2">உயிர்ச் செல்வம்</h4>
                    <p className="text-lg sm:text-xl text-gray-950">
                      நீர்வாழ் தாவரங்கள் மற்றும் விலங்குகளுக்கான சிறந்த வாழிட சூழல் மேம்பாடு
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">👨‍👩‍👧‍👦</div>
                    <h4 className=" text-xl sm:text-2xl mb-2">சமூக இடம்</h4>
                    <p className="text-lg sm:text-xl text-gray-950">
                      அழகான பொது இடங்கள், ஓய்வு மற்றும் பொழுதுபோக்கு வசதிகளுக்கான இடம்
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Image */}
          <div className="h-64 md:h-96 bg-cover bg-center rounded-xl mb-12" style={{ "backgroundImage": "url('/assets/images/infrastructure/ponds/6235471922091639870.jpg')" }}></div>

          <p className="text-lg sm:text-xl text-center text-gray-950 py-8">
            கோவளம் பஞ்சாயத்து - எதிர்கால தலைமுறைகளுக்காக எங்கள் நீர்ப்பாரம்பரியத்தை பாதுகாக்கிறது
          </p>
        </div>
      </section>


      {/* Wells */}

      <div id="Wells" className="content hidden rounded-xl p-6 w-full max-w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl text-amber-600 mb-8 text-center" data-aos="animate-fade-in">கிணறுகள்</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pond Restoration Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('well',1);hideTable();", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">கிணறு சுத்திகரிப்பு</h6>
          </button>

          {/* Water Conservation Button */}
          <button
            onClick={(event) => executeInlineAction("showImages('well',2);hideTable();", event)}
            className="bg-white text-amber-500 px-4 py-2 rounded-xl shadow-sm border border-amber-200 hover:bg-slate-50 hover:border-amber-300 transition-all duration-200 flex flex-col items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42a3.5 3.5 0 00-1.58-1.665L5.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
            </svg>
            <h6 className="text-lg sm:text-xl text-amber-500 hover:text-amber-800">கிணறு பாதுகாப்பு</h6>
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
            <h1 className="text-2xl sm:text-3xl  text-amber-800 mb-4">கோவளம் பஞ்சாயத்து – எதிர்கால சந்ததிக்காக எங்கள் சாலை அமைப்பை மேம்படுத்துகிறோம்</h1>
            <div className="w-24 h-2 bg-amber-500 mx-auto"></div>
          </div>

          {/* Main Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-xl text-2xl  text-gray-950 mb-6">சாலை அமைப்பு மேம்பாடு</h2>
              <p className="text-lg sm:text-xl  text-gray-950 leading-relaxed mb-6">
                கோவளம் பஞ்சாயத்து தனது பதவிக்காலத்தில் சாலை அமைப்பை மேம்படுத்தும் பணிகளில் குறிப்பிடத்தக்க முன்னேற்றங்களை செய்துள்ளது. இதனால், அந்த பகுதியில் இணைப்பு மற்றும் வாழ்வின் தரம் மேம்பட்டுள்ளது.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-xl text-2xl  text-amber-800 mb-4">பவ்வர்ப் பிளாக் சாலை திட்டம்</h3>
                <ul className="text-lg sm:text-xl space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>பல பவ்வர்ப் பிளாக் சாலைகள் கட்டமைக்கப்பட்டுள்ளன</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>மழைநீர் நிலத்திற்குள் ஊறுவதை ஊக்குவித்து நிலத்தண்ணீர் மட்டம் அதிகரித்துள்ளது</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>சாலைகளில் நீர் தேங்குதலைத் தவிர்த்து வெள்ள அபாயத்தை குறைத்துள்ளது</span>
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
            <h3 className="text-xl text-2xl  text-gray-950 mb-8 text-center">சாலை அமைப்பின் சிறப்பம்சங்கள்</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Photo 1 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/annaNagar/42.jpg" alt="New Road Construction" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">புதிய சாலை கட்டுமானம் நடைபெற்று வருகிறது</p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/annaNagar/Anna nagar paver block road .jpg" alt="Completed Road" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">சமீபத்தில் பூர்த்தி செய்யப்பட்ட பவ்வர் பிளாக் சாலை</p>
                </div>
              </div>

              {/* Photo 3 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/nachiyarKullam/nachiyar kulam road.jpg" alt="Rainwater Percolation" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">பவ்வர் பிளாக்கள் நீர் ஊறுவலை ஏற்படுத்துகின்றன</p>
                </div>
              </div>

              {/* Photo 4 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/senginiyammanKovilSt/32.jpg" alt="Flood Prevention" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl  text-gray-950">மேம்பட்ட வடிகால்கள் வெள்ளத்தைக் தடுக்கும்</p>
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
              "கோவளத்தின் சாலைகளின் மாற்றம், குடிமக்களின் வாழ்க்கையை மேம்படுத்துவதற்கும் நிலைத்த வளர்ச்சியை ஊக்குவிப்பதற்குமான எங்கள் உறுதியின் சான்றாகும்."
            </p>
            <p className="text-lg sm:text-xl ">- கோவளம் பஞ்சாயத்து</p>
          </div>

          {/* Before/After Section (Bonus) */}
          <div className="mt-16">
            <h3 className="text-2xl  text-gray-950 mb-8 text-center">சாலை மாற்றம்</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl text-2xl  text-red-600 mb-4 text-center">முந்தைய நிலை</h4>
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/old_road.jpg" alt="Old Road Condition" className="w-full rounded-lg shadow" />
                <p className="text-lg sm:text-xl text-gray-950 mt-2 text-center">முந்தைய சாலை நிலை: poor drainage காரணமாக நீர் தேங்கியது</p>
              </div>
              <div>
                <h4 className="text-xl text-2xl text-amber-600 mb-4 text-center">பிந்தைய நிலை</h4>
                <img loading="lazy" decoding="async" src="/assets/images/ROAD/senginiyammanKovilSt/32.jpg" alt="New Paver Block Road" className="w-full rounded-lg shadow" />
                <p className="text-lg sm:text-xl text-gray-950 mt-2 text-center">இப்போதைய மேம்படுத்தப்பட்ட பவ்வர் பிளாக் சாலை மற்றும் மேம்பட்ட வடிகால் வசதி</p>
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
              <h1 className="text-3xl md:text-4xl mb-4">வை-ஃபை வசதி கொண்ட பேருந்து நிலையம்</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-6">கோவளம் பஞ்சாயத்தினால் மேற்கொள்ளப்பட்ட நவீனமும் குடிமக்கள் நட்பு முயற்சியும்</p>
              <div className="w-20 h-1.5 text-ce bg-amber-400"></div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl text-gray-950 mb-6">கோவளத்தை எதிர்காலத்துடன் இணைத்தல்</h2>
              <p className="text-lg sm:text-xl text-gray-950 leading-relaxed mb-6">
                கோவளம் பஞ்சாயத்து, நவீனமும் குடிமக்கள் நட்பான முயற்சியாக வை-ஃபை வசதி கொண்ட பேருந்து நிலையத்தை அறிமுகப்படுத்தியுள்ளது. இது குடிமக்கள் வசதி, பாதுகாப்பு மற்றும் இணைப்புத்தன்மைக்கு முன்னுரிமை அளிக்கும் புதுமையான நிர்வாகத்தின் சிறந்த எடுத்துக்காட்டாகும்.
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
                    <h3 className="text-xl sm:text-2xl text-gray-950">உயர் வேக இலவச வை-ஃபை</h3>
                    <p className="text-lg sm:text-xl text-gray-950">அனைத்து பயணிகளுக்கும் நம்பகமான இணைய சேவை</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl text-gray-950">மேம்பட்ட பாதுகாப்பு</h3>
                    <p className="text-lg sm:text-xl text-gray-950">விளக்குகளும் பாதுகாப்பு வசதிகளும் கொண்ட பகுதி</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl text-gray-950">நேரடித் தகவல் புதுப்பிப்பு</h3>
                    <p className="text-lg sm:text-xl text-gray-950">பேருந்து அட்டவணைகள் மற்றும் பாதை விவரங்கள்</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg">
              <img loading="lazy" decoding="async" src="/assets/images/busStop/bus stop .jpg" alt="கோவளம் வை-ஃபை பேருந்து நிலையம்" className="w-full h-auto" />
            </div>
          </div>

          {/* Photo Gallery Section */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl text-gray-950 mb-8 text-center">பயணிகளுக்கான நவீன வசதிகள்</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Photo 1 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/busStop/IMG_6476.JPG" alt="இணையம் பயன்படுத்தும் குடிமக்கள்" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">குடிமக்கள் இலவச இணையத்தை பயன்படுத்துகின்றனர்</p>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/busStop/IMG_6494.JPG" alt="இரவு நேர பேருந்து நிலையம்" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">இரவு நேர பாதுகாப்பிற்காக மேம்பட்ட விளக்குகள்</p>
                </div>
              </div>

              {/* Photo 3 */}
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img loading="lazy" decoding="async" src="/assets/images/busStop/IMG_6526.JPG" alt="டிஜிட்டல் தகவல் பலகை" className="w-full h-48 object-cover" />
                <div className="p-4 bg-white">
                  <p className="text-lg sm:text-xl text-gray-950">நேரடித் தகவல்களுடன் டிஜிட்டல் காட்சிப்படுத்தல்</p>
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
              <h3 className="text-xl sm:text-2xl text-gray-950 mb-6">புதுமையான நிர்வாகத்தின் முன்னுதாரணம்</h3>
              <p className="text-lg sm:text-xl text-gray-950 mb-8">
                வை-ஃபை வசதி கொண்ட பேருந்து நிலையம், பொதுநலனுக்காக தொழில்நுட்பத்தை பயன்படுத்தும் கோவளம் பஞ்சாயத்தின் உறுதியை வெளிப்படுத்துகிறது. இது ஸ்மார்ட் நகர அமைப்பின் முன்னோடியாக திகழ்கிறது.
              </p>
              <div className="flex flex-wrap justify-center text-lg sm:text-xl gap-4">
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  <span className="text-lg sm:text-xl text-amber-600">500+</span> தினசரி பயனர்கள்
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  <span className="text-lg sm:text-xl text-amber-600">24/7</span> இலவச அணுகல்
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                  <span className="text-lg sm:text-xl text-amber-600">100 Mbps</span> உயர் வேக இணையம்
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
            மரியாதை குரல்கள்
          </h1>
          <p className="feedback-subtitle text-center text-gray-950 mb-8 max-w-2xl mx-auto text-lg sm:text-xl">
            உங்கள் அனுபவங்கள் எங்களை மேலும் சிறப்பாக செயல்பட ஊக்குவிக்கின்றன. உங்கள் கருத்துகளை பகிர்ந்து, நமது ஆதரிப்பாளர்களின் சமூகத்தில் சேருங்கள்.
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

            {/* Users Feedback Button - centered below form */}
            <div className="mt-6 flex justify-center">
              <a href="/users-feedback" className="users-feedback-btn text-lg sm:text-xl bg-gradient-to-r from-amber-400 to-amber-500 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-amber-400/40 transition-all duration-300 transform hover:scale-110 inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Users Feedback
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="Contactus" className="content hidden mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl  text-amber-600 drop-shadow-md">
            <span className="inline-block pb-2">எங்களை தொடர்பு கொள்ளுங்கள்</span>
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
                <h2 className="text-3xl font-bold text-amber-700 mb-2">கோவளம் பஞ்சாயத்து</h2>
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
                  <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
                    <span className="text-amber-800">பிளாட் எண்: 2/235, தேசாய் தெரு,</span><br />
                    கோவளம், திருப்பொரூர் தாலுகா,<br />
                    செங்கல்பட்டு மாவட்டம் - 603 112.
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
          <h2 className="text-2xl sm:text-3xl text-amber-600 mb-6">பார்வை நேரம்</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Weekdays Card */}
            <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200">
              <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-3">திங்கள் - சனிக்கிழமை</h3>
              <p className="text-lg sm:text-xl text-amber-600 ">9:00 AM - 6:30 PM</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="inline-block px-2 py-1 text-xs  bg-amber-200 text-amber-800 rounded">முழுநாள் திறப்பு</span>
              </div>
            </div>

            {/* Sunday Card */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 opacity-80">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-3">ஞாயிறு</h3>
              <p className="text-lg sm:text-xl text-gray-500 ">மூடிப்பு</p>
              <div className="mt-4 flex justify-center space-x-2">
                <span className="inline-block px-2 py-1 text-xs  bg-gray-200 text-gray-600 rounded">மாலை விடுமுறை</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <p className="mt-8 text-sm text-gray-500 italic">
            சிறப்பு விடுமுறை நேரங்கள் பொருந்தக்கூடும். புதுப்பிப்புகள் குறித்து எங்களிடம் சரிபார்க்கவும்.
          </p>
        </div>

        {/* Social Icons with floating effect */}
        <div className="mt-8 lg:mt-12">
          <h3 className="text-center text-2xl sm:text-3xl text-amber-600 mb-6">எங்களுடன் இணையுங்கள்</h3>
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
        <h6 className="text-sm">&copy; 2025 கோவளம் பஞ்சாயத்து. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</h6>
      </footer>

      {/* Scripts */}
    </>
  );
}

