

function Artisan({ topArtisans }) {
    return (
        <div className="artisan-card">
            <div className="row justify-content-center">
                {topArtisans.map((artisan, index) => (
                    <div className="col-12 col-md-4" key={index}>
                        <div className="artisan">
                            <div className="text-center">
                                <h3 className="titleCard">{artisan.name}</h3>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="col-6 align-left text-center">
                                    <p className="detailCard">{artisan.specialty}</p>
                                    <p className="detailCard">{artisan.location}</p>
                                </div>
                                <div className="col-6 align-right text-center d-flex align-items-center">
                                    <p className="m-auto mb-0">Note: {artisan.note}/5</p>
                                    <i className="fas fa-star ml-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Artisan;



