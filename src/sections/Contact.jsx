import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question or project idea?  
    Let’s connect and chat!`;

  const items = [
    "Made with passion by Webminds",
    "Crafted for excellence by Webminds",
    "Designed & built by Webminds",
    "Powered by Webminds innovation",
    "Webminds — shaping digital futures",
  ];

  const marqueeLink = "https://webmindsdesigns.com/";

  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Crafting Your Ideas into Reality"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="mailto:rushenibotheju@gmail.com"
                className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl hover:underline"
              >
                rushenibotheju@gmail.com
              </a>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <a
                href="tel:+94742431891"
                className="text-xl lowercase md:text-2xl lg:text-3xl hover:underline"
              >
                +94 742 431 891
              </a>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-xs leading-loose tracking-widest uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                  >
                    {"{ "}
                    {social.name}
                    {" }"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee wrapped in single clickable link */}
      <a
        href={marqueeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <Marquee
          items={items}
          className="text-white bg-transparent cursor-pointer"
        />
      </a>
    </section>
  );
};

export default Contact;
