import React, { useEffect, useRef, useState } from 'react'
import InputBox from '../InputBox'
import OrderSummary from './OrderSummary'
import ArrowDownIcon from '../../icons/ArrowDownIcon'
import countries from '../../dummyData/countriesData'
import { IoIosWarning } from 'react-icons/io'

const CheckoutInformation = () => {

    let [activeCountry, setActiveCountry] = useState(false)
    let [selectedCountry, setSelectedCountry] = useState('')
    let [searchCountry, setSearchCountry] = useState([])
    let [activeState, setActiveState] = useState(false)
    let [selectedState, setSelectedState] = useState('')
    let [activeCity, setActiveCity] = useState(false)
    let [selectedCity, setSelectedCity] = useState('')

    const countryDropdownRef = useRef(null)
    const stateDropdownRef = useRef(null)
    const cityDropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target)) {
                setActiveCountry(false)
            }
            if (stateDropdownRef.current && !stateDropdownRef.current.contains(e.target)) {
                setActiveState(false)
            }
            if (cityDropdownRef.current && !cityDropdownRef.current.contains(e.target)) {
                setActiveCity(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    const handleSelectedCountry = (countryName) => {
        setSelectedCountry(countryName)
        setActiveCountry(false)
    }
    const handleSelectedState = (state) => {
        setSelectedState(state)
        setActiveState(false)
    }
    const handleSelectedCity = (city) => {
        setSelectedCity(city)
        setActiveCity(false)
    }

    let states = countries.filter((item) => item.countryName == selectedCountry)
    let cities = states[0]?.states.filter((item) => item.state == selectedState)


    let [inputValue, setInputValue] = useState('')
    let handleInputValue = (value) => {
        const searchResult = countries.filter((item) => item.countryName.toLowerCase().includes(value.toLowerCase()))
        setSearchCountry(searchResult)
        // setInputValue(value)
    }

    console.log(searchCountry)
    return (
        < div >
            <h3 className='font-poppins font-semibold text-4xl leading-11.5 text-secondary mb-10' > Billing Details</h3 >
            <div className='w-216'>
                <div className='flex gap-x-4'>
                    <div className='grow'>
                        <InputBox label='First Name' required={true} placeholder='Amelia Robert' />
                    </div>
                    <div className='grow'>
                        <InputBox label='Last Name' required={true} placeholder='Watson' />
                    </div>
                </div>
                <div className='flex gap-x-4 my-8'>
                    <div className='grow'>
                        <InputBox label='Phone Number' required={true} placeholder='+123 456 7890' type='number' />
                    </div>
                    <div className='grow'>
                        <InputBox label='Email Address' required={true} placeholder='amelia.watson@eshop.com' type='email' />
                    </div>
                </div>
                <div>
                    <InputBox label='Address' required={true} placeholder='Home Address, Auxiliary St. 12345, Anywhere State' />
                </div>
                <div className='flex gap-x-4 mt-8'>
                    <div className='grow relative'>
                        <InputBox value={selectedCountry} label='Country' required={true} placeholder='Indonesia' handleInputValue={handleInputValue} />

                        {/* Countries Dropdown */}
                        <span onClick={() => setActiveCountry(!activeCountry)} className='absolute bottom-7 right-6.5 cursor-pointer'><ArrowDownIcon width='24' height='24' /></span>
                        {activeCountry &&
                            <ul ref={countryDropdownRef} className='max-h-56 py-1.5 absolute -bottom-52 right-6 z-10 font-montserrat text-secondary bg-white shadow-2xl border border-[#CBCBCB] rounded-md overflow-auto'>
                                {countries.map((item, index) => <li onClick={() => handleSelectedCountry(item.countryName)} key={index} className='py-2.5 pl-5 pr-12 hover:bg-gray-300 cursor-pointer'>{item.countryName}</li>)}
                            </ul>
                        }

                    </div>
                    <div className='grow relative'>
                        <InputBox label='State' value={selectedState} required={true} placeholder='Kalimantan Timur' handleInputValue={handleInputValue} />

                        {/* State Dropdown */}
                        <span onClick={() => setActiveState(!activeState)} className='absolute bottom-7 right-6.5 cursor-pointer'><ArrowDownIcon width='24' height='24' /></span>
                        {activeState &&
                            <ul ref={stateDropdownRef} className={`max-h-56 absolute ${states.length > 0 ? '-bottom-52 right-6 py-1.5 border-[#CBCBCB] text-secondary overflow-auto' : '-bottom-6 right-6 border-red-500 text-red-500 overflow-hidden'} z-10 font-montserrat  bg-white shadow-2xl border  rounded-md`}>
                                {states.length > 0 ?
                                    states[0].states.map((item, index) => <li onClick={() => handleSelectedState(item.state)} key={index} className='py-2.5 pl-5 pr-12 hover:bg-gray-300 cursor-pointer'>{item.state}</li>)
                                    :
                                    <li className='flex items-center gap-2 border p-2'><IoIosWarning className='text-xl' />Select a Country from the list</li>
                                }
                            </ul>
                        }
                    </div>
                </div>
                <div className='flex gap-x-4 my-8'>
                    <div className='grow relative'>
                        <InputBox label='City' value={selectedCity} required={true} placeholder='Samarinda' handleInputValue={handleInputValue} />

                        {/* City Dropdown */}
                        <span onClick={() => setActiveCity(!activeCity)} className='absolute bottom-7 right-6.5 cursor-pointer'><ArrowDownIcon width='24' height='24' /></span>
                        {activeCity &&
                            <ul ref={cityDropdownRef} className={`max-h-56 absolute ${selectedState ? '-bottom-52 right-6 py-1.5 border-[#CBCBCB] text-secondary overflow-auto' : '-bottom-6 right-6 border-red-500 text-red-500 overflow-hidden'} z-10 font-montserrat  bg-white shadow-2xl border  rounded-md`}>
                                {selectedState ?
                                    cities[0].cities.map((item, index) => <li onClick={() => handleSelectedCity(item)} key={index} className='py-2.5 pl-5 pr-12 hover:bg-gray-300 cursor-pointer'>{item}</li>)
                                    :
                                    <li className='flex items-center gap-2 border p-2'><IoIosWarning className='text-xl' />Select a State from the list</li>
                                }
                            </ul>
                        }
                    </div>
                    <div className='grow'>
                        <InputBox label='ZIP Code' placeholder='555555' />
                    </div>
                </div>
                <div>
                    <InputBox label='Order Notes' placeholder='Enter your order notes ...' textArea={true} />
                </div>
            </div>
        </div >



    )
}

export default CheckoutInformation