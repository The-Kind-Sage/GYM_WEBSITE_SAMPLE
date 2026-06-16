import maleImg from "@/assets/athlete-male.jpg";
import femaleImg from "@/assets/athlete-female.jpg";

export function AthleteSplit() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="container-x">
        <div className="reveal mb-12 text-center">
          <h2 className="text-4xl text-white sm:text-5xl">Strength Has No Gender</h2>
        </div>
      </div>

      <div className="group/split flex h-[70vh] min-h-[480px] w-full flex-col md:flex-row">
        {/* Male */}
        <div className="relative flex-1 overflow-hidden border-gold transition-all duration-500 ease-in-out md:hover:flex-[1.85] md:border-r-2">
          <img
            src={maleImg}
            alt="Male athlete training at Iron Peak"
            loading="lazy"
            width={1080}
            height={1920}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <p className="font-accent text-2xl italic text-gold lg:text-3xl">
              "Train harder. Recover smarter. Rise higher."
            </p>
          </div>
        </div>

        {/* Female */}
        <div className="relative flex-1 overflow-hidden transition-all duration-500 ease-in-out md:hover:flex-[1.85]">
          <img
            src={femaleImg}
            alt="Female athlete training at Iron Peak"
            loading="lazy"
            width={1080}
            height={1920}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <p className="font-accent text-2xl italic text-gold lg:text-3xl">
              "Strong is not a size. It is a standard."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
