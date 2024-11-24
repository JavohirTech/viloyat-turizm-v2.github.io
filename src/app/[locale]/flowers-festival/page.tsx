"use client"
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion';
import { Link } from '@/i18n/routing';
import { QRCodeSVG } from 'qrcode.react';
import { Pagination } from '@/components';

const Page = () => {
  const url = "https://www.example.com";
  const [showModal, setShowModal] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
      <div>
        <div className="relative w-full h-screen">
          <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white z-10">
            <div
                className="text-center flex justify-center flex-col items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4"
            >
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
              >
                <Image
                    width={200}
                    height={200}
                    src="/images/flowers-festival-logo.gif"
                    alt="Logo"
                    className="mb-4 h-auto w-[100px] md:full lg:w-full xl:max-w-xl"
                />

              </motion.div>

              <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-3xl sm:text-4xl font-bold mb-3"
              >
                Namanganda 63-xalqaro gullar festivali
              </motion.h1>

              <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-base sm:text-lg md:text-xl"
              >
                Dunyoning turli burchaklaridan kelgan gullar va san`at ustalari Namangan shahrida o`z san`ati va yaratgan gullari bilan jahonni hayratda qoldirishga tayyor.
              </motion.p>
            </div>
          </div>
        </div>


        <div className="container mx-auto py-8 px-4">
          <div className="container mx-auto py-8">
            <div className="border border-green-500 w-full my-5 rounded-xl flex items-center">
              <i className="fas fa-search text-2xl p-5 text-green-500"></i>
              <input
                  type="search"
                  placeholder={"Qidiruv..."}
                  className="w-full focus:outline-0 font-baskervville focus:border-0 pe-5 bg-transparent"
              />
            </div>

            <div
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 lg:space-y-0 my-10">
          <span>
            7 ta natija / korsatilmoqda 1 - 7
          </span>

              <div className="flex items-center space-x-3">
                <label>Saralash:</label>

                <div className="relative">
                  <select
                      className="block appearance-none w-full bg-white border border-green-500 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none">
                    <option>Barchasi</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <i className="fas fa-chevron-down text-green-500"></i>
                  </div>
                </div>

              </div>
            </div>
          </div>

            <div className="relative me-5 md:me-0">
              <div className="absolute left-0 top-0 w-[5px] bg-green-500 h-full rounded-xl"></div>
              <div className="space-y-6">
                {[2, 3, 4, 5, 6].map((item, index) => (
                    <Link href={`/flowers-festival/${item}-salom`} key={index} className="relative">
                      {
                        true ? <div className="absolute left-0 h-full w-[5px]">
                          <div
                              className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 bg-white p-5 text-2xl text-green-500 rounded-full border-8 border-white">
                            <i className={"fas fa-check"}></i>
                          </div>
                        </div> : <div className="absolute left-0 h-full w-[5px]">
                          <div
                              className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-green-500 rounded-full border-8 border-white outline outline-1 outline-green-500">
                          </div>
                        </div>
                      }
                      <motion.div
                          className="ms-10 md:ms-20 lg:ms-20 flex flex-col md:flex-row bg-white rounded-3xl h-auto border p-2 md:p-5 lg:p-5 relative mb-5"
                          variants={cardVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once: true, amount: 0.2}}
                          transition={{duration: 0.5, delay: index * 0.1}}
                      >
                        <Image
                            width={100}
                            height={100}
                            src="https://picsum.photos/900"
                            alt="News Image"
                            className="rounded-2xl w-full md:w-1/3"
                        />
                        <div className="p-3 md:p-6 lg:p-6 w-full md:w-2/3 flex flex-col justify-between">
                          <div>
                      <span className="font-serif block w-fit px-3 mb-3 py-1 rounded text-green-500 bg-green-50">
                        Tadbir
                      </span>
                            <h3 className="font-baskervville text-2xl md:text-4xl font-bold mb-2 line-clamp-3">
                              Gullar festivalini ochilish marosimi
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet animi consequuntur
                              delectus dignissimos dolore ea fugiat harum ipsa iste nulla odio porro praesentium quo,
                              rerum sequi sunt temporibus vel.
                            </p>
                          </div>
                          <div className="font-serif flex justify-between">
                            <div>
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                <b>Manzil:</b> Namangan shahar Bobur bog`i
                              </p>
                              <p className="text-gray-600 mb-4 line-clamp-2">
                                <b>Vaqt:</b> 2024-yil 1-iyun soat 10:00 dan 2024-yil 1-iyun soat 18:00 gacha
                              </p>
                            </div>
                            <div className="relative">
                              <QRCodeSVG value={url} size={128} level={"M"}/>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                ))}
              </div>
            </div>

          <AnimatePresence>
            {showModal && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={modalVariants}
                    transition={{ duration: 0.5 }}
                >
                  <motion.div
                      className="bg-white rounded-lg shadow-lg p-6 w-4/5 sm:w-1/2 md:w-1/3"
                      variants={modalVariants}
                  >
                    <h2 className="text-xl font-bold mb-4">
                      Xalqaro gullar festivali 12-kun
                    </h2>
                    <p>
                      Namanganda 63-xalqaro gullar festivali 12-kun davomida o`tkaziladi. Barcha qiziqarli va
                      qiziqarli tadbirlarga taklif etiladi.
                    </p>
                    <button
                        onClick={() => setShowModal(false)}
                        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      Yopish
                    </button>
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>

            <div className={"my-10"}>
              <Pagination currentPage={1} totalPages={1000}/>
            </div>
          </div>
        </div>
        );
        };

        export default Page;
