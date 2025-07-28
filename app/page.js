import React from "react";
import Image from "next/image";
import DataImage from "@/public/data";
import HeroInfo from "./components/HeroInfo";
import Link from "next/link";
import * as motion from "motion/react-client";

const page = () => {
  return (
    <>
      {/* Title */}
      <motion.div
        className="py-20"
        initial={{ opacity: 0, y: 20, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="text-5xl/tight sm:text-center text-left">
          Solusi <span className="font-bold text-[#2e82ff]">Terbaik</span> untuk
          Kebutuhan <br />
          Digital <span className="font-bold text-[#2e82ff]">Anda</span>.
        </h1>
      </motion.div>
      {/* Title */}
      {/* Hero Image */}
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Image
            src={DataImage.Hero}
            alt="Hero Image"
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
          <HeroInfo />
        </motion.div>
      </div>
      {/* Hero Image */}
      {/* Layanan */}
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-24 gap-10"
        id="layanan"
      >
        <motion.div
          className="shadow-md rounded-2xl p-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <i className="ri-money-dollar-circle-fill ri-3x text-[#2e82ff]"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Harga Paling Kompetitif
          </p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis optio quo quisquam, nesciunt eum minus.
          </p>
        </motion.div>
        <motion.div
          className="shadow-md rounded-2xl p-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <i className="ri-service-fill ri-3x text-[#2e82ff]"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Evaluasi Secara Berkala
          </p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis optio quo quisquam, nesciunt eum minus.
          </p>
        </motion.div>
        <motion.div
          className="shadow-xl rounded-xl p-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <i className="ri-star-s-fill ri-3x text-[#2e82ff]"></i>
          <p className="font-semibold text-2xl/normal mb-2">
            Spesialis Dalam Website, Mobile & IoT
          </p>
          <p className="text-base/loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis optio quo quisquam, nesciunt eum minus.
          </p>
        </motion.div>
      </div>
      {/* Layanan */}
      {/* Proyek */}
      <div className="mt-24 mb-12" id="proyek">
        <motion.h1
          className="text-4xl/normal text-center font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Proyek Kami
        </motion.h1>
        <motion.p
          className="text-base/loose text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </motion.p>
        <div className="mt-18 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <motion.div
            className="shadow-xl p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek1}
              alt="Proyek Image"
              className="rounded-lg"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Landing Page</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, at?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-[#2e82ff] text-white text-center p-3 rounded-lg hover:bg-[#256af9] cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="shadow-xl p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek2}
              alt="Proyek Image"
              className="rounded-lg"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">
              Bimo Misadventures
            </h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, at?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-[#2e82ff] text-white text-center p-3 rounded-lg hover:bg-[#256af9] cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="shadow-xl p-4 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src={DataImage.Proyek3}
              alt="Proyek Image"
              className="rounded-lg"
            />
            <h1 className="mt-6 mb-3 text-2xl font-semibold">Shadcn UI</h1>
            <p className="text-base/loose">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, at?
            </p>
            <div className="mt-6 mb-3">
              <Link
                href={"#"}
                className="bg-[#2e82ff] text-white text-center p-3 rounded-lg hover:bg-[#256af9] cursor-pointer"
              >
                Lihat Website
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Proyek */}
      {/* Kontak */}
      <div
        className="mt-24 flex items-center justify-between md:flex-row flex-col md:gap-0 gap-4"
        id="kontak"
      >
        <h2 className="text-3xl font-bold">Spectrx.</h2>
        <div className="flex gap-10">
          <Link href={"#beranda"}>Beranda</Link>
          <Link href={"#layanan"}>Layanan</Link>
          <Link href={"#proyek"}>Proyek</Link>
        </div>
        <div>
          <Link href={""}>
            <i className="ri-youtube-fill ri-2x"></i>
          </Link>
          <Link href={""}>
            <i className="ri-reddit-fill ri-2x"></i>
          </Link>
          <Link href={""}>
            <i className="ri-instagram-fill ri-2x"></i>
          </Link>
          <Link href={""}>
            <i className="ri-twitter-fill ri-2x"></i>
          </Link>
        </div>
      </div>
      {/* Kontak */}
    </>
  );
};

export default page;
