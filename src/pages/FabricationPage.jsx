import FabricationArtisans from '../components/FabricationArtisans';
import data from '../datas.json';


function Fabrication() {
    
    const fabricationArtisans = () => data.filter(item => item.category === 'Fabrication');

    return (

        <main className="page">            
            <FabricationArtisans fabricationArtisans={fabricationArtisans()} />
        </main>
    )
}

export default Fabrication;