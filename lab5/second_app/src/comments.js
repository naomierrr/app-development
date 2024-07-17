import React from "react";
import icon4 from './images/icon4.png'
import './index.css'

const User = function(props){
    return(
        <div>
            <section className="card">
                <a>
                    <img src={props.image} alt="avator of a coffee man"/>
                </a>
                <div className="content">
                    <a className="author">{props.name}</a>
                </div>
                <div className="metadata">
                    Posted on <span className="date">{props.date}</span>
                </div>
                <div className="comment">
                    "{props.comments}"
                </div>

            </section>
        </div>
    )
}

export default User;