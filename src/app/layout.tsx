import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ronak CHATURVEDI - Visual Designer & Creative Director',
  description: 'Portfolio of visual designer and creative director Ronak CHATURVEDI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pt-[25px] bg-gray-100">
          {/* Browser Frame */}
          <div className="browser-frame">
            <div className="browser-header">
              <div className="browser-buttons">
                <span className="browser-button red"></span>
                <span className="browser-button yellow"></span>
                <span className="browser-button green"></span>
              </div>
              <div className="browser-url ">
                <input type="text" value="Ronak.Portfolio" readOnly />
              </div>
            </div>
            
            <Navbar />
            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}