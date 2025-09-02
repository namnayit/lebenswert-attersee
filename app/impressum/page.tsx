"use client";

import { animate, easeIn, easeInOut, motion } from "framer-motion"
import { useEffect, useState } from "react";

import { MdOutlineAttachEmail, MdOutlineMailLock, MdArrowBack } from "react-icons/md";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 to-cyan-800">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-20">
        <motion.img
          src="/Ansicht_0.jpg"
          alt="Georgshof"
          className="absolute top-0 w-full h-full object-cover brightness-30 z-10"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <img 
          src="/Ansicht_4.jpg" 
          alt="Projekt Attersee"
          className="absolute top-0 w-full h-full object-cover brightness-30"
        />
      </div>

      {/* Header */}
      <div className="relative z-20 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <motion.div
              className="flex items-center cursor-pointer text-white hover:text-cyan-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              onClick={() => window.history.back()}
            >
              <MdArrowBack className="text-lg md:text-2xl mr-1 md:mr-2" />
              <span className="text-lg font-semibold">Zurück</span>
            </motion.div>
            
            <motion.div
              className="flex items-center"
              whileHover={{
                color: "#6CEDF9",
                scale: 1.01,
                transition: { duration: 0.2, ease: easeInOut }
              }}
            >
              <MdOutlineAttachEmail className="text-lg md:text-3xl" />
              <a href="mailto:info@lebenswert-attersee.at" className="text-lg md:text-xl ml-2 underline">
                info@lebenswert-attersee.at
              </a>
            </motion.div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
            Impressum
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 lg:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Webseitenbetreiber</h3>
                    <p className="text-gray-700">Helmut Payer, Sonja Schachl</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Anschrift</h3>
                    <p className="text-gray-700">Hausstatt 6<br />4866 Unterach am Attersee</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Kontaktdaten</h3>
                    <p className="text-gray-700">
                      Email: <a href="mailto:kontakt@lebenswert-attersee.at" className="text-cyan-600 hover:text-cyan-800 underline">kontakt@lebenswert-attersee.at</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Anwendbare Rechtsvorschrift</h3>
                    <p className="text-gray-700">
                      <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 underline">
                        www.ris.bka.gv.at
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Online Streitbeilegung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: 
                    <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 underline ml-1">
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Urheberrecht</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Haftungsausschluss</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.
                  </p>
                </div>

                <div className="bg-cyan-50 p-4 md:p-6 rounded-lg border-l-4 border-cyan-600">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Blattlinie</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anliegen dieser Website ist es, kritisch über das geplante Bauprojekt „Resort Georgshof" in Unterach zu berichten, die Bevölkerung zu informieren und für den Erhalt eines lebenswerten Attersees einzutreten.
                  </p>
                </div>

                <div className="text-center pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Quelle: <a href="https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 underline font-semibold">
                      Impressum Generator Österreich
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="fixed bottom-4 right-4 z-[200] text-2xl cursor-pointer bg-cyan-600 p-3 rounded-full shadow-lg hover:bg-cyan-500 transition-colors"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2, ease: easeInOut }
        }}
        onClick={() => location.href = "/mail"}
      >
        <MdOutlineMailLock className="text-white" />
      </motion.div>
    </div>
  );
}