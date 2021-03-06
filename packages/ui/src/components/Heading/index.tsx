import React, { HTMLAttributes } from 'react'

export type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  variant: 'h1' | 'h2' | 'h3'
  as: 'h1' | 'h2' | 'h3' | 'strong'
  label?: string
}

export const Heading: React.FC<HeadingProps> = ({
  variant,
  as,
  label,
  className = '',
  children,
  ...rest
}) => {
  if (as === 'h1') {
    return (
      <h1 className={`heading-${variant} ${className}`} {...rest}>
        {label || children}
      </h1>
    )
  }

  if (as === 'h2') {
    return (
      <h2 className={`heading-${variant} ${className}`} {...rest}>
        {label || children}
      </h2>
    )
  }

  if (as === 'h3') {
    return (
      <h3 className={`heading-${variant} ${className}`} {...rest}>
        {label || children}
      </h3>
    )
  }

  if (as === 'strong') {
    return (
      <strong className={`heading-${variant} ${className}`} {...rest}>
        {label || children}
      </strong>
    )
  }

  return (
    <h1
      className={`heading-${variant} ${className} ${className}`}
      {...rest}
    >
      {label || children}
    </h1>
  )
}
