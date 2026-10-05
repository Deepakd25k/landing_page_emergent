const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexHtmlPath = path.join(buildDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error("index.html not found in build directory. Make sure to run this after build.");
  process.exit(1);
}

let baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Definitions for replacements
const configs = [
  {
    filename: 'cohort.html',
    title: 'D2C Growth Cohort — Live End-to-End Performance Marketing | ₹2,999',
    description: 'A 1-month live weekend cohort. Learn Meta Ads, Google Ads, CAPI, n8n, and unit economics on live accounts spending ₹3L/day.',
    url: 'https://cohort.incrementalvalue.in',
    canonical: 'https://incrementalvalue.in/course'
  },
  {
    filename: 'growth.html',
    title: 'D2C Growth Partnership — End-to-End Execution for D2C Brands',
    description: 'We are not an agency. We are an in-house Growth Partner handling Meta Ads, Q-Commerce, CAPI, and Unit Economics with full P&L accountability.',
    url: 'https://growth.incrementalvalue.in',
    canonical: 'https://incrementalvalue.in/pm'
  }
];

configs.forEach(config => {
  let newHtml = baseHtml;
  
  // Replace Title
  newHtml = newHtml.replace(/<title>.*?<\/title>/g, `<title>${config.title}</title>`);
  
  // Replace standard description
  newHtml = newHtml.replace(/<meta name="description" content=".*?"\s*\/>/g, `<meta name="description" content="${config.description}" />`);
  
  // Replace OG tags
  newHtml = newHtml.replace(/<meta property="og:title" content=".*?"\s*\/>/g, `<meta property="og:title" content="${config.title}" />`);
  newHtml = newHtml.replace(/<meta property="og:description" content=".*?"\s*\/>/g, `<meta property="og:description" content="${config.description}" />`);
  newHtml = newHtml.replace(/<meta property="og:url" content=".*?"\s*\/>/g, `<meta property="og:url" content="${config.url}" />`);
  
  // Replace Twitter tags
  newHtml = newHtml.replace(/<meta name="twitter:title" content=".*?"\s*\/>/g, `<meta name="twitter:title" content="${config.title}" />`);
  newHtml = newHtml.replace(/<meta name="twitter:description" content=".*?"\s*\/>/g, `<meta name="twitter:description" content="${config.description}" />`);
  
  // Add canonical tag for SEO
  const canonicalTag = `<link rel="canonical" href="${config.canonical}" />`;
  newHtml = newHtml.replace('</head>', `  ${canonicalTag}\n    </head>`);
  
  fs.writeFileSync(path.join(buildDir, config.filename), newHtml);
  console.log(`Generated ${config.filename}`);
});
