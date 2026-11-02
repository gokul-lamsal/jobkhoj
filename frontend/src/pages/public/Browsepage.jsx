import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Button from '../../components/global/Button'
import SearchBar from '../../components/helpers/SearchBar'

const Browsepage = () => {
  return (
    <main>
      {/* search bar */}
      <section className='bg-white mb-5 py-4 h-30 border-b-2 flex items-center justify-center gap-3 border-slate-200/70   text-center'>
       <SearchBar/>
      </section>
    </main>
  )
}

export default Browsepage