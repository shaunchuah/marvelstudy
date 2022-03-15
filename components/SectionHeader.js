export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col">
      <div className="lg:w-1/2 w-full mb-6">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          {title}
        </h1>
        <div className="h-1 w-24 bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
}

