import React from 'react'

const Cards = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-4xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 md:p-6 w-full md:w-64 text-center transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
          <h2 className="text-lg md:text-xl font-bold mb-2 text-amber-50">Suggestion 1</h2>
          <p className="text-amber-50 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veniam aut pariatur.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 md:p-6 w-full md:w-64 text-center transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
          <h2 className="text-lg md:text-xl font-bold mb-2 text-amber-50">Suggestion 2</h2>
          <p className="text-amber-50 text-sm">Velit adipisci laboriosam, quas, ratione perspiciatis distinctio aperiam, iusto debitis?</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl p-4 md:p-6 w-full md:w-64 text-center transition-transform duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
          <h2 className="text-lg md:text-xl font-bold mb-2 text-amber-50">Suggestion 3</h2>
          <p className="text-amber-50 text-sm">Quibusdam facilis aspernatur doloremque fugit rem quo. Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  )
}

export default Cards