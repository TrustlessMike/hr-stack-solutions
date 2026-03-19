import { organizationSchema } from '../seo-schema';

export default function AuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">About Stack Labs</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Stack Labs LLC operates multiple affiliate review sites focused on 
            business software, HR tech, AI tools, and ecommerce solutions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Background</h2>
          <p>
            Stack Labs LLC is a tech entrepreneurship venture operating multiple 
            affiliate review properties. The sites provide unbiased, 
            data-driven software comparisons for small businesses.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Expertise</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>HR software for small business (under 100 employees)</li>
            <li>Business productivity tools (CRM, project management, invoicing)</li>
            <li>AI tools for content creation and business automation</li>
            <li>Ecommerce platforms and Shopify apps</li>
            <li>Financial planning for physicians and entrepreneurs</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Review Methodology</h2>
          <p>
            All reviews follow a consistent framework: hands-on testing, feature comparison, 
            pricing analysis, and real-world use case evaluation. Affiliate relationships are 
            disclosed transparently, and recommendations are based on genuine value for the 
            target audience.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p>
            Email: <a href="mailto:malik@stack-labs.net" className="text-blue-600 hover:underline">
              malik@stack-labs.net
            </a>
          </p>
          
          <p className="text-sm text-gray-500 mt-12">
            Business: Stack Labs LLC | EIN: 33-4430184 | Wyoming
          </p>
        </div>
      </div>
    </>
  );
}
