import Dashboard from '@/components/Dashboard/Dashboard';
import type { ReactNode } from 'react';

const DashboardLayout = ({ children }:{ children: ReactNode }) => {
 return (
    <div>
      <div className="w-[20%] flex flex-col gap-5 border p-5 bg-gray-200 fixed">
        <Dashboard/>
      </div>

      <div className="w-[80%] ml-[20%] flex-grow overflow-auto border-red-600 border-2 h-full mx-auto">
        {children}
      </div> 
    </div>
 );
};

export default DashboardLayout;