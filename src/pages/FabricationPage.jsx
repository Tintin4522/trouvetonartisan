import FabricationArtisans from '../components/FabricationArtisans';
import data from '../datas.json';


function Fabrication() {
    
    const fabricationArtisans = () => data.filter(item => item.category === 'Fabrication');

    return (

        <div className="page">            
            <FabricationArtisans fabricationArtisans={fabricationArtisans()} />
        </div>
    )
}

export default Fabrication;