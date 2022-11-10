export const  CustomNotification = () => {
    return(
        <div className="absolute bottom-0 right-0 h-min-screen h-28 w-72 rounded dark:bg-admin-dark-background   mr-4 mb-4">
            <div className="flex h-1/4 w-full items-center justify-center">
                <span className="text-lg text-ad-golden font-medium">AutoDiet</span>
            </div>
            <div className="flex h-3/4 w-full text-ad-golden px-2 py-1">
                <span>Please go to your profile to save your details!</span>
            </div>
        </div>
    )
}