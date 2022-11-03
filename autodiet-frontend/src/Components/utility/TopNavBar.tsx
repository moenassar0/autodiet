type Props = {
    children:any
};
export const TopNavBar: React.FC<Props> = ({children}) => {
    return(
        <div className="flex h-1/5 w-full bg-black">
            {children}
        </div>
    )
}