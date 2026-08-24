export default function IntroOverlay({ show }: { show: boolean }) {
    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${
                show ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
        >
            <img
                src="/logo.jpg"
                alt="RJAYNA"
                className={`w-32 transition-all duration-700 sm:w-40 ${
                    show ? "scale-100 opacity-100" : "scale-90 opacity-0"
                }`}
            />
        </div>
    );
}