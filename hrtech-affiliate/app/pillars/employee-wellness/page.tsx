import Link from 'next/link';

export const metadata = {
  title: 'Employee Wellness and Engagement Software 2026',
  description: 'Compare employee wellness platforms, engagement tools, and pulse survey software. Build better company culture with mental health benefits and recognition platforms.',
  keywords: 'employee wellness, engagement software, pulse surveys, recognition platform, mental health benefits',
};

export default function WellnessPillar() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Employee Wellness & Engagement</h1>
          <p className="text-xl">
            Build better company culture with wellness platforms, engagement tools, 
            and pulse surveys. Improve retention and employee satisfaction.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>What is Employee Wellness Software?</h2>
            <p>
              Employee wellness platforms handle mental health benefits, wellness challenges, 
              engagement surveys, recognition programs, and culture building. For small 
              businesses, these tools cost $50-500/month and improve retention, satisfaction, 
              and productivity.
            </p>

            <h2>Top Wellness & Engagement Platforms</h2>
            
            <h3>15Five</h3>
            <p><strong>Best for:</strong> Performance + engagement combined</p>
            <p><strong>Pricing:</strong> $4-12/employee/month</p>
            <p>
              15Five combines weekly check-ins, OKR tracking, pulse surveys, and recognition. 
              Best for companies wanting performance management + engagement in one platform.
            </p>

            <h3>Lattice</h3>
            <p><strong>Best for:</strong> Performance reviews + engagement</p>
            <p><strong>Pricing:</strong> $4-11/employee/month</p>
            <p>
              Lattice is a performance platform with engagement features. OKRs, 1:1s, 
              performance reviews, and pulse surveys. Strong for companies prioritizing 
              performance management.
            </p>

            <h3>Wellable</h3>
            <p><strong>Best for:</strong> Corporate wellness programs</p>
            <p><strong>Pricing:</strong> Custom (typically $200-500/month)</p>
            <p>
              Wellable runs wellness challenges, tracks wellness benefits, and manages 
              incentive programs. Best for companies wanting structured wellness 
              initiatives.
            </p>

            <h3>Officevibe</h3>
            <p><strong>Best for:</strong> Pulse surveys + anonymous feedback</p>
            <p><strong>Pricing:</strong> $3.50-5/employee/month</p>
            <p>
              Officevibe focuses on pulse surveys and anonymous feedback. Weekly 
              one-question surveys, action recommendations, and manager dashboards. 
              Best for companies wanting lightweight engagement tracking.
            </p>

            <h3>Bonusly</h3>
            <p><strong>Best for:</strong> Peer-to-peer recognition</p>
            <p><strong>Pricing:</strong> $3-5/employee/month</p>
            <p>
              Bonusly is a recognition platform where employees give points to peers. 
              Points redeem for rewards. Best for building recognition culture.
            </p>

            <h2>Related Articles</h2>
            <ul>
              <li><Link href="/blog/employee-wellness-remote">Employee Wellness for Remote Teams</Link></li>
              <li><Link href="/blog/pulse-survey-tools">Best Pulse Survey Tools</Link></li>
              <li><Link href="/blog/recognition-platforms">Employee Recognition Platforms</Link></li>
              <li><Link href="/blog/mental-health-benefits">Mental Health Benefits for Employers</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
