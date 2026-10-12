import type { FC, SVGProps } from "react"

export const Tideauth: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" {...props}>
      <path d="M12 22 V18 A12 12 0 0 1 36 18 V22" fill="none" stroke="#D1ADEC" strokeWidth="4" />
      <rect x="4" y="20" width="40" height="24" rx="6" fill="#A275B0" />
      <rect x="12" y="26.5" width="24" height="4" rx="2" fill="#EFE7FC" />
      <rect x="16" y="33.5" width="16" height="4" rx="2" fill="#EFE7FC" />
    </svg>
  )
}