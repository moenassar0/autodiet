export const EmptyState = () => {
    return(
        <div className="flex flex-col items-center justify-center h-full w-full">
            <img src="../logo2.png" className="h-14 w-28"></img>
            <span className="text-center text-ad-golden text-xl">
                No results found
            </span>
            <span className="text-center text-ad-golden">
                Try adjusting your search to find what you’re looking for
            </span>
        </div>
    )
}