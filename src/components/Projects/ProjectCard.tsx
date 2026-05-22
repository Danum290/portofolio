import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  return (
    <div className="bg-secondary border-border hover:border-accent group flex flex-col overflow-hidden rounded-[20px] border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={cover || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'}
          fill
          alt={title}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
        
        {type && (
          <span className="absolute top-4 left-4 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold tracking-wider text-black backdrop-blur-md uppercase">
            {type}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-1 flex-col">
          <h3 className="text-neutral mb-3 text-xl font-bold group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-tertiary-content line-clamp-3 text-sm leading-relaxed">
            {shortDescription}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
