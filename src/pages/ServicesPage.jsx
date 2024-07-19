import ServicesArtisans from '../components/ServicesArtisans';
import data from '../datas.json';


function Services() {
    
    const servicesArtisans = () => data.filter(item => item.category === 'Services');

    return (

        <main className="page">            
            <ServicesArtisans servicesArtisans={servicesArtisans()} />
        </main>
    )
}

export default Services;