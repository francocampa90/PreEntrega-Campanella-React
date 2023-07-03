


export const CartWidget = () =>{
   
   return (
    <div className="productos">
        {/* <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a className="group">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="lamp1.png" alt="" className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">Lampara colgante</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$25</p>
                    </a>
                </div>
            </div>
        </div> */}
        <div className="">
            <div className=" p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    
                {/* cards */}
                <div className="bg-[#bbaeae] py-8  rounded-xl flex flex-col gap-2 items-center gap-2 text-center text-black-800">
                    <img src="lamp1.png" alt="" className="h-40 w-40 object-cover shadow-2x1 rounded-full"/>
                    <h3 className="text-xl mt-4 text-sm text-gray-700">Lampara colgante</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$8500</p>
                    <p className="mt-1 text-g font-medium text-green-700">Stock</p>
                </div>
                <div className="bg-[#bbaeae] py-8  rounded-xl flex flex-col gap-2 items-center gap-2 text-center text-black-800">
                    <img src="lamp2.png" alt="" className="h-40 w-40 object-cover shadow-2x1 rounded-full"/>
                    <h3 className="text-xl mt-4 text-sm text-gray-700">Lampara colgante</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$6250</p>
                    <p className="mt-1 text-g font-medium text-green-700">Stock</p>
                </div>
                <div className="bg-[#bbaeae] py-8  rounded-xl flex flex-col gap-2 items-center gap-2 text-center text-black-800">
                    <img src="lamp3.png" alt="" className="h-40 w-40 object-cover shadow-2x1 rounded-full"/>
                    <h3 className="text-xl mt-4 text-sm text-gray-700">Lampara colgante</h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">$11.400</p>
                    <p className="mt-1 text-g font-medium text-green-700">Stock</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
