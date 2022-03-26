import React from "react";
import {useTranslation} from 'react-i18next'

export default function Thankyou() {
  const {t} = useTranslation()
  return (
    <section>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-5">
            <img src={t('Thankyou.img')} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-7 ">
            <h3 className="h3-thankyou">{t('Thankyou.title')}</h3>
            <div className="thankyou">
              <p>{t('Thankyou.content1')}</p>
              <p>{t('Thankyou.content2')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
