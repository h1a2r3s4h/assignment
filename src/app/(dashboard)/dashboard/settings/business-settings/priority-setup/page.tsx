import PrioritySetupCard from "@/components/settings/business-settings/PrioritySetup";
import SettingsHeader from "@/components/settings/shared/SettingsHeader";
import SettingsTabs from "@/components/settings/shared/SettingsTabs";

export default function PrioritySetupPage() {
  return (
    <div className="space-y-6 bg-muted/40 min-h-screen">
      <div className="space-y-6 p-4">
        <SettingsTabs
          items={[
            {
              label: "General",
              href: "/dashboard/settings/business-settings",
              value: "general",
            },
            {
              label: "Payment Options",
              href: "/dashboard/settings/business-settings/payment-options",
              value: "payment",
            },
            {
              label: "Priority Setup",
              href: "/dashboard/settings/business-settings/priority-setup",
              value: "priority",
            },
            {
              label: "OTP & Login Settings",
              href: "/dashboard/settings/business-settings/login-settings",
              value: "otp-login",
            },
            {
              label: "Login URL",
              href: "/dashboard/settings/business-settings/login-url",
              value: "login-url",
            },
          ]}
        />
        <PrioritySetupCard
          title="Brand"
          description="Brands are lists of the specific products, organize by putting the newest ones at the top and arranging everything alphabetically."
        />

        <PrioritySetupCard
          title="Category"
          description="The category list groups similar products together arranged with the latest category first and in alphabetical order."
        />

        <PrioritySetupCard
          title="Featured Products"
          description="The featured products means the product list which are mostly ordered,customers choice and have good reviews and ratings."
          showAdvanced
        />

        <PrioritySetupCard
          title="New arrival products"
          description="These new arrival products are items recently added to the list within a specific time frame and have positive reviews & ratings."
          showAdvanced
          showDuration
        />

        <PrioritySetupCard
          title="Category wise Product list"
          description="Category or subcategory wise product list is for displaying the products which are mostly ordered,have positive reviews & ratings and in alphabetical order."
          showAdvanced
        />

        <PrioritySetupCard
          title="Top rated products"
          description="Top rated products are the mstly ordered product list of customer choice which are highly rated & reviewed."
        />

        <PrioritySetupCard
          title="Best selling products"
          description="Best selling products are those items that are purchased by customers mostly compared to other products within a specific period."
        />

        <PrioritySetupCard
          title="Products list (Search Bar)"
          description="The product list (Search Bar) is the list of those products which appear during search bsed on product availability."
        />
      </div>
    </div>
  );
}
