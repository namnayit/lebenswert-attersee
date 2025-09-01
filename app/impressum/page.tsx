"use client";

import { animate } from "motion";
import { easeIn, easeInOut, motion } from "motion/react"
import { useEffect, useState } from "react";

import { MdOutlineAttachEmail, MdOutlineMailLock } from "react-icons/md";

import {  } from 'react-device-detect';

export default function Home() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const [text, setText] = useState("Unterach braucht den Tourismus, aber um den Charakter des Ortes (Klein Venedig) zu erhalten, muss es ein sanfter sein. Ist nun ein so gigantisches Projekt die Lösung der finanziellen Probleme des Ortes?");
    const [isTextHovered, setIsTextHovered] = useState(false)

    const textArray = [
        "Unterach braucht den Tourismus, aber um den Charakter des Ortes (Klein Venedig) zu erhalten, muss es ein sanfter sein. Ist nun ein so gigantisches Projekt die Lösung der finanziellen Probleme des Ortes?",
        "In Unterach am Attersee steht derzeit ein riesiges Hotelprojekt kurz vor der Genehmigung. Das geplante Hotel Resort soll mit 308 Betten das größte Hotel der Region werden, verbunden mit einem riesigen Flächen- und Ressourcenverbrauch – fast doppelt so groß als das bisher größte Hotel „Winzer“ in St. Georgen.",
        "Es ist geplant über dem Ortskern ein Resort Hotel, welches sich über die gesamte obere Hausstatt ausdehnt, zu errichten. Die Darstellung zeigt das geplante Resort wie es, von der Unterach gegenüberliegenden Seeseite in seiner Ausdehnung/Dimension zu erkennen sein wird.",
        "Die Gesamtlänge der Anlage beträgt 210 m und ist somit größer als der Linzer Hauptplatz. Im Vergleich dazu, die Uferpromenade in Unterach ist nur 150 m lang.",
        "Insgesamt wird eine Fläche von ca. 8.000m² verbaut und versiegelt (das entspricht der Fläche von 80 Einfamilienhäusern).",
        "Mehr als 100m tiefe Bohrungen bis unter die Oberfläche des Attersees, um das Objekt wärmetechnisch zu versorgen, sind geplant.",
        "Aus den aktuellen Planungsunterlagen lässt sich nicht auf eine Integration der Interessen der Einheimischen schließen.",
        "Ist das Projekt also doch mehr Renditeobjekt als regionales Entwicklungsprojekt?",
        "Unterach steht an einem Scheideweg: Ist der Georgshof ein zukunftsweisendes Leuchtturmprojekt, das neue Perspektiven bringt - oder ein überdimensionierter Fremdkörper, der mehr schadet als nützt?",
        "Jetzt haben wir gemeinsam die letzte Möglichkeit das Projekt in dieser Form zu verhindern, sodass ein kleineres, an den Ort angepasstes Projekt vorgelegt werden muss. An uns allen liegt es nun, den Ort für uns, unsere Kinder und Gäste lebenswert zu erhalten",
    ]

    const [currentTextIndex, setCurrentTextIndex] = useState(1);

    useEffect(() => {
        //! IMPORTANT
        if (isDesktop) return
        if (isMobile) return
        const changingText = document.getElementById("changing_text") as HTMLElement;

        const interval = setInterval(() => {
            if (isTextHovered) return

            animate(changingText, { opacity: 0 }, { duration: 1.5 });

            setTimeout(() => {
                setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
                console.log(currentTextIndex)
                setText(textArray[currentTextIndex]);
            }, 1500);

            setTimeout(() => {
                animate(changingText, { opacity: 1 }, { duration: 1.5 });
            }, 2500);

        }, 12500);

        return () => clearInterval(interval);
    }, [isTextHovered, currentTextIndex])

    const handleMouseLeaveText = () => {
        //! IMPORTANT
        if (isDesktop) return
        if (isMobile) return

        const changingText = document.getElementById("changing_text") as HTMLElement;

        animate(changingText, { opacity: 0, scale: 1 }, { duration: 1.5 });

        setTimeout(() => {
            setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
            console.log(currentTextIndex)
            setText(textArray[currentTextIndex]);
        }, 1500);

        setTimeout(() => {
            animate(changingText, { opacity: 1 }, { duration: 1.5 });
        }, 2500);
    }

    const handleMouseEnterText = () => {
        const changingText = document.getElementById("changing_text") as HTMLElement;
        animate(changingText, { scale: 1.05 }, { duration: 1 })
    }


    const [activeButton, setActiveButton] = useState("obg");
    const [currentPDF, setCurrentPDF] = useState("/Ortsbildgutachten_Unterach_markiert.pdf");

    const handleOBGClick = () => {
        setActiveButton("obg");
        const PDF_Box = document.getElementById('PDF_Box') as HTMLElement;
        const newPDF = "/Ortsbildgutachten_Unterach_markiert.pdf"
        if (currentPDF == newPDF) {
            return
        }
        animate(PDF_Box, { opacity: 0 }, { duration: 0.75 });
        setTimeout(() => {
            setCurrentPDF(newPDF)
        }, 750)
        setTimeout(() => {
            animate(PDF_Box, { opacity: 1 }, { duration: 0.75 });
        }, 850)
    }

    const handlePWClick = () => {
        setActiveButton("pw");
        const PDF_Box = document.getElementById('PDF_Box') as HTMLElement;
        const newPDF = "/Flugblatt_010825.pdf"
        if (currentPDF == newPDF) {
            return
        }
        animate(PDF_Box, { opacity: 0 }, { duration: 0.75 });
        setTimeout(() => {
            setCurrentPDF(newPDF)
        }, 750)
        setTimeout(() => {
            animate(PDF_Box, { opacity: 1 }, { duration: 0.75 });
        }, 850)
    }


    return (
        <>
            {isMobile ?
                <div className="bg-cyan-700 w-screen h-screen flex flex-col justify-center">
                    <h1 className="self-center text-center text-4xl font-bold">Hinweis:</h1>
                    <br />
                    <h1 className="self-center text-center text-3xl font-bold">Diese Homepage ist leider noch nicht für mobile Geräte verfügbar!<br /><br />Bitte verwenden Sie einen Computer um diese Homepage anzuzeigen.</h1>
                </div>
                :
                isDesktop ?
                    <div className="bg-cyan-700 w-screen h-screen flex flex-col justify-center">
                        <h1 className="self-center text-center text-4xl font-bold">Hinweis:</h1>
                        <br />
                        <h1 className="self-center text-center text-3xl font-bold">Diese Homepage wird aktuell überarbeitet!<br />
                            <motion.div
                                className=""
                                whileHover={{
                                    color: "#6CEDF9",
                                    scale: 1.01,
                                    transition: { duration: 0.2, ease: easeInOut }
                                }}
                            >
                                <a href="mailto:info@lebenswert-attersee.at" className="underline">info@lebenswert-attersee.at</a>
                            </motion.div>
                        </h1>
                        <motion.div
                            className="absolute bottom-[2.5vh] right-8 z-[200] text-2xl xl:text-3xl 3xl:text-4xl"
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2, ease: easeInOut }
                            }}
                            onClick={() => location.href = "/mail"}
                        >
                            <MdOutlineMailLock />
                        </motion.div>
                    </div>
                    :
                    <div className="">
                        <div className="relative h-screen">
                            <div className="absolute flex justify-center flex-col top-10 w-full h-auto p-1 bg-cyan-700 z-100 shadow rounded-md">
                                <h1 className="text-3xl xl:text-4xl 3xl:text-5xl font-bold tracking-normal self-center wrap-normal">
                                    Hotelprojekt "Georgshof" in Unterach: Zukunftschance oder Fehlplanung?
                                </h1>
                                <motion.div
                                    className="self-center z-30 flex"
                                    whileHover={{
                                        color: "#6CEDF9",
                                        scale: 1.01,
                                        transition: { duration: 0.2, ease: easeInOut }
                                    }}
                                >
                                    <MdOutlineAttachEmail
                                        className="text-4xl xl:text-5xl 3xl:text-6xl"
                                    />
                                    <a href="mailto:info@lebenswert-attersee.at" className="text-3xl xl:text-4xl 3xl:text-5xl ml-2 underline">info@lebenswert-attersee.at</a>
                                </motion.div>
                            </div>
                            <div className="">
                                <motion.img
                                    src="/Ansicht_0.jpg"
                                    alt="Georgshof"
                                    className="absolute top-0 w-full brightness-50 z-10"
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                ></motion.img>
                                <img src="/Ansicht_4.jpg" alt="Projekt Attersee"
                                    className="absolute top-0 w-full brightness-50"
                                />
                            </div>
                            <div className="z-[1000] absolute mt-40 ml-20  2xl:text-2xl">
                                <h4>Impressum</h4>
                                <p><b>Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25 MedienG, &sect; 63 GewO und &sect; 14 UGB</b></p>
                                <p><b>Webseitenbetreiber:</b> Helmut Payer, Sonja Schachl</p>
                                <p><b>Anschrift:</b> Hausstatt 6, 4866 Unterach am Attersee</p>
                                <p><b>Kontaktdaten:</b> <br /> Email: kontakt@lebenswert-attersee.at </p>

                                <p><b>Anwendbare Rechtsvorschrift:</b> www.ris.bka.gv.at </p>
                                <p><b>Online Streitbeilegung:</b> Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: https://ec.europa.eu/consumers/odr</p>
                                <p><b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.</p><p><b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.<br />Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.</p>
                                <p><b>Blattlinie:</b> Anliegen dieser Website ist es, kritisch über das geplante Bauprojekt „Resort Georgshof“ in Unterach zu berichten, die Bevölkerung zu informieren und für den Erhalt eines lebenswerten Attersees einzutreten.</p>
                                <p>Quelle: <b><a href="https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php">Impressum Generator Österreich</a></b></p>
                            </div>
                        </div>
                        {/* <div className="w-full h-96 bg-cyan-800">

      </div> */}
                    </div>
            }
        </>

    );
}


//TODO: Telefon, Fax delete
//TODO: UID, Gewerbe..., Mitgliedschaften delete
//TODO: berufsbezeichnung delete
//TODO: implement in site

{/* <h4>Impressum</h4><p><b>Informationen und Offenlegung gemäß &sect;5 (1) ECG, &sect; 25 MedienG, &sect; 63 GewO und &sect; 14 UGB</b></p> <p><b>Webseitenbetreiber:</b> Florian Petku</p>
<p><b>Anschrift:</b> Kohlstatt 3, 4866 Unterach am Attersee</p>
<p><b>UID-Nr:</b>  <br> <b>Gewerbeaufsichtbehörde:</b>  <br> <b>Mitgliedschaften:</b></p>
<p><b>Kontaktdaten:</b> <br> Telefon:  <br> Email: kontakt@lebenswert-attersee.at <br> Fax: </p>

<p><b>Anwendbare Rechtsvorschrift:</b> www.ris.bka.gv.at <br> <b>Berufsbezeichnung:</b> </p>
<p><b>Online Streitbeilegung:</b> Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit Probleme bezüglich dem entgeltlichen Kauf von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. Die Europäische Kommission stellt eine Plattform hierfür bereit: https://ec.europa.eu/consumers/odr</p>
<p><b>Urheberrecht:</b> Die Inhalte dieser Webseite unterliegen, soweit dies rechtlich möglich ist, diversen Schutzrechten (z.B dem Urheberrecht). Jegliche Verwendung/Verbreitung von bereitgestelltem Material, welche urheberrechtlich untersagt ist, bedarf schriftlicher Zustimmung des Webseitenbetreibers.</p><p><b>Haftungsausschluss:</b> Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Webseitenbetreiber dieser Webseite keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Sollten Sie dennoch auf ausgehende Links aufmerksam werden, welche auf eine Webseite mit rechtswidriger Tätigkeit/Information verweisen, ersuchen wir um dementsprechenden Hinweis, um diese nach § 17 Abs. 2 ECG umgehend zu entfernen.<br>Die Urheberrechte Dritter werden vom Betreiber dieser Webseite mit größter Sorgfalt beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden derartiger Rechtsverletzungen werden wir den betroffenen Inhalt umgehend entfernen.</p>
<p><b>Blattlinie:</b> Anliegen dieser Website ist es, kritisch über das geplante Bauprojekt „Resort Georgshof“ in Unterach zu berichten, die Bevölkerung zu informieren und für den Erhalt eines lebenswerten Attersees einzutreten.</p>
<p>Quelle: <b><a href="https://www.fairesrecht.at/kostenlos-impressum-erstellen-generator.php">Impressum Generator Österreich</a></b></p> */}