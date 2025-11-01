import React from 'react'
import useApps from '../hooks/useApps'
import Card from './Card'
import { useState } from 'react'

const AllApps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    // console.log(search);
    const term = search.trim().toLocaleLowerCase();
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;
    console.log(searchedApps)
    return (
        <div className='px-[4%]'>
            <div className='text-center py-[1%]'>
                <h1 className='text-2xl font-bold py-[1%]'>Our All Applications</h1>
                <p className='text-sm md:text-base text-gray-600'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex py-3 flex-col-reverse justify-center md:justify-between md:flex-row items-center'>
                <div className='font-semibold text-lg md:text-xl'> (<span>{searchedApps.length}</span>) Apps Found</div>
                <label className="input">
                    <input value = {search} 
                    onChange={e => setSearch(e.target.value)}
                    type="search" required placeholder="Search Your App" />
                </label>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    searchedApps.map(app => (
                        // <img src={app.image}></img>
                        <Card key={app.id} app={app} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllApps
