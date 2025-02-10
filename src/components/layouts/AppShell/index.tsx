import Navigation from "@/components/fragments/Navigation";
import Footer from "@/components/fragments/Footer";
import { AppShellProps } from "@/types/AppShellProps.type";
import { Italiana } from "next/font/google";
import { useRouter } from "next/router";


const italiana = Italiana({
  weight: "400", // Hanya ada weight 400 untuk Italiana
  subsets: ["latin"], // Pastikan mendukung karakter yang dibutuhkan
  variable: "--font-italiana",
});

const AppShell = ({ children }: AppShellProps) => {
  const router = useRouter();
  const { pathname } = router;

  const shouldHideNavbar =
    pathname === "/Auth/Login" || pathname === "/Auth/Register";

  return (
    <div className={`bg-neutral-100 ${italiana.variable}`}>
      {!shouldHideNavbar && <Navigation />}
      {children}

      {!shouldHideNavbar && <Footer />}
    </div>
  );
};

export default AppShell;
