import Image from "next/image";

export default function Logo(props: { small?: boolean }) {
  if (props.small) {
    return <Image src="/small-logo.png" alt="Logo" width={32} height={32} />;
  }
  return <Image src="/logo.png" alt="Logo" width={300} height={60} />;
}
