import { useSelector, useDispatch } from "react-redux";
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => {
        return state.cars.data;
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} class="p-10 flex flex-row justify-between items-center ">
                <p class="text-base">
                    {car.name} - ${car.cost}
                </p>
                <button 
                class="btn btn-error"
                onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>

        )
    })

    return(

        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    )
}

export default CarList;