

const SpacialSpa = () => {
    return (



        <section className=" flex md:flex-row flex-col px-4 py-10 items-center gap-12 container mx-auto overflow-hidden  sm:grid sm:grid-cols-2" >
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                        Our Special Spa Services
                    </h2>

                    <p className="hidden text-gray-500 md:mt-4 md:block">
                        Pinda Sweda. ...
                        Abhyanga Therapy. ...
                        Lavender Salt Therapy. ...
                        Mud Bath Therapy. ...
                        Shirodhara. ...
                        Deep Tissue Healing. ...
                        Thai Massage. ...
                        Swedish Massage Therapy.
                    </p>

                    <div className="mt-4 md:mt-8">
                        <a
                            href="#"
                            className="inline-block rounded bg-[#038C7F] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#038C7F] focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>

            <img
                alt=""
                src="https://serapool.fra1.cdn.digitaloceanspaces.com/media/4749/what-is-spa-serapool.jpg"
                className="h-56 w-full object-cover sm:h-full rounded-lg"
            />
        </section >
    )
}

export default SpacialSpa;