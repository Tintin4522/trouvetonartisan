import BatimentArtisans from '../components/BatimentArtisans';
import data from '../datas.json';


function Batiment() {
    
    const batimentArtisans = () => data.filter(item => item.category === 'Bâtiment');

    return (

        <div className="page">            
            <BatimentArtisans batimentArtisans={batimentArtisans()} />
        </div>
    )
}

export default Batiment;