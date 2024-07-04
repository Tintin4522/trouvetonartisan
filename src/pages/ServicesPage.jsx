import ServicesArtisans from '../components/ServicesArtisans';
import data from '../datas.json';


function Services() {
    
    const servicesArtisans = () => data.filter(item => item.category === 'Services');

    return (

        <div className="page">            
            <ServicesArtisans servicesArtisans={servicesArtisans()} />
        </div>
    )
}

export default Services;