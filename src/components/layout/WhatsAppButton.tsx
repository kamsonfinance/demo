interface Props { href: string; ariaLabel: string }
export default function WhatsAppButton({ href, ariaLabel }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}
       className="hidden md:flex fixed bottom-7 right-7 z-40 w-13 h-13 bg-[#25D366] rounded-full
                  items-center justify-center text-[22px] shadow-[0_4px_20px_rgba(37,211,102,0.45)]
                  hover:scale-105 hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)]
                  transition-all duration-200"
       style={{ width: '52px', height: '52px' }}>
      💬
    </a>
  )
}
