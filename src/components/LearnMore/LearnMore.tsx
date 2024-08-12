

const LearnMore = () => {
    return (
        <section className="p-4 lg:p-8  dark:text-gray-800">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://www.byrdie.com/thmb/WGnymw17PnDMYMIMIRYt1HhzoWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/promo-3aef4215d7c9464f9b5a01a1893413c3.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 ">

                        <h3 className="text-3xl font-bold dark:text-white">BRIDAL HAIR & MAKEUP</h3>
                        <p className="my-6 dark:text-white">Simple Ponytail.
                            Vintage Updo with Antique Hair Clip.
                            Romantic Updo.
                            Unstructured Twist.
                            Classic Updo with Traditional Headpiece.
                            Ponytail with Hair Bow.
                            Low Ponytail with Tied Hair Scarf.
                            Modern Braided Updo.</p>
                        <button type="button" className="self-start hover:scale-125 transition-all duration-700 text-[#038C7F] dark:text-[#F2C641]">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://i.pinimg.com/originals/57/b4/20/57b420eb5b989a5fd1191f21e9e331b9.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 ">

                        <h3 className="text-3xl font-bold dark:text-white">BABERING/MALE - GROOMING</h3>
                        <p className="my-6 dark:text-white">Craft of cutting, styling, and coloring short hair, as well as shaving or grooming facial hair.</p>
                        <button type="button" className="self-start hover:scale-125 transition-all duration-700 text-[#038C7F] dark:text-[#F2C641]">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDhZhrkUDpScFd1vQ0ihdxfCRg-wlNNmmcLw&s" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 ">

                        <h3 className="text-3xl font-bold dark:text-white">SPA ETIQUETTE</h3>
                        <p className="my-6 dark:text-white"> Maximizing your Golden View Spa experience, made simple with our spa etiquette guide.</p>
                        <button type="button" className="self-start hover:scale-125 transition-all duration-700 text-[#038C7F] dark:text-[#F2C641]">Action</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearnMore;