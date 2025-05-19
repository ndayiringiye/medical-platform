import ContentMain from "./ContentMain"
import { Link } from "react-router";
const BackgroundVideo = () => {
    return (
    <div>
        <div className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="src/images/What is Digital Health_.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center space-y-6 px-6 md:px-12">
                    <img
                        src="src/imges/image copy 3.png"
                        alt="HealTracker logo"
                        className="mx-auto w-32 h-32 rounded-full border-4 border-white"
                    />
                    <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-wide">
                        Welcome to HealTracker
                    </h1>
                    <p className="text-white text-lg md:text-xl max-w-xl mx-auto opacity-90 hover:animate-bounce hover:p-5">
                    Your trusted partner in understanding your health. Use our symptom checker to get insights and track your health results today.
                    </p>

                    <div className="flex justify-center gap-x-6 mt-6">
                        <Link
                            to="/symptoms"
                            className="py-3 px-6 font-semibold capitalize rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 hover:text-white transition duration-300"
                        >
                            Start Symptoms Checker
                        </Link>
                        <a
                            href=""
                            className="py-3 px-6 font-semibold capitalize rounded-lg shadow-lg hover:bg-gray-800 bg-gray-900 text-white transition duration-300"
                        >
                            Select Your Symptoms
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <ContentMain />
        </div>
    );
};

export default BackgroundVideo;
