import React from 'react';

const HubZoneSection = () => {
  return (
    <section className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
            Arizona's Only HUBZone & SDVOSB Partner for Federal Contracts
          </h2>
          <p className="text-center text-gray-700">
            Better Direct stands out as the <strong>only HUBZone-certified, Service-Disabled Veteran-Owned Small Business (SDVOSB) in Arizona actively engaged in federal contracting</strong>. This unique dual status not only reflects our deep commitment to supporting economically underrepresented communities and veterans but also positions us as a trusted partner for federal agencies seeking to meet their HUBZone and SDVOSB procurement goals. Our unmatched combination of local workforce investment, veteran support, and IT expertise ensures that every contract we fulfill delivers both exceptional value and meaningful community impact.
          </p>
        </div>

        {/* Two column content */}
        <div className="bg-white rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* HUBZONE Column */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                HUBZONE
              </h3>
              <p className="text-gray-700 mb-4">
                Better Direct is a HUBZone-certified, Service-Disabled Veteran-Owned Small Business (SDVOSB) and a value-added IT reseller. HUBZone stands for Historically Underutilized Business Zone, a federal initiative aimed at revitalizing economically-challenged communities through job creation and workforce development.
              </p>
              <p className="text-gray-700 mb-4">
                To support this mission, the federal government offers HUBZone-certified businesses certain advantages in the procurement process, including preferred pricing and dedicated spending goals. While HUBZone companies are required to have at least 35% of their workforce residing in a designated HUBZone, Better Direct exceeds this standard by employing 50% from these communities. This commitment helps provide meaningful career opportunities in the IT industry for individuals who might not otherwise have access.
              </p>
            </div>

            {/* SDVOSB Column */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                SDVOSB
              </h3>
              <p className="text-gray-700 mb-4">
                The U.S. Government recognizes a moral responsibility to support veterans who become disabled during their military service by offering a range of benefits to help offset the economic and personal challenges they face. Among these benefits is assistance in entering the federal contracting space.
              </p>
              <p className="text-gray-700 mb-4">
                To support this goal, federal agencies are directed to more effectively implement Section 15(g) of the Small Business Act (15 U.S.C. 644(g)), which requires the President to set a government-wide goal of at least 3% participation in federal contracts for Service-Disabled Veteran-Owned Small Businesses (SDVOSBs). Additionally, Section 36 of the Act (15 U.S.C. 657f) authorizes contracting officers to set aside specific procurements exclusively for SDVOSBs, helping ensure greater access and opportunity within federal markets.
              </p>
              <p className="text-gray-700">
                To support this mission, the federal government offers HUBZone-certified businesses certain advantages in the procurement process, including preferred pricing and dedicated spending goals. While HUBZone companies are required to have at least 35% of their workforce residing in a designated HUBZone, Better Direct exceeds this standard by employing 50% from these communities. This commitment helps provide meaningful career opportunities in the IT industry for individuals who might not otherwise have access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubZoneSection;