import { GiPlantsAndAnimals } from "react-icons/gi";
import { TbFreezeRow } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";

const collection_plants = [
    {
        img: "/img/collection1.jpg",
        name: "Beautiful Plant Varieties",
        title: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        button: "SEE COLLECTION"
    },
    {
        img: "/img/collection2.jpg",
        name: "Trendy Cactus Varieties",
        title: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        button: "SEE COLLECTION"
    },
    {
        img: "/img/collection3.jpg",
        name: "Gardening Accessories",
        title: "Luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        button: "VISIT THE STORE"
    }
]
const Collection = () => {

    return (
        <>
            <div className='mt-14 padding'>
                <div className='flex items-center justify-around gap-2 flex-wrap'>
                    <div className='flex items-center gap-3 mt-5 min-w-[85%] justify-between md:min-w-0'>
                        <GiPlantsAndAnimals className='text-[#75c32c] text-[44px]' />
                        <div className='ml-3'>
                            <h4 className='font-medium text-[20px]'>Plants Collection</h4>
                            <p className='text-gray-700 mt-1'>Any plants for your space</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3  mt-5 min-w-[85%] justify-between  md:min-w-0'>
                        <TbFreezeRow className='text-[#75c32c] text-[44px]' />
                        <div className='ml-3'>
                            <h4 className='font-medium text-[20px]'>Free Shipping</h4>
                            <p className='text-gray-700 mt-1'>Free shipping on order</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3  mt-5 min-w-[85%] justify-between  md:min-w-0'>
                        <LuRefreshCw className='text-[#75c32c] text-[44px]' />
                        <div className='ml-3'>
                            <h4 className='font-medium text-[20px]'>100% Money Back</h4>
                            <p className='text-gray-700 mt-1'>If the item didn't suit you</p>
                        </div>
                    </div>

                </div>
                <div className='flex items-center justify-between gap-2 mt-24 flex-wrap'>
                    {collection_plants.map((item, index) => {
                        return <div key={index} className='bg-[#EFEEF4] collection_box p-4 px-6 w-[368px] pb-16 rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <img src={item.img} alt="" className='max-w-[190px] md:max-w-[340px]' />
                            </div>
                            <div className='mt-12'>
                                <h6 className='font-normal text-[20px]'>{item.name}</h6>
                                <p className='mt-3 text-gray-800 max-w-[69%]'>{item.title}</p>
                                <p className='mt-14 text-[#fc5f5f] font-medium text-[13px] cursor-pointer tracking-[3px]'>{item.button}</p>
                            </div>
                        </div>

                    })}
                </div>
            </div>
          
        </>
    );
}

export default Collection;


