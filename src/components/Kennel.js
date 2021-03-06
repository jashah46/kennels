// import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { EmployeeCard } from "./EmployeeCard"
// import { CustomerCard } from "./Customer"
// import { LocationCard } from "./Location"
// import "./Kennel.css"

import React from "react"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    
  <h2>Nashville Kennels</h2>
  <small>Loving care when you're not there.</small>

  <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
  </address>
{/* 
  {/* <h2>Animals</h2>
  <article className="animals"> */}
      {/* <AnimalCard />
      <AnimalCard />
      <AnimalCard />
      <AnimalCard />
      <AnimalCard /> */}
  {/* </article>  */}

  {/* <h2>Employees</h2>
  <article className="employees">
      {/* <EmployeeCard />
      <EmployeeCard /> */}
  {/* </article> */}

{/* //   <h2>Locations</h2>
//   <article className="locations"> */}
      {/* <LocationCard />
      <LocationCard />
      <LocationCard />
      <LocationCard /> */}
  {/* </article> */}

{/* //   <h2>Customers</h2>
//   <article className="customers"> */}
//       {/* <CustomerCard />
//       <CustomerCard />
//       <CustomerCard />
//       <CustomerCard /> */}
{/* //   </article> */}
  

  </>
)