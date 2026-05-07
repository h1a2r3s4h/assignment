type Props = {
  title: string
}

export default function SettingsHeader({
  title,
}: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">
        {title}
      </h1>
    </div>
  )
}