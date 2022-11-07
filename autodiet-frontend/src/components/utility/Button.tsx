export const Button: React.FC<{title: string, onclickMethod: any}> = ({title, onclickMethod}) => {
    return(
        <button onClick={onclickMethod} className='flex w-28 justify-center h-2/3 text-white bg-admin-button hover:bg-admin-hoveredbutton dark:text-black dark:bg-ad-golden rounded-full px-1 py-1 font-medium'>
            {title}
        </button>
    )
}