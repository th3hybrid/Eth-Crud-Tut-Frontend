export default function DeleteUserForm() {

  return (
    <div className="w-full max-w-md mx-auto border mt-8 border-black rounded-lg overflow-hidden bg-white text-black">
      <div className="p-4 border-b border-black">
        <h2 className="text-2xl font-bold">deleteUser</h2>
      </div>
      <form className="p-4">
        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-black mb-1">
            ID
          </label>
          <input
            id="id"
            type="text"
            placeholder="ID Number"
            className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Delete user
          </button>
        </div>
      </form>
    </div>
  )
}