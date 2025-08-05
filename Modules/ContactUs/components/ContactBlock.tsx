// components/Contact/ContactBlock.tsx
interface ContactBlockProps {
  title: string;
  labels?: [string, string];
  left: React.ReactNode;
  right: React.ReactNode;
  note?: string;
}

export default function ContactBlock({
  title,
  labels,
  left,
  right,
  note,
}: ContactBlockProps) {
  return (
    <div className="mb-8 mx-3 md:mx-6 lg:mx-auto lg:w-[700px] mt-10">
      <h1 className=" text-[45px]">{title}</h1>
      {labels && (
        <div className="mb-2 mt-2 hidden md:flex md:flex-row justify-between gap-4 font-gro">
          <p className="caption flex-1 text-medium-gray">{labels[0]}</p>
          <p className="caption flex-1 text-medium-gray">{labels[1]}</p>
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-4 justify-between font-gro">
        <div className="flex-1">
          {labels && (
            <p className="md:hidden caption text-medium-gray mt-2">
              {labels[0]}
            </p>
          )}
          {left}
        </div>
        <div className="flex-1">
          {labels && (
            <p className="md:hidden caption text-medium-gray mt-2">
              {labels[1]}
            </p>
          )}
          {right}
        </div>
      </div>
      {note && <p className="mt-2 italic">{note}</p>}
    </div>
  );
}
