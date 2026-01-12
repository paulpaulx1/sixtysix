import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://66professionalservices.com"), // Update with actual domain
  title: {
    default:
      "66 Professional Services | Higher Education Services & Workforce Development",
    template: "%s | 66 Professional Services",
  },
  description:
    "California's leading higher education services organization delivering comprehensive workforce development, curriculum design, and project management solutions for community colleges, state agencies, and federal clients nationwide.",
  keywords: [
    "higher education services",
    "workforce development",
    "curriculum design",
    "curriculum designer",
    "workforce training programs",
    "job readiness",
    "project management higher education",
    "California professional services",
    "DVBE certified",
    "8a certified",
  ],
  authors: [{ name: "66 Professional Services" }],
  creator: "66 Professional Services",
  publisher: "66 Professional Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://66professionalservices.com",
    siteName: "66 Professional Services",
    title:
      "66 Professional Services | Higher Education Services & Workforce Development",
    description:
      "California's leading higher education services organization delivering comprehensive workforce development, curriculum design, and project management solutions.",
    images: [
      {
        url: "/og-image.jpg", // Create this image - 1200x630px
        width: 1200,
        height: 630,
        alt: "66 Professional Services - Higher Education & Workforce Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "66 Professional Services | Higher Education Services & Workforce Development",
    description:
      "California's leading higher education services organization delivering comprehensive workforce development and curriculum design solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
  },
};

// Local Business Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://66professionalservices.com",
  name: "66 Professional Services",
  alternateName: "66 Pro Services",
  description:
    "California's leading higher education services organization delivering comprehensive workforce development, curriculum design, and project management solutions for community colleges, state agencies, and federal clients nationwide.",
  url: "https://66professionalservices.com",
  telephone: "+1-XXX-XXX-XXXX", // Add actual phone
  email: "contact@66professionalservices.com", // Add actual email
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address", // Add actual address
    addressLocality: "Your City",
    addressRegion: "CA",
    postalCode: "XXXXX",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "XX.XXXX", // Add actual coordinates
    longitude: "XX.XXXX",
  },
  areaServed: [
    {
      "@type": "State",
      name: "California",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "XX.XXXX",
      longitude: "XX.XXXX",
    },
    geoRadius: "Nationwide",
  },
  priceRange: "$$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Professional Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workforce Development",
          description:
            "Comprehensive workforce training programs and development services for higher education and government agencies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Curriculum Design",
          description:
            "Professional curriculum development and instructional design services for community colleges and training programs",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Project Management",
          description:
            "Higher education project management and program management services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training Delivery",
          description:
            "Workforce training program implementation and delivery services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Employer Engagement",
          description:
            "Strategic employer partnerships and workforce engagement services",
        },
      },
    ],
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Higher Education Services",
      description:
        "Comprehensive higher education consulting and workforce development services",
    },
  ],
  knowsAbout: [
    "Higher Education Services",
    "Workforce Development",
    "Curriculum Design",
    "Project Management",
    "Training Programs",
    "Job Readiness",
    "DVBE Services",
    "8A Certification",
  ],
  awards: [
    "DVBE Certified - Disabled Veteran Business Enterprise",
    "8A Program Pathway Eligible",
  ],
  slogan: "California's Leading Higher Education Services Partner",
  foundingDate: "2016", // Adjust to actual founding year (mentioned 8+ years)
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1", // Update as reviews come in
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    // Add social media profiles when available
    // 'https://www.linkedin.com/company/66-professional-services',
    // 'https://twitter.com/66proservices',
  ],
};

// Organization Schema for brand recognition
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://66professionalservices.com/#organization",
  name: "66 Professional Services",
  url: "https://66professionalservices.com",
  logo: {
    "@type": "ImageObject",
    url: "https://66professionalservices.com/logo.png", // Add actual logo
    width: 250,
    height: 60,
  },
  description:
    "Expert higher education services firm with 10+ specialists delivering workforce development, curriculum design, and project management solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
