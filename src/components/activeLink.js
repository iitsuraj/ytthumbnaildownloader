import Link from "next/link";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();

  let css = className || "";
  if (router.pathname === href || router.pathname === `${href}/`) {
    css = `${css} text-primary`;
  }
  return (
    <Link href={href}>
      <a className={css}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
