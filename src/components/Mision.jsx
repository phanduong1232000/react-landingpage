import React from "react";
import {useTranslation} from 'react-i18next'

export default function Mision() {
  const {t} = useTranslation()
  return (
    <section className="bg-sumenh">
      <div className="overlay">
        <div className="container pb-4">
          <h3 className="text-center pb-4 pt-4 h3-sumenh">
            {t('Mision.title')}
          </h3>
          <div className="row">
            {t('Mision.content',{returnObjects: true}).map((d, i) => {
              return (
                <div key={i} className="col-md-3 col-sm-6 col-xs-12 ">
                  <div className="sumenh">
                    <h4>{d.description}</h4>
                    <p>{d.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
