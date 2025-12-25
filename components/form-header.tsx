'use client';

import { ShoppingBag } from 'lucide-react';

interface Props {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  centered?: boolean;
}

export default function FormHeader({ 
  title, 
  description, 
  icon: Icon = ShoppingBag,
  badge,
  centered = true 
}: Props) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center ${centered ? 'justify-center' : ''} gap-3 mb-4`}>
        <div className="p-2.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            {title}
          </h1>
          {badge && (
            <span className="inline-block w-fit px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div>
      
      {description && (
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}