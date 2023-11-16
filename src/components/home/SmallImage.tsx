"use client";

interface Props {
  image: string;
  classNameName: string;
}

export default function SmallImage({ image, classNameName }: Props) {
  return <img src={image} className={classNameName} />;
}
