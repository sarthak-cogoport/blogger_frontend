import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>

            <li>
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>

            <li>
              <Link href="/authors">
                <a>Authors</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Become an Author</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Create</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
