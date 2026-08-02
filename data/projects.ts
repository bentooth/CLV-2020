export const services = [
  {
    title: "Residential & Commercial",
    description:
      "Our on-staff construction team can handle any residential or commercial task presented, from a bathroom or kitchen make over, to full home or building renovation.",
    image: "/images/4830_Villa_Madrid_3.JPG",
  },
  {
    title: "Design & Planning",
    description:
      "CLV Construction will provide the best design & planning working close with our clients to ensure customer satisfaction. We effectively design, plan, and supervise every detail of your construction project until completion.",
    image: "/recent-projects/5526_Rawhide_Dr_1.JPG",
  },
  {
    title: "Home Improvement",
    description:
      "Our team will guide you every step of the way to building your dream home. We build homes based on our client's preferences and budget.",
    image: "/images/4830_Villa_Madrid_2.JPG",
  },
] as const;

export type Project = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "residential-projects",
    title: "Residential Projects",
    cover: "/projects/residential-projects/IMG_7228.jpg",
    images: [
      "/projects/residential-projects/IMG_6486.jpeg",
      "/projects/residential-projects/IMG_6520.jpeg",
      "/projects/residential-projects/IMG_6953.jpg",
      "/projects/residential-projects/IMG_6979.jpg",
      "/projects/residential-projects/IMG_7228.jpg",
      "/projects/residential-projects/IMG_7232.jpg",
      "/projects/residential-projects/IMG_9356.jpg",
      "/projects/residential-projects/dji_fly_20260312_155448_37_1773349026890_photo_optimized.JPEG",
    ],
  },

  {
    id: "rooftop-work",
    title: "Rooftop Work",
    cover: "/projects/rooftop-work/IMG_7829.jpg",
    images: [
      "/projects/rooftop-work/IMG_7829.jpg",
      "/projects/rooftop-work/IMG_7830.jpg",
      "/projects/rooftop-work/IMG_7831.jpg",
      "/projects/rooftop-work/IMG_7832.jpg",
      "/projects/rooftop-work/IMG_7833.jpg",
      "/projects/rooftop-work/IMG_7834.jpg",
      "/projects/rooftop-work/IMG_7906.jpg",
      "/projects/rooftop-work/IMG_7918.jpg",
      "/projects/rooftop-work/IMG_7919.jpg",
      "/projects/rooftop-work/004181db-91cd-4faa-b67d-50fe044df3e3.JPG",
      "/projects/rooftop-work/32838092-79ac-462f-9e56-7b310858b14d.JPG",
      "/projects/rooftop-work/36880121-3ec1-4977-b2e0-4f3489ca0928.JPG",
      "/projects/rooftop-work/73d92f5d-2ea6-4692-98d6-8c461ce94822.JPG",
      "/projects/rooftop-work/789984ab-214f-45b9-bffe-99969c70ff05.JPG",
      "/projects/rooftop-work/79f3bf87-99c8-45b6-8849-e38a871a71f6.JPG",
      "/projects/rooftop-work/a19da087-e39b-497b-9df1-427eeea29fa0.JPG",
      "/projects/rooftop-work/cc4933df-fcea-4f55-9551-600695cade48.JPG",
      "/projects/rooftop-work/dd7bd8e7-0ab1-46f4-8a22-b62eaef74346.JPG",
      "/projects/rooftop-work/e08df407-b44a-4978-a815-10aea1f74f8c.JPG",
    ],
  },
  {
    id: "home-improvement",
    title: "Home Improvement",
    cover: "/projects/home-improvement/IMG_9426.jpg",
    images: [
      "/projects/home-improvement/IMG_1226.jpg",
      "/projects/home-improvement/IMG_1229.jpg",
      "/projects/home-improvement/IMG_1230.jpg",
      "/projects/home-improvement/IMG_1231.jpg",
      "/projects/home-improvement/IMG_1234.jpg",
      "/projects/home-improvement/IMG_2299.JPG",
      "/projects/home-improvement/IMG_6432.jpg",
      "/projects/home-improvement/IMG_6489.jpeg",
      "/projects/home-improvement/IMG_6503.jpeg",
      "/projects/home-improvement/IMG_6505.jpeg",
      "/projects/home-improvement/IMG_6506.jpeg",
      "/projects/home-improvement/IMG_6509.jpeg",
      "/projects/home-improvement/IMG_6512.jpeg",
      "/projects/home-improvement/IMG_7121.jpg",
      "/projects/home-improvement/IMG_7122.jpg",
      "/projects/home-improvement/IMG_7123.jpg",
      "/projects/home-improvement/IMG_7126.jpg",
      "/projects/home-improvement/IMG_7127.jpg",
      "/projects/home-improvement/IMG_7128.jpg",
      "/projects/home-improvement/IMG_7129.jpg",
      "/projects/home-improvement/IMG_7130.jpg",
      "/projects/home-improvement/IMG_7133.jpg",
      "/projects/home-improvement/IMG_9399.jpg",
      "/projects/home-improvement/IMG_9426.jpg",
    ],
  },
  {
    id: "shower-renovation",
    title: "Shower Renovation",
    cover: "/projects/shower-renovation/IMG_7118.jpg",
    images: [
      "/projects/shower-renovation/IMG_1227.jpg",
      "/projects/shower-renovation/IMG_6437%20(1).jpg",
      "/projects/shower-renovation/IMG_7118.jpg",
      "/projects/shower-renovation/IMG_7132%20(1).jpg",
    ],
  },
  {
    id: "bathroom-remodel",
    title: "Bathroom Remodel",
    cover: "/projects/bathroom-remodel/IMG_6436.jpg",
    images: [
      "/projects/bathroom-remodel/IMG_1228.jpg",
      "/projects/bathroom-remodel/IMG_6436.jpg",
      "/projects/bathroom-remodel/IMG_6438.jpg",
      "/projects/bathroom-remodel/IMG_7120.jpg",
      "/projects/bathroom-remodel/IMG_7131.jpg",
      "/projects/bathroom-remodel/IMG_9397.jpg",
    ],
  },
];
