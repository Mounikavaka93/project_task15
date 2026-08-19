import { FaWhatsapp } from 'react-icons/fa'

const message = encodeURIComponent("Hi Wanderly, I'd like help planning a trip.")

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/14155550192?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
