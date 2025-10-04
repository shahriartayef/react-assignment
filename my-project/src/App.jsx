import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../Components/Banner";
import TicketCard from "../Components/TicketCard";
import TaskStatus from "../components/TaskStatus";
import ResolvedTask from "../Components/ResolvedTasks";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ticketsData = [
  {
    id: "#1001",
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    customer: "John Smith",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/15/2024",
  },
  {
    id: "#1002",
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Sarah Johnson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/16/2024",
  },
  {
    id: "#1003",
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is...",
    customer: "Michael Brown",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/17/2024",
  },
  {
    id: "#1004",
    title: "Incorrect Billing Address",
    description:
      "Customer's billing address shows a different city. They updated it but it still displays the old one.",
    customer: "Emily Davis",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/18/2024",
  },
  {
    id: "#1005",
    title: "App Crash on Launch",
    description:
      "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    customer: "David Wilson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/19/2024",
  },
  {
    id: "#1006",
    title: "Refund Not Processed",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    customer: "Sophia Taylor",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/20/2024",
  },
  {
    id: "#1007",
    title: "Two-Factor Authentication Issue",
    description:
      "Customer is not receiving 2FA codes on their registered phone number.",
    customer: "James Anderson",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/21/2024",
  },
  {
    id: "#1008",
    title: "Unable to Update Profile Picture",
    description:
      "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: "Olivia Martinez",
    priority: "LOW PRIORITY",
    status: "Open",
    createdAt: "1/22/2024",
  },
  {
    id: "#1009",
    title: "Subscription Auto-Renewal",
    description:
      "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    customer: "Liam Thomas",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/23/2024",
  },
  {
    id: "#1010",
    title: "Missing Order Confirmation Email",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Isabella Garcia",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/24/2024",
  },
  {
    id: "#1011",
    title: "Subscription Auto-Renewal",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Isabella Garcia",
    priority: "HIGH PRIORITY",
    status: "Open",
    createdAt: "1/25/2024",
  },
  {
    id: "#1012",
    title: "Unable to Update Profile Picture",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Isabella Garcia",
    priority: "MEDIUM PRIORITY",
    status: "In-Progress",
    createdAt: "1/26/2024",
  },
];

const App = () => {
  const [tickets, setTickets] = useState(ticketsData);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  //In Progress
  const handleAddToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      setTickets(tickets.filter((t) => t.id !== ticket.id));
      toast.info(`"${ticket.title}" moved to In Progress`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  // Mark ticket as Resolved
  const handleComplete = (ticketId) => {
    const ticket = inProgress.find((t) => t.id === ticketId);

    if (ticket) {
      setInProgress(inProgress.filter((t) => t.id !== ticketId));
      setResolved([...resolved, ticket]);
      toast.success(`"${ticket.title}" marked as Resolved`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      {/* Main Section */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {/* Tickets Left Section */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => handleAddToProgress(ticket)}
              />
            ))}
          </div>

          {/* Task Status + Resolved List */}
          <div className="flex flex-col gap-6">
            <TaskStatus tasks={inProgress} onComplete={handleComplete} />
            <ResolvedTask resolved={resolved} />
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default App;