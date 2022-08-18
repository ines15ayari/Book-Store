import React from 'react';
import Crd from "./Card"

function List({ books }) {

  return (
    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", width: "70%", margin: "auto" }}>
      {books.map((elt, index) => (<Crd key={elt.id} book={elt} />))}
    </div>
  )
}

export default List