import * as React from 'react';
import "../styles/topper.css"
import ReactMarkdown from 'react-markdown'

export default function Topper() {
    return (
        <section>
            <div className="topper__title">
                <ReactMarkdown>Международный фестиваль Арт-Пространство «Китеж Градъ»</ReactMarkdown>
            </div>
        </section>
    );
}
