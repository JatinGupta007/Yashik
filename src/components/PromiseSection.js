import Image from "next/image";
import { FiTrendingUp } from "react-icons/fi";

export default function PromiseSection({ data }) {
  return (
    <section className="py-16 px-6 md:px-8 lg:px-16 ">
      <div className="mx-auto flex flex-col items-center">
        <div className="text-center mb-7">
          <div className="inline-block bg-white rounded-full px-8 py-3 shadow-sm border border-gray-200">
            <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">
              {data.subtitle}
            </span>
          </div>
        </div>

        <h1 className="hidden md:block text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12 leading-tight">
          {data.title.split(" ").slice(0, 6).join(" ")}
          <br className="hidden md:block" />
          {data.title.split(" ").slice(6, data.title.length).join(" ")}
        </h1>
        <h1 className="text-2xl md:hidden font-bold text-center mb-12">{data.title}</h1>

        <div className="flex flex-col md:flex-row gap-7">
          <div className="space-y-8">
            {data.leftPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:w-78 p-7 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D0DFFE] rounded-2xl flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {point.desc}
                </h3>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-black via-gray-900 to-blue-500">
              <Image
                src={data.image}
                alt="Happy customer"
                className="h-full"
                width={600}
                height={500}
              />
            </div>

            {/* Floating ROI Card */}
            <div className="absolute bottom-1 left-18 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <FiTrendingUp className="text-blue-600" size={20} />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  ROI Rates
                </span>
              </div>
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">27,127</span>
                <span className="text-blue-600 text-sm font-semibold bg-blue-100 px-2 py-1 rounded">
                  ↑ 12%
                </span>
                <span className="text-gray-500 text-sm">vs last years</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <span className="mr-2">🕐</span>
                <span>Updated 1 month ago</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {data.rightPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl md:w-78 p-7 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D0DFFE] rounded-2xl flex items-center justify-center mb-6">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {point.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-10">
          <div className="inline-block bg-white rounded-full px-8 py-4 shadow-lg border border-gray-200">
            <span className="text-gray-700 text-lg">
              See How Our System Works.{" "}
              <a
                href="#"
                className="font-bold text-gray-900 underline hover:text-blue-600 transition-colors"
              >
                Try It Out
              </a>
            </span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
