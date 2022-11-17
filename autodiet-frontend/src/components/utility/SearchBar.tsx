import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SearchBar: React.FC<{setSearchInput: any}> = ({setSearchInput}) => {
    return(
        <div className="flex h-10 w-full p-2 bg-white dark:bg-[#1D1D1E] rounded drop-shadow">
            <div className="flex w-10 h-full items-center justify-end">
                <FontAwesomeIcon icon={faSearch} className="text-admin-main dark:text-ad-golden" />
            </div>
            <input onChange={(e) => setSearchInput(e.target.value)} type="text" placeholder="Search.."
            className="w-full h-full flex px-2 py-2 outline-0 dark:bg-[#1F1F1F] dark:text-ad-golden" />
        </div>
    )
}