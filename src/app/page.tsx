"use client";
import Image from "next/image";
import "./page.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Experiences from "./Components/Experiences/page";
import Loading from "./Components/Loading/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="home">
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
          </div>
          <AboutUs />
          <Experiences />
        </>
      )}
    </>
  );
}
