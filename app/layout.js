import { Maven_Pro } from 'next/font/google';
import './globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReduxProvider from '@/store/reduxProvider';

import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import Navbar from '@/components/Navbar/Navbar';
import SideMenu from '@/components/SideMenu/SideMenu';
import Footer from '@/components/Footer/Footer';

const maven_pro = Maven_Pro({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

// export const metadata = {
//   title: 'Cloud Games',
//   description: 'Cloud Games',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* <meta charSet='utf-8' /> */}
        <link rel='icon' href='favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <link rel='apple-touch-icon' href='logo.png' />
        <link rel='manifest' href='manifest.json' />
        <link rel='preconnect' href='https:fonts.gstatic.com' />
        <meta property='og:description' content='Cloud Games' />
        <meta property='og:image' content='logo.png' />
        <meta property='og:title' content='Cloud Games' />
        <meta property='og:description' content='Games Homepage' />
        {/* <meta property="og:url" content="https://matei87.github.io/Portfolio/" /> */}
        <title>Cloud Games</title>
      </head>
      <body className={maven_pro.className}>
        <ReduxProvider>
          <ScrollToTop />
          <Navbar />
          <SideMenu pageWrapId={'sidebar'} />
          <div id='sidebar'>{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
