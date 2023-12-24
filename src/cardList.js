import React from "react";
import Card from "./card";

const CardList = ({ robots }) => {
    return (
        <div >
        {
          robots.map((robo) => (
            <Card key={robo.id} id={robo.id} name = {robo.name} username = {robo.username} email = {robo.email}/>
            ))
        }
      </div>
    );

}

export default CardList