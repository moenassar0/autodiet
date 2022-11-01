type Props = {
    setTrigger:any;
};

export const MealRecipePopup: React.FC<Props> = ({setTrigger}) => {
    return(
        <>
            <div className="absolute bg-black top-0 left-0 h-screen w-full opacity-50 z-10"></div>
            <div className="absolute top-0 left-0 flex justify-center items-center h-screen w-full z-20">
                <div className="w-full h-4/5 px-2 sm:w-1/2 relative bg-ad-lightgrey flex flex-col h-96 rounded">
                    <div className="h-11 px-2 sm:flex items-center justify-between w-full h-1/6">
                        <span className="flex justify-start items-center h-full w-1/6 text-ad-golden">Meal X</span>
                        <span onClick={() => {setTrigger(false)}} className="flex justify-center items-center h-5/6 w-10 text-ad-golden cursor-pointer rounded-full hover:bg-ad-hoveredblack">X</span>
                    </div>
                    <div className='px-2'><hr className="border border-ad-golden"></hr></div>
                </div>
                <div className="">

                </div>
            </div>
        </>

    )
}