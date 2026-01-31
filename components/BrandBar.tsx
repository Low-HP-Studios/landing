export default function BrandBar() {
  return (
    <header className="w-full flex items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src="/brand/logo.svg" alt="Low HP Studios logo" className="h-10 w-10" />
        <div className="leading-tight">
          <p className="text-text-primary text-2xl sm:text-3xl font-logo tracking-tight">
            Low Hp Studio
          </p>
        </div>
      </div>
      <p className="text-text-muted text-sm sm:text-base text-right">
        Building in the open. More soon.
      </p>
    </header>
  );
}
