import React from 'react'
import 'antd/dist/antd.css';
import NewsSection from './NewsSection';

const News = () => {

    return (
        <div>
            <NewsSection category='everything' language='es,it,pt' query='qInTitle=carne' topHeading='Noticias en español, italiano y portugués | Notizie in spagnolo, italiano e portoghese | Notícias em espanhol, português e italiano' linkText='Ver Más Noticias' results='30' />
            <NewsSection category='everything' language='en' query='qInTitle=meat' topHeading='Noticias en inglés | News in English' linkText='See More News' results='45' />
            <NewsSection category='everything' language='fr' query='qInTitle=viande' topHeading='Noticias en francés | Nouvelles en français' linkText='Voir plus de actualités' results='15' />    
        </div>
    )
}

export default News;