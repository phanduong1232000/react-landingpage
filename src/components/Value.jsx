import React from "react";
import {useTranslation} from 'react-i18next'

export default function Value() {
  const {t} = useTranslation()
  return (
    <section className="bg-giatri">
      <div className="container">
        <div className="row">
          <div className="col-md-7 py-4 "></div>
          <div className="col-md-5 py-4 giatri">
            <h2>{t('Value.title')}</h2>
            {t('Value.content', {returnObjects: true}).map((d, i) => {
              return (
                <p key={i}>
                  <i  className={t('Value.icon')}></i> {d.description}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
