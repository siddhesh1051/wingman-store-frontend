import React from "react";
import Image from "next/image";
import ChatIcon from "@/assets/ChatIcon.svg";
import ForeCastBg from "@/assets/ForecastBg.svg";

export default function Forecast() {
  return (
    <div className="col-span-2 relative overflow-hidden bg-[#15B79E] bg-gradient-to-br from-[#15B79E] to-[#086f61] p-6 rounded-3xl text-white">
      <div className="flex items-center gap-2 mb-6">
        <Image src={ChatIcon} alt="icon" width={12} height={12} />
        <p className="text-sm text-[#CCFBEF] uppercase tracking-wider">
          FORECASTS
        </p>
      </div>
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-6">
            <span className="text-5xl font-normal">+15%</span>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-sm  mt-2 pt-4 text-white">
            forecasted increase in your sales closed by the end of the current
            month
          </p>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <span className="text-5xl font-normal">+20%</span>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.5 5.25V11.25C22.5 11.4489 22.421 11.6397 22.2803 11.7803C22.1397 11.921 21.9489 12 21.75 12C21.5511 12 21.3603 11.921 21.2197 11.7803C21.079 11.6397 21 11.4489 21 11.25V7.06031L13.2806 14.7806C13.211 14.8504 13.1283 14.9057 13.0372 14.9434C12.9462 14.9812 12.8486 15.0006 12.75 15.0006C12.6514 15.0006 12.5538 14.9812 12.4628 14.9434C12.3717 14.9057 12.289 14.8504 12.2194 14.7806L9 11.5603L2.78062 17.7806C2.63989 17.9214 2.44902 18.0004 2.25 18.0004C2.05097 18.0004 1.8601 17.9214 1.71937 17.7806C1.57864 17.6399 1.49958 17.449 1.49958 17.25C1.49958 17.051 1.57864 16.8601 1.71937 16.7194L8.46937 9.96937C8.53903 9.89964 8.62174 9.84432 8.71279 9.80658C8.80384 9.76884 8.90144 9.74941 9 9.74941C9.09856 9.74941 9.19615 9.76884 9.2872 9.80658C9.37825 9.84432 9.46097 9.89964 9.53062 9.96937L12.75 13.1897L19.9397 6H15.75C15.5511 6 15.3603 5.92098 15.2197 5.78033C15.079 5.63968 15 5.44891 15 5.25C15 5.05109 15.079 4.86032 15.2197 4.71967C15.3603 4.57902 15.5511 4.5 15.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25Z"
                fill="white"
              />
            </svg>
          </div>
          <p className="text-white text-sm mt-2 pt-4">
            forecasted increase in consultations by the end of the current month
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <Image src={ForeCastBg} alt="bg" />
      </div>
    </div>
  );
}
