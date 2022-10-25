//en meta dato puedo modificar el titulo de html usandolo como una variable
import React from "react";
import { Helmet } from "react-helmet";

export const MetaData=({title})=>{
    return(
        <Helmet>
            <title>
                {
                    `${title} - DevShop`
                }
            </title>
        </Helmet>
    )
}
