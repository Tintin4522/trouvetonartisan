import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas.json';

const ArtisanDetail = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    
    const artisan = data.find(artisan => artisan.id === id);

    

    const renderStars = () => {
        const stars = [];
        const rating = parseFloat(artisan.note);
    
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<i key={i} className="fas fa-star filled" style={{ color: '#0074c7', fontSize: '30px' }}></i>);
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                stars.push(<i key={i} className="fas fa-star-half-alt filled" style={{ color: '#0074c7', fontSize: '30px' }}></i>);
            } else {
                stars.push(<i key={i} className="far fa-star" style={{ borderColor: '#0074c7', fontSize: '30px' }}></i>);
            }
        }
    
        return stars;
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;

        // Simulation de l'envoi de mail: 
        console.log(`E-mail envoyé à: ${artisan.email}:
            Nom: ${name}
            Sujet: ${subject}
            Message: ${message}
        `);

        setFormData({ name: '', subject: '', message: '' });
    };

    const [formValid, setFormValid] = useState(false);

    const validateForm = () => {
        const { name, subject, message } = formData
        const isValid = name.trim() !== '' && subject.trim() !== '' && message.trim() !== '';
        setFormValid(isValid)
    }

    return (
        <div className="artisanDetails">
            <div className="container">
            <h2 className="text-center">{artisan.name}</h2>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div className="d-flex flex-column justify-content-start align-items-center">
                            <div>
                                <h4>Spécialité:</h4> 
                                {artisan.specialty}
                            </div>
                            <div>
                                <h4>Localisation:</h4> 
                                {artisan.location}
                            </div>
                            <div>
                                <h4>A propos:</h4>
                                 {artisan.about}
                            </div>
                            {artisan.website ? (
                                <a href={artisan.website} className="btn btn-primary artisanSiteWeb" target="_blank" rel="noopener noreferrer">
                                    Visiter le site de l'artisan
                                </a>
                            ) : (
                                <button className="btn btn-danger artisanSiteWeb" disabled>
                                    Cet artisan n'a pas de site Web
                                </button>
                            )}
                            <div className="mb-auto">
                                <h5>Note</h5>
                                <div className="d-flex justify-content-center">
                                    {renderStars()}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <h3>Formulaire de contact :</h3>
                            <hr className="bg-primary" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">                                
                                <input type="text" className="form-control" placeholder="Votre Nom" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Objet de votre message" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Votre message" id="message" name="message" value={formData.message} onChange={handleInputChange} rows="5" required></textarea>
                            </div>
                            <div className="col-md-6 d-flex align-items-end justify-content-end">
                                <button type="submit" className={`btn ${formValid ? 'btn-success' : 'btn-danger'}`} disabled={!formValid}>
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtisanDetail;
