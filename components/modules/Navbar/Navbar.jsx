import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div className={`container-fluid p-0 ${styles.nav_bar}`}>
        <nav
          className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
        >
          <a href="index.html" className={`${styles.navbar_brand} px-lg-4 m-0`}>
            <h1 className="m-0 display-4 text-uppercase text-white">
              Next-Coffee
            </h1>
          </a>
          <button
            type="button"
            className={`${styles.navbar_toggler}`}
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className={`${styles.navbar_toggler_icon}`}></span>
          </button>
          <div
            className={`collapse ${styles.navbar_collapse} justify-content-between`}
            id="navbarCollapse"
          >
            <div className={`${styles.navbar_nav} ml-auto p-4`}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Service" },
                { href: "/menu", label: "Menu" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.nav_link} ${
                    router.pathname === href ? styles.active_nav_link : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className={`${styles.dropdown}`}>
                <a
                  href="#"
                  className={`${styles.nav_link} ${styles.dropdown_toggle} ${
                    router.pathname.includes("reservation") ||
                    router.pathname.includes("testimonial")
                      ? styles.active_nav_link
                      : ""
                  }`}
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className={`${styles.dropdown_menu} text-capitalize`}>
                  {[
                    { href: "/reservation", label: "Reservation" },
                    { href: "/testimonial", label: "Testimonial" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`${styles.dropdown_item} ${
                        router.pathname === href ? styles.active_nav_link : ""
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
