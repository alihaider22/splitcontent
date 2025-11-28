import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs">
            © {currentYear} SplitContent. Turn long-form into social gold.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-gray-500 hover:text-teal-400 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-teal-400 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
