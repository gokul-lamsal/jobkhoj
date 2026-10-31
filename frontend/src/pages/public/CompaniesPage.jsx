import React from 'react'
import CompanyCard from '../../components/helpers/CompanyCard';

const CompaniesPage = () => {
  const companies = [
    {
      id: "comp_01",
      name: "TechCorp Pvt Ltd",
      initials: "TC",
      slug: "techcorp-pvt-ltd",
      accentColor: "indigo",
      location: { city: "Lalitpur", country: "Nepal", isRemote: false },
      description: "TechCorp Pvt Ltd is a leading industry player focusing on innovative solutions.",
      website: "https://techcorp.com",
    },
    {
      id: "comp_02",
      name: "InnoLabs",
      initials: "IL",
      slug: "innolabs",
      accentColor: "blue",
      location: { city: "Kathmandu", country: "Nepal", isRemote: false },
      description: "InnoLabs is a leading industry player focusing on innovative solutions.",
      website: "https://innolabs.com",
    },
    {
      id: "comp_03",
      name: "Global Solutions",
      initials: "GS",
      slug: "global-solutions",
      accentColor: "green",
      location: { city: null, country: null, isRemote: true },
      description: "Global Solutions is a leading industry player focusing on innovative solutions.",
      website: "https://globalsolutions.com",
    },
    {
      id: "comp_04",
      name: "CloudNine Tech",
      initials: "CN",
      slug: "cloudnine-tech",
      accentColor: "pink",
      location: { city: "Pokhara", country: "Nepal", isRemote: false },
      description: "CloudNine Tech is a leading industry player focusing on innovative solutions.",
      website: "https://cloudnine.io",
    },
    {
      id: "comp_05",
      name: "Himalayan Data",
      initials: "HD",
      slug: "himalayan-data",
      accentColor: "green",
      location: { city: "Kathmandu", country: "Nepal", isRemote: false },
      description: "Himalayan Data is a leading industry player focusing on innovative solutions.",
      website: "https://himalayandata.com",
    },
    {
      id: "comp_06",
      name: "Pixel Studio",
      initials: "PS",
      slug: "pixel-studio",
      accentColor: "pink",
      location: { city: "Bhaktapur", country: "Nepal", isRemote: false },
      description: "Pixel Studio is a leading industry player focusing on innovative solutions.",
      website: "https://pixelstudio.co",
    },
  ];
  return (
    <main className='min-h-fit'>
      <section className='py-10 '>
        <div className='text-gray-500 flex flex-col gap-2'>
          <h1 className='text-black font-bold text-3xl'>
            Companies hiring now
          </h1>
          <span className='text-[16px] '>
            Every company here has been reviewed and approved by our team.
          </span>
        </div>
        {/* {company list} */}
        <div className='grid grid-cols-3 gap-8 mt-10'>
          {
            companies.map((company, i) => {
              return (
                <CompanyCard key={i} name={company.name} initials={company.initials} description={company.description} website={company.website} location={company.location} accentColor={company.accentColor}/>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default CompaniesPage