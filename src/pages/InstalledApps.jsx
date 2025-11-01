import React, { useEffect, useState } from 'react'
import down from '../assets/icon-downloads.png'
import star from '../assets/icon-ratings.png'

const InstalledApps = () => {
  const [appInstalled, setAppInstalled] = useState([]);
  const [sortSize, SetSortSize] = useState('none');
  useEffect(() => {
    const allInstalledApps = JSON.parse(localStorage.getItem('InstalledApps'));
    if (allInstalledApps) setAppInstalled(allInstalledApps)
  }, [])

  const handleUninstall = (app) => {
    // console.log("Clicked?");
    let allInstalledApps = JSON.parse(localStorage.getItem('InstalledApps'));
    const hasUninstalled = allInstalledApps.filter(a => a.id !== app.id);
    localStorage.setItem('InstalledApps', JSON.stringify(hasUninstalled));
    setAppInstalled(hasUninstalled);
  }

  const sortedApp = () => {
    if (sortSize === 'asc') {
      return [...appInstalled].sort((a, b) => a.size - b.size)
    }
    if (sortSize === 'dsc') {
      return [...appInstalled].sort((a, b) => b.size - a.size)
    }
    return appInstalled;
  }
  return (
    <div className='px-[4%]'>
      <div className='text-center'>
        <h1 className='font-bold text-lg md:text-2xl'>Your Installed Apps</h1>
        <p className='text-xs md:text-sm text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex justify-between'>
        <h1 className='font-semibold'> <span className='font-bold'>{appInstalled.length}</span> Apps Installed</h1>
        <label className='form-control w-full max-w-xs'>
          <select className='select select-bordered ' value={sortSize} onChange={a => SetSortSize(a.target.value)}>
            <option value="none">Sort By Size</option>
            <option value="asc">Low -&gt; High</option>
            <option value="dsc">High -&gt; Low</option>
          </select>
        </label>

      </div>

      <div >
        {
          sortedApp().map(app => {
            const numDown = (app?.downloads / 1000000).toFixed(1);

            return (
              <div key={app.id} className='flex'>
                <div key={app.id} className='bg-white rounded-lg p-4 my-3 shadow-sm flex flex-col md:flex-row md:items-center justify-between w-full'>
                  {/* Left side: Image + Info */}
                  <div className='flex items-center gap-4'>
                    <img
                      src={app?.image}
                      alt=""
                      className='w-20 h-20 rounded-xl object-cover'
                    />
                    <div>
                      <h2 className="text-lg md:text-xl font-bold">{app?.title}</h2>
                      <div className='flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-700'>
                        <div className='flex items-center gap-1'>
                          <img src={down} alt="" className="w-4 h-4" />
                          <span>{(app?.downloads / 1000000).toFixed(1)}M</span>
                        </div>
                        <div className='flex items-center gap-1'>
                          <img src={star} alt="" className="w-4 h-4" />
                          <span>{app?.rating ?? '4.5'}</span>
                        </div>
                        <span className='font-semibold'>{app?.size}MB</span>
                      </div>
                    </div>
                  </div>

                  <div className='mt-3 md:mt-0 md:ml-auto'>
                    <button
                      onClick={() => handleUninstall(app)}
                      className='btn bg-emerald-500 hover:bg-emerald-600 text-white px-5'
                    >
                      Uninstall
                    </button>
                  </div>
                </div>

              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default InstalledApps