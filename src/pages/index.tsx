import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='border border-black text-2xl font-bold h-[30px] p-1'>Hi there</div>
  )
}
