import Link from 'next/link';

export const metadata = {
  title: 'Time Tracking Software for Small Business 2026',
  description: 'Compare time tracking and employee scheduling software. Track hourly employees, manage shifts, and integrate with payroll. Best tools for small teams.',
  keywords: 'time tracking software, employee scheduling, hourly timesheets, labor forecasting, time clock app',
};

export default function TimeTrackingPillar() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Time Tracking Software</h1>
          <p className="text-xl">
            Track hourly employee time, manage schedules, and forecast labor costs. 
            Find time tracking solutions that integrate with your payroll system.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>What is Time Tracking Software?</h2>
            <p>
              Time tracking platforms handle hourly employee timesheets, shift scheduling, 
              break compliance, and labor cost forecasting. For small businesses, these 
              tools cost $5-20/employee/month and integrate with payroll systems to 
              automate wage calculations.
            </p>

            <h2>Top Time Tracking Platforms</h2>
            
            <h3>Gusto Time</h3>
            <p><strong>Best for:</strong> Gusto payroll customers</p>
            <p><strong>Pricing:</strong> Included on Complete plan</p>
            <p>
              Gusto's native time tracking integrates directly with payroll. Clock in/out, 
              manage PTO, and auto-calculate wages. Best for existing Gusto customers 
              wanting integrated time + payroll.
            </p>

            <h3>Homebase</h3>
            <p><strong>Best for:</strong> Hourly + scheduling for retail/restaurants</p>
            <p><strong>Pricing:</strong> Free (basic), $24.95/location (premium)</p>
            <p>
              Homebase is built for hourly teams in retail, restaurants, and services. 
              Employee scheduling, time clock, break compliance, and labor forecasting. 
              Free tier available for single locations.
            </p>

            <h3>When I Work</h3>
            <p><strong>Best for:</strong> Team scheduling + time tracking</p>
            <p><strong>Pricing:</strong> $5/employee/month</p>
            <p>
              When I Work focuses on employee scheduling with time tracking built in. 
              Shift swaps, availability management, and labor cost reporting. Good for 
              teams needing robust scheduling features.
            </p>

            <h3>TSheets (QuickBooks Time)</h3>
            <p><strong>Best for:</strong> QuickBooks integration</p>
            <p><strong>Pricing:</strong> $20/month + $8/employee</p>
            <p>
              QuickBooks Time (formerly TSheets) integrates natively with QuickBooks 
              payroll. GPS tracking, job costing, and robust reporting. Best for 
              QuickBooks customers wanting deep integration.
            </p>

            <h2>Related Articles</h2>
            <ul>
              <li><Link href="/blog/best-time-tracking-hourly">Best Time Tracking for Hourly Employees</Link></li>
              <li><Link href="/blog/employee-scheduling-restaurants">Best Scheduling App for Restaurants</Link></li>
              <li><Link href="/blog/time-tracking-payroll-integration">Time Tracking with Payroll Integration</Link></li>
              <li><Link href="/blog/time-tracking-remote-teams">Time Tracking for Remote Teams</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
