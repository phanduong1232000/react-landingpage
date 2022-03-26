import React from "react";
import {useTranslation} from 'react-i18next'

export default function Vision() {
  const {t} = useTranslation()
  return (
    <div className="container">
      <h3 className="text-center pb-4">{t('Vision.title')}</h3>
      <div className="row">
        {t('Vision.content', {returnObjects: true}).map((d, i) => {
          return (
            <div key={i} className="col-md-4 col-sm-12 col-xs-12">
              <div className="text-tamnhin">
                <p> {d.content}</p>
              </div>
              <div className="text-time-tamnhin">
                <p>{d.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
