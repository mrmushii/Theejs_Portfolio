export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Rashid Ahmed',
    position: 'E-commerce Business Owner',
    img: 'assets/review1.png',
    review:
      "I've had the chance to use the e-commerce website built with Django, and I must say it’s fantastic! The login and registration process is seamless, and I love the add-to-cart feature. The integration of PayPal is also a great touch, making the payment process smooth and secure. I highly recommend this for anyone looking to set up an online store in Bangladesh.",
  },
  {
    id: 2,
    name: 'Shoma Rahman',
    position: 'Digital Marketing Specialist',
    img: 'assets/review2.png',
    review:
      'As a Bangladeshi customer, I appreciate how well the Nike landing page was designed. It is visually appealing, mobile-friendly, and loads quickly. The layout is modern and easy to navigate. The project is an excellent example of how React and Tailwind CSS can be used effectively. Keep up the good work!',
  },
  {
    id: 3,
    name: 'Hasan Mahmud',
    position: 'School Administrator',
    img: 'assets/review3.png',
    review:
      'Being a part of the education sector in Bangladesh, I find this student management system built with Django very useful. It simplifies student data management, and the system’s features like grade tracking and attendance monitoring are exactly what we need. The Bootstrap integration ensures the site is easy to use and accessible to everyone.',
  },
  {
    id: 4,
    name: 'Farzana Begum',
    position: 'Pharmacy Owner',
    img: 'assets/review4.png',
    review:
      'The pharmacy website built with Django has all the features I need. I can easily find medications, manage prescriptions, and even make secure payments. It’s fast, responsive, and the overall design is intuitive. This is a much-needed solution for pharmacies in Bangladesh, especially in the current age of digital transformation.',
  },
];

export const myProjects = [
  {
    title: 'Full-Stack E-Commerce Website with Django and PayPal Integration',
    desc: 'A robust full-stack e-commerce website built using Django, offering seamless shopping experiences. The site includes user authentication (login and registration), a shopping cart with add and delete functionality, and integrated PayPal payment options for smooth transactions.',
    subdesc:
      'This e-commerce platform is designed with a user-friendly interface, allowing customers to browse products, manage their cart, and complete purchases with PayPal. The Django backend ensures secure and efficient handling of user data, cart operations, and payments. Features include user account management, real-time cart updates, and reliable payment gateway integration, making it a comprehensive online shopping solution.',
    href: 'https://github.com/mrmushii/Django-Ecommerce_website',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/django.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Autonomous Soccer Bot Using ESP32',
    desc: 'A feature-rich soccer-playing robot powered by the ESP32 microcontroller, designed for agility, precision, and strategic gameplay. This innovative project combines advanced electronics, robust motors, and intelligent programming to create a bot capable of autonomous movement and soccer-playing functionality.',
    subdesc:
      'This soccer bot leverages the ESP32’s powerful processing capabilities and wireless communication features. Equipped with an LM2596 buck module for efficient power regulation and a high-performance 11.1V LiPo battery, the bot runs seamlessly with 37GB 500 RPM motors for precise movement. The steel frame ensures durability during intense matches, making it ideal for competitive robotics tournaments.',
    href: '',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '',
      },
    ],
  },
  {
    title: 'Movie Finder App built with React!',
    desc: 'A visually appealing and responsive Movie Finder App created using React Tailwind CSS, Appwrite.',
    subdesc:
      'Search through thousands of movies from the database. Access a trending movies list, dynamically updated using Appwrite based based on the most searched movies. Watch movie trailer from the app',
    href: 'https://github.com/mrmushii/React-Movie_Finder',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/bootstrap.png',
      },
    ],
  },
  {
    title: 'E-Shikkha Website',
    desc: 'An innovative E-Shikkha website designed to deliver online education through a responsive and interactive platform. Built with React for dynamic content management and Tailwind CSS for a sleek and modern user interface, this platform provides an excellent learning experience.',
    subdesc:
      'The E-Shikkha website allows students and educators to interact in a virtual classroom environment, offering features such as course listings, video lectures, quizzes, and progress tracking. Using React, the site ensures fast rendering and smooth user interactions, while Tailwind CSS ensures a mobile-first, customizable design. The platform is fully responsive, making it accessible across all devices, from desktops to smartphones, making online learning both efficient and user-friendly.',
    href: 'https://github.com/mrmushii/React-E_shikkha',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/bootstrap.png',
      },
    ],
  },
  {
    title: 'Student Management System Using Django',
    desc: 'A comprehensive Student Management System built using Django for the backend and Bootstrap for the frontend. This system offers an intuitive interface for managing student data, grades, attendance, and more, providing administrators with powerful tools for effective student management.',
    subdesc:
      'This system includes features such as student registration, profile management, grade tracking, attendance monitoring, and report generation. Built with Django’s robust backend functionality, the app ensures secure handling of data and easy navigation. The frontend is responsive and visually appealing, thanks to Bootstrap, which allows for a seamless user experience across all devices. It is an all-in-one solution for educational institutions to streamline student management.',
    href: 'https://github.com/mrmushii/Django-Student_management_system',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/django.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/javascript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.5 : isMobile ? 2.5 : 3.5,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [-.5, -4.3, .7],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Django',
    pos: 'Web Developer',
    duration: '2024 - Present',
    title: "React’s dynamic user interfaces require a back-end to manage data, handle authentication, and process business logic, which is where Django comes in. By combining React with Django, you can build full-stack applications where React manages the front-end and Django handles the back-end, creating a complete, efficient, and scalable web application.",
    icon: '/assets/django.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'React',
    pos: 'Junior Web Developer',
    duration: '2023 - 2024',
    title: " React allows you to build dynamic user interfaces using JavaScript, while HTML provides the structure and CSS handles the styling. React uses components that combine HTML (in the form of JSX) with JavaScript, and having a solid understanding of these technologies makes it easier to build interactive, efficient, and maintainable web applications.",
    icon: '/assets/react.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Html, CSS, Js',
    pos: 'Junior Web Developer',
    duration: '2022 - 2023',
    title: " HTML is used to structure content on the web, CSS is used to style and make it visually appealing, and JavaScript adds interactivity and dynamic features to websites. These technologies are essential for building frontend applications, and mastering them is a great first step toward becoming a web developer. Starting with these core technologies gives you a solid understanding of how websites work, making it easier to learn more advanced tools and frameworks like React, Django, or Node.js later on.",
    icon: '/assets/html.png',
    animation: 'salute',
  },
];