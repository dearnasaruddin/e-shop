import React, { useState } from 'react'

const ProductSidebarPriceRange = () => {

    const [minValue, setMinValue] = useState(500)
    const [maxValue, setMaxValue] = useState(3100)

    const updateRangeSlider = (type, value) => {

        const parseValue = parseInt(value)

        if (parseValue > 5000 || parseValue < 0) {
            if (type == 'min') {
                setMinValue(0)
                return
            } else {
                setMaxValue(5000)
                return
            }
        }

        if (isNaN(parseValue)) return

        if (type == 'min') {

            if (parseValue > maxValue) {
                setMinValue(maxValue)
            } else {
                setMinValue(parseValue)
            }

            // const newMin = Math.min(parseInt(value), maxValue)
            // setMinValue(newMin)

        } else {

            if (parseValue < minValue) {
                setMaxValue(minValue)
            } else {
                setMaxValue(parseValue)
            }

            // const newMax = Math.max(parseInt(value), minValue)
            // setMaxValue(newMax)
        }
    }

    const minPercent = (minValue / 5000) * 100
    const maxPercent = (maxValue / 5000) * 100
    return (
        <>
            <div className='flex justify-center gap-x-3 mt-6 '>
                <div className='relative'>
                    <input onChange={(e) => updateRangeSlider('min', e.target.value)} className='font-montserrat font-normal text-base leading-6 text-secondary w-31 h-18.5 border border-[#929292] rounded-[10px] text-center !appearance-none' type="number" min={0} max={5000} value={minValue} />
                    <span className='font-montserrat font-normal text-base leading-6 text-secondary absolute top-6.5 left-7.5'>$</span>
                </div>
                <div className='relative'>
                    <input onChange={(e) => updateRangeSlider('max', e.target.value)} className='font-montserrat font-normal text-base leading-6 text-secondary w-31 h-18.5 border border-[#929292] rounded-[10px] text-center !appearance-none' type="number" min={0} max={5000} value={maxValue} />
                    <span className='font-montserrat font-normal text-base leading-6 text-secondary absolute top-6.5 left-7.5'>$</span>
                </div>
            </div>

            <div className='h-4 mt-7.5'>
                <div className='w-full h-0.5 bg-[#C3C3C3] relative'>
                    <div style={{ left: `${minPercent}%`, width: `${(maxPercent - minPercent) > 100 ? 100 : (maxPercent - minPercent)}%` }} className='absolute h-full bg-primary'></div>
                    <input onChange={(e) => updateRangeSlider('min', e.target.value)} type="range" min={0} max={5000} value={minValue} className='w-full h-full bg-transparent pointer-events-none appearance-none absolute top-1/2 -translate-y-1/2' />
                    <input onChange={(e) => updateRangeSlider('max', e.target.value)} type="range" min={0} max={5000} value={maxValue} className='w-full h-full bg-transparent pointer-events-none appearance-none absolute top-1/2 -translate-y-1/2' />
                </div>
            </div>
        </>
    )
}

export default ProductSidebarPriceRange