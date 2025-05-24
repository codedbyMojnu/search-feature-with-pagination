export default function DisplayData({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data?.map((user) => (
        <a
          href={user.html_url}
          key={user.id}
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-3 hover:shadow-lg transition-shadow duration-300">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="h-32 w-32 rounded-full object-cover border-4 border-blue-100"
            />
            <p className="text-lg font-semibold text-gray-800">{user.login}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
