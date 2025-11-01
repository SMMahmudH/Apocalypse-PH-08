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
              <div key={app.id} className='bg-white border-2 flex'>
                <div className="bg-base-100 shadow-sm flex items-center">
                  <div className="text-center flex justify-between items-center">
                    <div className='flex items-center'>
                      <div>
                        <figure>
                          <img
                            src={app?.image}
                            alt="" className='w-25 h-25 rounded-xl min-w-full min-h-full object-cover' />
                        </figure>
                      </div>
                      <div className=' pl-[5%]'>
                        <h2 className="text-xl md:text-2xl font-bold md:text-left">{app?.title}</h2>

                        <div className='text-black'>
                          <div className='flex items-center gap-[5%] py-[1%] '>
                            <div className='flex items-center gap-[5%]'>
                              <div className='flex justify-center w-4 h-4'>
                                <img src={down} alt="" className="" />
                              </div>
                              <h1 className='text-sm md:text-base font-bold'>{numDown}M</h1>
                            </div>

                            <div className='flex items-center gap-[5%]'>
                              <div className='flex justify-center w-4 h-4'>
                                <img src={star} alt="" className="" />
                              </div>
                              <h1 className='text-sm md:text-base font-bold'>{numDown}M</h1>
                            </div>

                            <div className='flex-2'>
                              <h1 className='text-sm md:text-base font-semibold w-content'>{app?.size}MB</h1>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="flex-1">
                      <button onClick={() => handleUninstall(app)} className="btn bg-emerald-400 text-white">Uninstall</button>
                    </div>
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