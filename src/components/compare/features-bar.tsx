import { Trophy, ShieldCheck, Truck, Headphones } from "lucide-react";

export default function FeaturesBar() {
  return (
    <div className="bg-[#F9F1E7] border-t border-gray-200">
      
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-4 gap-10">

        {/* Item 1 */}
        <div className="flex items-center gap-4">
          <Trophy size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              High Quality
            </p>
            <p className="text-gray-500 text-sm">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-4">
          <ShieldCheck size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              Warranty Protection
            </p>
            <p className="text-gray-500 text-sm">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-4">
          <Truck size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              Free Shipping
            </p>
            <p className="text-gray-500 text-sm">
              Order over 150 $
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center gap-4">
          <Headphones size={40} className="text-black" />

          <div>
            <p className="font-semibold text-lg text-black">
              24 / 7 Support
            </p>
            <p className="text-gray-500 text-sm">
              Dedicated support
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}