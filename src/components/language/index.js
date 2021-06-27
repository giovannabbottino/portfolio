import React from "react";
import "./style.css";

export default function Lang() {

    const defaultLang = localStorage.getItem('lang')  
    
    function LangEvent(){
        if(defaultLang === 'pt-br'){
            localStorage.setItem('lang', 'en')
            window.location.reload();
        }else{
            localStorage.setItem('lang', 'pt-br')
            window.location.reload();
        }
    };

    
    return (
        <button className="botao" onClick={LangEvent} id="langButton">
            <i class="fas fa-language" aria-hidden="true">
            </i>
        </button>
    );

}