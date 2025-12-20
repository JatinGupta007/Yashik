export default function GrowthSection({pillars} ){
  return (
    <section className="py-16 px-16">
      <div className="text-center mb-8">
        <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
          <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
            OUR GROWTH
          </span>
        </div>
      </div>
      <div className="mx-auto">
        {/* Intro line */}
        <h2 className="text-center text-gray-900 font-semibold  text-4xl max-w-3xl mx-auto mb-16">
          Our growth system is built on 6 essential pillars that drive patient
          acquisition.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {pillars.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}