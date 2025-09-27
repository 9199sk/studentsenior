import student from "../assets/student.png";
import { useEffect, useRef } from 'react'; // Import hooks if you want a trigger animation

const HeroSection = () => {
    // Note: I removed the unused import 'student' which you had previously, 
    // as the image path is hardcoded as a string later.

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 transition-colors dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        
                        {/* 1. ANIMATION FOR HEADING */}
                        <h1 
                          className="text-4xl sm:text-5xl font-bold mb-6 transition-colors text-gray-900 dark:text-gray-100 opacity-0 animate-fadeInUp-1"
                          style={{ animationFillMode: 'forwards' }} // Ensure the final state sticks
                        >
                            Discover Your
                            <br />
                            <span className="transition-colors text-blue-600 dark:text-blue-400">
                                College Journey
                            </span>
                        </h1>
                        
                        {/* 2. ANIMATION FOR PARAGRAPH */}
                        <p 
                          className="text-lg mb-8 transition-colors text-gray-600 dark:text-gray-300 opacity-0 animate-fadeInUp-2"
                          style={{ animationFillMode: 'forwards' }} // Ensure the final state sticks
                        >
                            Find resources, connect with seniors,
                            <br />
                            and unlock your academic potential.
                        </p>
                        
                        {/* 3. ANIMATION FOR SELECT BOX */}
                        <div className="opacity-0 animate-fadeInUp-3" style={{ animationFillMode: 'forwards' }}>
                            <section>
                                <select className="bg-blue-100 dark:bg-gray-700 border border-blue-400 dark:border-gray-600 p-2 rounded-md outline-none text-lg dark:text-gray-200 transition-colors">
                                    <option value="">Select Your College</option>
                                    <option
                                        value="integral-university"
                                        data="integral-university"
                                    >
                                        Integral University
                                    </option>
                                    <option value="mpec-kanpur" data="mpec-kanpur">
                                        MPEC Kanpur
                                    </option>
                                </select>
                            </section>
                        </div>
                    </div>
                    
                    {/* 4. Optional: Fade-in for the Image */}
                    <div className="flex-1 opacity-0 animate-fadeInUp-3" style={{ animationFillMode: 'forwards' }}>
                        <img
                            src="/src/assets/student.png"
                            alt="Students studying"
                            className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto dark:opacity-90 transition-opacity"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;