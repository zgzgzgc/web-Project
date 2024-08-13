import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && router.pathname !== '/auth/login' && router.pathname !== '/auth/register') {
      router.push('/auth/login');
    }
  }, [router]);

  const noNavigationPages = ['/auth/login', '/auth/register'];

  return (
    <div style={{ backgroundColor: 'transparent' }}> {/* Ensure the background is transparent */}
      {!noNavigationPages.includes(router.pathname) }
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
