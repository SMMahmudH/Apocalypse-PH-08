import Card from './Card';
import useApps from '../hooks/useApps';
import StaticHome from './StaticHome';
const Home = () => {
    const { apps, loading, error } = useApps()
    // console.log(apps)
    const topApps = apps.slice(0, 8);
    return (
        <div>
            <StaticHome></StaticHome>
            <div className='text-center py-[1%]'>
                <h1 className='text-2xl font-bold py-[1%]'>Trending Apps</h1>
                <p className='text-sm md:text-base text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 px-[4%] py-[2%]'>
                {
                    topApps.map(app => (
                        // <img src={app.image}></img>
                        <Card key={app.id} app={app} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
