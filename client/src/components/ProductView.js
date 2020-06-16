import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Segment, Header, Button } from 'semantic-ui-react';

export default function ProductView (props) {
  const [product, setProduct] = useState({});

  useEffect( () => {
    axios.get(`/api/products/${props.match.params.id}`).then ( res => {
      setProduct(res.data);
    }).catch((err) => {
      console.log(err)
    })
  })
  return(
    <div>
      <Segment>
        <Header as="h1">{product.name}</Header>
        <Header as="h3">{product.department}</Header>
        <Header as="h4">{product.price}</Header>
        <br />
        <br />
        <Button color="black"
        onClick={props.history.goBack}>Go Back</Button>
      </Segment>
    </div>
  )
}