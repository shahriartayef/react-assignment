import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
const TicketCard = ({ ticket, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer transition w-[450px] mx-auto"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">{ticket.title}</h2>
        </div>
        <div>
          <p className={`flex items-center text-sm font-semibold rounded-xl px-2 ${
         ticket.status === "In-Progress" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"
        }`}
      >
     <span
       className={`inline-block w-2 h-2 mr-2 rounded-full ${
         ticket.status === "In-Progress" ? "bg-yellow-500" : "bg-green-500"
      }`}
     ></span>
     {ticket.status}
     </p>
        </div>
      </div>
      <p className="text-gray-600 mb-2">{ticket.description}</p>
      <div className="flex justify-between">
        <div className="flex gap-2">
            <div>
                <p className="text-sm text-gray-400 font-semibold"><strong></strong> {ticket.id}</p> 
            </div> 
            <div>
                <p className={`text-sm ${ticket.priority === 'LOW PRIORITY' ? 'text-green-500' : ticket.priority === 'MEDIUM PRIORITY' ? 'text-yellow-500' : 'text-red-500'}`}>
               <strong>{ticket.priority}</strong></p>
            </div>
        </div>
      <div className="flex gap-3">
        <div>
          <p className="text-sm text-gray-400 font-semibold"><strong></strong> {ticket.customer}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400 flex items-center gap-0.5"><FaCalendarDays className="text-gray-400 w-4 h-4" />
         <strong>{ticket.createdAt}</strong>
      </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TicketCard;