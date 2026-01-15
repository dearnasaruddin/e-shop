import ReturnIcon from '../../icons/ReturnIcon'
import DeliveryIcon from '../../icons/DeliveryIcon'
import SecurityIcon from '../../icons/SecurityIcon'

const FacilityForDetailsPage = () => {
    return (
        <div className="flex flex-wrap max-sm:gap-4 lg:gap-x-12 max-lg:justify-center items-center font-montserrat font-normal text-sm lg:text-base leading-6 text-secondary">
            <div className='flex items-center gap-x-2 lg:gap-x-6'>
                <DeliveryIcon />
                <div>
                    <h6 className='font-bold mb-0.5'>Free Shipping</h6>
                    <p>Worldwide available</p>
                </div>
            </div>
            <div className='flex items-center gap-x-2 lg:gap-x-6'>
                <SecurityIcon />
                <div>
                    <h6 className='font-bold mb-0.5'>100% Guaranteed</h6>
                    <p>Receive product first</p>
                </div>
            </div>
            <div className='flex items-center gap-x-2 lg:gap-x-6'>
                <ReturnIcon />
                <div>
                    <h6 className='font-bold mb-0.5'>Return Available</h6>
                    <p>See return policy</p>
                </div>
            </div>
        </div>
    )
}

export default FacilityForDetailsPage