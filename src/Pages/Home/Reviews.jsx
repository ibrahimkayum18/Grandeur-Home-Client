
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const axiosPublic = useAxiosPublic()
    useEffect( () => {
        axiosPublic.get('/reviews')
        .then(res => {
            setReviews(res.data);
        })
    }, [axiosPublic])
    return (
        <div>
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">Our User Reviews</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:px-10">
                {
                    reviews.map((item, index) => <div key={index} className="px-5 rounded-lg lg:px-0 space-y-3 bg-sky-200 p-8">
                        <img className="w-32 h-32 mx-auto rounded-full" src={item.reviewre_photo} alt="" />
                        <div className="px-5">
                        <h2 className="text-2xl">Name: {item.reviewre_name}</h2>
                        <h2 className="text-1xl">Review on: {item.property_title}</h2>
                        <p className="text-xl">Customers Opinion: {item.review_description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Reviews;