import React from 'react'
import download from '../assets/icon-downloads.png'
import star from '../assets/star.png'
import { Link } from 'react-router';
const Card = ({ app }) => {
    // console.log(app);
    let AppDownInK = (app.downloads / 1000000);
    return (
        <div>
            <Link to={`/app/${app.id}`}>
                <div className="card bg-base-100 shadow-sm p-[3%] hover:scale-102 md:hover:scale-105 transition ease-in-out shadow-violet-200">
                    <figure className="h-[200px] md:h-[300px] overflow-hidden">
                        <img
                            src={app.image}
                            alt="Shoes"
                            className="rounded-2xl items-center text-center min-w-full min-h-full object-cover" />
                    </figure>
                    <h2 className="card-title justify-center p-2 font-bold text-2xl text-violet-900 hover:text-violet-600 transition ease-in-out">{app.title}</h2>
                    <div className="card-actions flex justify-between font-semibold">
                        <button className="text-sm flex gap-2 items-center align-center bg-[#F1F5E8] py-1 px-2 rounded-lg text-green-500"><img src={download} className='w-4 h-4'></img> {AppDownInK} M</button>
                        <h1 className="text-sm flex gap-1 items-center align-center bg-[#FFF0E1] text-[#FF8811] py-1 px-2 rounded-lg"><img src={star} className='w-4 h-4'></img> {app.ratingAvg}</h1>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card
