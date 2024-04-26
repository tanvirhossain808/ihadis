import Nav from "../Nav/Nav";


const Navbar = () => {

    const navbarIconsDetails = [
        {
            img: "https://ihadis.com/assets/leftbar/home.svg",
            name: "home",
            id: 1
        },
        /*   {
              img: "https://ihadis.com/assets/leftbar/fill/active/book.svg",
              name: "section",
              id: 2
          }, */
        {
            img: "https://ihadis.com/assets/leftbar/book.svg",
            name: "subject",
            id: 2

        },
        {
            img: "https://ihadis.com/assets/leftbar/subject.svg",
            name: "books",
            id: 3
        },

        {
            img: "https://ihadis.com/assets/leftbar/bookmark.svg",
            name: "bookmark",
            id: 4
        },
        {
            img: "https://ihadis.com/assets/leftbar/others.svg",
            name: "menu",
            id: 5,
        },
        {
            img: "https://ihadis.com/assets/leftbar/goto.svg",
            name: "share",
            id: 6
        },
        {
            img: "https://ihadis.com/assets/others/helping-hand.svg",
            name: "support",
            id: 7
        }
    ]


    return (

        <div className="navbarSection w-[100px] h-[86.4vh] pt-28 flex flex-col  justify-between items-center  ">



            {
                navbarIconsDetails.map(nav => {

                    return <Nav key={nav.id} img={nav.img} name={nav.name} />

                })
            }

        </div >

    );
};

export default Navbar;