// app/home/page.js
export default async function Home() {
  const res = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts', {
    cache: 'no-store' // disables caching so you always get fresh data
  });
  const posts = await res.json();

  return (
    <div>
      <h1>WordPress Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
