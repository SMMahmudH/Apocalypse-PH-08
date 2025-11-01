import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import useApps from '../hooks/useApps';
import down from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ErrorApp from './ErrorApp';
import { toast } from 'react-toastify';

const AppDetails = () => {
  const params = useParams();
  const { apps } = useApps();

  const [isInstalled, setIsInstalled] = useState(false);

  const app = apps.find(a => String(a.id) === params.id);

  useEffect(() => {
    if (!app) return;
    const installedApps = JSON.parse(localStorage.getItem('InstalledApps')) || [];
    const alreadyInstalled = installedApps.some(a => a.id === app.id);
    if (alreadyInstalled) {
      setIsInstalled(true);
    }
  }, [app]);

  if (!app) {
    return <ErrorApp />;
  }

  const handleInstall = () => {
    let allInstalledApps = JSON.parse(localStorage.getItem('InstalledApps')) || [];
    const hasInstalled = allInstalledApps.some(a => a.id === app.id);

    if (hasInstalled) {
      toast("Already added!");
      setIsInstalled(true);
      return;
    }

    allInstalledApps.push(app);
    localStorage.setItem('InstalledApps', JSON.stringify(allInstalledApps));
    toast(`${app?.title} Has Been Installed!`);
    setIsInstalled(true);
  };

  let numDown = (app?.downloads / 1000000);
  let numRev = (app?.reviews / 1000);

  return (
    <div className='px-[4%]'>
      <div className="flex items-center flex-col md:flex-row bg-white rounded-2xl mt-[4%]">
        <div>
          <figure>
            <img src={app?.image} alt="" className='w-60 h-60 rounded-xl object-cover' />
          </figure>
        </div>
        <div className="card-body text-center">
          <h2 className="text-xl md:text-2xl font-bold md:text-left">{app?.title}</h2>
          <p className='md:text-left'>
            Developed by <span className='text-violet-600 font-semibold'>{app?.companyName}</span>
          </p>

          <div className='text-black flex items-center gap-[5%] py-[2%]'>
            <div>
              <div className='flex justify-center'>
                <img src={down} alt="" className="w-7 h-7" />
              </div>
              <h6 className='text-xs md:text-sm py-[3%]'>Downloads</h6>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{numDown}M</h1>
            </div>

            <div>
              <div className='flex justify-center'>
                <img src={star} alt="" className="w-7 h-7" />
              </div>
              <h6 className='text-xs md:text-sm py-[3%]'>Average Ratings</h6>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{app?.ratingAvg}</h1>
            </div>

            <div>
              <div className='flex justify-center'>
                <img src={review} alt="" className="w-7 h-7" />
              </div>
              <h6 className='text-xs md:text-sm py-[3%]'>Total Reviews</h6>
              <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{numRev}K</h1>
            </div>
          </div>

          <div className="card-actions justify-center md:justify-start">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn ${isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-emerald-400 text-white'}`}
            >
              {isInstalled ? "Installed" : `Install Now (${app?.size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center flex-col pt-[4%]'>
        <div className='flex text-left w-full'>
          <h1 className='pl-3 font-bold md:text-xl'>Rating</h1>
        </div>
        <div className="w-full h-[250px] md:h-[400px] flex justify-center items-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={app?.ratings}
            >
              <CartesianGrid strokeDasharray="0 1" />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                reversed
              />
              <Bar dataKey="count" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>


      <div className='py-[3%]'>
        <h1 className='font-semibold text-lg'>Description</h1>
        <p className="text-justify hyphens-auto leading-relaxed text-gray-600 text-sm md:text-base">
          {app?.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
