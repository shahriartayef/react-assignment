import React from "react";

const ResolvedTask = ({ resolved }) => {
  return (
    <div className="bg-white p-4 w-full max-w-[350px] sm:max-w-[350px] md:max-w-[350px] rounded-lg shadow mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Resolved Tasks</h2>
      {resolved.length === 0 ? (
        <p className="text-gray-500 text-center md:text-left">No resolved tasks yet.</p>
      ) : (
        <ul className="space-y-2">
          {resolved.map((task) => (
            <li key={task.id} className="p-2 bg-gray-100 rounded">
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResolvedTask;