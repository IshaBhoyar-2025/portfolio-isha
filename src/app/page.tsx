import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio website." />
        <meta name="keywords" content="portfolio, developer, projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/assets/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />

        {/* Main CSS File */}
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>

      <body className="index-page">
        {/* Header Section */}
        <header id="header" className="header dark-background d-flex flex-column">
          <i className="header-toggle d-xl-none bi bi-list"></i>

          <div className="profile-img">
            <Image
              src="/assets/img/my-profile-img.jpg"
              alt="Profile Image"
              width={150}
              height={150}
              className="img-fluid rounded-circle"
            />
          </div>

          <Link href="/" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">Alex Smith</h1>
          </Link>

          {/* Social Media Links */}
          <div className="social-links text-center">
            <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>

          {/* Navigation Menu */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i> Home</a></li>
              <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
              <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
              <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
              <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
              <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
            </ul>
          </nav>
        </header>
      </body>
    </>
  );
}
