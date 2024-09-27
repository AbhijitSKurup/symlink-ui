import React from 'react';

import { TickIcon } from '../assets/icons';

const PlansAndPricing = () => {
  return (
    <div className="bg-gray-900 text-white py-16 min-h-screen flex flex-col w-full align-center text-center rounded-lg">
      <div className=" mx-auto mt-24 w-full align-center items-center relative">
        <h2 className="text-[60px] font-bold mb-4 ">Plans and Pricing</h2>
        <p className="text-lg mb-10 ">Choose the right plan for your team</p>
        <div className="flex flex-col mx-[224px] lg:flex-row gap-10 bg-gray-3 p-8 h-fit divide-x rounded-lg">
          {/* Basic Plan */}
          <div className=" p-8 w-1/3 ">
            <h3 className="text-4xl font-semibold mb-4 text-left">$29<span className="text-base">/month</span></h3>
            <h4 className="text-xl font-semibold mb-4 text-left">Basic</h4>
            <h2 className='text-base mb-10 text-left'>For Individuals or Small Teams (1-5 Users)</h2>
            <ul className="text-left space-y-5 py-4">
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> PII data masking (names, addresses, emails, etc).</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Side-by-side comparison of original vs. masked data.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Basic GPT model integration</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Limited chat history storage (up to 30 days)</li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className=" p-8 w-1/3">
            <h3 className="text-4xl font-bold mb-4 text-left">$49<span className="text-base">/month</span></h3>
            <h4 className="text-xl font-semibold mb-4 text-left">Premium</h4>
            <h2 className='text-base mb-10 text-left'>For Growing Teams (6-20 Users)</h2>
            <ul className="text-left space-y-5 py-4">
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> All Basic features.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Edit masked data before processing with GPT.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Selection from multiple GPT models.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Extended chat history storage (up to 90 days).</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span> Data export for further analysis.</li>

            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className=" p-8 w-1/3">
            <h3 className="text-4xl font-bold mb-4 text-left">$99<span className="text-base">/month</span></h3>
            <h4 className="text-xl font-semibold mb-4 text-left">Enterprise</h4>
            <h2 className='text-base mb-10 text-left'>For Large Teams & Compliance-Driven Organizations</h2>
            <ul className="text-left space-y-5 py-4">
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span>All Premium features</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span>Proprietary and confidential data masking.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span>Full GDPR and global compliance support.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span>Custom AI model integration.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span>Advanced comparison of original vs. masked data.</li>
              <li className="mb-2 flex flex-row gap-2"><span className='flex items-center'><TickIcon /> </span>Unlimited chat history storage and auditing</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
