import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  ghost: 'button-ghost',
}

function Button({ children, href, variant = 'primary', showArrow = false, ...props }) {
  const className = `button ${variants[variant] ?? variants.primary}`
  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />}
    </>
  )

  if (href) {
    return <a className={className} href={href} {...props}>{content}</a>
  }

  return <button className={className} type="button" {...props}>{content}</button>
}

export default Button