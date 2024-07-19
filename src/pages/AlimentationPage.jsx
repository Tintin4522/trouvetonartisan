import AlimentationArtisans from '../components/AlimentationArtisans';
import data from '../datas.json';


function Alimentation() {
    
    const alimentationArtisans = () => data.filter(item => item.category === 'Alimentation');

    return (

        <main className="page">            
            <AlimentationArtisans alimentationArtisans={alimentationArtisans()} />
        </main>
    )
}

export default Alimentation;