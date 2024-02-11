import './globals.css'
 import Head from 'next/head'
 import Navbar from '../Components/Navbar/Navbar'


export const metadata = {
  title: 'AUV',
  description: 'Generated by create next app',
  image:"/public/auv1.png"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:image" src={metadata.image} />
    </Head>
    <body className=''>
    <Navbar />
      {children}
    {/* <Footer/> */}
      </body>
  </html>
  )
}
