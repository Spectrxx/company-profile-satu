const HeroInfo = () => {
  return (
    <div
      className="rounded-b-lg sm:absolute bottom-0 left-0 sm:bg-[#2e82ff]/20 sm:backdrop-blur-sm sm:text-white 
    grid sm:grid-cols-3 grid-cols-2 w-full text-center h-38 items-center bg-transparent text-black sm:mt-0 mt-12 sm:mb-0 mb-12 sm:gap-0 gap-7"
    >
      <div>
        <p className="md:text-5xl text-4xl font-bold">20+</p>
        <h2 className="mt-3 md:text-xl text-lg">Proyek Selesai</h2>
      </div>
      <div>
        <p className="md:text-5xl text-4xl font-bold">10+</p>
        <h2 className="mt-3 md:text-xl text-lg">Mitra</h2>
      </div>
      <div>
        <p className="md:text-5xl text-4xl font-bold">80+</p>
        <h2 className="mt-3 md:text-xl text-lg">Karyawan</h2>
      </div>
    </div>
  );
};

export default HeroInfo;
