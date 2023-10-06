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
            <h3 class="mb-0"> My Cars </h3>
            <div class="flex items-center">
                <label class="mb-0 mr-6">Search</label>
                <input 
                className="input"
                value={searchTerm}
                onChange={handleSearchTermChange} />
            </div>

        </div>
    )
}

export default CarSearch;