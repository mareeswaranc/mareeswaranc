"use client";

import { motion } from "framer-motion";
import {
  FaDocker, FaAws, FaCloud, FaServer,
} from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

const icons = [
  { Icon: SiKubernetes, x: "10%", y: "20%", size: 28, delay: 0, dur: 6 },
  { Icon: FaDocker, x: "85%", y: "15%", size: 24, delay: 1, dur: 7 },
  { Icon: SiTerraform, x: "15%", y: "80%", size: 22, delay: 2, dur: 8 },
  { Icon: FaAws, x: "80%", y: "75%", size: 26, delay: 0.5, dur: 5.5 },
  { Icon: FaCloud, x: "50%", y: "10%", size: 20, delay: 1.5, dur: 7.5 },
  { Icon: FaServer, x: "50%", y: "85%", size: 22, delay: 3, dur: 6.5 },
];

export function FloatingElements() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden lg:block">
      {icons.map(({ Icon, x, y, size, delay, dur }, i) => (
        <motion.div
          key={i}
          className="absolute text-muted-foreground/[0.07]"
          style={{ left: x, top: y }}
          animate={{ y: [0, -16, 0] }}
          transition={{
            duration: dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}
