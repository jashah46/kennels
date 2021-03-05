import React from "react"
import "./Animal.css"


export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        {/* <div className="animal__breed">{animal.location.name}</div> */}
    </section>
)

//May add these additional breeds later if necessary.  I wasn't sure if I needed to created a new variable for each breed or not.

// <section className="animal">
//     <h3 className="animal__name">French</h3>
//     <div className="animal__breed">Breed: Bulldog</div>
// </section>,

// <section className="animal">
//     <h3 className="animal__name">Lab</h3>
//     <div className="animal__breed">Breed: Labrador</div>
// </section>
