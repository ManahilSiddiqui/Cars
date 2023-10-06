import { useSelector } from "react-redux";

function CarValue() {
    const totalcost = useSelector(({ cars: {data, searchTerm}}) =>
       data
       .filter((car) =>
             car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc, car) => acc + car.cost ,0)

    );

    return(

        <div class="text-right text-3xl ">
            Total Cost: ${totalcost}
        </div>
    )
}

export default CarValue;