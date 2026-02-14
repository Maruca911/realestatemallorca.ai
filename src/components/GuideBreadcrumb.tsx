import { Link } from 'react-router-dom';

interface GuideBreadcrumbProps {
  current: string;
  parent?: { label: string; path: string };
}

export default function GuideBreadcrumb({ current, parent }: GuideBreadcrumbProps) {
  return (
    <nav className="text-sea-200 text-sm mb-6">
      <Link to="/" className="hover:text-white">Home</Link>
      <span className="mx-2">/</span>
      {parent && (
        <>
          <Link to={parent.path} className="hover:text-white">{parent.label}</Link>
          <span className="mx-2">/</span>
        </>
      )}
      <span className="text-white">{current}</span>
    </nav>
  );
}
