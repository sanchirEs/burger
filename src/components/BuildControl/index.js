import React from "react";

import css from "./style.module.css"

const BuildControl = props => {

    return (
        <>
        <div className={css.BuildControl}>
            <div className={css.Label}>{props.orts}</div>
            <button 
            disabled={props.disabled[props.type]}
            onClick={() => props.ortsHasah(props.type)} 
            className={css.Less}>
                REMOVE
            </button>

            <button 
            onClick={() => props.ortsNemeh(props.type)} 
            className={css.More}>
                ADD
            </button>
            
        </div>
        </>
    )
}

export default BuildControl;