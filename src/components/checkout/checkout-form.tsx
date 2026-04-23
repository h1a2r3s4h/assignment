"use client";

export default function CheckoutForm({ setIsValid }: any) {
  const handleChange = (e: any) => {
    const form = e.currentTarget;
    setIsValid(form.checkValidity());
  };

  return (
    <form
      id="checkout-form"
      className="max-w-[520px]"
      onChange={handleChange}
    >
      <h2 className="text-[28px] font-semibold mb-8">Billing details</h2>

      <div className="space-y-6">

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <input className="input mt-2" required />
          </div>

          <div>
            <label className="text-sm font-medium">Last Name</label>
            <input className="input mt-2" required />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Company Name</label>
          <input className="input mt-2" required />
        </div>

        <div>
          <label className="text-sm font-medium">Country / Region</label>
          <select className="input mt-2" required>
            <option value="">Select Country</option>
            <option>Sri Lanka</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">Street address</label>
          <input className="input mt-2" required />
        </div>

        <div>
          <label className="text-sm font-medium">Town / City</label>
          <input className="input mt-2" required />
        </div>

        <div>
          <label className="text-sm font-medium">Province</label>
          <select className="input mt-2" required>
            <option value="">Select Province</option>
            <option>Western Province</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium">ZIP code</label>
          <input className="input mt-2" required />
        </div>

        <div>
          <label className="text-sm font-medium">Phone</label>
          <input type="tel" className="input mt-2" required />
        </div>

        <div>
          <label className="text-sm font-medium">Email address</label>
          <input type="email" className="input mt-2" required />
        </div>

        <textarea
          placeholder="Additional information"
          className="input h-[120px] mt-4"
          required
        />
      </div>
    </form>
  );
}