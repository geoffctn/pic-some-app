import React from "react"
import { Context } from "../Context"
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
  return (
    <Context.Consumer>
      {({allPhotos}) => (
        <main className="photos">
          {allPhotos.map((photo, index) => (
            <Image 
              key={photo.id} 
              img={photo} 
              alt={photo.id} 
              className={getClass(index)}
            />
          ))}
        </main>
      )}
    </Context.Consumer>
  );
}

export default Photos;
