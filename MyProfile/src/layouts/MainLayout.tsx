import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { BackToTop } from "@/components/common/BackToTop";

export function MainLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) {
      return;
    }

    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <div className="min-h-svh bg-bg text-fg">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BackToTop />
    </div>
  );
}
