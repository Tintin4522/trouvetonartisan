import BatimentArtisans from '../components/BatimentArtisans';
import data from '../datas.json';


function Batiment() {
    
    const batimentArtisans = () => data.filter(item => item.category === 'Bâtiment');

    return (

        <main className="page">            
            <BatimentArtisans batimentArtisans={batimentArtisans()} />
        </main>
    )
}

export default Batiment;