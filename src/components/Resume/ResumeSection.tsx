import { educationData, experienceData, certifications } from '@/appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import { Timer, StarIcon, CheckIcon } from '../../utils/icons'
import Image from 'next/image'

const ResumeSection = () => {
  return (
    <section id="resume" className="my-14 md:my-20">
      <div className="flex flex-col gap-16">
        {/* Experience Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="text-accent flex size-6 items-center justify-center md:size-8">
              <Image src={Timer} alt="Experience" className="size-full invert grayscale brightness-200" />
            </div>
            <SectionHeading title="// Work Experience" className="!my-0" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="bg-secondary border-border hover:border-accent group relative overflow-hidden rounded-[20px] border p-6 transition-all duration-300">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 size-24 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
                <div className="relative z-10">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h4 className="text-accent text-lg font-bold md:text-xl">{exp.role}</h4>
                    <span className="text-tertiary-content rounded-full bg-primary/50 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      {exp.period}
                    </span>
                  </div>
                  <h5 className="text-neutral mt-2 mb-4 text-base font-semibold italic">
                    {exp.company}
                  </h5>
                  <div className="bg-primary/40 rounded-xl border border-white/5 p-4 backdrop-blur-md">
                    <p className="text-primary-content text-sm leading-relaxed md:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <StarIcon className="text-accent size-6 md:size-8" />
            <SectionHeading title="// Education" className="!my-0" />
          </div>
          <div className="grid grid-cols-1 gap-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="bg-secondary border-border hover:border-accent group relative overflow-hidden rounded-[20px] border p-6 transition-all duration-300">
                <div className="absolute top-0 right-0 -mr-4 -mt-4 size-24 rounded-full bg-accent/5 blur-2xl transition-all duration-500 group-hover:bg-accent/10" />
                <div className="relative z-10">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <h4 className="text-accent text-lg font-bold md:text-xl">{edu.institution}</h4>
                    <span className="text-tertiary-content rounded-full bg-primary/50 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      {edu.period}
                    </span>
                  </div>
                  <h5 className="text-neutral mt-2 mb-3 text-base font-semibold">{edu.degree}</h5>
                  <div className="bg-primary/40 rounded-xl border border-white/5 p-4 backdrop-blur-md">
                    <p className="text-primary-content text-sm leading-relaxed md:text-base">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <CheckIcon className="text-accent size-6 md:size-8" />
            <SectionHeading title="// Certifications" className="!my-0" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-secondary border-border hover:border-accent group relative overflow-hidden rounded-[16px] border p-5 transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h4 className="text-accent text-base font-bold leading-snug md:text-lg">
                      {cert.name}
                    </h4>
                    <div className="flex items-center gap-4">
                      <span className="text-neutral text-sm font-medium">{cert.issuer}</span>
                      <span className="text-tertiary-content text-xs font-semibold uppercase tracking-wider">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
