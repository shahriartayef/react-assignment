import React from "react";
import Container from "./Container";

const TaskStatus = ({ tasks, onComplete }) => {
  return (
    <Container>
  <div className="bg-white p-4 w-full max-w-[350px] sm:max-w-[350px] md:max-w-[350px] rounded-lg shadow mx-auto">
    <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Task Status</h2>
    {tasks.length === 0 ? (
      <p className="text-gray-500 text-center md:text-left">No tasks in progress.</p>
    ) : (
      <ul className="space-y-3">
        {tasks.map((task) => (
          <p key={task.id} className="p-2 rounded">
            <span className="block text-center md:text-left">{task.title}</span>
            <button
              onClick={() => onComplete(task.id)}
              className="bg-green-500 mt-3 w-[350px] md:w-[250px] text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Complete
            </button>
          </p>
        ))}
      </ul>
    )}
  </div>
</Container>

  );
};

export default TaskStatus;