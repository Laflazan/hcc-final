import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

const NAVBAR_LOGO_LINK_CLASS =
  "group flex h-11 w-[120px] shrink-0 items-center overflow-visible";
const NAVBAR_LOGO_WRAPPER_CLASS = "relative h-[52px] w-[120px] shrink-0";
const NAVBAR_LOGO_IMAGE_CLASS = "object-contain object-left";

export const NavbarLogo = memo(function NavbarLogo({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link href={href} className={NAVBAR_LOGO_LINK_CLASS} aria-label={alt}>
      <span className={NAVBAR_LOGO_WRAPPER_CLASS}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="120px"
          className={NAVBAR_LOGO_IMAGE_CLASS}
          priority
        />
      </span>
    </Link>
  );
});
