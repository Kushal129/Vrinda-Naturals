import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Vrinda Naturals | Premium Himalayan Pink Rock Salt Products",
  description = "Discover authentic Himalayan Pink Rock Salt from Vrinda Naturals. 100% pure, ethically sourced, and rich in minerals. Enhance cooking and health naturally.",
  keywords = "Vrinda Naturals, Himalayan Pink Rock Salt, Organic Salt, Natural Health Products, Buy Pink Salt, Premium Salt, Himalayan Salt Benefits, Natural Products India, Organic Health Products, Pure Rock Salt",
  ogImage = "https://vrindanaturals.netlify.app/logo.png",
  canonicalUrl = "https://vrindanaturals.netlify.app/"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Vrinda Naturals" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="theme-color" content="#FF4790" />
      <meta name="msapplication-TileColor" content="#FF4790" />
      <meta name="rating" content="General" />
      <meta name="geo.region" content="IN" />

      {/* Google Analytics Script */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>

      {/* Social Media Integration */}
      <script async src="https://platform.twitter.com/widgets.js"></script>
      <script async src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0"></script>
    </Helmet>
  );
};

export default SEO; 