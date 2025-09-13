

import './App.css'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";




function App() {

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Thanh toán bằng PayPal</h2>

      <PayPalScriptProvider options={{ "client-id": "ASHxrAcKnUQJ-6ww0hgSZhwn3EC83phYQiq8Oq58qCyAS530MmhDcWxlLXviXIzOdeCzeBT49PNgM_ur" }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "10.00", // Giá sản phẩm
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Thanh toán thành công bởi " + details.payer.name.given_name);
              console.log("Details:", details);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
    </>
  )
}

export default App
