const ClassCart = ({ course }) => {
    const { className, price, instructorName, image, availableSeats } = course;
    return (
        <div className="shadow-2xl w-full overflow-hidden  rounded-lg relative hover:scale-105 duration-150">
            <img src={image} alt="" className="w-full h-48 object-cover" />
            <div className="mt-5 px-6 pb-6">
                <h4 className="font-bold text-xl">{className}</h4>
                <p>Instructor: {instructorName}</p>
                <p>Available Seats: <span className="font-bold">{availableSeats}</span></p>
                <p className="absolute top-5 bg-red-600 text-white px-2 py-1 rounded-lg text-sm right-5">Price: <span>${price}</span></p>
                <div className="text-end mt-5">
                    <button className="btn btn-sm btn-primary btn-outline">Add class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCart;