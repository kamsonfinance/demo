'use client'
interface Props {
  phoneHref: string; whatsappHref: string; scheduleHref: string
  callLabel: string; whatsappLabel: string; scheduleLabel: string
}
export default function MobileActionBar({ phoneHref, whatsappHref, scheduleHref, callLabel, whatsappLabel, scheduleLabel }: Props) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A1630]
                    border-t border-white/[0.08] mobile-safe-bottom">
      <div className="grid grid-cols-3 divide-x divide-white/[0.08]">
        <a href={phoneHref}
           className="flex flex-col items-center gap-1 py-3 text-white/55 hover:text-white
                      hover:bg-white/5 transition-colors">
          <span className="text-[16px]">📞</span>
          <span className="font-sans text-[9px] font-semibold tracking-[0.5px]">{callLabel}</span>
        </a>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
           className="flex flex-col items-center gap-1 py-3 text-[#25D366]/70 hover:text-[#25D366]
                      hover:bg-white/5 transition-colors">
          <span className="text-[16px]">💬</span>
          <span className="font-sans text-[9px] font-semibold tracking-[0.5px]">{whatsappLabel}</span>
        </a>
        <a href={scheduleHref}
           className="flex flex-col items-center gap-1 py-3 text-white/55 hover:text-white
                      hover:bg-white/5 transition-colors">
          <span className="text-[16px]">📅</span>
          <span className="font-sans text-[9px] font-semibold tracking-[0.5px]">{scheduleLabel}</span>
        </a>
      </div>
    </div>
  )
}
