export const Steps = () => {
    const styles = {
        inactive: "bg-slate-400",
        active: "bg-admin-main",
        step: "z-20 flex items-center justify-center rounded-full h-full w-10 text-white cursor-pointer "
    }
    return(
        <div className="relative w-full h-auto">
            <div className="relative flex w-full h-10 justify-between">
                <div className="px-2 absolute top-1/2 left-1/2 bg-slate-200 h-1 w-full h-auto -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className={styles.step + styles.active}>1</div>
                <div className={styles.step + styles.inactive}>2</div>
                <div className={styles.step + styles.inactive}>3</div>
            </div>
        </div>
    )
} 