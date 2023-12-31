import Link from 'next/link'
import clsx from 'clsx'

export function Button({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl bg-[#ed0282] p-4 text-base font-semibold text-white hover:bg-[#f14965] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70',
    className
  )

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      {...props}
    />
  ) : (
    <button className={className} {...props} />
  )
}
