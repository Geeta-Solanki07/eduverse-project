interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export default function UsersTable({ users, setUsers }: { users: User[]; setUsers: any }) {
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`https://eduverse-project.onrender.com/admin/users/${id}`, { method: "DELETE" });
      if (res.ok) setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Email</th>
          <th className="py-3 px-4 text-left">Role</th>
          <th className="py-3 px-4 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? users.map((user) => (
          <tr key={user._id} className="border-b hover:bg-gray-50">
            <td className="py-3 px-4">{user.name}</td>
            <td className="py-3 px-4">{user.email}</td>
            <td className="py-3 px-4 capitalize">{user.role}</td>
            <td className="py-3 px-4 text-center">
              <button onClick={() => handleDelete(user._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
        )) : (
          <tr>
            <td colSpan={4} className="text-center py-4 text-gray-500">
              No users found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
