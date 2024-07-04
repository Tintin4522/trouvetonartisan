import AlimentationArtisans from '../components/AlimentationArtisans';
import data from '../datas.json';


function Alimentation() {
    
    const alimentationArtisans = () => data.filter(item => item.category === 'Alimentation');

    return (

        <div className="page">            
            <AlimentationArtisans alimentationArtisans={alimentationArtisans()} />
        </div>
    )
}

export default Alimentation;