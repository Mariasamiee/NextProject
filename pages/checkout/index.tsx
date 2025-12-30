import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/pages/{lib}/store"
import { increaseQty, decreaseQty, } from "@/pages/{lib}/features/productSlice"
import Icons from "@/pages/{components}/Icons/Icon"

function CheckoutPage() {
  const dispatch = useDispatch()

  const cartItems = useSelector(
    (state: RootState) => state.product.cart.items
  )

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 0
  )

  const shipping = cartItems.length ? 5 : 0
  const tax = subtotal * 0.12
  const total = subtotal + shipping + tax

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

      <div className="lg:col-span-2 space-y-8">
        <div className="border border-[#E5E7EB] rounded-2xl p-6">Contact info</div>
        <div className="border border-[#E5E7EB] rounded-2xl p-6">Shipping address</div>
        <div className="border border-[#E5E7EB] rounded-2xl p-6">Payment</div>
      </div>

      <div className="border border-[#E5E7EB] rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-bold">Order summary</h2>

        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-4">
            <img src={product.img} className="w-16 h-20 object-cover rounded-xl" />

            <div className="flex-1">
              <p className="font-medium">{product.title}</p>
              <p className="text-sm text-gray-500">One size</p>

              <div className="flex items-center gap-3 mt-2">
                <button onClick={() => dispatch(decreaseQty(product.id))}>
                  <Icons icon="decre" />
                </button>

                <span>{quantity}</span>

                <button onClick={() => dispatch(increaseQty(product.id))} >
                  <Icons icon="incre" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <p className="font-medium">
                ${(product.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}

        <div className="border-t border-[#E5E7EB] pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="flex justify-between font-bold text-base pt-3 border-t border-[#E5E7EB]">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <button className="w-full bg-gray-900 text-white py-3 rounded-full">
          Confirm order
        </button>
      </div>
    </div>
  )
}

export default CheckoutPage
