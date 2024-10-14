// Components/ClientLayout.tsx
"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading/page";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // مدة التحميل 3 ثوانٍ

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loading /> : children}</>;
}
