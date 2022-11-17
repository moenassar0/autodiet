export const Button: React.FC<{styling:string, title: string, onclickMethod: any}> = ({title, onclickMethod, styling = ""}) => {
    return(
        <button onClick={onclickMethod} className={' ease-in duration-150 flex w-28 justify-center items-center h-10 text-white bg-admin-button hover:bg-admin-hoveredbutton dark:text-black dark:bg-ad-golden rounded-full px-1 py-1 font-medium ' + (styling)}>
            {title}
        </button>
    )
}