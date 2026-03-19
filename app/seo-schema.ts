// JSON-LD Schema for HR Stack Solutions

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HR Stack Solutions",
  "url": "https://hrstacksolutions.com",
  "description": "Independent reviews and comparisons of HR software for small businesses under 100 employees",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://hrstacksolutions.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HR Stack Solutions",
  "url": "https://hrstacksolutions.com",
  "description": "Independent HR software reviews and comparisons for small businesses",
  "founder": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "dateFounded": "2026",
  "publishingPrinciples": "https://hrstacksolutions.com/affiliate-disclosure"
};

export const articleSchema = (title: string, description: string, date: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "datePublished": date,
  "dateModified": date,
  "author": {
    "@type": "Organization",
    "name": "Stack Labs LLC"
  },
  "publisher": {
    "@type": "Organization",
    "name": "HR Stack Solutions",
    "url": "https://hrstacksolutions.com"
  }
});

export const productReviewSchema = (productName: string, reviewBody: string, rating: number) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": productName,
  "description": reviewBody,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": rating,
    "bestRating": 5,
    "worstRating": 1
  }
});

export const faqSchema = (questions: Array<{q: string, a: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(q => ({
    "@type": "Question",
    "name": q.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.a
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
