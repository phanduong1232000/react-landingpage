import React from "react";
// import text from "../data.json";
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <div className="row lp-about">
             <div className="col-md-6">
             <h3>{t('About.title')}</h3>
             <p>{t('About.paragraph')}</p>
             <p>{t('About.content')}</p>
           </div>
        
        <div className="col-md-6 img-about">
          <img
            src={t('About.img')}
            width="100%"
            className="img-fluid"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}
export default About;
