import Link from 'next/link';

export const metadata = {
  title: 'SEO Dashboard - HR Tech Affiliate',
  description: 'Track rankings, traffic, and affiliate performance',
};

export default function Dashboard() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">SEO & Performance Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Content Status */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Content Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Articles Published:</span>
                <span className="font-semibold">10</span>
              </div>
              <div className="flex justify-between">
                <span>Pillar Pages:</span>
                <span className="font-semibold">6</span>
              </div>
              <div className="flex justify-between">
                <span>Legal Pages:</span>
                <span className="font-semibold">4</span>
              </div>
              <div className="flex justify-between">
                <span>Total Pages:</span>
                <span className="font-semibold">20</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Target (Month 1):</span>
                <span className="font-semibold">50 articles</span>
              </div>
            </div>
          </div>

          {/* Technical SEO */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Technical SEO</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>XML Sitemap</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>llms.txt (GEO)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>JSON-LD Schema</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✓</span>
                <span>Fast Loading (Next.js SSG)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Keyword Tracking */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-2xl font-semibold mb-4">Target Keywords (Top Priority)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Keyword</th>
                  <th className="text-left py-2">Search Vol</th>
                  <th className="text-left py-2">KD</th>
                  <th className="text-left py-2">Target Page</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">best payroll for small business</td>
                  <td>1,300</td>
                  <td>45</td>
                  <td>/blog/best-payroll-under-50-employees</td>
                  <td>Not indexed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">gusto vs onpay</td>
                  <td>880</td>
                  <td>28</td>
                  <td>/blog/gusto-vs-onpay</td>
                  <td>Not indexed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">best HRIS under 100 employees</td>
                  <td>590</td>
                  <td>32</td>
                  <td>/blog/best-hris-under-100-employees</td>
                  <td>Not indexed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">cheapest payroll software</td>
                  <td>720</td>
                  <td>38</td>
                  <td>/blog/cheapest-payroll-2026</td>
                  <td>Not indexed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">best PEO for small business</td>
                  <td>480</td>
                  <td>35</td>
                  <td>/blog/best-peo-under-50-employees</td>
                  <td>Not indexed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Submit sitemap to Google Search Console</li>
            <li>Apply to affiliate programs (Gusto, BambooHR, Justworks, etc.)</li>
            <li>Write 40 more articles (target: 50 total)</li>
            <li>Build backlinks (guest posts, directories, HARO)</li>
            <li>Track rankings weekly</li>
            <li>Optimize CTR on ranking pages</li>
          </ol>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
