import React from 'react'
import StLogo from '../assets/ST-engineering-logo.png'
import { Brain } from 'lucide-react'

const company = {
  employerName: 'ST Engineering',
  parentCompany: 'ST Engineering Ltd',
  contactEmail: 'contact@stengg.com',
  contactPhone: '+65 6870 3333',
  website: 'https://www.stengg.com',
  domain: 'Aerospace & Defence',
  size: '23,000+',
  established: '1967-01-01',
  uen: '199903462N',
  directorName: 'Lim Chin Hu',
  directorEmail: 'lim.chin.hu@stengg.com',
  address: '1 Ang Mo Kio Avenue 3',
  city: 'Singapore',
  country: 'Singapore',
}

const NavButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="px-5 py-3 rounded-md bg-gradient-to-r from-dhmblue-400 to-dhmblue-600 text-white shadow-md hover:from-dhmblue-500 hover:to-dhmblue-700 transition w-full">
    {children}
  </button>
)

export default function EmployerDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Brain className="h-10 w-10 text-dhmblue-600" />
            <span className="text-xl font-semibold text-dhmblue-800">Deep HR Match</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-dhmblue-700 hover:underline">Settings</button>
          <button className="px-4 py-2 bg-white border border-dhmblue-200 text-dhmblue-700 rounded shadow-sm">Logout</button>
        </div>
      </header>

      <main className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="bg-white rounded-xl p-8 shadow">
            <h1 className="text-4xl greeting text-dhmblue-700">Good Day Mr Lim from ST Engineering</h1>
            <p className="mt-2 text-lg text-dhmblue-600">What would you like to do today?</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <NavButton>Purchased Candidates Profiles</NavButton>
              <NavButton>Posted Jobs</NavButton>
              <NavButton>Create New Job</NavButton>
              <NavButton>My Transactions</NavButton>
              <NavButton>Credit Card Management</NavButton>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-semibold text-dhmblue-800">Company Details</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-dhmblue-700">
              <div><strong>Employer Name:</strong> {company.employerName}</div>
              <div><strong>Parent Company:</strong> {company.parentCompany}</div>
              <div><strong>Contact Email:</strong> {company.contactEmail}</div>
              <div><strong>Contact Phone:</strong> {company.contactPhone}</div>
              <div><strong>Website:</strong> <a className="text-dhmblue-600 underline" href={company.website} target="_blank" rel="noreferrer">{company.website}</a></div>
              <div><strong>Domain/Industry:</strong> {company.domain}</div>
              <div><strong>Company Size:</strong> {company.size}</div>
              <div><strong>Incorporation/Establishment Date:</strong> {company.established}</div>
              <div><strong>Registration UEN Number:</strong> {company.uen}</div>
              <div><strong>Director Name:</strong> {company.directorName}</div>
              <div><strong>Director Email:</strong> {company.directorEmail}</div>
              <div><strong>Company Address:</strong> {company.address}</div>
              <div><strong>City:</strong> {company.city}</div>
              <div><strong>Country:</strong> {company.country}</div>
            </div>
          </div>
        </section>

        <aside>
          <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center gap-4">
            <img src={StLogo} alt="ST Engineering" className="h-24 w-auto object-contain" />
            <div className="text-center text-sm text-dhmblue-700">
              <div className="font-semibold">{company.employerName}</div>
              <div className="text-xs text-dhmblue-500">{company.domain}</div>
            </div>
            <a href={company.website} target="_blank" rel="noreferrer" className="mt-2 text-sm text-dhmblue-600 underline">Visit website</a>
          </div>
        </aside>
      </main>
    </div>
  )
}
