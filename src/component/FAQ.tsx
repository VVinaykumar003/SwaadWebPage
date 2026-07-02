type CategoryId =
  | "general"
  | "customer"
  | "features"
  | "setup"
  | "pricing"
  | "support"
  | "integration"
  | "compliance";

type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
  tags?: string[];
};

type FaqCategory = {
  id: CategoryId;
  label: string;
  items: FaqItem[];
};

export const faqData: FaqCategory[] = [
  {
    id: "general",
    label: "General",
    items: [
      {
        id: "general-1",
        question: "What is SwaadSetu?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              SwaadSetu is an all-in-one food business operating platform that helps manage ordering, billing, payments, inventory, expenses, customer engagement, and daily operations through a unified system.

            </p>
          </>
        ),
        tags: ["QR Code", "Ordering", "Contactless"],
      },
      {
        id: "general-2",
        question: "Who is SwaadSetu designed for?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             SwaadSetu is suitable for restaurants, cafés, QSRs, cloud kitchens, food courts, and other food service businesses looking to streamline operations and improve customer experiences.
            </p>
          </>
        ),
      },
      {
        id: "general-3",
        question: "Do customers need to download an app?",
        answer: (
          <p className="text-sm text-slate-400 leading-relaxed">
            <strong>No!</strong> Customers simply scan a QR code and access the menu directly through their mobile browser without installing any application.

          </p>
        ),
      },
      {
        id: "general-4",
        question: "How quickly can I get started?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
               Most businesses can be onboarded within a short time. Our team assists with setup, menu configuration, staff onboarding, and initial guidance.
            </p>
           
          </>
        ),
      },
      {
        id: "general-5",
        question: "Can I migrate from another platform?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Yes. Our team can help transfer menus and operational data wherever possible to ensure a smooth transition.
            </p>
          </>
        ),
      },
      

      // ...add all remaining general questions similarly
    ],
  },
  //Ordering & Customer Experience

  {
    id: "customer",
    label: "Ordering & Customer Experience",
    items: [
      {
        id: "customer-1",
        question: "How does QR ordering work?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Customers scan a table QR code, browse the menu, place orders, and receive updates directly from their mobile device.
            </p>
          </>
        ),
      },
      {
        id: "customer-2",
        question: "Can customers track their orders?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Yes. Customers can view real-time order status updates from placement to completion.

            </p>
          </>
        ),
      },
      {
        id: "customer-3",
        question: "Can customers call staff through SwaadSetu?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Yes. Guests can send waiter assistance requests directly from their table without searching for staff.
            </p>
          </>
        ),
      },
      {
        id: "customer-4",
        question:
          "Can menus be updated instantly?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Absolutely. Menu items, pricing, availability, and categories can be updated at any time without replacing QR codes.
            </p>
          </>
        ),
      },
      {
        id: "customer-6",
        question: "Does SwaadSetu support dine-in and takeaway?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Yes. Businesses can manage different order types through a single platform.
            </p>
          </>
        ),
      },
    ],
  },

  //Operations & Management
  {
    id: "features",
    label: "Operations & Management",
    items: [
      {
        id: "features-1",
        question: "Does SwaadSetu include billing?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yes. Generate digital bills, apply taxes and discounts, and manage transactions through a streamlined billing workflow.
            </p>
          </>
        ),
      },
      {
        id: "features-2",
        question: "Can I manage multiple staff members?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yes. Create staff accounts and assign access based on operational responsibilities.
            </p>
          </>
        ),
      },
      {
        id: "features-3",
        question: "Does the platform include inventory tracking?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yes. Track stock consumption and maintain better visibility over inventory levels.
            </p>
          </>
        ),
      },
      {
        id: "features-4",
        question: "Can I record business expenses?",
        answer: (
          <p className="text-sm text-slate-400 leading-relaxed">
            Yes. SwaadSetu includes expense tracking to help monitor
            operational costs and profitability.
          </p>
        ),
      },
      {
        id: "features-5",
        question: "Are business reports available?",
        answer: (
          <p className="text-sm text-slate-400 leading-relaxed">
            Yes. Access reports related to orders, sales, expenses, customer
            activity, and operational performance.
          </p>
        ),
      },
    ],
  },

  //Pricing & Subscription
  {
    id: "setup",
    label: "Pricing & Subscription",
    items: [
      {
        id: "setup-1",
        question: "Is there a setup fee?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             No. Pricing is transparent with no hidden setup charges.
            </p>
          </>
        ),
      },
      {
        id: "setup-2",
        question: "Is there a long-term contract?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              No. Businesses can choose the subscription plan that best suits their requirements.
            </p>
          </>
        ),
      },
      {
        id: "setup-3",
        question: "What is included in the subscription?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             The subscription includes platform access, feature updates, support, onboarding assistance, and ongoing improvements.
            </p>
          </>
        ),
      },
      {
        id: "setup-4",
        question: "Can I upgrade my plan later?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
            Yes. As your requirements evolve, additional features and upgrades can be discussed with our team.
            </p>
          </>
        ),
      },
    ],
  },

  // Support & Onboarding
  {
    id: "pricing",
    label: "Support & Onboarding",
    items: [
      {
        id: "pricing-1",
        question: "What kind of support is available?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Support is available through WhatsApp, phone, and email for onboarding, training, and operational assistance.
            </p>
          </>
        ),
      },
      {
        id: "pricing-2",
        question: "Do you provide staff training?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yes. We guide teams through platform usage and best practices during onboarding
            </p>
          </>
        ),
      },
      {
        id: "pricing-3",
        question: "What if I need help after setup?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our support team remains available to assist with product-related queries and operational challenges.
            </p>
          </>
        ),
      },
      {
        id: "pricing-4",
        question: "Do I need technical knowledge to use SwaadSetu?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              No. The platform is designed for everyday business users and requires no technical expertise.
            </p>
          </>
        ),
      },
    ],
  },

  // Security & Reliability

  {
    id: "support",
    label: "Security & Reliability",
    items: [
      {
        id: "support-1",
        question: "Is my business data secure?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
             Yes. SwaadSetu uses secure cloud infrastructure, controlled access permissions, and regular backups.
            </p>
          </>
        ),
      },
      {
        id: "support-2",
        question: "Does SwaadSetu work on mobile devices?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
            Yes. The platform works across smartphones, tablets, laptops, and desktop devices.

            </p>
          </>
        ),
      },
      {
        id: "support-3",
        question: "Will my QR codes stop working if I update my menu?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              No. QR codes remain the same while menu changes update automatically.
            </p>
          </>
        ),
      },
      {
        id: "support-4",
        question: "Is internet required to use SwaadSetu?",
        answer: (
          <>
            <p className="text-sm text-slate-400 leading-relaxed">
              Yes. An active internet connection is required to access real-time platform functionality.
            </p>
          </>
        ),
      },
     
    ],
  },

 ];
