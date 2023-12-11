import express from "express";
import Stripe from "stripe";
const app = express();
const port = 3000;
const PUBLISHABLE_KEY="pk_test_51MMokQINvKSfxRgnvQqS1rm8sxKB4bf2ELmyD2skXnmMBKoF8SfjNco6cpZrLDB1uVm0qX9AAML4aRYeP0vxTbht00fQ9cUHPf";
const SECRET_KEY="sk_test_51MMokQINvKSfxRgn1h9kwXrvFT10vxKB7KY9LyXOJTXOud8gE0saUqfGUx0UmxPoU17e8PYhFYgIL8LTQ4H3ysQU00DSmgAnAT"

const stripe = Stripe(SECRET_KEY);

app.listen(port,() =>{
  console.log(`Example app listening at http://localhost:${port}`);
})

app.post("/create-payment-intent",async (req,res)=>{

  try{
    const paymentIntent = await stripe.paymentIntents.create({
       amount: 1099,
       currency:"usd",
       payment_method_types : ["card"],

    });

    const clientSecret = paymentIntent.client_secret;


    res.json({
      clientSecret: clientSecret,
    });

  }
  catch(e){

      console.log(e.message);
      res.json({error:e.message});

  }
})