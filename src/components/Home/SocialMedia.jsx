import React from "react";
import { companies } from "../../Data/Mockdata";
import { Facebook, Instagram, Linkedin, Link2, Youtube } from "lucide-react";

const socialIcons = {
  facebook: <Facebook size={23} color="white" />,
  instagram: <Instagram size={23} color="white" />,
  linkedin: <Linkedin size={23} color="white" />,
  tiktok: <Link2 size={23} color="white" />,
  youtube: <Youtube size={23} color="white" />,
};

const socialColors = {
  facebook: "#1877F2",
  instagram: "#E1306C",
  linkedin: "#0A66C2",
  tiktok: "#000000",
  youtube: "#FF0000",
};

const SocialMedia = () => {
  return (
    <section className="w-full md:max-w-6xl mx-auto px-4 py-17">
      <div className="text-center py-13">
        <h1 className="text-3xl md:text-4xl font-bold">
  Our Social {" "}
  <span className="inline-block">
    Media {""}
  </span>{" "}
  Channels
</h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white rounded-2xl w-full shadow-md border-1 border-black/30 p-8 flex flex-col items-center justify-between hover:shadow-xl transition"
          >
            <h2 className="text-md md:text-lg font-semibold mb-4 text-center">
              {company.name}
            </h2>

            <div className="flex gap-2 mx-auto flex-wrap justify-center">
              {company.socials.map((social) => (
                <button
                  key={social}
                  style={{ backgroundColor: socialColors[social] }}
                  className="rounded-full p-4 shadow hover:scale-110 hover:-rotate-3 hover:transition-all duration-300 cursor-pointer transition flex items-center justify-center"
                  aria-label={social}
                >
                  {socialIcons[social]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;
