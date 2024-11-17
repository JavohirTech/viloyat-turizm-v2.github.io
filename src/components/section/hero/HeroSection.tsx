"use client";
import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  const heroData = [
    {
      title: "Namanganing Yashirin Xazinalarini Kashf Eting",
      description: "Namangan, O‘zbekistonning Farg‘ona vodiysida joylashgan, madaniyat va tabiiy go‘zalliklarni o‘zida jamlagan shahar.",
      background: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Mulla_Qirg%CA%BBiz_madrasasi_04.jpg",
      link: "#explore-namangan",
    },
    {
      title: "Namanganda Turizmning O‘sishi",
      description: "Farg‘ona vodiysi yangi turistik joylar bilan tobora mashhur bo‘lmoqda.",
      background: "https://central-asia.guide/wp-content/uploads/2022/03/Namangan-park-1024x682.jpg",
      link: "#tourism-growth",
    },
    {
      title: "Namangan An'analarini His Etish",
      description: "Qadimiy masjidlar va jonli bozorlar orqali Namangan O‘zbekiston madaniyatiga chuqur sayohat qilish imkoniyatini beradi.",
      background: "https://ziyoratga.uz/media/regions/namanganskaya_oblast/gorod_namangan/dzhome_mechet_yusufhan_ugli_kasymhan/imgonli_GwXZzox.jpg",
      link: "#traditional-culture",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
      <div className="relative z-0 min-h-screen overflow-hidden">
        <AnimatePresence>
          <motion.div
              key={currentIndex}
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
              style={{backgroundImage: `url(${heroData[currentIndex].background})`}}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 1}}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black bg-opacity-50" style={{pointerEvents: "none"}}></div>

        <div
            className="relative mx-auto z-10 container flex flex-col items-start justify-center text-white px-8 py-4 min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between h-screen w-full items-center gap-8">
            <div>
              <motion.h1
                  className="text-3xl sm:text-4xl md:text-6xl font-bold"
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 50}}
                  transition={{duration: 1}}
              >
                {heroData[currentIndex].title}
              </motion.h1>

              <motion.p
                  className="mt-4 text-lg sm:text-xl md:text-2xl"
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: 50}}
                  transition={{duration: 1, delay: 0.5}}
              >
                {heroData[currentIndex].description}
              </motion.p>

              <motion.div initial={{opacity: 0, y: 50}}
                          animate={{opacity: 1, y: 0}}
                          exit={{opacity: 0, y: 50}}
                          transition={{duration: 1, delay: 1}} className="mt-6">
                <Link
                    href={heroData[currentIndex].link}
                    className="px-6 py-3 bg-white hover:opacity-80 transition-all text-black rounded-full items-center space-x-3"
                >
                  <span>Batafsil o`qish</span> <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </Link>
              </motion.div>
            </div>

            <div className="min-w-full text-end">
              <div>
                <div
                    className="flex flex-row md:flex-col lg:flex-col items-end space-x-4 md:space-y-4 lg:space-y-4 sm:space-y-2">
                  <i className="fab fa-instagram text-2xl sm:text-xl btn-glass rounded-lg"></i>
                  <i className="fa-brands fa-square-facebook text-2xl sm:text-xl btn-glass rounded-lg"></i>
                  <i className="fab fa-telegram btn-glass text-2xl sm:text-xl rounded-lg"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
