/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SearchBar from "../../components/SearchBar/SearchBar"


const Header = () => {
    return (
        <div className="header flex items-center justify-between  p-6 px-4">
            <div className="logo flex items-center cursor-pointer">
                <div className="logo-image">
                    <img src="https://ihadis.com/assets/home-logo.png" alt="logo" className="w-11 md-max:w-9 h-11 md-max:h-9" />

                </div>

                <div className="description ml-6 block md-max:hidden">
                    <h3 className="text-xl font-bold text-black dark:text-hadith-deepoffwhite ">

                        সূচিপত্র
                    </h3>
                    <h6 className="text-sm text-[#404040] dark:text-hadith-deepoffwhite">
                        হাদিস পড়ুন শিখুন এবং জানুন

                    </h6>
                </div>
            </div>

            <div className="searchSection mr-3  items-center flex items-center justify-between  w-96  md-max:gap-4 lg-min:gap-20 2xl-min:gap-5">
                <SearchBar bg={''} mt={''} w={"w - [270px]"} border={true} placeholder={"Search Hadith"} />


                <div className="changeBackground  cursor-pointer  flex w-10 h-10 lg-min:w-10 lg-min:h-10 rounded-lg bg-[#ECEEF0] dark:bg-[#ECEEF0] items-center justify-center">
                    <img src="https://ihadis.com/assets/index/mode/night.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;