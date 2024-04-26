

const Section = ({ title, numbers, h, w, code }) => {
    console.log(h);
    return (<>
        <title>{title}</title>
        <div className={`${h} ${w} flex gap-6 cursor-pointer`}>
            <div>

                <div className=" ">
                    <span className="relative">
                        <svg className=" fill-[#2B9E76] " width="50" height="50" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <path d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z" stroke-width="1.5"></path>

                        </svg>
                        <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-white">
                            {code}

                        </h3>
                    </span>


                </div>


            </div>
            <div>
                <div>
                    <h4 className="font-medium text-[15px] text-black text-base">
                        {
                            title
                        }
                    </h4>
                </div>
                <div>
                    <p className="text-[#40404099]">
                        সর্বমোট হাদিস - <span>{numbers}</span>
                    </p>
                </div>
            </div>

        </div>



    </>
    );
};

export default Section;