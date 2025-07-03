"use client";

import { useEffect, useState } from "react";
import Typed from "typed.js";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { MapPin, Phone, Mail, Code, Monitor, Database, Smartphone, Paintbrush, TabletSmartphone } from "lucide-react";




export default function Home() {
  useEffect(() => {
    AOS.init();

    const typedElement = document.querySelector(".typed");
    if (!typedElement) return;

    const typed = new Typed(typedElement, {
      strings: ["Designer", "Developer", "Freelancer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const skills = [
    { name: "HTML", value: 100 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 75 },
    { name: "React Js", value: 70 },
    { name: "WordPress/CMS", value: 80 },
    { name: "Next Js", value: 55 },
  ];
  const projects = [
    {
      title: "Coin & Dice",
      description: "A fun interactive app built with React and Next.js.",
      image: "/assets/img/images.jpg",
      projectLink: "https://lucky-five-eta.vercel.app/",
      githubLink: "https://github.com/IshaBhoyar-2025/Lucky",
    },
    {
      title: "Calculator App",
      description: "A fully functional calculator that displays full equations.",
      image: "/assets/img/calc-app.jpg",
      projectLink: "https://calculator-omega-beryl.vercel.app/",
      githubLink: "https://github.com/IshaBhoyar-2025/calculator",
    },
    {
      title: "Clock App",
      description: "A clock application with stopwatch and countdown timer.",
      image: "/assets/img/clock.jpg",
      projectLink: "https://clock-virid-xi.vercel.app/",
      githubLink: "https://github.com/IshaBhoyar-2025/clock",
    },

    {
      title: "Shoporia- Ecommerce Website",
      description: "An advanced ecommerce website with user authentication and product management.",
      image: "/assets/img/ecommerce.jpg",
      projectLink: "https://ecommerce-v3b4.vercel.app/",
      githubLink: "https://github.com/IshaBhoyar-2025/clock",
    },
  ];


  const services = [
    { icon: <Code />, title: "Web Development", description: "Building responsive and high-performance websites using modern frameworks like React, Next.js, and Tailwind CSS." },
    { icon: <Monitor />, title: "Frontend Development", description: "Creating dynamic and interactive user interfaces with React, HTML, CSS, and JavaScript." },
    { icon: <Database />, title: "Backend Development", description: "Developing robust and scalable server-side applications with Node.js, Express, and databases like MongoDB & MySQL." },
    { icon: <TabletSmartphone />, title: "Responsive Web Design", description: "Ensuring seamless user experiences across all devices with mobile-first and adaptive design techniques." },
    { icon: <Paintbrush />, title: "UI/UX Design", description: "Crafting intuitive and visually appealing user experiences with Figma and modern design principles." },
    { icon: <Smartphone />, title: "Software Development", description: "Building efficient, maintainable, and scalable software solutions tailored to client needs." },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    // Format message for WhatsApp
    const whatsappMessage = `Hello, I would like to contact you.
    
    *Name:* ${name}
    *Email:* ${email}
    *Subject:* ${subject}
    *Message:* ${message}`;

    const phoneNumber = "917038441214"; // Replace with your WhatsApp number (without + symbol)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp link
    window.open(whatsappURL, "_blank");
  };



  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <Image
          src="/assets/img/hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-auto"
          width={1920}
          height={1080}
          priority
        />
        <div className="container">
          <h2>Isha Bhoyar</h2>
          <p>
            I&apos;m <span className="typed"></span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Passionate about design and development, I specialize in creating high-quality digital experiences.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <Image
                src="/assets/img/isha-portfolio.jpg"
                className="img-fluid"
                alt="Profile Image"
                width={400}
                height={400}
              />
            </div>
            <div className="col-lg-8 content">
              <h2>Frontend Developer</h2>
              <p className="fst-italic py-3">
                Crafting seamless digital experiences through design and development.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14/02/2001</span></li>
                    <li>
                      <i className="bi bi-chevron-right"></i> <strong>GitHub Profile:</strong>
                      <a
                        href="https://github.com/IshaBhoyar-2025"
                        target="_blank"
                        className="text-blue-500 hover:underline ml-1"
                      >
                        IshaBhoyar-2025
                      </a>
                    </li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>7038441214</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nagpur, Maharashtra</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>24</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Graduation</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>bhoyarisha8@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
                Dedicated to building innovative and user-friendly web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section bg-gray-100 py-0">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>
            Web Development – Crafting seamless and interactive digital experiences.
          </p>
        </div>

        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <span className="block text-lg font-semibold flex justify-between">
                  <span>{skill.name}</span> <span className="text-gray-700">{skill.value}%</span>
                </span>
                <div className="relative w-full bg-gray-300 h-3 rounded-md mt-2 overflow-hidden">
                  <div
                    className="bg-blue-500 h-3 transition-all duration-1000 ease-in-out"
                    style={{ width: `${skill.value}%` }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
            To secure employment with a reputable company, where I can utilize my
            skills and business studies background to the maximum.
          </p>
        </div>

        <div className="container grid grid-cols-2 gap-6">
          {/* Left Side */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Isha Bhoyar</h4>
              <p>
                <em>
                  Frontend Developer with 6 months of hands-on experience and 2
                  years of non-teaching work experience. Passionate about
                  building responsive and user-friendly web applications.
                </em>
              </p>
              {/* <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Nagpur, Maharashtra
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +91 7034841214
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  bhoyarisha8@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <a
                    href="https://www.linkedin.com/in/isha-bhoyar-395054217/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <a
                    href="https://github.com/IshaBhoyar-2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub Profile
                  </a>
                </li>
              </ul> */}
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Computer Science (CS)</h4>
              <h5>Graduated, June 2022 | First Division (67.25%)</h5>
              <p>Rashtrasant Tukdoji Maharaj Nagpur University</p>
            </div>

            <div className="resume-item">
              <h4>Higher Secondary (10+2)</h4>
              <h5>Graduated, July 2019 | Second Division (47.54%)</h5>
              <p>Maharashtra State Board</p>
            </div>

            <div className="resume-item">
              <h4>Secondary Education (10th)</h4>
              <h5>Graduated, July 2017 | First Division (77.20%)</h5>
              <p>Maharashtra State Board</p>
            </div>

            <h3 className="resume-title">Certificates</h3>
            <div className="resume-item">
              <ul>
                <li>MS-CIT</li>
              </ul>
            </div>

            <h3 className="resume-title">Languages Known</h3>
            <div className="resume-item">
              <ul>
                <li>English</li>
                <li>Hindi</li>
                <li>Marathi</li>
              </ul>
            </div>

            <h3 className="resume-title">Personal Interests</h3>
            <div className="resume-item">
              <ul>
                <li>Watching Movies</li>
                <li>Listening to Songs</li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Feb 2025 - Present</h5>
              <p><em>Adnecto Technologies</em></p>
              <ul>
                <li>Developed and optimized frontend components using React and Next.js.</li>
                <li>Created responsive user interfaces using Tailwind CSS and Bootstrap.</li>
                <li>Collaborated with backend developers for seamless API integration.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Frontend Developer</h4>
              <h5>Aug 2024 - Jan 2025</h5>
              <p><em>Kvorage.in, Nagpur, Maharashtra</em></p>
              <ul>
                <li>Developed and optimized frontend components using HTML ,CSS and Javascript.</li>
                <li>Created responsive user interfaces using Tailwind CSS and Bootstrap.</li>
                <li>Collaborated with backend developers for seamless API integration.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Non-Teaching Staff</h4>
              <h5>Aug 2022 - July 2024</h5>
              <p><em>Shri Sai Taj Polytechnic College, Nagpur, Maharashtra</em></p>
              <ul>
                <li>Managed administrative tasks and assisted faculty in the computer department.</li>
                <li>Maintained student and staff records.</li>
                <li>Handled office communications and coordinated meetings.</li>
              </ul>
            </div>

            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>College Information Website</h4>
              <p>Developed a fully responsive college website using HTML, CSS, JavaScript, and Bootstrap.</p>
            </div>

            <div className="resume-item">
              <h4>Toss a Coin and Throw a Dice</h4>
              <p>Built an interactive Next.js app using TypeScript and Tailwind CSS.</p>
            </div>

            <div className="resume-item">
              <h4>Calculator App</h4>
              <p>Created a functional calculator using Next.js with React and TypeScript.</p>
            </div>

            <div className="resume-item">
              <h4>Clock, Stopwatch, and Countdown Timer</h4>
              <p>Developed a time management application with advanced functionalities.</p>
            </div>

             <div className="resume-item">
              <h4>Shoporia- Ecommerce Website</h4>
              <p>Developed a ecommerce website with advanced functionalities.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="portfolio py-0 bg-gray-100">
        <div className="container mx-auto px-4 py-0">
          <div className="container section-title" data-aos="fade-up">
            <h2>Projects</h2>
            <p>Here Are Some of My Latest Projects</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="200">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={project.image} alt={project.title} width={400} height={250} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  <div className="flex space-x-4 mt-2">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="project-link text-blue-500 hover:underline">
                      View Project
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link text-blue-500 hover:underline">
                      GitHub 
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="services" className="services section py-12">
        <div className="container mx-auto px-4 py-0">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p> Offering a range of development services to build high-quality digital solutions tailored to your needs.
            </p>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:bg-gradient-to-r from-blue-500 to-purple-500 text-white duration-300 group"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="w-12 h-12 flex items-center justify-center text-4xl text-blue-600 group-hover:text-yellow-300 transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold group-hover:text-white">{service.title}</h4>
                <p className="text-gray-600 mt-2 group-hover:text-white">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact section py-12">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p> Feel free to reach out via the contact form to connect with me directly on WhatsApp.
          </p>
        </div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-6 bg-white p-6 shadow-md rounded-lg">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <MapPin className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-sm font-semibold">Address</h3>
                <p className="text-gray-600">Duttawadi, Nagpur, Maharashtra-440023</p>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <Phone className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-sm font-semibold">Call Us</h3>
                <p className="text-gray-600">+91 7038441214</p>
              </div>
            </div>
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
              <Mail className="text-blue-600 text-2xl" />
              <div>
                <h3 className="text-sm font-semibold">Email Us</h3>
                <p className="text-gray-600">bhoyarisha8@gmail.com</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29766.74122057228!2d78.9672700230502!3d21.158659253467896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eaf403d610bb%3A0x61b83b7dc16c9a76!2sDuttawadi%2C%20Nagpur%2C%20Maharashtra%20440023!5e0!3m2!1sen!2sin!4v1743232829863!5m2!1sen!2sin"
              className="w-full h-52 rounded-lg shadow-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg">
            <form className="space-y-4" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xm font-medium pb-2">Your Name</label>
                  <input type="text" id="name" className="w-full p-2 border rounded-lg" required onChange={handleChange} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xm font-medium pb-2">Your Email</label>
                  <input type="email" id="email" className="w-full p-2 border rounded-lg" required onChange={handleChange} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xm font-medium pb-2">Subject</label>
                <input type="text" id="subject" className="w-full p-2 border rounded-lg" required onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-xm font-medium pb-2">Message</label>
                <textarea id="message" className="w-full p-2 border rounded-lg" rows={4} required onChange={handleChange}></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer id="footer" className="relative bg-gray-100 py-6">
        <div className="container mx-auto text-center">
          <div className="text-gray-600">
            <p>
              &copy; <span>Copyright</span>
              <strong className="px-1">IshaPortfolio</strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Designed by
            <a
              // href="https://bootstrapmade.com/"
              className="text-blue-500 hover:underline mx-1"
            >
              Isha Bhoyar
            </a>

          </div>
        </div>

        {/* Scroll Top Button */}
        <a
          href="#"
          id="scroll-top"
          className="fixed bottom-5 right-5 bg-blue-800 text-white p-2 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 transition-all"
        >
          <i className="bi bi-arrow-up-short text-lg"></i>
        </a>

        {/* Preloader */}
        <div id="preloader" className="hidden"></div>
      </footer>
    </main>
  );
}
