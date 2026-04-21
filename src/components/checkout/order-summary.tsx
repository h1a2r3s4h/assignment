export default function OrderSummary() {
  return (
    <div className="max-w-[420px] ml-auto">

      {/* HEADER */}
      <div className="flex justify-between text-[16px] font-medium mb-6">
        <span>Product</span>
        <span>Subtotal</span>
      </div>

      {/* ITEM */}
      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-600">
          Asgaard sofa <span className="text-black font-medium">× 1</span>
        </span>
        <span className="text-gray-600">Rs. 250,000.00</span>
      </div>

      {/* SUBTOTAL */}
      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-600">Rs. 250,000.00</span>
      </div>

      {/* TOTAL */}
      <div className="flex justify-between items-center mb-6">
        <span className="font-medium">Total</span>
        <span className="text-[#B88E2F] font-semibold text-lg">
          Rs. 250,000.00
        </span>
      </div>

      <div className="border-t my-6"></div>

      {/* PAYMENT */}
      <div className="space-y-4 text-sm">

        <label className="flex items-start gap-3">
          <input type="radio" defaultChecked className="mt-1" />
          <div>
            <p className="font-medium">Direct Bank Transfer</p>
            <p className="text-gray-500 text-xs leading-relaxed mt-1">
              Make your payment directly into our bank account. Please use
              your Order ID as the payment reference. Your order will not be
              shipped until the funds have cleared in our account.
            </p>
          </div>
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" />
          Direct Bank Transfer
        </label>

        <label className="flex items-center gap-3">
          <input type="radio" />
          Cash On Delivery
        </label>

        <p className="text-xs text-gray-500 leading-relaxed pt-2">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-semibold text-black">privacy policy</span>.
        </p>
      </div>

      {/* BUTTON */}
      <button className="mt-6 w-full border border-black py-3 rounded-lg hover:bg-black hover:text-white transition">
        Place order
      </button>
    </div>
  );
}