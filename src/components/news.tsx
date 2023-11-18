import * as React from 'react';
import "../styles/news.css";
import ReactMarkdown from 'react-markdown';
// @ts-ignore
import Newspaper from "../image/news.png";

export default function News() {
    return (
        <section>
            <div className="news__title">
                <ReactMarkdown>Новости:</ReactMarkdown>
            </div>
            <div className="news__discription">
                <div className="newspaper">
                    <div className="newspaper__image">
                        <img src={Newspaper} alt="Newspaper"/>
                    </div>
                    <p className="description">
                        Проведение Круглого стола № 2 по итогам проведения Фестиваля.
                    </p>
                    <p className="date">
                        <ReactMarkdown># 33.33.33</ReactMarkdown>
                    </p>
                </div>
                <div className="newspaper">
                    <div className="newspaper__image">
                        <img src={Newspaper} alt="Newspaper"/>
                    </div>
                    <p className="description">
                        Проведение Круглого стола № 2 по итогам проведения Фестиваля.
                    </p>
                    <p className="date">
                        <ReactMarkdown># 33.33.33</ReactMarkdown>
                    </p>
                </div>
                <div className="newspaper">
                    <div className="newspaper__image">
                        <img src={Newspaper} alt="Newspaper"/>
                    </div>
                    <p className="description">
                        Проведение Круглого стола № 2 по итогам проведения Фестиваля.
                    </p>
                    <p className="date">
                        <ReactMarkdown># 33.33.33</ReactMarkdown>
                    </p>
                </div>
            </div>
        </section>
    );
}
