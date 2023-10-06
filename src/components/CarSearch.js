import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from '../store';

function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    });

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return(

        <div class=" flex flex-row justify-between items-center">
            <h3 class="mt-5 mb-0 text-3xl font-semibold"> My Cars </h3>
            <div class="flex items-center">
                <label class="mt-5 mb-0 mr-6 text-lg font-semibold">Search</label>
                <input 
                class=" input mt-5 border border-gray-700"
                value={searchTerm}
                onChange={handleSearchTermChange} />
            </div>

        </div>
    )
}

export default CarSearch;