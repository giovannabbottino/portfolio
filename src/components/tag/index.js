import React from "react";
import "./style.scss";

export default function Tag({ tags}) {

  return (
    <div>
        <div className="tag-main-div">
        <ul className="dev-icons">
            {tags.map(tag => {
                let item;
                if (tag.fontAwesomeClassname != null){ 
                    item = <i className={tag.fontAwesomeClassname}></i>      
                }
                else {    
                    item = <p className="tag-text"> {tag.tag} </p>          
                }
                return (
                    <li className="tag-inline">
                        {item}
                    </li>
                );
            })}
        </ul>
        </div>
    </div>
  );
}