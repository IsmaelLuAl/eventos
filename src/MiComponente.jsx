import React from "react";

function MiComponente({ rey }) {
    return (
        <div>
            <h1>
                Hola {rey.nombre} se come {rey.reses} vacas al dia
            </h1>
        </div>
    );
}

// Below you can set the default values for all parts of the component.
MiComponente.defaultProps = {
    reses: "pocas",
    rey: "Gamma",
};

export default MiComponente;
