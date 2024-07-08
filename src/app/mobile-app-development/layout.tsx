
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'wow.js/css/libs/animate.css'
import '../../../public/assets/css/main.css';
import '../../../public/assets/css/tiny-slider.css';
import '../../../public/assets/css/custom.css';
// import WowWrapper from './../WowWrapper'
const inter = Inter({ subsets: ['latin'] })

// add font awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// import wow from 'wow.js'
// new wow().init()

export default function MobileAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
