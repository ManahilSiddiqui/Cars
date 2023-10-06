import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0
        dispatch(changeCost(carCost)); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(addCar({ name, cost }));
    };

    return(

        <div class=" px-10 py-10 bg-base-100 shadow-xl">
            <h4 class="text-3xl mb-6">Add Car</h4>
            <form class='flex justify-between' onSubmit={handleSubmit}>
                <div class="flex mb-0">
                    <div class="flex items-center mb-0 mr-6  ">
                        <label class="mb-0 w-20 font-bold">Name</label>
                        <input 
                        class="input input-bordered w-full max-w-xs"
                        value={name}
                        onChange={handleNameChange}/>
                    </div>

                    <div class="flex items-center mb-0 mr-6">
                        <label class="mb-0 w-20 font-bold">Cost</label>
                        <input 
                        class="input input-bordered w-full max-w-xs"
                        value={cost || ''}
                        onChange={handleCostChange}
                        type="number"
                        />
                        
                    </div>

                </div>
                <div class='flex items-center mb-0 mr-6'>
                    <button class="btn btn-info">Submit</button>

                </div>
            </form>
        </div>
    );
};

export default CarForm;