import { useState } from "react";
import { motion } from "framer-motion";

interface Item {
  id: string;
  name: string;
  price: number;
}

export default function FeaturePlayground({ featureTitle }: { featureTitle: string }) {
  const items: Item[] = [
    { id: "m1", name: "Paneer Tikka", price: 180 },
    { id: "m2", name: "Masala Dosa", price: 120 },
    { id: "m3", name: "Gulab Jamun (2)", price: 60 },
  ];

  const [cart, setCart] = useState<Record<string, number>>({});

  function add(id: string) {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  }
  function remove(id: string) {
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  }

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const it = items.find((x) => x.id === id)!;
    return sum + it.price * qty;
  }, 0);

  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 bg-base-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-base-content/70">Mini playground — {featureTitle}</div>
        <div className="text-xs text-base-content/50">Simulated demo</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <ul className="space-y-2">
            {items.map((it) => (
              <li key={it.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-xs text-base-content/60">₹{it.price}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-xs btn-ghost" onClick={() => remove(it.id)}>-</button>
                  <div className="w-6 text-center">{cart[it.id] || 0}</div>
                  <button className="btn btn-xs" onClick={() => add(it.id)}>Add</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-base-100 rounded-md p-3">
          <div className="text-sm font-semibold mb-2">Order</div>
          <div className="text-sm text-base-content/60 mb-2">Items: {Object.values(cart).reduce((a,b)=>a+b,0)}</div>
          <div className="text-lg font-bold">Total ₹{total}</div>
          <button className="btn btn-sm btn-block mt-4" onClick={() => alert('Demo order placed (simulated)')}>Place Order</button>
        </div>
      </div>
    </motion.div>
  );
}
