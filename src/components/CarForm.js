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

        <div className="car-form ">
            <h4 className="subtitle">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                        className="input input-bordered w-full max-w-xs"
                        value={name}
                        onChange={handleNameChange}/>
                    </div>

                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                        className="input input-bordered w-full max-w-xs"
                        value={cost || ''}
                        onChange={handleCostChange}
                        type="number"
                        />
                        
                    </div>

                </div>
                <div className='field'>
                    <button className="btn btn-info">Submit</button>

                </div>
            </form>
        </div>
    );
};

export default CarForm;