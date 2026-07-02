import { Images } from "../assets/assets";

export interface BlogBullet {
  title: string;
  description: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  bullets?: BlogBullet[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: "Product" | "Operations" | "Growth" | "Updates";
  readTime: string;
  author: string;
  date: string;
  coverImage: string;
  excerpt: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  //Product
  {
    id: 1,
    slug: "qr-menu-vs-traditional-menu",
    title: "QR Menu vs Traditional Menu: Which Is Better for Restaurants?",
    category: "Product",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.product_1,

    excerpt:
      "Restaurant technology is evolving rapidly, and one of the biggest changes in recent years is the shift from traditional printed menus to QR menus. Learn why more restaurants are adopting digital menus.",

    sections: [
      {
        paragraphs: [
          "Restaurant technology is evolving rapidly, and one of the biggest changes in recent years is the shift from traditional printed menus to QR menus. Many restaurants, cafés, and QSRs are adopting digital menus to improve efficiency and enhance customer experiences.",
        ],
      },

      {
        heading: "Traditional Menus: Familiar but Limited",
        paragraphs: [
          "Printed menus are easy to use and familiar to guests. However, updating prices, adding new dishes, or removing unavailable items often requires reprinting, leading to additional costs and operational delays.",
        ],
      },

      {
        heading: "QR Menus: Built for Modern Dining",
        paragraphs: [
          "A QR menu allows customers to access the menu instantly by scanning a code with their smartphone. Guests can browse dishes, view images, and place orders without waiting for staff assistance.",
        ],
      },

      {
        heading: "Key Differences",
        bullets: [
          {
            title: "Faster Ordering",
            description:
              "Customers can start browsing the menu immediately after being seated, reducing wait times and improving table turnover.",
          },
          {
            title: "Real-Time Updates",
            description:
              "Restaurants can update menu items, pricing, and availability instantly without printing new menus.",
          },
          {
            title: "Better Order Accuracy",
            description:
              "Digital ordering helps reduce communication errors by allowing guests to submit their preferences directly.",
          },
          {
            title: "Improved Operational Efficiency",
            description:
              "QR-based ordering streamlines workflows and enables staff to focus more on service and hospitality.",
          },
        ],
      },

      {
        heading: "Which Option Is Better?",
        paragraphs: [
          "While traditional menus still work for some businesses, QR menus offer greater flexibility, faster service, and easier menu management. For restaurants looking to modernize operations and deliver a smoother guest experience, QR menus are becoming the preferred choice.",
        ],
      },
    ],
  },

  {
    id: 2,
    slug: "real-time-order-tracking-improves-customer-experience",
    title: "How Real-Time Order Tracking Improves Customer Experience",
    category: "Product",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.product_3,

    excerpt:
      "Customer expectations have changed significantly in recent years. Real-time order tracking keeps guests informed, improves transparency, and creates a smoother dining experience.",

    sections: [
      {
        paragraphs: [
          "Customer expectations have changed significantly in recent years. Guests no longer want to place an order and wait without knowing what is happening behind the scenes. This is why real-time order tracking is becoming an important part of modern restaurant operations.",
        ],
      },

      {
        heading: "What Is Real-Time Order Tracking?",
        paragraphs: [
          "A restaurant order tracking system allows customers to view the status of their order from confirmation to preparation and service. Instead of repeatedly asking staff for updates, guests can see progress in real time.",
        ],
      },

      {
        heading: "Better Transparency and Trust",
        paragraphs: [
          "One of the biggest advantages of order tracking is transparency. Customers know their order has been received and can track its progress through each stage. This reduces uncertainty and builds trust in the dining experience.",
        ],
      },

      {
        heading: "Reduced Wait-Time Anxiety",
        paragraphs: [
          "Waiting often feels longer when there is no information available. Live order updates keep customers informed, making the waiting experience more comfortable and predictable.",
        ],
      },

      {
        heading: "Improved Restaurant Operations",
        paragraphs: [
          "Real-time tracking also benefits restaurant teams. Orders move digitally from guests to the kitchen, reducing communication gaps and helping staff coordinate service more efficiently.",
        ],
      },

      {
        heading: "A Better Guest Experience",
        paragraphs: [
          "When customers feel informed and in control, satisfaction naturally improves. Real-time order tracking creates a smoother experience, increases confidence in service, and helps restaurants deliver a more modern and professional dining journey.",
        ],
      },
    ],
  },

  {
    id: 3,
    slug: "benefits-of-digital-billing-for-restaurants-and-cafes",
    title: "Benefits of Digital Billing for Restaurants and Cafés",
    category: "Product",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.product_3,

    excerpt:
      "Digital billing simplifies restaurant operations by improving checkout speed, reducing billing errors, and providing valuable business insights for smarter decision-making.",

    sections: [
      {
        paragraphs: [
          "Billing is one of the most important touchpoints in any dining experience. A slow checkout process can create delays, while billing errors can impact customer satisfaction and daily operations.",
          "This is why many restaurants and cafés are moving towards modern digital billing systems.",
        ],
      },

      {
        heading: "Faster Checkout Experience",
        paragraphs: [
          "Digital billing software allows restaurants to generate bills instantly, apply taxes automatically, and process payments without manual calculations. This helps reduce waiting times and ensures a smoother experience for guests during peak hours.",
        ],
      },

      {
        heading: "Improved Accuracy",
        paragraphs: [
          "Manual billing often increases the chances of pricing mistakes, tax calculation errors, and duplicate entries. A restaurant billing system automates these processes, helping teams maintain consistency and accuracy across every transaction.",
        ],
      },

      {
        heading: "Better Business Visibility",
        paragraphs: [
          "Digital billing doesn't just generate invoices—it also provides valuable business insights. Restaurant owners can track sales, monitor popular menu items, review payment trends, and access performance reports from a single dashboard.",
        ],
      },

      {
        heading: "Easier Day-to-Day Operations",
        paragraphs: [
          "From discounts and taxes to payment records and order history, everything stays organized in one place. Staff spend less time managing paperwork and more time focusing on customer service.",
        ],
      },

      {
        heading: "The Future of Restaurant Billing",
        paragraphs: [
          "As restaurants continue to embrace technology, digital billing software is becoming a standard operational tool. Faster transactions, improved accuracy, and better reporting help food businesses operate more efficiently while delivering a better guest experience.",
          "For modern restaurants and cafés, digital billing is no longer just a convenience—it's a smarter way to run the business.",
        ],
      },
    ],
  },

  {
    id: 4,
    slug: "why-modern-food-businesses-need-an-all-in-one-operating-platform",
    title: "Why Modern Food Businesses Need an All-in-One Operating Platform",
    category: "Product",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.product_5,

    excerpt:
      "Modern food businesses need more than disconnected tools. Discover how an all-in-one operating platform simplifies operations, improves efficiency, and supports long-term business growth.",

    sections: [
      {
        paragraphs: [
          "Running a food business today involves much more than taking orders and serving customers. Restaurants, cafés, cloud kitchens, and QSRs manage menus, billing, payments, inventory, staff coordination, customer engagement, and business reporting every day.",
          "When these processes rely on multiple disconnected tools, operations become harder to manage.",
        ],
      },

      {
        heading: "The Challenge of Fragmented Systems",
        paragraphs: [
          "Many food businesses use separate solutions for billing, ordering, inventory tracking, and customer management. While each tool may solve a specific problem, switching between multiple platforms often leads to inefficiencies, duplicated work, and limited visibility.",
          "Teams spend more time managing systems instead of focusing on customers.",
        ],
      },

      {
        heading: "One Platform, Better Control",
        paragraphs: [
          "An all-in-one restaurant management software brings core business operations together in a single platform. Orders, payments, inventory, expenses, reports, and customer interactions remain connected, helping teams work more efficiently.",
          "With centralized data, owners can access important business information without juggling multiple dashboards.",
        ],
      },

      {
        heading: "Better Decisions Through Real-Time Insights",
        paragraphs: [
          "Modern food business software provides visibility into sales performance, order trends, inventory movement, and operational metrics. These insights help operators identify opportunities, improve efficiency, and make informed business decisions.",
        ],
      },

      {
        heading: "Built for Growth",
        paragraphs: [
          "As businesses expand, operational complexity increases. An integrated platform creates a scalable foundation that supports growth without adding unnecessary processes or manual work.",
        ],
      },

      {
        heading: "The Future of Food Business Operations",
        paragraphs: [
          "Technology is no longer a competitive advantage—it's becoming a necessity. Food businesses that adopt connected systems can streamline daily operations, improve customer experiences, and gain better control over their growth.",
          "An all-in-one operating platform helps modern food businesses run smarter, faster, and with greater confidence.",
        ],
      },
    ],
  },

  //operations
  {
    id: 5,
    slug: "how-to-reduce-wait-times-in-restaurants-without-hiring-more-staff",
    title: "How to Reduce Wait Times in Restaurants Without Hiring More Staff",
    category: "Operations",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.opt_1,

    excerpt:
      "Long wait times don't always require hiring more staff. Learn how modern restaurants reduce delays, improve service speed, and increase customer satisfaction through smarter operational workflows.",

    sections: [
      {
        paragraphs: [
          "Long wait times can frustrate guests, slow table turnover, and impact overall customer satisfaction. While many restaurants assume they need more staff to solve the problem, the real solution is often improving operational efficiency.",
          "Here are a few ways modern restaurants reduce wait times without increasing headcount.",
        ],
      },

      {
        heading: "Streamline the Ordering Process",
        paragraphs: [
          "Traditional ordering often requires multiple interactions between guests, waiters, and the kitchen. Digital ordering systems allow customers to browse menus and place orders directly, reducing delays and speeding up service.",
        ],
      },

      {
        heading: "Improve Kitchen Coordination",
        paragraphs: [
          "Miscommunication between service staff and the kitchen can slow down order preparation. Real-time order management ensures every order reaches the kitchen instantly and accurately, helping teams stay organized during peak hours.",
        ],
      },

      {
        heading: "Provide Live Order Updates",
        paragraphs: [
          "Customers are more patient when they know the status of their order. Real-time order tracking keeps guests informed, reducing repeated status inquiries and allowing staff to focus on service.",
        ],
      },

      {
        heading: "Optimize Table Turnover",
        paragraphs: [
          "Faster ordering, billing, and payment processing help tables move more efficiently without making guests feel rushed. Small improvements across the dining journey can significantly reduce overall waiting times.",
        ],
      },

      {
        heading: "Focus on Smarter Operations",
        paragraphs: [
          "Reducing wait times isn't always about hiring more people—it's about helping existing teams work more effectively. With the right technology and streamlined workflows, restaurants can serve more guests, improve customer satisfaction, and operate efficiently even during busy hours.",
          "Modern restaurant operations are built on speed, visibility, and coordination—and those improvements often start with better systems, not bigger teams.",
        ],
      },
    ],
  },

  {
    id: 6,
    slug: "common-restaurant-management-mistakes-that-hurt-growth",
    title: "Common Restaurant Management Mistakes That Hurt Growth",
    category: "Operations",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.opt_2,

    excerpt:
      "Operational mistakes can quietly limit restaurant growth. Learn the most common management challenges and discover how modern systems help improve efficiency, consistency, and profitability.",

    sections: [
      {
        paragraphs: [
          "Running a successful restaurant requires more than great food. Many restaurants struggle to grow not because of demand, but because of operational mistakes that gradually affect customer experience, efficiency, and profitability.",
          "Here are some of the most common restaurant management mistakes and how to avoid them.",
        ],
      },

      {
        heading: "Ignoring Operational Data",
        paragraphs: [
          "Many restaurant owners rely on assumptions instead of actual performance metrics. Without tracking sales, order trends, and customer preferences, it becomes difficult to identify what is working and what needs improvement.",
        ],
      },

      {
        heading: "Poor Inventory Management",
        paragraphs: [
          "Inventory issues can quickly impact profitability. Overstocking increases waste, while stock shortages lead to missed sales opportunities. Maintaining visibility into stock consumption helps businesses control costs and avoid disruptions.",
        ],
      },

      {
        heading: "Slow Service During Peak Hours",
        paragraphs: [
          "Long wait times often result from inefficient workflows rather than a lack of staff. Delays in ordering, kitchen communication, or billing can create bottlenecks that affect the entire dining experience.",
        ],
      },

      {
        heading: "Inconsistent Customer Experience",
        paragraphs: [
          "Customers expect the same quality of service every time they visit. Poor communication, order errors, and inconsistent processes can reduce customer satisfaction and limit repeat business.",
        ],
      },

      {
        heading: "Relying on Manual Processes",
        paragraphs: [
          "Paper-based systems and disconnected tools can slow operations and increase the chances of mistakes. Modern restaurant operations benefit from connected systems that streamline ordering, billing, reporting, and day-to-day management.",
        ],
      },

      {
        heading: "Building a Strong Foundation for Growth",
        paragraphs: [
          "Sustainable growth comes from efficient operations. Restaurants that focus on visibility, consistency, and process improvement are better positioned to serve more customers and scale successfully.",
          "Avoiding these common restaurant management mistakes can improve operational efficiency, enhance guest experiences, and create a stronger foundation for long-term growth.",
        ],
      },
    ],
  },

  {
    id: 7,
    slug: "improving-kitchen-efficiency-with-digital-workflows",
    title: "Improving Kitchen Efficiency with Digital Workflows",
    category: "Operations",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.opt_3,

    excerpt:
      "Digital kitchen workflows help restaurants improve coordination, reduce order errors, and speed up food preparation. Discover how connected kitchen operations create a more efficient and consistent dining experience.",

    sections: [
      {
        paragraphs: [
          "The kitchen is the heart of every food business. Even when customer demand is high, inefficient kitchen operations can lead to delays, order mistakes, and inconsistent service. That's why many modern restaurants are adopting digital workflows to improve speed and coordination.",
        ],
      },

      {
        heading: "The Problem with Manual Processes",
        paragraphs: [
          "Traditional kitchen operations often depend on handwritten notes, verbal communication, or printed tickets. During busy hours, this can create confusion, missed instructions, and unnecessary delays.",
          "As order volumes increase, manual workflows become harder to manage effectively.",
        ],
      },

      {
        heading: "Real-Time Order Visibility",
        paragraphs: [
          "Kitchen management software allows orders to move directly from the ordering system to the kitchen in real time. Chefs and kitchen staff receive accurate order details instantly, reducing the risk of communication errors.",
          "This helps teams stay organized and prioritize orders more efficiently.",
        ],
      },

      {
        heading: "Faster Preparation and Service",
        paragraphs: [
          "When kitchen staff have clear visibility into incoming orders, preparation becomes more streamlined. Digital workflows reduce bottlenecks and help improve coordination between service staff and kitchen teams.",
          "The result is faster service and a smoother guest experience.",
        ],
      },

      {
        heading: "Better Operational Control",
        paragraphs: [
          "Digital kitchen operations provide greater visibility into order status, preparation times, and workflow efficiency. Restaurant managers can identify delays, monitor performance, and make improvements based on real operational data.",
        ],
      },

      {
        heading: "Building a More Efficient Kitchen",
        paragraphs: [
          "Kitchen efficiency isn't just about working faster—it's about working smarter. Digital workflows help restaurants reduce errors, improve communication, and deliver consistent service even during peak hours.",
          "For modern food businesses, connected kitchen operations have become an essential part of delivering a better customer experience.",
        ],
      },
    ],
  },

  {
    id: 8,
    slug: "how-qr-ordering-streamlines-daily-restaurant-operations",
    title: "How QR Ordering Streamlines Daily Restaurant Operations",
    category: "Operations",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.opt_4,

    excerpt:
      "QR ordering simplifies restaurant workflows by reducing wait times, improving order accuracy, and helping teams deliver faster, more efficient service every day.",

    sections: [
      {
        paragraphs: [
          "Restaurant operations depend on speed, coordination, and accuracy. During busy hours, even small delays in taking orders or communicating with the kitchen can impact customer experience. This is why many food businesses are adopting QR ordering systems to simplify daily operations.",
        ],
      },

      {
        heading: "Faster Ordering Process",
        paragraphs: [
          "With a QR ordering system, guests can browse the menu and place orders directly from their smartphones. This eliminates the need to wait for a physical menu or a staff member to take the order, helping restaurants serve customers more efficiently.",
        ],
      },

      {
        heading: "Better Order Accuracy",
        paragraphs: [
          "Manual order taking can sometimes lead to communication errors or missed customizations. QR ordering allows customers to submit their preferences directly, ensuring the kitchen receives accurate order details every time.",
        ],
      },

      {
        heading: "Improved Team Efficiency",
        paragraphs: [
          "When orders are placed digitally, they can be routed instantly to the kitchen or service team. Staff spend less time managing routine order-taking tasks and more time focusing on hospitality and guest support.",
        ],
      },

      {
        heading: "Real-Time Workflow Visibility",
        paragraphs: [
          "Modern restaurant workflow systems provide visibility into order status from placement to completion. This helps improve coordination between front-of-house and kitchen teams while keeping operations organized during peak hours.",
        ],
      },

      {
        heading: "A Smarter Way to Operate",
        paragraphs: [
          "QR ordering is more than a convenience feature—it helps restaurants reduce delays, improve service quality, and create smoother day-to-day operations.",
          "As customer expectations continue to evolve, digital ordering systems are becoming an important part of running an efficient and modern food business.",
        ],
      },
    ],
  },

  //growth

  {
    id: 9,
    slug: "how-better-customer-experiences-lead-to-more-repeat-orders",
    title: "How Better Customer Experiences Lead to More Repeat Orders",
    category: "Growth",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.grw_1,

    excerpt:
      "Customer loyalty is built through exceptional experiences. Learn how convenience, consistency, and great service encourage repeat visits and drive long-term restaurant growth.",

    sections: [
      {
        paragraphs: [
          "Acquiring new customers is important, but long-term restaurant growth often comes from turning first-time visitors into regular guests. One of the most effective ways to achieve this is by delivering a consistently great customer experience.",
        ],
      },

      {
        heading: "First Impressions Matter",
        paragraphs: [
          "A guest's experience begins long before the food arrives. Easy ordering, clear menus, fast service, and a welcoming atmosphere all contribute to how customers perceive a restaurant.",
          "When the experience feels smooth and enjoyable, customers are more likely to return.",
        ],
      },

      {
        heading: "Convenience Drives Loyalty",
        paragraphs: [
          "Modern diners value convenience. Features like QR ordering, digital payments, and real-time order updates reduce friction and make dining more comfortable.",
          "The easier it is for guests to interact with your restaurant, the more likely they are to visit again.",
        ],
      },

      {
        heading: "Consistency Builds Trust",
        paragraphs: [
          "Customers return to restaurants they can rely on. Consistent service, accurate orders, and predictable experiences help build confidence and strengthen customer relationships over time.",
          "Even small operational improvements can significantly impact customer retention.",
        ],
      },

      {
        heading: "Listen to Customer Feedback",
        paragraphs: [
          "Guest feedback provides valuable insights into what's working and what needs improvement. Restaurants that actively listen and respond to customer concerns often create stronger relationships and higher satisfaction levels.",
        ],
      },

      {
        heading: "Repeat Customers Fuel Growth",
        paragraphs: [
          "Returning guests typically spend more, visit more frequently, and recommend restaurants to friends and family. Focusing on customer retention can be more cost-effective than constantly acquiring new customers.",
        ],
      },

      {
        heading: "Creating Experiences Worth Returning For",
        paragraphs: [
          "Great food may attract customers once, but great experiences bring them back. Restaurants that prioritize convenience, consistency, and customer satisfaction are better positioned to build loyalty and achieve sustainable growth.",
          "In today's competitive market, customer experience is one of the strongest drivers of repeat orders and long-term success.",
        ],
      },
    ],
  },

  {
    id: 10,
    slug: "restaurant-marketing-ideas-for-local-food-businesses",
    title: "Restaurant Marketing Ideas for Local Food Businesses",
    category: "Growth",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.grw_3,

    excerpt:
      "Discover practical restaurant marketing ideas that help local food businesses attract more customers, strengthen their online presence, and encourage repeat visits through better customer experiences.",

    sections: [
      {
        paragraphs: [
          "Great food alone isn't always enough to attract new customers. In today's competitive market, local food businesses need effective marketing strategies to increase visibility, attract nearby customers, and encourage repeat visits.",
          "Here are a few practical restaurant marketing ideas that can help drive growth.",
        ],
      },

      {
        heading: "Strengthen Your Google Presence",
        paragraphs: [
          "Many customers discover restaurants through online searches. Keeping your Google Business Profile updated with accurate information, photos, menus, and customer reviews can significantly improve local visibility.",
        ],
      },

      {
        heading: "Encourage Customer Reviews",
        paragraphs: [
          "Positive reviews build trust and influence dining decisions. Encourage satisfied customers to leave reviews after their visit and respond professionally to all feedback.",
        ],
      },

      {
        heading: "Use Social Media Consistently",
        paragraphs: [
          "Platforms like Instagram and Facebook allow restaurants to showcase dishes, promotions, and behind-the-scenes moments. Consistent posting helps keep your brand visible and engaged with local audiences.",
        ],
      },

      {
        heading: "Promote Seasonal Offers",
        paragraphs: [
          "Limited-time specials, combo deals, and festive menus can create excitement and encourage customers to visit more frequently.",
        ],
      },

      {
        heading: "Make Ordering Convenient",
        paragraphs: [
          "Customers are more likely to order when the experience is simple and hassle-free. QR menus, digital ordering, and contactless payments help improve convenience while creating a modern dining experience.",
        ],
      },

      {
        heading: "Focus on Customer Retention",
        paragraphs: [
          "Returning customers often generate more value than first-time visitors. Delivering excellent service and maintaining consistent quality encourages repeat business and word-of-mouth referrals.",
        ],
      },

      {
        heading: "Marketing Starts with Great Experiences",
        paragraphs: [
          "Successful restaurant marketing isn't only about advertising—it's about creating experiences people want to share. By combining strong local visibility with exceptional customer service, food businesses can build lasting relationships and grow sustainably.",
          "For local restaurants, the most effective marketing strategy is often a combination of great food, memorable experiences, and consistent community engagement.",
        ],
      },
    ],
  },

  {
    id: 11,
    slug: "introducing-swaadsetu-the-operating-system-for-modern-food-services",
    title: "Introducing SwaadSetu: The Operating System for Modern Food Services",
    category: "Updates",
    readTime: "4 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.grw_3,

    excerpt:
      "Meet SwaadSetu—an all-in-one operating platform built to simplify ordering, billing, payments, inventory, and business management for modern food businesses.",

    sections: [
      {
        paragraphs: [
          "Running a food business today involves much more than serving great food. Restaurants, cafés, cloud kitchens, and quick-service outlets must manage menus, orders, billing, payments, staff coordination, customer experiences, and business performance—all while maintaining speed and consistency.",
          "That's exactly why we built SwaadSetu.",
        ],
      },

      {
        heading: "Built for Modern Food Businesses",
        paragraphs: [
          "SwaadSetu is an all-in-one operating platform designed to simplify day-to-day restaurant operations. Instead of relying on multiple disconnected tools, businesses can manage everything from a single platform.",
          "From QR-based ordering to billing and business analytics, SwaadSetu helps teams work smarter and serve customers better.",
        ],
      },

      {
        heading: "What Can You Do with SwaadSetu?",
        paragraphs: [
          "Restaurants can create digital QR menus, receive orders in real time, track order status, manage billing, monitor inventory, and analyze business performance through a centralized dashboard.",
          "The platform is designed to reduce manual work while improving operational visibility.",
        ],
      },

      {
        heading: "Better Experiences for Guests",
        paragraphs: [
          "Modern customers expect convenience. SwaadSetu enables faster ordering, digital payments, and real-time order updates, creating a smoother dining experience from start to finish.",
        ],
      },

      {
        heading: "Better Control for Owners",
        paragraphs: [
          "Business owners gain access to valuable insights including sales performance, order trends, customer behavior, and operational metrics. These insights help restaurants make informed decisions and identify opportunities for growth.",
        ],
      },

      {
        heading: "The Future of Food Service Operations",
        paragraphs: [
          "Technology is rapidly transforming the hospitality industry. Businesses that embrace digital operations are better positioned to improve efficiency, enhance customer satisfaction, and scale sustainably.",
          "SwaadSetu is built to support that journey.",
          "Whether you're running a café, restaurant, food court, or cloud kitchen, SwaadSetu provides the tools needed to simplify operations and focus on what matters most—delivering great food and exceptional customer experiences.",
        ],
      },
    ],
  },

  {
    id: 12,
    slug: "product-update-real-time-order-tracking-is-now-live",
    title: "Product Update: Real-Time Order Tracking Is Now Live",
    category: "Updates",
    readTime: "3 Min Read",
    author: "SwaadSetu Team",
    date: "June 2026",
    coverImage: Images.grw_4,

    excerpt:
      "Real-Time Order Tracking is now available on SwaadSetu. Keep guests informed with live order updates while improving operational efficiency and restaurant service coordination.",

    sections: [
      {
        paragraphs: [
          "We're excited to announce one of the most requested features on SwaadSetu — Real-Time Order Tracking.",
          "Restaurants can now provide guests with live updates on their orders from confirmation to completion, creating a more transparent and engaging dining experience.",
        ],
      },

      {
        heading: "What Is Real-Time Order Tracking?",
        paragraphs: [
          "Once an order is placed through SwaadSetu, customers can view its current status directly on their device.",
          "Order progress is displayed through key stages such as:",
        ],
        bullets: [
          {
            title: "Order Confirmed",
            description: "The restaurant has successfully received the order.",
          },
          {
            title: "Preparing",
            description: "The kitchen has started preparing the order.",
          },
          {
            title: "Ready to Serve",
            description: "The order is ready for delivery to the customer.",
          },
          {
            title: "Completed",
            description: "The order has been successfully served.",
          },
        ],
      },

      {
        heading: "Better Experience for Customers",
        paragraphs: [
          "Waiting becomes much easier when customers know exactly what's happening with their order.",
          "Real-time visibility reduces uncertainty, improves communication, and creates a smoother dining experience from start to finish.",
        ],
      },

      {
        heading: "Improved Operational Efficiency",
        paragraphs: [
          "Order tracking isn't just beneficial for guests—it also helps restaurant teams.",
          "By reducing status inquiries and improving transparency, staff can focus more on service and hospitality instead of manually providing order updates.",
        ],
      },

      {
        heading: "Built for Modern Restaurant Operations",
        paragraphs: [
          "The new tracking system works seamlessly alongside SwaadSetu's QR ordering and digital restaurant management tools.",
          "Orders move through the workflow in real time, ensuring guests and staff remain aligned throughout the process.",
        ],
      },

      {
        heading: "Available Now",
        paragraphs: [
          "Real-Time Order Tracking is now available for all SwaadSetu partner restaurants.",
          "This update is part of our ongoing mission to simplify restaurant operations while delivering better experiences for both businesses and customers.",
          "More exciting updates are on the way.",
        ],
      },
    ],
  },
];