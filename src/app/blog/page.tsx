export default function BlogPage() {
  return (
    <section className="max-w-2xl mx-auto py-16 mt-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <article className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Welcome to the Blog!</h2>
        <p className="text-gray-700 mb-2">This is a sample blog post. You can add, edit, or remove posts as you like.</p>
        <span className="text-xs text-gray-500">Posted on June 25, 2025</span>
      </article>
      <article className="mb-8 p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-2">Getting Started with Next.js</h2>
        <p className="text-gray-700 mb-2">Next.js makes it easy to build fast, modern web apps with React. Explore the docs and start building!</p>
        <span className="text-xs text-gray-500">Posted on June 20, 2025</span>
      </article>
    </section>
  );
}
