function HomeGrid({
  alternate = false,
  compact = false,
  image,
  component,
  title,
  subtitle,
  button,
  background = "bg-transparent",
}) {
  return (
    <div
      className={`grid ${compact ? "sm:px-28" : "sm:px-8"} px-4 sm:grid-cols-2 gap-12 py-8 sm:py-16 grid-cols-1 ${background}`}
    >
      <div
        className={`h-full w-full ${image && "bg-[#eef0f3]"} rounded-[60px] ${alternate ? "sm:order-1 order-2" : "sm:order-2 order-1"}`}
      >
        {image && (
          <img
            src={image}
            className="object-cover rounded-[60px] h-full w-full"
          />
        )}
        {component && component}
      </div>
      <div
        className={`place-content-center ${alternate ? "order-2" : "order-1"}`}
      >
        <div className="flex flex-col max-w-xl gap-y-6">
          <h1 className="sm:text-4xl text-4xl font-medium">{title}</h1>
          <p className="text-black/60">{subtitle}</p>
          <button className="btn-primary-l bg-[#0a0b0d] hover:bg-[#383839] w-fit">
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeGrid;
