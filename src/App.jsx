import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import close from "./assets/images/icon-close.svg";
import fb from "./assets/images/icon-facebook.svg";
import hamburger from "./assets/images/icon-hamburger.svg";
import insta from "./assets/images/icon-instagram.svg";
import pint from "./assets/images/icon-pinterest.svg";
import tt from "./assets/images/icon-twitter.svg";
import logo from "./assets/images/logo.svg";
import intmob from "./assets/images/image-interactive-mobile.jpg";
import intdesk from "./assets/images/image-interactive.jpg";

import "./App.css";

function App() {
    const [isClicked, setIsClicked] = useState(false);
    console.log(isClicked);
    return (
        <div className="m-auto min-h-screen relative">
            {/* heading */}
            <header
                className="bg-[url('../public/assets/images/mobile/image-hero.jpg')] sm:bg-[url('../public/assets/images/desktop/image-hero.jpg')] bg-cover bg-no-repeat p-5 md:px-32"
                style={{}}
            >
                <nav
                    className={`${
                        isClicked
                            ? "absolute bg-black sm:bg-transparent inset-0 px-5 py-[44px] w-full h-full z-[9999]"
                            : ""
                    } py-6 flex justify-between items-start`}
                >
                    <img src={logo} alt="" className={`w-32`} />
                    <button
                        className={`sm:hidden`}
                        onClick={() => {
                            setIsClicked((prev) => !prev);
                        }}
                    >
                        {isClicked ? (
                            <img src={close} alt="" />
                        ) : (
                            <img src={hamburger} alt="" />
                        )}
                    </button>
                    <div
                        className={`${
                            isClicked ? "flex" : "hidden"
                        } sm:flex sm:flex-row sm:justify-end sm:top-10 sm:text-lg sm:right-5 md:right-32 sm:capitalize gap-5 flex-col text-white uppercase absolute left-8 top-56 z-50 text-3xl font-bold font-fontJosefin`}
                    >
                        <div className="">
                            <a
                                href="#"
                                className={`${
                                    isClicked ? "items-start" : ""
                                }flex flex-col items-center group mb-1`}
                            >
                                About
                                {!isClicked && (
                                    <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                                )}
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className={`${
                                    isClicked ? "items-start" : ""
                                }flex flex-col items-center group mb-1`}
                            >
                                Careers
                                {!isClicked && (
                                    <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                                )}
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className={`${
                                    isClicked ? "items-start" : ""
                                }flex flex-col items-center group mb-1`}
                            >
                                Events
                                {!isClicked && (
                                    <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                                )}
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className={`${
                                    isClicked ? "items-start" : ""
                                }flex flex-col items-center group mb-1`}
                            >
                                Products
                                {!isClicked && (
                                    <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                                )}
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className={`${
                                    isClicked ? "items-start" : ""
                                }flex flex-col items-center group mb-1`}
                            >
                                Support
                                {!isClicked && (
                                    <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                                )}
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="ring-2 px-7 py-5 ring-white font-fontJosefin uppercase text-4xl lg:text-6xl lg:w-1/2 xl:w-1/3 text-start text-white my-40">
                    Immersive experiences that deliver
                </div>
            </header>
            {/* main */}
            <main className="p-5 md:px-32 py-24 m-auto max-w-[1440px]">
                <div id="vr" className="m-auto my-20 sm:relative">
                    <picture className="">
                        <source media="(max-width: 640px)" srcSet={intmob} />
                        <source media="(min-width: 640px)" srcSet={intdesk} />
                        <img src="" alt="" />
                    </picture>
                    <div className="px-3 py-10 bg-white lg:w-6/12 lg:absolute lg:right-0 lg:-bottom-28 lg:p-28 lg:pr-0">
                        <h2 className="font-fontJosefin text-3xl lg:text-5xl lg:text-start text-veryDarkGray font-bold text-center uppercase py-3">
                            The leader in interactive VR
                        </h2>
                        <p className="font-fontAlata text-center lg:text-start text-darkGray">
                            Founded in 2011, Loopstudios has been producing
                            world-class virtual reality projects for some of the
                            best companies around the globe. Our award-winning
                            creations have transformed businesses through
                            digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
                <div
                    id="creations"
                    className="py-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                    <h2 className="text-3xl text-center sm:text-start font-bold text-veryDarkGray uppercase font-fontJosefin py-5 sm:row-start-1">
                        our creations
                    </h2>
                    <div className="grid grid-cols-1 gap-5 sm:col-span-2 sm:grid-cols-2 md:grid-cols-4">
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-deep-earth.jpg')] sm:bg-[url('../public/assets/images/desktop/image-deep-earth.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                Deep earth
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-night-arcade.jpg')] sm:bg-[url('../public/assets/images/desktop/image-night-arcade.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                Night arcade
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-soccer-team.jpg')] sm:bg-[url('../public/assets/images/desktop/image-soccer-team.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                Soccer team VR
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-grid.jpg')] sm:bg-[url('../public/assets/images/desktop/image-grid.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-4/12 sm:w-2/6 left-5   ">
                                The grid
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-from-above.jpg')] sm:bg-[url('../public/assets/images/desktop/image-from-above.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                From up above VR
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-pocket-borealis.jpg')] sm:bg-[url('../public/assets/images/desktop/image-pocket-borealis.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                Pocket borealis
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-curiosity.jpg')] sm:bg-[url('../public/assets/images/desktop/image-curiosity.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                The curiosity
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                        <div className="bg-cover h-40 sm:h-[32rem] group text-white font-bold uppercase font-fontJosefin text-2xl relative bg-[url('../public/assets/images/mobile/image-fisheye.jpg')] sm:bg-[url('../public/assets/images/desktop/image-fisheye.jpg')]">
                            <span className="absolute group-hover:text-black z-40 bottom-5 w-5/12 sm:w-1/2 left-5   ">
                                Make it fisheye
                            </span>
                            <div className="absolute bottom-0 left-0 right-0 h-1/4 group-hover:h-full z-30 bg-gradient-to-t from-gray-700 group-hover:from-white to-transparent group-hover:to-white group-hover:opacity-50"></div>
                        </div>
                    </div>
                    <button className="ring-1 hover:bg-black hover:text-white uppercase font-fontAlata tracking-[0.3rem] text-sm sm:mr-0 px-10 py-3 ring-black m-auto my-3 sm:row-start-1">
                        See all
                    </button>
                </div>
            </main>
            {/* footer */}
            <footer className="bg-black w-full p-5 flex flex-col justify-between items-center sm:flex-row md:px-32">
                <div className="py-5">
                    <img
                        src={logo}
                        alt=""
                        className="w-32 m-auto py-5 sm:ml-0"
                    />
                    <div className="flex flex-col sm:flex-row gap-5 capitalize font-fontAlata text-sm text-white justify-center items-center">
                        <div className="">
                            <a
                                href="#"
                                className="flex flex-col items-center group gap-1"
                            >
                                About
                                <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="flex flex-col items-center group gap-1"
                            >
                                Careers
                                <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="flex flex-col items-center group gap-1"
                            >
                                Events
                                <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="flex flex-col items-center group gap-1"
                            >
                                Products
                                <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="flex flex-col items-center group gap-1"
                            >
                                Support
                                <span className="w-[1rem] h-[2px] opacity-0 group-hover:opacity-100 bg-white"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center sm:justify-end gap-5 py-5">
                        <span>
                            <img
                                src={fb}
                                alt=""
                                className="border-b-white py-2 hover:border-b-2"
                            />
                        </span>
                        <span>
                            <img
                                src={tt}
                                alt=""
                                className="border-b-white py-2 hover:border-b-2"
                            />
                        </span>
                        <span>
                            <img
                                src={pint}
                                alt=""
                                className="border-b-white py-2 hover:border-b-2"
                            />
                        </span>
                        <span>
                            <img
                                src={insta}
                                alt=""
                                className="border-b-white py-2 hover:border-b-2"
                            />
                        </span>
                    </div>
                    <div className="text-darkGray text-sm text-center">
                        © 2021 Loopstudios. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
