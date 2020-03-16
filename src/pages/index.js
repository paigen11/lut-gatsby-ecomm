import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const stripe = window.Stripe(process.env.GATSBY_STRIPE_API_KEY)

  const placeOrder = sku => {
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
    <Layout>
      <SEO title="Home" />
      <h1>LUT Ecomm Store</h1>
      <div>
        <article>
          <img src="https://picsum.photos/340/400" alt="LUT Tshirt" />
          <h3>LUT T-Shirt</h3>
          <button onClick={() => placeOrder("sku_GsZJzWiwXPKXP8")}>
            Buy Me
          </button>
        </article>
      </div>
    </Layout>
  )
}

export default IndexPage
