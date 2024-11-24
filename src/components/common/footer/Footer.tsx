import React from 'react';
import Image from "next/image";

export const Footer = () => {
  return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-4 lg:mb-0">
              <div className={"flex items-center space-x-10 space-y-2"}>
                {["namangan-turizm-logo.gif", "uzbek-travel-logo.png"].map((logo) => (
                    <Image
                        key={logo}
                        src={`/images/${logo}`}
                        alt={`${logo.split("-").join(" ")} logo`}
                        className={"filter invert brightness-0"}
                        width={150}
                        height={150}
                    />
                ))}
              </div>
              <p className={"block w-full mt-5 text-2xl"}>Namangan viloyat turizm boshqarmasi</p>
            </div>
            <div className="w-full lg:w-1/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Ish vaqtlarimiz</h2>
              <ul className={"space-y-2"}>
                <li>
                  Dushanba: 09:30 - 17:30
                </li>
                <li>
                  Seshanba: 09:30 - 17:30
                </li>
                <li>
                  Tushlik: 13:00 - 14:00
                </li>
                <li>
                  Chorshanba: 09:30 - 17:30
                </li>
                <li>
                  Payshanba: 09:30 - 17:30
                </li>
                <li>
                  Juma: 09:30 - 17:30
                </li>
                <li>
                  Shanba: 09:30 - 15:30
                </li>
                <li>
                  Yakshanba: Dam olish kuni
                </li>
                <li>
                  Tushlik: 13:00 - 14:00
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Turistlarga</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Documentation</a>
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Agentliklarga</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-400">Features</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">Documentation</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/6 px-4 mb-4 lg:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Bog`lanish</h2>
              <ul className={"space-y-2"}>
                <li>
                  <a href="#" className="hover:text-gray-400"><i className={"fas fa-location-dot"}></i> Namangan shahri
                    Sharof Rashidov ko`chasi 4uy</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400"><i className={"fas fa-phone"}></i> +998943067661</a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400"><i
                      className={"fas fa-envelope"}></i> namangan@turizm.uz</a>
                </li>
              </ul>
              <div className="flex items-center space-x-4 mt-5">
                <a href={"instagram"} target={"_blank"}><i className={"fab text-2xl fa-instagram"}></i></a>
                <a href={"facebook"} target={"_blank"}><i className={"fab text-2xl fa-facebook"}></i></a>
                <a href={"instagram"} target={"_blank"}><i className={"fab text-2xl fa-telegram"}></i></a>
              </div>
            </div>
          </div>
          <hr className={"bg-white my-10"}/>
          <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row space-y-5 md:space-y-0 lg:space-y-0">
            <p>&copy; 2024 Namangan Turizm. Barcha huquqlar himoyalangan.</p>
            <p>Sayt ishlab chiqaruvchi <a href={"Fazo"}>Fazo Software Service MCHJ</a></p>
          </div>
        </div>
      </footer>
  );
};
