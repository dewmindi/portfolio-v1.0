"use client";

export default function WhatsAppFloat() {
  const phone = "94767931405"; // +94 76 793 1405

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-16 right-16 z-[200] group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[11px] font-bold tracking-widest uppercase text-white bg-black/80 px-3 py-1.5 rounded whitespace-nowrap">
        Chat with me
      </span>

      {/* Button */}
      <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-transform duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.823.737 5.474 2.027 7.775L0 32l8.476-2.003A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.764-1.848l-.485-.288-5.03 1.189 1.215-4.898-.317-.503A13.268 13.268 0 0 1 2.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.273-9.97c-.398-.199-2.354-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.031 1.294-1.264 1.56-.233.266-.466.299-.864.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.233-.398-.025-.613.175-.811.179-.178.398-.466.597-.699.2-.233.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.2-.898-2.165-1.231-2.963-.324-.778-.653-.673-.898-.685l-.765-.013c-.266 0-.698.1-1.064.499-.366.398-1.397 1.365-1.397 3.33 0 1.964 1.43 3.862 1.629 4.128.2.266 2.814 4.297 6.818 6.027.953.411 1.696.657 2.275.841.956.305 1.826.262 2.515.159.767-.114 2.354-.963 2.687-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.764-.465z" />
        </svg>
      </div>
    </a>
  );
}
