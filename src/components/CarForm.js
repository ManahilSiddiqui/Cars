import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store';

function CarForm() {
    const dispatch = useDispatch();
    const name = useSelector((state) => {
        return state.form.name
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    return(

        <div className="car-form ">
            <h4 className="subtitle">Add Car</h4>
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                        className="input input-bordered w-full max-w-xs"
                        value={name}
                        onChange={handleNameChange}/>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default CarForm;