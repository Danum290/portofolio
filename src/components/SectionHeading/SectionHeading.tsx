interface SectionHeadingTypes {
  title: string
  subtitle?: string
  className?: string
}

const SectionHeading: React.FC<SectionHeadingTypes> = ({ title, subtitle, className }) => {
  return (
    <div className={`group flex flex-col ${className}`}>
      <div className="flex items-center gap-4">
        <h2 className="text-primary-content text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h2>
        <div className="bg-accent h-[2px] w-12 transition-all duration-500 group-hover:w-20" />
      </div>
      {subtitle && (
        <p className="text-tertiary-content mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
