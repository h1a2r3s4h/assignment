export default function CheckoutForm() {
  return (
    <div className="max-w-[520px]">
      <h2 className="text-[28px] font-semibold mb-8">Billing details</h2>

      <div className="space-y-6">

        {/* FIRST + LAST NAME */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input className="input mt-2" />
          </div>

          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input className="input mt-2" />
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <label className="text-sm font-medium">Company Name (Optional)</label>
          <input className="input mt-2" />
        </div>

        {/* COUNTRY */}
        <div>
          <label className="text-sm font-medium">Country / Region</label>
          <select className="input mt-2">
            <option>Sri Lanka</option>
          </select>
        </div>

        {/* ADDRESS */}
        <div>
          <label className="text-sm font-medium">Street address</label>
          <input className="input mt-2" />
        </div>

        <div>
          <label className="text-sm font-medium">Town / City</label>
          <input className="input mt-2" />
        </div>

        {/* PROVINCE */}
        <div>
          <label className="text-sm font-medium">Province</label>
          <select className="input mt-2">
            <option>Western Province</option>
          </select>
        </div>

        {/* ZIP */}
        <div>
          <label className="text-sm font-medium">ZIP code</label>
          <input className="input mt-2" />
        </div>

        {/* PHONE */}
        <div>
          <label className="text-sm font-medium">Phone</label>
          <input className="input mt-2" />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-medium">Email address</label>
          <input className="input mt-2" />
        </div>

        {/* NOTE */}
        <textarea
          placeholder="Additional information"
          className="input h-[120px] mt-4"
        />
      </div>
    </div>
  );
}