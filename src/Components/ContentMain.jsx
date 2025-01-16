import { h1 } from "motion/react-m"
import touches from "../json()/Touches.json"
import { div } from "motion/react-client"
import BandWebsite from "./BandWebsite"
import { FaStethoscope } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { motion } from "motion/react"
const ContentMain = () => {
  console.log(touches)
  return (
    <div className="relative">
      <div className="grid grid-cols-3 top-[-40px] left-[60px] absolute gap-x-6 w-11/12 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {touches.map((touch, index) => (
          <div key={touch.id} className="border-t-2 border-t-blue-400 rounded-md bg-gray-900 py-4 px-3 text-white shadow-md">
            <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            >
              <div className="flex justify-center">
                {index === 0 && <BandWebsite />}
              </div>

              <h2 className="text-xl font-bold font-roboto text-blue-400 mb-2">{touch.title}</h2>
              <p className="font-roboto text-gray-white text-base leading-relaxed">{touch.card}</p>
            </motion.div>
            <div >
              <div className=" flex justify-center">

                {index === 1 && <FaStethoscope className="text-blue-500  text-5xl bg-white p-3 rounded-full font-bold shadow-md" />}
              </div>
              <h2 className="text-xl font-bold font-roboto text-blue-400 mb-2">{touch.topic}</h2>
              <p className="font-roboto text-gray-white text-base leading-relaxed">{touch.contents}</p>
            </div>
            <div className="">
              <div className="flex justify-center">
                {index === 2 && <FaHeartbeat className="text-blue-500  text-5xl bg-white p-3 rounded-full font-bold shadow-md" />}
              </div>
              <h1 className="text-xl font-bold font-roboto text-blue-400 mb-2">{touch.head}</h1>
              <p className="font-roboto text-gray-white text-base leading-relaxed">{touch.main}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentMain