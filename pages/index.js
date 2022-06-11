import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 1 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.4 } },
        }}
      >
        <h1>Welcome to our Blog.</h1>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 1 },
          visible: { scale: 1, opacity: 1, transition: { delay: 0.4 } },
        }}
      >
        <p>Start Your Reading Journey.</p>
      </motion.div>

      <Link href={"/posts"}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.2, opacity: 1 },
            visible: { scale: 1, opacity: 1, transition: { delay: 0.4 } },
          }}
        >
          <button type="button" class="btn btn-info">
            Explore
          </button>
        </motion.div>
      </Link>
    </div>
  );
}
