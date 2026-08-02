export type Affiliate = {
  name: string;
  logo: string;
  accent: string;
  label: "CONTACT" | "ADDRESS";
  detail: string;
  website: string;
  websiteLabel: string;
  phone: string;
};

export const affiliates: Affiliate[] = [
  {
    name: "IBC Bank",
    logo: "/images/IBC.jpg",
    accent: "#951a1d",
    label: "CONTACT",
    detail: "Richard Abetet",
    website: "https://www.ibc.com",
    websiteLabel: "https://www.ibc.com",
    phone: "(956) 547-1003",
  },
  {
    name: "Mortgage Solutions",
    logo: "/images/msf-logo.png",
    accent: "#6bc048",
    label: "ADDRESS",
    detail: "636 Ed Carey Drive. Harlingen, TX 78550",
    website: "https://mortgagesolutions.net/",
    websiteLabel: "https://mortgagesolutions.net/",
    phone: "(956) 441-2180",
  },
  {
    name: "Gloor Hardware",
    logo: "/images/gloor.png",
    accent: "#880404",
    label: "ADDRESS",
    detail: "1600 East Alton Gloor Boulevard. Brownsville, TX 78526",
    website: "https://gloorhardware.business.site/",
    websiteLabel: "https://gloorhardware.business.site/",
    phone: "(956) 546-4244",
  },
  {
    name: "McCoy's",
    logo: "/images/mccoy-new.png",
    accent: "#115c56",
    label: "ADDRESS",
    detail: "5500 South Padre Island Hwy. Brownsville, TX 78521",
    website: "https://www.mccoys.com/",
    websiteLabel: "https://www.mccoys.com/",
    phone: "(956) 831-9887",
  },
  {
    name: "Zarsky Lumber",
    logo: "/images/zarskylogo.jpg",
    accent: "#9c0000",
    label: "ADDRESS",
    detail: "808 W. Ocean Blvd. Los Fresnos, TX 78566",
    website: "http://www.zarsky.com/",
    websiteLabel: "http://www.zarsky.com/",
    phone: "(956) 233-4456",
  },
  {
    name: "Lone Star National Bank",
    logo: "/images/lonestar.jpg",
    accent: "#0355a6",
    label: "ADDRESS",
    detail: "3300 N Expy st. Brownsville, TX 78521",
    website: "https://www.lonestarnationalbank.com/index.html",
    websiteLabel: "https://www.lonestarnationalbank.com",
    phone: "(956) 554-6800",
  },
];
