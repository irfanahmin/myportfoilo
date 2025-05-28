import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-blackbg dark:bg-gray-900 text-gray-200 transition-colors duration-500">
      <Component {...pageProps} />
    </div>
  );
}
