const WHATSAPP_NUMBER = '919028760011';
const DISPLAY_NUMBER = '+91 9028760011';

const WhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I would like to know more about your coworking spaces.')}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${DISPLAY_NUMBER}`}
      className="whatsapp-float fixed bottom-5 right-4 sm:right-6 z-[60] flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full pl-3 pr-4 py-2.5 shadow-xl"
    >
      <span className="whatsapp-pulse relative flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium opacity-90">Chat on WhatsApp</span>
        <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{DISPLAY_NUMBER}</span>
      </span>
    </a>
  );
};

export default WhatsAppButton;
