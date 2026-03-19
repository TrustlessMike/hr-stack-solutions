import { breadcrumbSchema } from '../seo-schema';

interface BreadcrumbProps {
  items: Array<{ name: string; url: string }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(items)),
        }}
      />
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 mx-2 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.name}</span>
              ) : (
                <a
                  href={item.url}
                  className="text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
