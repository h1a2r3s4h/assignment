export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6">

      {/* NAME */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Your name
        </label>
        <input
          placeholder="Abc"
          className="w-full h-[55px] mt-2 px-4 rounded-lg border border-gray-300 outline-none focus:border-black transition"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Email address
        </label>
        <input
          placeholder="Abc@def.com"
          className="w-full h-[55px] mt-2 px-4 rounded-lg border border-gray-300 outline-none focus:border-black transition"
        />
      </div>

      {/* SUBJECT */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Subject
        </label>
        <input
          placeholder="This is an optional"
          className="w-full h-[55px] mt-2 px-4 rounded-lg border border-gray-300 outline-none focus:border-black transition"
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm font-medium text-gray-800">
          Message
        </label>
        <textarea
          placeholder="Hi! i’d like to ask about"
          className="w-full h-[140px] mt-2 px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-black resize-none transition"
        />
      </div>

      {/* BUTTON */}
      <button className="mt-4 w-[220px] h-[55px] bg-[#B88E2F] text-white rounded-lg font-medium hover:opacity-90 transition">
        Submit
      </button>

    </form>
  );
}