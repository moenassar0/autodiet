export const Steps: React.FC<{stepCount: number}> = ({stepCount}) => {
    const styles = {
        inactive: "bg-slate-400",
        active: "bg-admin-main",
        step: " z-20 flex items-center justify-center rounded-full h-full w-10 text-white cursor-pointer "
    }
    const steps = [1, 2, 3]
    return(
        <div className="relative w-full h-auto">
            <div className="relative flex w-full h-10 justify-between">
                <div className="px-2 absolute top-1/2 left-1/2 bg-slate-200 h-1 w-full h-auto -translate-x-1/2 -translate-y-1/2 z-10"></div>
                {steps.map((step, i: number) => (
                    <div className={(i === stepCount ? styles.active : styles.inactive) + styles.step}>{step}</div>
                ))}
            </div>
        </div>
    )
} 