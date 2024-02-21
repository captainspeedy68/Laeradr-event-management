import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { saveDonationApplication } from '../../Utility/LocalStorage';

const Details = () => {
    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt)
    const { image_url, location, time, description, price, name } = service;
    // console.log(id)
    // const style = {
    //     backgroundColor: text_button_bg
    // }
    return (
        <div className='md:grid my-20 mx-auto grid-cols-4 min-h-80 max-md:text-center'>
            <div className='item-center flex justify-center'>
                <img src={image_url} className="w-11/12 h-11/12 " alt="" />
            </div>
            <div className='col-span-2'>
                <div className='font-extrabold text-4xl mx-12 my-5'>{name}</div>
                <div className='flex'>
                    {
                        location && <div className='font-normal text-xl ml-12 my-5'>{location},</div>
                    }
                    
                    {
                        time && <div className='my-5 font-normal text-xl mx-3'>{time}</div>
                    }
                </div>

                <div className='font-normal text-base mx-12 my-5'>{description}
                </div>
            </div>
            <div className='flex justify-center border-2 border-dotted border-[#FFA328]'>
                <div className='items-center grid text-center justify-center'>
                    <span className='font-bold text-2xl mx-7'>Price:</span>
                    <hr className='w-full border-[#FFA328]' />
                    <span className='justify-center text-xl'>
                        {Number.isInteger(price) ? `$${price}` : price}</span>
                    <button className='btn text-white items-center border-none w-full active rounded-2xl justify-center mx-auto'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Details;