import React from 'react'
import {useTranslation} from 'react-i18next'

 function Timeline() {
     const {t} = useTranslation()
  return (
    <div className='bg-timeline'>
        <div className="container">
        <h3 className="text-center py-5">{t('Timeline.title')}</h3>
        <div className="row">
            <div className="col-md-12">
            <div className="main-timeline7">
                {t('Timeline.content', {returnObjects: true}).map((d,i) => { 
                    return(  
                        <div key={i} className="timeline">
                        <div className="timeline-icon"><i className={d.icon}></i></div>
                        <span className="year">{d.date}</span>
                        <div className="timeline-content">
                            <p className="description">
                                {d.content}
                            </p>
                        </div>
                    </div>
                    )})}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
export default Timeline;
