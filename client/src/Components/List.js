import React from 'react';
import X from "./X"

function List() {
  const table = [1, 2, 3]
  return (
    <div style={{ display: "flex",justifyContent:"space-around" }}>
      {table.map((elt, index) => (<X key={index} />))}
    </div>
  )
}

export default List