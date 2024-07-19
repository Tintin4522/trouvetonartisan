import Artisan from '../components/TopArtisan';
import data from '../datas.json';


function Home() {
    
    const topArtisans = () => data.filter(item => item.top === true);

    return (

        <main className="page">
            <div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 tuto">
                        <h1 className="mb-4">Comment trouver mon artisan ?</h1>
                        <ol className="pl-0" style={{ paddingLeft: '0', listStylePosition: 'inside' }}> 
                            <li className="mb-3">Choisir la catégorie d'artisanat dans le menu</li>
                            <li className="mb-3">Choisir un artisan</li>
                            <li className="mb-3">Le contacter via le formulaire de contact</li>
                            <li>Une réponse vous sera apportée sous 48H</li>
                        </ol>
                    </div>
                </div>
            </div>
            <Artisan topArtisans={topArtisans()} />
        </main>
    )
}

export default Home;