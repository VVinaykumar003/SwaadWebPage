import { Mail, Phone } from "lucide-react";

interface ContactStripProps {
  email?: string;
  phone?: string;
  className?: string;
}

export function ContactStrip({ 
  email = "connect@swaadsetu.com", 
  phone = "+91 9407655717",
  className = "bg-amber-400" 
}: ContactStripProps) {
  return (
    <div className={`bg-white/70 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/50 shadow-xl max-w-2xl mx-auto ${className}`}>
      <p className="text-sm lg:text-base text-[#111111]/90 font-medium mb-3 flex items-center justify-center gap-2">
        📞 Get in touch instantly
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 text-black">
        {/* Email Button */}
        <a
          href={`mailto:${email}`}
          className="group flex items-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100 border hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Mail className="w-4 h-4 text-orange-600 group-hover:scale-110 transition-all duration-200" />
          <span className="font-semibold text-sm lg:text-base hover:text-orange-700 transition-colors">
            {email}
          </span>
        </a>
        
        {/* Phone Button */}
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="group flex items-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 border hover:border-emerald-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-all duration-200" />
          <span className="font-semibold text-sm lg:text-base hover:text-emerald-700 transition-colors">
            {phone}
          </span>
        </a>
      </div>
    </div>
  );
}
