import React, { useState } from 'react'

const ProductDetails = () => {

    const [activeDetails, setActiveDetails] = useState('specification')

    return (
        <div>
            <div className='flex gap-x-12 font-poppins font-semibold text-2xl leading-7.5 text-[#CBCBCB] mb-15'>
                <h5 onClick={() => setActiveDetails('description')} className={`cursor-pointer ${activeDetails == 'description' && 'text-secondary relative after:w-full after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-primary'}`}>Description</h5>

                <h5 onClick={() => setActiveDetails('specification')} className={`${activeDetails == 'specification' && 'text-secondary relative after:w-full after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-primary'} cursor-pointer`}>Specification</h5>

                <h5 onClick={() => setActiveDetails('reviews')} className={`${activeDetails == 'reviews' && 'text-secondary relative after:w-full after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:bg-primary'} cursor-pointer`}>Reviews</h5>
            </div>
            <div>
                {activeDetails == 'specification' &&
                    <div className='flex justify-between font-montserrat text-[#646464] font-normal text-xl leading-7.5'>
                        <ul className='flex flex-col gap-y-8'>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Brand</span><span className='max-w-140'>NexSUS Tech Company</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Display</span><span className='max-w-140'>17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate, 3ms response time, 100% sRGB color gamut, Adaptive-Sync technology, anti-glare</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Processor</span><span className='max-w-140'>10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base clock speed, up to 5.3GHz turbo boost)</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Graphics</span><span className='max-w-140'>NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Memory</span><span className='max-w-140'>32GB DDR4-3200 RAM</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Storage</span><span className='max-w-140'>1TB PCIe NVMe M.2 SSD</span></li>
                        </ul>
                        <ul className='flex flex-col gap-y-8'>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Audio</span><span className='max-w-140'>2 x 4W speakers with Smart Amp technology</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Connection</span><span className='max-w-140'>Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Keyboard</span><span className='max-w-140'>Backlit Chiclet keyboard, N-key rollover, per-key RGB lighting, Aura Sync technology</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Battery</span><span className='max-w-140'>4-cell 90Wh lithium battery (up to 8 hours battery life)</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Dimensions</span><span className='max-w-140'>15.7 x 11.1 x 1.0 inches (W x D x H)</span></li>
                            <li className='flex'><span className='w-47 text-secondary font-poppins font-semibold '>Weight</span><span className='max-w-140'>6.28 pounds</span></li>
                        </ul>
                    </div>
                }
                {activeDetails == 'description' &&
                    <div className='max-w-280 font-poppins font-normal text-[#646464] text-xl leading-7.5'>
                        <h5 className='font-semibold text-secondary mb-4'>NexSUS Tech High-Performance Gaming Laptop</h5>
                        <p className='mb-3'>The NexSUS Tech laptop delivers top-tier performance with a 10th Gen Intel Core i9 processor, NVIDIA GeForce RTX 3080 GPU (16GB), and 32GB DDR4 RAM, perfect for gaming and heavy multitasking. Its stunning 17.3" Full HD IPS display offers a 144Hz refresh rate, 3ms response time, and 100% sRGB color accuracy.</p>
                        <p className='mb-3'>Enjoy ultra-fast load times with a 1TB PCIe NVMe SSD, rich audio with dual 4W Smart Amp speakers, and seamless connectivity via Wi-Fi 6, Bluetooth 5.1, and multiple ports including USB-C with DisplayPort and Power Delivery.</p>
                        <p>Work or game longer with an up to 8-hour battery, and customize your experience with the RGB backlit keyboard. All of this comes in a sleek body weighing 6.28 lbs.</p>
                    </div>
                }
                {activeDetails == 'reviews' &&
                    <div className='text-xl font-poppins font-normal text-[#646464]'>
                        <p>No Review</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProductDetails