export default function CreateUser() {
  return (
    <div className="min-h-screen bg-white text-black"> 
      <main className="container mx-auto mt-8 px-4">
        <div className="w-full max-w-md mx-auto border border-black rounded-lg overflow-hidden">
          <div className="p-4 border-b border-black">
            <h2 className="text-2xl font-bold">createUser</h2>
          </div>
          <form  className="p-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="username"
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="favNumber" className="block text-sm font-medium text-black mb-1">
                  favNumber
                </label>
                <input
                  id="favNumber"
                  type="text"
                  placeholder="favNumber"
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Create user
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}