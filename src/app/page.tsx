"use client";
import Image from "next/image";
import "./page.css"; 
import AboutUs from "./Components/AboutUs/AboutUs";
import Experiences from "./Components/Experiences/page";
import Loading from "./Components/Loading/page";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import Icon from "./Components/Icon/Icon";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <motion.div
            className="home"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants} // تطبيق التأثيرات
          >
                    <Icon/>
            <div className="container mx-auto">
              {/* Container Info */}
              <div className="container-info">
                <h1>الأستاذ الدكتور عبد السلام الشامي</h1>
                <h2>
                  أستاذ وأستشاري الأمراض الباطنية وأمراض الجهاز التنفسي وحساسية
                  الصدر كلية طب الأزهر زميل كلية أطباء الصدر الأمريكية M.D,FCCP
                </h2>
              </div>
              {/* Container Image */}
              <div className="container-img">
                <Image
                  src={"/dr-5.jpg"}
                  alt="صورة الدكتور عبد السلام الشامي"
                  width={500}
                  height={500}
                  className="img"
                />
              </div>
            </div>
          </motion.div>
          {/* Sections */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants} // نفس تأثير التلاشي
          >
            <AboutUs />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants} // نفس تأثير التلاشي
          >
            <Experiences />
          </motion.div>
        </>
      )}
    </>
  );
}
