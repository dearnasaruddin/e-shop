import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ArrowDownIcon from '../../../icons/ArrowDownIcon';

const TopRightBar = () => {

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCurrency, setSelectedCurrency] = useState("")
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false)

    const countries = [
        { name: 'English', value: 'en', flag: 'https://flagcdn.com/gb.svg' },
        { name: 'Bangla', value: 'bn', flag: 'https://flagcdn.com/bd.svg' },
        { name: 'French', value: 'fr', flag: 'https://flagcdn.com/fr.svg' },
        { name: 'Spanish', value: 'es', flag: 'https://flagcdn.com/es.svg' },
    ]

    const currencyDropdownRef = useRef(null)
    const languageDropdownRef = useRef(null)

    const handleCurrencyDropdown = () => {
        setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)
    }

    const handleSelectLang = (country) => {
        setSelectedCountry(country)
        setIsLangDropdownOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(e.target)) {
                setIsCurrencyDropdownOpen(false)
            }
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(e.target)) {
                setIsLangDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div className='flex items-center gap-x-6 font-montserrat font-normal text-sm leading-5 text-secondary'>

            {/* =================== Currency =================== */}
            <div>

                <select
                    className='hidden'
                    name="country"
                    value={selectedCurrency}
                    onChange={(e) => {
                        console.log(e)
                    }} >
                    <option value="USD">USD</option>
                    <option value="BDT">BDT</option>
                </select>

                {/* ================ Custom Dropdown ================ */}
                <div onClick={handleCurrencyDropdown} ref={currencyDropdownRef} className="relative flex items-center gap-x-2 cursor-pointer">

                    <span>{selectedCurrency ? selectedCurrency : "USD"}</span>
                    <ArrowDownIcon/>

                    {/* ====== options ====== */}
                    {isCurrencyDropdownOpen &&
                        <ul className='w-18 absolute top-10.5 -left-2 bg-white border border-gray-300 z-10'>
                            <li onClick={() => setSelectedCurrency("USD")} className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>USD</li>
                            <li onClick={() => setSelectedCurrency("BDT")} className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer'>BDT</li>
                        </ul>
                    }
                </div>

            </div>


            {/* =================== Language =================== */}
            <div className='w-full px-6 relative before:absolute before:h-8 before:w-[1px] before:-left-0 before:top-1/2 before:-translate-y-1/2 before:bg-[#CBCBCB] after:absolute after:h-8 after:w-[1px] after:-right-0 after:top-1/2 after:-translate-y-1/2 after:bg-[#CBCBCB] cursor-pointer'>
                <select
                    className='hidden'
                    name="country"
                    value={selectedCountry?.value || ''}
                    onChange={(e) => {
                        const country = countries.find((c) => c.value === e.target.value)
                        setSelectedCountry(country)
                    }}
                >
                    {countries.map((country) => (
                        <option value={country.value} key={country.value}>{country.name}</option>
                    ))}
                </select>


                {/* ================ Custom Dropdown ================ */}
                <div onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="relative flex items-center gap-x-2">
                    {selectedCountry ?
                        <>
                            <img className='h-4 w-7' src={selectedCountry?.flag} alt={selectedCountry.name} />
                            <span>{selectedCountry?.name}</span>
                            <ArrowDownIcon/>
                        </>
                        :
                        setSelectedCountry(countries.find((c) => c.value == "en"))
                    }
                </div>

                {/* ====== options ====== */}
                {isLangDropdownOpen &&
                    <ul ref={languageDropdownRef} className='w-10/12 absolute top-10.5 left-1/2 -translate-x-1/2 bg-white border border-gray-300 z-10'>
                        {countries.map((country) => (
                            <li onClick={() => handleSelectLang(country)} className='flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer' key={country.value}>
                                <img className='h-4 w-7' src={country?.flag} alt={country.name} />{country.name}
                            </li>
                        ))}
                    </ul>
                }

            </div>


            {/* =================== Social Media =================== */}
            <div className='flex gap-x-6 items-center text-base'>
                <Link to={'https://web.facebook.com/'} target='_blank'><FaFacebookF /></Link>
                <Link to={'https://x.com/'} target='_blank'><FaTwitter /></Link>
                <Link to={'https://www.instagram.com/'} target='_blank'><FaInstagram /></Link>
            </div>

        </div>
    )
}

export default TopRightBar