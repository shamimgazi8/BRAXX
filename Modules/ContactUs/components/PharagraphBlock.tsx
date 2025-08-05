// components/Contact/ParagraphBlock.tsx
interface ParagraphBlockProps {
  title: string;
  links: { text: string; href: string }[];
}

export default function ParagraphBlock({ title, links }: ParagraphBlockProps) {
  return (
    <div className="mb-8 mx-3 md:mx-6 lg:mx-auto lg:w-[700px]">
      <div className="flex flex-col gap-4 items-start">
        <h3 className=" text-[45px]">{title}</h3>
        <div>
          {links.map((link, index) => (
            <p key={index}>
              <a className="font-gro" href={link.href}>
                {link.text}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
