import Image from "next/image";

const items = [
  {
    id: 1,
    src: "/images/projectcases/1.png",
    alt: "project",
    title: "手机银行",
    description:
      "这是一个热情勇敢细致严谨的人这是一个热情勇敢细致严谨的人这热情勇敢细致严谨的人这是一个热情勇敢细致严谨的人人这是一个热情勇敢细致这是一个热情勇敢细致严谨的人这是一个热情勇敢细致严谨的人严这是一个热情勇敢细致严谨的人谨的人",
  },
  {
    id: 2,
    src: "/images/projectcases/2.png",
    alt: "project",
    title: "银行",
    description: "这是一个热情勇敢细致严谨的人",
  },
  {
    id: 3,
    src: "/images/projectcases/3.png",
    alt: "project",
    title: "手机银行",
    description: "这是一个热情勇敢细致严谨的人",
  },
  {
    id: 4,
    src: "/images/projectcases/4.png",
    alt: "project",
    title: "手机银行",
    description: "这是一个热情勇敢细致严谨的人",
  },
  {
    id: 5,
    src: "/images/projectcases/5.png",
    alt: "project",
    title: "事故后行",
    description: "这是一个热情勇敢细致严谨的人",
  },
  {
    id: 6,
    src: "/images/projectcases/6.png",
    alt: "project",
    title: "手术",
    description: "这是一个热情勇敢细致严谨的人",
  },
];

interface Item {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface CardProps {
  item: Item;
}

export default function HoverCard() {
  return (
    <div className="hoverContainer">
      {items.map((item: Item) => (
        <Card
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}

const Card = ({ item }: CardProps) => {
  console.log(item.src);
  return (
    <div className="hovercard">
      <div className="imagebox">
        <Image
          src={item.src}
          alt="avatar"
          fill
        />
      </div>
      <p>{item.description}</p>
      <h2>{item.title}</h2>
    </div>
  );
};
