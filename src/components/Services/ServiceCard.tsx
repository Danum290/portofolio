import Image from 'next/image'
import * as Icons from '@/utils/icons'

interface ServiceCardTypes {
  iconName: string
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, iconName }) => {
  const Icon = (Icons as Record<string, unknown>)[iconName]
  const isComponent = typeof Icon === 'function'

  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
      {isComponent ? (
        <div className="my-1 size-14 text-accent">
          <Icon className="size-full" />
        </div>
      ) : Icon ? (
        <Image src={Icon} alt={title} className="my-1 size-14" />
      ) : null}
      <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard
