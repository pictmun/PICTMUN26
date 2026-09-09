"use client";

import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import Link from "next/link";

type RegistrationModalProps = {
  onClose: () => void;
};

export default function RegistrationModal({
  onClose,
}: RegistrationModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4">
      <div
        className="absolute inset-0 bg-deep-emerald/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl md:rounded-[2rem] border border-antique-gold/30 bg-rich-emerald shadow-[0_30px_120px_rgba(0,0,0,0.65)] p-6 md:p-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent opacity-80" />
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-antique-gold to-transparent opacity-50" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-antique-gold to-transparent opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-antique-gold to-transparent opacity-80" />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 md:right-5 md:top-5 rounded-full border border-antique-gold/30 bg-deep-emerald/40 p-2 text-warm-ivory/85 transition hover:bg-deep-wine/30 hover:text-warm-ivory z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center text-center relative z-10">
          <p className="mb-2 text-sm uppercase tracking-[0.35em] text-antique-gold font-montserrat">
            PICTMUN&apos;26
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-warm-ivory font-playfair mb-8">
            Choose Your Registration
          </h2>

          <div className="flex flex-col w-full gap-4 sm:gap-6 mt-4">
            <Link
              href="https://forms.gle/LeyASLKr2dzbspxa9"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-deep-emerald border border-antique-gold/40 px-6 py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(166,124,82,0.3)] hover:border-antique-gold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-antique-gold/0 via-antique-gold/30 to-antique-gold/0 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              <div className="flex flex-col items-start text-left relative z-10">
                <span className="text-lg md:text-xl font-semibold text-warm-ivory font-playfair">
                  General Registration
                </span>
                <span className="text-xs md:text-sm text-warm-ivory/70 font-montserrat mt-1">
                  For Delegates
                </span>
              </div>
              <ExternalLink className="h-5 w-5 text-antique-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            </Link>

            {/* View Brochure - Prepared for /brochure/pictmun26.pdf */}
            <button
              type="button"
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-xl bg-deep-emerald border border-antique-gold/40 px-6 py-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(166,124,82,0.3)] hover:border-antique-gold text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-antique-gold/0 via-antique-gold/30 to-antique-gold/0 translate-x-[-100%] transition-transform duration-700 group-hover:translate-x-[100%]" />
              <div className="flex flex-col items-start text-left relative z-10">
                <span className="text-lg md:text-xl font-semibold text-warm-ivory font-playfair">
                  View Brochure
                </span>
                <span className="text-xs md:text-sm text-warm-ivory/70 font-montserrat mt-1">
                  PICT MUN 2026 Brochure
                </span>
              </div>
              <ExternalLink className="h-5 w-5 text-antique-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
