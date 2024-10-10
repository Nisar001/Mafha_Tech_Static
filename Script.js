// Define your courses as an array of objects with price and discountedPrice
const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Learn the basics of web development and build real-world projects.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
    price: 299.99,
    discountedPrice: 199.99
  },
  {
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning techniques.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
    price: 349.99,
    discountedPrice: 249.99
  },
  {
    title: "Digital Marketing",
    description: "Become an expert in SEO, social media marketing, and Google Ads.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
    price: 199.99,
    discountedPrice: 149.99
  },
  {
    title: "Machine Learning A-Z",
    description: "Comprehensive guide to machine learning algorithms and real-world implementation.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
    price: 399.99,
    discountedPrice: 299.99
  },
  {
    title: "React.js Advanced Concepts",
    description: "Learn React from the ground up, focusing on advanced concepts and patterns.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
    price: 249.99,
    discountedPrice: 199.99
  },
  {
    title: "Cybersecurity for Beginners",
    description: "Learn how to protect networks, devices, and data from cyberattacks.",
    image: "https://via.placeholder.com/400x200",
    link: "#",
    price: 299.99,
    discountedPrice: 179.99
  }
];

// Get the course container element
const courseContainer = document.getElementById('course-container');

// Use map() to generate HTML for each course, including price and discounted price
courseContainer.innerHTML = courses.map(course => `
  <div class="bg-white shadow-lg rounded-lg p-6">
    <img src="${course.image}" alt="${course.title}" class="w-full rounded mb-4">
    <h3 class="text-2xl font-semibold mb-2">${course.title}</h3>
    <p class="text-gray-600 mb-4">${course.description}</p>
    <div class="mb-4">
      <span class="text-red-600 text-xl font-bold">$${course.discountedPrice}</span>
      <span class="line-through text-gray-500 ml-2">$${course.price}</span>
    </div>
    <a href="${course.link}" class="text-blue-600 font-semibold">Enroll Now</a>
  </div>
`).join('');


const techLogos = [
  { name: 'HTML5', src: 'https://via.placeholder.com/100?text=HTML5' },
  { name: 'CSS3', src: 'https://via.placeholder.com/100?text=CSS3' },
  { name: 'JavaScript', src: 'https://via.placeholder.com/100?text=JavaScript' },
  { name: 'React', src: 'https://via.placeholder.com/100?text=React' },
  { name: 'Node.js', src: 'https://via.placeholder.com/100?text=Node.js' },
  { name: 'Python', src: 'https://via.placeholder.com/100?text=Python' },
  { name: 'MongoDB', src: 'https://via.placeholder.com/100?text=MongoDB' },
  { name: 'Tailwind CSS', src: 'https://via.placeholder.com/100?text=Tailwind' },
];

// Get the techGallery div
const techGallery = document.getElementById('techGallery');

// Generate logos dynamically using map
techLogos.map(logo => {
  const logoDiv = `
    <div class="w-40 h-40 p-4 bg-white rounded-lg shadow-lg flex items-center justify-center">
      <img src="${logo.src}" alt="${logo.name}" class="w-full h-full object-contain">
    </div>
  `;
  
  // Insert logo div into the DOM
  techGallery.innerHTML += logoDiv;
});
