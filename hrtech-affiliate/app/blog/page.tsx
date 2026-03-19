import Link from 'next/link';

export const metadata = {
  title: 'All Articles | HR Tech for Small Business',
  description: 'Browse all HR software reviews, comparisons, and guides for small business.',
};

const articles = [
  {
    slug: 'best-payroll-under-50-employees',
    title: 'Best Payroll Software for Small Business Under 50 Employees',
    excerpt: 'Our top picks for businesses with 1-50 employees, ranked by value, features, and ease of use.',
    category: 'Payroll',
  },
  {
    slug: 'gusto-vs-onpay',
    title: 'Gusto vs OnPay: Which Payroll Platform Wins?',
    excerpt: 'Head-to-head comparison of two leading small business payroll platforms.',
    category: 'Comparison',
  },
  {
    slug: 'best-hris-under-100-employees',
    title: 'Best HRIS Systems Under 100 Employees',
    excerpt: 'Top HRIS platforms for small-mid businesses. Compare BambooHR, Gusto, Zoho, and more.',
    category: 'HRIS',
  },
  {
    slug: 'bamboohr-vs-gusto',
    title: 'BambooHR vs Gusto: HRIS vs Payroll-First',
    excerpt: 'Which platform is right for your team? HRIS-focused or payroll-focused?',
    category: 'Comparison',
  },
  {
    slug: 'best-peo-under-50-employees',
    title: 'Best PEO for Small Business Under 50 Employees',
    excerpt: 'Top PEO providers for startups and small businesses wanting HR outsourcing.',
    category: 'PEO',
  },
  {
    slug: 'cheapest-payroll-2026',
    title: 'Cheapest Payroll Software 2026',
    excerpt: 'Budget-friendly payroll options that don\'t sacrifice essential features.',
    category: 'Payroll',
  },
  {
    slug: 'affordable-hr-startups',
    title: 'Affordable HR Software for Startups',
    excerpt: 'HR solutions for early-stage companies watching every dollar.',
    category: 'HRIS',
  },
  {
    slug: 'employee-onboarding-software',
    title: 'Best Employee Onboarding Software',
    excerpt: 'Streamline new hire paperwork, training, and first-day experience.',
    category: 'HRIS',
  },
  {
    slug: 'best-benefits-admin',
    title: 'Best Benefits Administration Software',
    excerpt: 'Health insurance, COBRA, FSA/HRA management for small teams.',
    category: 'Benefits',
  },
  {
    slug: 'justworks-vs-trinet',
    title: 'Justworks vs TriNet: PEO Comparison',
    excerpt: 'Two leading PEOs compared for small business HR outsourcing.',
    category: 'Comparison',
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">All Articles</h1>
        <p className="text-xl text-gray-600 mb-12">
          HR software reviews, comparisons, and guides for small business.
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.slug} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition">
              <div className="text-sm text-blue-600 mb-2">{article.category}</div>
              <Link href={`/blog/${article.slug}`}>
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">{article.title}</h2>
              </Link>
              <p className="text-gray-600">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
