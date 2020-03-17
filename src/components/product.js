import React, { useState } from "react"

const Product = ({ skus, product }) => {
  const stripe = window.Stripe(process.env.GATSBY_STRIPE_API_KEY)
  const [sku, setSku] = useState(skus[0].node.id)

  const placeOrder = () => {
    stripe.redirectToCheckout({
      items: [
        {
          sku,
          quantity: 1,
        },
      ],
      successUrl: "http://localhost:8000/success",
      cancelUrl: "http://localhost:8000/cancel",
    })
  }

  return (
    <article>
      <img src="https://picsum.photos/340/400" alt="LUT Tshirt" />
      <h3>{product.name}</h3>
      <select defaultValue={sku} onBlur={e => setSku(e.target.value)}>
        {skus.map(edge => (
          <option key={edge.node.id} value={edge.node.id}>
            {edge.node.attributes.name}
          </option>
        ))}
      </select>
      <button onClick={placeOrder}>Buy Me</button>
    </article>
  )
}

export default Product
