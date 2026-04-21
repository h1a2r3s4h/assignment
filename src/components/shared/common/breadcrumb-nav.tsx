type Props = {
  items?: string[];
};

export default function BreadcrumbNav({ items = [] }: Props) {
  return (
    <div className="text-sm text-gray-500">
      {items.map((item, index) => (
        <span key={index}>
          {item}
          {index < items.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}