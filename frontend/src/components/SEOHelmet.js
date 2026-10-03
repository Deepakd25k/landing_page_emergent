import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHelmet = ({ title, description, url, schemas = [] }) => {
  // Base Organization Schema (Always injected to establish the brand entity)
  const baseOrgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Incremental Value",
    "url": "https://incrementalvalue.in",
    "founder": {
      "@type": "Person",
      "name": "Deepak Gupta"
    },
    "description": "D2C Growth Partner and Ecosystem Integrator."
  };

  const allSchemas = [baseOrgSchema, ...schemas];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
