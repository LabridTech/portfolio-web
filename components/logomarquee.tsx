import Marquee from "react-fast-marquee";
import Image from "next/image";
import luq from "@/public/luq.png";
import suf from "@/public/suf.png";
import matr from "@/public/matr.png";
import fit from "@/public/fit.png";
import toak from "@/public/toak.jpg";
import worksupplies from "@/public/worksupplies.jpg";
import sl from "@/public/sl.jpg";
import alpha from "@/public/alpha.jpg";
import anclinc from "@/public/anclinc.jpg";
import access from "@/public/access.jpg";
import arzepak from "@/public/arz-epak.jpg";

export default function Logomarquee() {
  return (
    <Marquee play={true} speed={100}>
      <Image
        src={luq}
        alt="luq"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />
      <Image
        src={suf}
        alt="suf"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={matr}
        alt="matr"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />


      <Image
        src={fit}
        alt="fit"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={toak}
        alt="toak"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={worksupplies}
        alt="worksupplies"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={sl}
        alt="sl"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={alpha}
        alt="alpha"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={anclinc}
        alt="anclinc"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={access}
        alt="access"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />

      <Image
        src={arzepak}
        alt="arzepak"
        width={100}
        height={100}
        className="w-20 h-20 mx-8 rounded-full"
      />
    </Marquee>
  );
}
