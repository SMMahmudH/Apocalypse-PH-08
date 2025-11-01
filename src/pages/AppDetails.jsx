import React, { useState } from 'react'
import { useParams } from 'react-router'
import useApps from '../hooks/useApps';
import down from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import ErrorRoute from './ErrorRoute';
import ErrorApp from './ErrorApp';
const AppDetails = () => {
  const params = useParams();
  const [isInstalled, setIsInstalled] = useState(false);
  console.log(isInstalled);
  // console.log(params.id);
  const { apps } = useApps();
  const app = apps.find(a => String(a.id) === params.id)
  if (!app) {
    return <ErrorApp></ErrorApp>
  }
  // console.log(app);
  const handleInstall = () => {
      setIsInstalled(false);
    // console.log("Clicked?");
    let allInstalledApps = JSON.parse(localStorage.getItem('InstalledApps'));
    let allUpdatedInstalledApps = [];
    if (allInstalledApps) {
      const hasInstalled = allInstalledApps.some(a => a.id === app.id);
      if (hasInstalled) return alert("Already added!")
      else
        allUpdatedInstalledApps = [...allInstalledApps, app];

    }
    else {
      setIsInstalled(true);
      allUpdatedInstalledApps.push(app);
    }
    localStorage.setItem('InstalledApps', JSON.stringify(allUpdatedInstalledApps));
  }
  let numDown = (app?.downloads / 1000000);
  let numRev = (app?.reviews / 1000);
  return (
    <div className='px-[4%]'>
      <div className=" bg-base-100 shadow-sm flex items-center flex-col md:flex-row">
        <div>
          <figure>
            <img
              src={app?.image}
              alt="" className='w-60 h-60 rounded-xl min-w-full min-h-full object-cover' />
          </figure>
        </div>
        <div className="card-body text-center">
          <h2 className="text-xl md:text-2xl font-bold md:text-left">{app?.title}</h2>
          <p className='md:text-left'>Developed by <span className='text-violet-600 font-semibold '>{app?.companyName}</span></p>

          <div className='text-black'>

            <div className='flex items-center gap-[5%]  py-[1%]'>
              <div className=''>
                <div className='flex justify-center'>
                  <img src={down} alt="" className="w-7 h-7" />
                </div>
                <h6 className='text-xs md:text-sm py-[3%]'> Downloads</h6>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{numDown}M</h1>
              </div>

              <div className=''>
                <div className='flex justify-center'>
                  <img src={star} alt="" className="w-7 h-7" />
                </div>
                <h6 className='text-xs md:text-sm py-[3%]'>Average Ratings</h6>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{app?.ratingAvg}</h1>
              </div>

              <div className=' col-span-2 md:col-span-1'>
                <div className='flex justify-center'>
                  <img src={review} alt="" className="w-7 h-7" />
                </div>

                <h6 className='text-xs md:text-sm py-[3%]'>Total Reviews</h6>
                <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{numRev}K</h1>
              </div>
            </div>
          </div>

          <div className="card-actions justify-center md:justify-start">
            {/* <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-400 text-white'}`}
            >Install Now ({app?.size} MB)</button> */}
            <button onClick={handleInstall} disabled={isInstalled} className={`btn ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-400 text-white'}`}>Install Now ({app?.size} MB)</button>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-[70vh] flex justify-center items-center">
          <BarChart
            layout="vertical"
            width={800}
            height={400}
            data={app?.ratings}
            margin={{
              top: 20,
              right: 30,
              left: 40,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis type="number" />
            <YAxis
              dataKey="name"
              type="category"
              label={{ value: 'Stars', position: 'insideLeft', angle: -90 }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" barSize={30} />
          </BarChart>
        </div>

      </div>

      <div className='py-[3%]'>
        <h1 className='font-semibold text-lg'>Description</h1>
        <p className="text-justify hyphens-auto leading-relaxed text-gray-600 text-sm md:text-base">
          {app?.description}
        </p>
      </div>
    </div>
  )
}

export default AppDetails
