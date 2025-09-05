// app/enroll/page.tsx
import Link from 'next/link';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Journey to Reiki Certification Starts Here',
  description: 'Follow our simple enrollment process to begin your Reiki certification journey.',
};

export default function EnrollPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden text-[#4D5557]">
    <div className={`w-full min-h-screen ${inter.className} px-4 py-12 md:px-16`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <p className="text-lg font-medium text-[#4A1A11]">Enroll</p>
        </div>
        
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Left Column - Title */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>
              Your Journey to Reiki Certification Starts Here
            </h1>
          </div>
          
          {/* Right Column - Description */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-[#4A1A11]">
              Embarking on your Reiki certification is a transformative experience. Follow 
              our simple steps to gain the knowledge and skills needed to practice Reiki 
              effectively. With our comprehensive courses, you&apos;ll be guided every step of 
              the way.
            </p>
          </div>
        </div>
        
        {/* Three Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div>
            <div className="mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16.0001V7.99995C21 6.52718 21 5.7908 20.673 5.21009C20.3854 4.70985 19.9295 4.31217 19.388 4.07691C18.7704 3.81036 17.9767 3.88335 16.3894 4.02935C15.5175 4.11569 15.0816 4.15886 14.7004 4.32382C14.3639 4.47022 14.0719 4.68265 13.8267 4.94624C13.5523 5.24237 13.3753 5.6474 13.0213 6.45746L13.0213 6.45749C12.7016 7.18355 12.5418 7.54658 12.2929 7.77401C12.1456 7.90467 11.9768 8.00524 11.7951 8.07038C11.5243 8.16979 11.2217 8.16979 10.6164 8.16979H9C7.4087 8.16979 6.61305 8.16979 6.07583 8.55267C5.96064 8.63245 5.85527 8.72568 5.76268 8.83137C5.40305 9.27655 5.37908 9.92761 5.33115 11.2297L5.33114 11.2303C5.2991 12.1638 5.28308 12.6306 5.3416 13.0238C5.48017 14.1254 6.17345 15.056 7.16396 15.5226C7.51527 15.6644 7.97411 15.7304 8.89178 15.8625C9.81108 15.9949 10.2707 16.0611 10.6235 16.0002C11.5773 15.8497 12.3708 15.2329 12.7839 14.3644C12.9544 14.0471 13.0554 13.6766 13.2574 12.9356L13.2574 12.9356C13.6114 11.5226 13.7885 10.8161 14.0629 10.52C14.3081 10.2564 14.6001 10.044 14.9366 9.89757C15.3178 9.73261 15.7537 9.68944 16.6255 9.6031C17.9151 9.48359 18.5599 9.42384 19.0454 9.63916C19.4696 9.82669 19.8198 10.1533 20.0342 10.5637C20.2725 11.023 20.2725 11.6152 20.2725 12.7998V16.0001C20.2725 17.8857 20.2725 18.8285 19.6996 19.4142C19.1267 20 18.1988 20 16.3429 20H7.92958C6.07372 20 5.14579 20 4.57289 19.4142C4 18.8285 4 17.8857 4 16.0001V7.99995C4 6.11438 4 5.17158 4.57289 4.58579C5.14579 4 6.07372 4 7.92958 4H16.3429C18.1988 4 19.1267 4 19.6996 4.58579C20.2725 5.17158 20.2725 6.11438 20.2725 7.99995V8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Step 1: Choose Your Course</h2>
            <p className='text-[#4A1A11]'>Select the Reiki level that suits your needs.</p>
          </div>
          
          {/* Step 2 */}
          <div>
            <div className="mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16.0001V7.99995C21 6.52718 21 5.7908 20.673 5.21009C20.3854 4.70985 19.9295 4.31217 19.388 4.07691C18.7704 3.81036 17.9767 3.88335 16.3894 4.02935C15.5175 4.11569 15.0816 4.15886 14.7004 4.32382C14.3639 4.47022 14.0719 4.68265 13.8267 4.94624C13.5523 5.24237 13.3753 5.6474 13.0213 6.45746L13.0213 6.45749C12.7016 7.18355 12.5418 7.54658 12.2929 7.77401C12.1456 7.90467 11.9768 8.00524 11.7951 8.07038C11.5243 8.16979 11.2217 8.16979 10.6164 8.16979H9C7.4087 8.16979 6.61305 8.16979 6.07583 8.55267C5.96064 8.63245 5.85527 8.72568 5.76268 8.83137C5.40305 9.27655 5.37908 9.92761 5.33115 11.2297L5.33114 11.2303C5.2991 12.1638 5.28308 12.6306 5.3416 13.0238C5.48017 14.1254 6.17345 15.056 7.16396 15.5226C7.51527 15.6644 7.97411 15.7304 8.89178 15.8625C9.81108 15.9949 10.2707 16.0611 10.6235 16.0002C11.5773 15.8497 12.3708 15.2329 12.7839 14.3644C12.9544 14.0471 13.0554 13.6766 13.2574 12.9356L13.2574 12.9356C13.6114 11.5226 13.7885 10.8161 14.0629 10.52C14.3081 10.2564 14.6001 10.044 14.9366 9.89757C15.3178 9.73261 15.7537 9.68944 16.6255 9.6031C17.9151 9.48359 18.5599 9.42384 19.0454 9.63916C19.4696 9.82669 19.8198 10.1533 20.0342 10.5637C20.2725 11.023 20.2725 11.6152 20.2725 12.7998V16.0001C20.2725 17.8857 20.2725 18.8285 19.6996 19.4142C19.1267 20 18.1988 20 16.3429 20H7.92958C6.07372 20 5.14579 20 4.57289 19.4142C4 18.8285 4 17.8857 4 16.0001V7.99995C4 6.11438 4 5.17158 4.57289 4.58579C5.14579 4 6.07372 4 7.92958 4H16.3429C18.1988 4 19.1267 4 19.6996 4.58579C20.2725 5.17158 20.2725 6.11438 20.2725 7.99995V8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Step 2: Complete Your Registration</h2>
            <p className='text-[#4A1A11]'>Fill out the registration form and submit.</p>
          </div>
          
          {/* Step 3 */}
          <div>
            <div className="mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16.0001V7.99995C21 6.52718 21 5.7908 20.673 5.21009C20.3854 4.70985 19.9295 4.31217 19.388 4.07691C18.7704 3.81036 17.9767 3.88335 16.3894 4.02935C15.5175 4.11569 15.0816 4.15886 14.7004 4.32382C14.3639 4.47022 14.0719 4.68265 13.8267 4.94624C13.5523 5.24237 13.3753 5.6474 13.0213 6.45746L13.0213 6.45749C12.7016 7.18355 12.5418 7.54658 12.2929 7.77401C12.1456 7.90467 11.9768 8.00524 11.7951 8.07038C11.5243 8.16979 11.2217 8.16979 10.6164 8.16979H9C7.4087 8.16979 6.61305 8.16979 6.07583 8.55267C5.96064 8.63245 5.85527 8.72568 5.76268 8.83137C5.40305 9.27655 5.37908 9.92761 5.33115 11.2297L5.33114 11.2303C5.2991 12.1638 5.28308 12.6306 5.3416 13.0238C5.48017 14.1254 6.17345 15.056 7.16396 15.5226C7.51527 15.6644 7.97411 15.7304 8.89178 15.8625C9.81108 15.9949 10.2707 16.0611 10.6235 16.0002C11.5773 15.8497 12.3708 15.2329 12.7839 14.3644C12.9544 14.0471 13.0554 13.6766 13.2574 12.9356L13.2574 12.9356C13.6114 11.5226 13.7885 10.8161 14.0629 10.52C14.3081 10.2564 14.6001 10.044 14.9366 9.89757C15.3178 9.73261 15.7537 9.68944 16.6255 9.6031C17.9151 9.48359 18.5599 9.42384 19.0454 9.63916C19.4696 9.82669 19.8198 10.1533 20.0342 10.5637C20.2725 11.023 20.2725 11.6152 20.2725 12.7998V16.0001C20.2725 17.8857 20.2725 18.8285 19.6996 19.4142C19.1267 20 18.1988 20 16.3429 20H7.92958C6.07372 20 5.14579 20 4.57289 19.4142C4 18.8285 4 17.8857 4 16.0001V7.99995C4 6.11438 4 5.17158 4.57289 4.58579C5.14579 4 6.07372 4 7.92958 4H16.3429C18.1988 4 19.1267 4 19.6996 4.58579C20.2725 5.17158 20.2725 6.11438 20.2725 7.99995V8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-3">Step 3: Start Learning</h2>
            <p className='text-[#4A1A11]'>Access your course materials and begin your journey.</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6">
        <Link href="/registerForm" className="inline-block border border-black px-8 py-3 font-medium bg-[#4A1A11] text-white">
            Register
          </Link>
          <Link href="/about" className="inline-flex items-center gap-2 px-8 py-3 font-medium text-[#4A1A11]">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}