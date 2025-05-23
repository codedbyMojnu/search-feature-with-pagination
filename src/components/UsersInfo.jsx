export default function Data({ searchQuery, usersData }) {
  console.log(usersData);
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
      {searchQuery.trim() !== ""
        ? usersData?.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center space-y-3 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="h-32 w-32 rounded-full object-cover border-4 border-blue-100"
              />
              <p className="text-lg font-semibold text-gray-800">
                {user.login}
              </p>
            </div>
          ))
        : "Try to Search Your Github Name"}
    </div>
  );
}
