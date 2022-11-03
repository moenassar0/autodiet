type Props = {
    title:string,
    children:any
};
export const TopNavBar: React.FC<Props> = ({children, title}) => {
    return(
        <div className="flex h-1/5 w-full bg-ad-darkgrey px-2 py-2">
            <div className="flex w-full items-center justify-between">
                <span className="text-2xl text-ad-golden">{title}</span>
                {children}
            </div>
        </div>
    )
}