"use client";

import { animate, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineAttachEmail, MdOutlineMailLock } from "react-icons/md";

export default function Home() {
  const [text, setText] = useState(
    "Unterach braucht den Tourismus, aber um den Charakter des Ortes (Klein Venedig) zu erhalten, muss es ein sanfter sein. Ist nun ein so gigantisches Projekt die Lösung der finanziellen Probleme des Ortes?"
  );
  const [isTextHovered, setIsTextHovered] = useState(false);

  const textArray = [
    "Unterach braucht den Tourismus, aber um den Charakter des Ortes (Klein Venedig) zu erhalten, muss es ein sanfter sein. Ist nun ein so gigantisches Projekt die Lösung der finanziellen Probleme des Ortes?",
    `In Unterach am Attersee steht derzeit ein riesiges Hotelprojekt kurz vor der Genehmigung. Das geplante Hotel Resort soll mit 308 Betten das größte Hotel der Region werden, verbunden mit einem riesigen Flächen- und Ressourcenverbrauch – fast doppelt so groß als das bisher größte Hotel „Winzer" in St. Georgen.`,
    "Es ist geplant über dem Ortskern ein Resort Hotel, welches sich über die gesamte obere Hausstatt ausdehnt, zu errichten. Die Darstellung zeigt das geplante Resort wie es, von der Unterach gegenüberliegenden Seeseite in seiner Ausdehnung/Dimension zu erkennen sein wird.",
    "Die Gesamtlänge der Anlage beträgt 210 m und ist somit größer als der Linzer Hauptplatz. Im Vergleich dazu, die Uferpromenade in Unterach ist nur 150 m lang.",
    "Insgesamt wird eine Fläche von ca. 8.000m² verbaut und versiegelt (das entspricht der Fläche von 80 Einfamilienhäusern).",
    "Mehr als 100m tiefe Bohrungen bis unter die Oberfläche des Attersees, um das Objekt wärmetechnisch zu versorgen, sind geplant.",
    "Aus den aktuellen Planungsunterlagen lässt sich nicht auf eine Integration der Interessen der Einheimischen schließen.",
    "Ist das Projekt also doch mehr Renditeobjekt als regionales Entwicklungsprojekt?",
    "Unterach steht an einem Scheideweg: Ist der Georgshof ein zukunftsweisendes Leuchtturmprojekt, das neue Perspektiven bringt - oder ein überdimensionierter Fremdkörper, der mehr schadet als nützt?",
    "Jetzt haben wir gemeinsam die letzte Möglichkeit das Projekt in dieser Form zu verhindern, sodass ein kleineres, an den Ort angepasstes Projekt vorgelegt werden muss. An uns allen liegt es nun, den Ort für uns, unsere Kinder und Gäste lebenswert zu erhalten",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(1);

  useEffect(() => {
    const changingText = document.getElementById(
      "changing_text"
    ) as HTMLElement;
    if (!changingText) return;

    const interval = setInterval(() => {
      if (isTextHovered) return;

      animate(changingText, { opacity: 0 }, { duration: 1.5 });

      setTimeout(() => {
        setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
        setText(textArray[currentTextIndex]);
      }, 1500);

      setTimeout(() => {
        animate(changingText, { opacity: 1 }, { duration: 1.5 });
      }, 2500);
    }, 12500);

    return () => clearInterval(interval);
  }, [isTextHovered, currentTextIndex, textArray]);

  const handleMouseLeaveText = () => {
    const changingText = document.getElementById(
      "changing_text"
    ) as HTMLElement;
    if (!changingText) return;

    animate(changingText, { opacity: 0, scale: 1 }, { duration: 1.5 });

    setTimeout(() => {
      setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
      setText(textArray[currentTextIndex]);
    }, 1500);

    setTimeout(() => {
      animate(changingText, { opacity: 1 }, { duration: 1.5 });
    }, 2500);
  };

  const handleMouseEnterText = () => {
    const changingText = document.getElementById(
      "changing_text"
    ) as HTMLElement;
    if (!changingText) return;
    animate(changingText, { scale: 1.05 }, { duration: 1 });
  };

  const [activeButton, setActiveButton] = useState("obg");
  const [currentPDF, setCurrentPDF] = useState(
    "/Ortsbildgutachten_Unterach_markiert.pdf"
  );

  const handleOBGClick = () => {
    setActiveButton("obg");
    const PDF_Box = document.getElementById("PDF_Box") as HTMLElement;
    const newPDF = "/Ortsbildgutachten_Unterach_markiert.pdf";
    if (currentPDF == newPDF) {
      return;
    }
    if (PDF_Box) {
      animate(PDF_Box, { opacity: 0 }, { duration: 0.75 });
      setTimeout(() => {
        setCurrentPDF(newPDF);
      }, 750);
      setTimeout(() => {
        animate(PDF_Box, { opacity: 1 }, { duration: 0.75 });
      }, 850);
    }
  };

  const handlePWClick = () => {
    setActiveButton("pw");
    const PDF_Box = document.getElementById("PDF_Box") as HTMLElement;
    const newPDF = "/Flugblatt_010825.pdf";
    if (currentPDF == newPDF) {
      return;
    }
    if (PDF_Box) {
      animate(PDF_Box, { opacity: 0 }, { duration: 0.75 });
      setTimeout(() => {
        setCurrentPDF(newPDF);
      }, 750);
      setTimeout(() => {
        animate(PDF_Box, { opacity: 1 }, { duration: 0.75 });
      }, 850);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="relative min-h-screen overflow-hidden">
        {/* Header - Responsive */}
        <div className="absolute flex justify-center flex-col top-4 md:top-10 w-full h-auto p-2 md:p-1 bg-cyan-700 z-100 shadow rounded-md">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-bold tracking-normal self-center text-center px-4">
            Hotelprojekt "Georgshof" in Unterach: Zukunftschance oder
            Fehlplanung?
          </h1>
          <motion.div
            className="self-center z-30 flex items-center justify-center mt-2"
            whileHover={{
              color: "#6CEDF9",
              scale: 1.01,
              transition: { duration: 0.2, ease: easeInOut },
            }}
          >
            <MdOutlineAttachEmail className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 3xl:text-6xl" />
            <a
              href="mailto:info@lebenswert-attersee.at"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl ml-2 underline"
            >
              info@lebenswert-attersee.at
            </a>
          </motion.div>
        </div>

        {/* Background Images */}
        <div className="absolute inset-0">
          <motion.img
            src="/Ansicht_0.jpg"
            alt="Georgshof"
            className="absolute top-0 w-full h-full object-cover brightness-50 z-10"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <img
            src="/Ansicht_4.jpg"
            alt="Projekt Attersee"
            className="absolute top-0 w-full h-full object-cover brightness-50"
          />
        </div>

        {/* Main Quote - Responsive */}
        <motion.h1
          className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 3xl:text-5xl top-[40vh] md:top-[50vh] font-bold left-4 md:left-[3vw] tracking-normal z-20 px-4 md:px-0"
          initial={{ opacity: 0 }}
          animate={{ y: "-15vh", opacity: [0, 0, 1] }}
          transition={{ duration: 1.5, ease: easeInOut }}
        >
          Unvernünftiges zu planen ist verzeihlich,
          <br />
          Unvernünftiges zu bauen jedoch nicht!
        </motion.h1>

        {/* PDF Section - Responsive */}
        <div className="absolute top-5/12 md:top-1/5 right-4 md:right-10 bottom-32 md:bottom-20 z-[100] w-[90vw] md:w-[40vw] flex flex-col">
          <motion.div
            className="z-[70] mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 text-base sm:text-lg md:text-xl xl:text-2xl 3xl:text-3xl">
              {/* Button 1 */}
              <motion.p
                onClick={handleOBGClick}
                className={`cursor-pointer ${
                  activeButton === "obg" ? "underline" : ""
                } font-semibold text-center sm:text-left`}
                transition={{}}
              >
                Ortsbildgutachten
              </motion.p>
              {/* Button 2 */}
              <motion.p
                onClick={handlePWClick}
                className={`cursor-pointer ${
                  activeButton === "pw" ? "underline" : ""
                } font-semibold text-center sm:text-left`}
              >
                Postwurf
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
            className="z-40 w-full flex-1 min-h-[300px] md:min-h-[400px]"
            id="PDF_Box"
          >
            <object
              data={`${currentPDF}#zoom=page-fit`}
              type="application/pdf"
              width="100%"
              height="100%"
              className="rounded-lg shadow-lg"
            >
              <div className="bg-gray-800 p-4 rounded-lg text-center">
                <p className="text-white">PDF kann nicht angezeigt werden.</p>
                <a
                  href={currentPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 underline hover:text-cyan-300"
                >
                  Dokument öffnen
                </a>
              </div>
            </object>
          </motion.div>
        </div>

        {/* Bottom Navigation - Responsive */}
        <div className="absolute bottom-4 md:bottom-[2.5vh] right-4 md:right-8 z-[200] flex items-center gap-4">
          <Link href={"/impressum"}>
            <motion.div
              className="text-lg md:text-xl xl:text-2xl 3xl:text-3xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2, ease: easeInOut },
              }}
            >
              <p>Impressum</p>
            </motion.div>
          </Link>
          <Link href={"/mail"}>
            <motion.div
              className="text-xl md:text-2xl xl:text-3xl 3xl:text-4xl cursor-pointer"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2, ease: easeInOut },
              }}
            >
              <MdOutlineMailLock />
            </motion.div>
          </Link>
        </div>

        {/* Changing Text - Responsive */}
        <motion.div
          className="absolute bottom-20 md:bottom-[5vh] left-4 md:left-[2.5vw] z-[60] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 3xl:text-3xl w-[90vw] md:w-[50vw] flex justify-center text-center h-auto md:h-[30vh] max-h-64 px-4 md:px-0"
          id="changing_text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 1.5, ease: easeInOut, delay: 2 }}
          onMouseEnter={() => {
            setIsTextHovered(true);
            handleMouseEnterText();
          }}
          onMouseLeave={() => {
            setIsTextHovered(false);
            handleMouseLeaveText();
          }}
        >
          <p className="self-center bg-black/30 p-4 rounded-lg backdrop-blur-sm">
            {text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
