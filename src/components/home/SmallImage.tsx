"use client";

interface Props {
  image: string;
  className: string;
}

export default function SmallImage({ image, className }: Props) {
  return <img src={image} className={className} />;
}
