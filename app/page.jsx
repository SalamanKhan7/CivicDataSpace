import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center py-12 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-heading font-bold mb-4 text-third">
        Welcome to CivicDataSpace
      </h1>
      <p className="text-gray-700 text-lg mb-6">
        Explore open datasets to make better civic, environmental, and social
        decisions.
      </p>
      <Link
        href="/all-data"
        className="inline-block px-6 py-3 bg-secondary text-white rounded shadow hover:bg-primary transition"
      >
        Browse All Datasets →
      </Link>
    </section>
  );
}
