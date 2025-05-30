"use client";
import React from 'react';
import { Code, Mail, ShieldAlert, CircleDot, MapPin, Package } from 'lucide-react';

interface TicketProps {
  name: string;
  email: string;
  github: string;
  imageSrc: string;
}

const Ticket: React.FC<TicketProps> = ({ name, email, github, imageSrc }) => {
  const ticketNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentDate);
  
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-xl overflow-hidden shadow-2xl border border-purple-400">
        {/* Header */}
        <div className="bg-purple-900 py-4 px-6 flex justify-between items-center border-b border-purple-500">
          <div className="flex items-center gap-2">
            <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white text-xl font-bold">Coding Conf 2025</h3>
          </div>
          <span className="text-white opacity-75">May 21-23, 2025</span>
        </div>

        {/* Ticket Body */}
        <div className="p-6 flex flex-col md:flex-row gap-6">
          {/* User Avatar */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white mx-auto md:mx-0 shrink-0">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${name}'s avatar`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-purple-300 flex items-center justify-center text-purple-900 font-bold text-2xl">
                {name ? name.charAt(0) : "?"}
              </div>
            )}
          </div>
          {/* User Info */}
          <div className="text-white flex-grow">
            <div className="mb-4 border-b border-purple-500 pb-3">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-purple-200 flex items-center gap-1">
                <Mail className="h-4 w-4 text-purple-300" />
                {email}
              </p>
              <p className="text-purple-200 flex items-center gap-1">
                <Code className="h-4 w-4 text-purple-300" />
                {github}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-purple-700/40 rounded-md px-3 py-2">
                <ShieldAlert className="h-5 w-5 text-purple-300" />
                <span className="font-medium">VIP Access - All Workshops</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-700/40 rounded-md px-3 py-2">
                <MapPin className="h-5 w-5 text-purple-300" />
                <span className="font-medium">Conference Center, San Francisco</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-purple-900 py-3 px-6 flex justify-between items-center border-t border-purple-500">
          <div className="flex flex-col">
            <span className="text-white text-xs md:text-sm">Ticket #: {ticketNumber}</span>
            <span className="text-purple-300 text-xs">Generated on {formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="h-5 w-5 text-purple-300" />
            <span className="text-white text-xs md:text-sm">www.codingconf.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
