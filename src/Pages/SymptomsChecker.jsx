
import Symptoms from "../json()/Symptoms.json";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router";
import Slider from "../Components/Slider";
import SeachBar from "../Components/SeachBar";
const SymptomsChecker = () => {

    console.log(Symptoms);
    return (
        <div>
        <SeachBar />
            <div className="grid grid-cols-2 w-11/12 mx-auto mt-[20%] ">
                <div className="bg-white  shadow-md border-2 border-blue-400 py-3 px-4">
                    <div >
                        {Symptoms.map((symptom) => (
                            <div
                                key={symptom.id}
                                className="px-10 justify-center  mt-[20%]"
                            >
                                <nav className="flex justify-between px-10 capitalize text-gray-500 font-roboto">
                                    <h1 className="hover:border-b-2 hover:border-b-blue-500">{symptom.nav}</h1>
                                    <h1 className="hover:border-b-2 hover:border-b-blue-500">{symptom.symptoms}</h1>
                                    <h1 className="hover:border-b-2 hover:border-b-blue-500">{symptom.condition}</h1>
                                    <h1 className="hover:border-b-2 hover:border-b-blue-500">{symptom.detail}</h1>
                                    <h1 className="hover:border-b-2 hover:border-b-blue-500">{symptom.treat}</h1>
                                </nav>
                                <div className="px-10 flex justify-center items-center gap-x-4 mt-[-10%]">
                                    <img
                                        src={symptom.img}
                                        alt="brand"
                                        className="w-28"
                                    />
                                    <p className="text-3xl font-bold text-blue-300 capitalize font-roboto">
                                        {symptom.name}
                                    </p>
                                </div>
                                <div className="px-10">
                                    <h2 className="font-semibold font-roboto text-gray-700">
                                        {symptom.nick}
                                    </h2>
                                    <p className="text-center text-gray-700">{symptom.supernick}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <form>
                            <div className="flex justify-center gap-x-4">
                                <div>
                                    <label
                                        htmlFor="age"
                                        className="font-roboto capitalize text-xl"
                                    >
                                        age
                                    </label>
                                    <br />
                                    <input
                                        type="age"
                                        name="age"
                                        id="age"
                                        placeholder="yyy-mm-dd"
                                        className="outline-none w-36 py-1.5 rounded-md px-3 border-2 border-blue-400"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="sex" className="font-roboto text-xl ">
                                        sex
                                    </label>
                                    <br />
                                    <div className="flex gap-x-4">
                                        <button className="capitalize bg-blue-400 text-white py-2 px-4 rounded-md shadow-md font-bold">
                                            female
                                        </button>
                                        <button className="capitalize bg-gray-800 hover:bg-blue-400 text-white py-2 px-4 rounded-md shadow-md font-bold">
                                            male
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link to="/consise" className="flex justify-center mt-20">
                                <button className="capitalize bg-gray-800 hover:bg-blue-400 text-white py-2 px-10 rounded-md shadow-md font-bold">
                                    <div className="flex gap-x-6 items-center">
                                        continue
                                        <GrLinkNext />
                                    </div>
                                </button>
                            </Link>
                        </form>
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    );
};

export default SymptomsChecker;
