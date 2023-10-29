interface SectionTitleProps{
  title: string
}

export default function SectionTitle({title}: SectionTitleProps) {
  return <h1 className="mb-3 text-4xl text-black">{ title }</h1>
}