import React from 'react'
import { useTranslation } from 'react-i18next';

function Linhvuc () {
  const { t } = useTranslation()
    return (     
      <div className="bg-linhvuc">
        <div className="overlay">
        <div className="container">
            <h3 className="text-center pt-4 h3-sumenh">{t('Linhvuc.title')}</h3>

            <div className="row">
            {t('Linhvuc.content', { returnObjects: true }).map((d,i) => {
                    return (
                        <div key={i} className="col-md-3 col-sm-6 col-xs-12 "> 
                            <div className="linhvuc">
                                <img src={d.img} className="img-fluid" alt="..." />
                                <h4>{d.content}</h4>
                            </div> 
                        </div>  
                        )
                })}
            </div>


        </div>
      </div>
    </div>
    )
}

export default Linhvuc;