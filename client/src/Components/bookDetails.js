import React from 'react';
import { useParams } from "react-router-dom"

function BookDetails({ books }) {
  const { id } = useParams();
  console.log(id)
  const foundBook = books.find((elt) => elt._id == id)
  console.log(foundBook)
  return (
    <div>{
      foundBook.Description

    }</div>
  )
}

export default BookDetails;