import { footerLinks } from '@/appData'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-primary relative overflow-hidden border-t border-white/5 px-4 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex items-center gap-3">
            <Logo width={32} height={26} />
            <span className="text-primary-content text-xl font-bold tracking-tight">Danu Mahesa</span>
          </div>
          <p className="text-tertiary-content max-w-sm text-center text-sm leading-relaxed md:text-left">
            Backend Developer & AI/ML Engineer crafting high-performance systems and intelligent solutions.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex flex-wrap justify-center gap-6 md:justify-end">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-tertiary-content hover:text-accent text-sm font-medium transition-colors duration-300">
                {link.title}
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href="mailto:danu.mahesa1933@gmail.com"
              className="text-accent text-sm font-semibold hover:underline">
              danu.mahesa1933@gmail.com
            </a>
            <p className="text-tertiary-content text-xs">Based in Bandung, Indonesia</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-[1200px] border-t border-white/5 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-tertiary-content text-xs">
            © {new Date().getFullYear()} — <span className="text-primary-content font-medium">Danu Mahesa</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="bg-accent size-1.5 rounded-full animate-pulse" />
            <span className="text-tertiary-content text-[10px] font-medium uppercase tracking-[0.2em]">Available for projects</span>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="bg-accent/10 absolute -right-24 -bottom-24 z-0 size-64 rounded-full blur-[100px]" />
      <div className="bg-primary-focus/5 absolute -left-24 -top-24 z-0 size-64 rounded-full blur-[100px]" />
    </footer>
  )
}

export default Footer
