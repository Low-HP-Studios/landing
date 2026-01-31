export default function BrandBar() {
  return (
    <header className="w-full flex flex-col items-center md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 md:gap-6">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <img src="/brand/logo.svg" alt="Low HP Studios logo" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 shrink-0" />
        <p className="text-text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl font-logo tracking-tight whitespace-nowrap">
          Low Hp Studio
        </p>
      </div>
      <p className="text-text-muted text-xs sm:text-sm md:text-base">
        Building in the open. More soon.
      </p>
    </header>
  );
}
