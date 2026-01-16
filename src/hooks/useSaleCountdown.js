import { useEffect, useState } from 'react'

const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000
const ONE_DAY = 24 * 60 * 60 * 1000
const STORAGE_KEY = 'saleEndDate'

function getSaleEndDate() {
    const storedDate = localStorage.getItem(STORAGE_KEY)

    if (storedDate) {
        return parseInt(storedDate, 10)
    }

    const newEndDate = Date.now() + SEVEN_DAYS
    localStorage.setItem(STORAGE_KEY, newEndDate)
    return newEndDate
}

function resetSaleEndDate() {
    const newEndDate = Date.now() + SEVEN_DAYS
    localStorage.setItem(STORAGE_KEY, newEndDate)
    return newEndDate
}

function calculateTimeLeft() {
    const now = Date.now()
    let saleEndDate = getSaleEndDate()
    let difference = saleEndDate - now

    // ============= resetting for next 7 days before 1 day ==============
    if (difference <= ONE_DAY) {
        saleEndDate = resetSaleEndDate()
        difference = saleEndDate - now
    }

    if (difference <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' }
    }

    return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
    }
}

export default function useSaleCountdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return timeLeft
}
