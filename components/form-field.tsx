'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface Props {
  id: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helper?: string;
  required?: boolean;
  disabled?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  maxLength?: number;
  pattern?: string;
  onBlur?: () => void;
  success?: boolean;
}

export default function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helper,
  required = false,
  disabled = false,
  icon: Icon,
  maxLength,
  pattern,
  onBlur,
  success = false,
}: Props) {
  const hasError = !!error;
  const showSuccess = success && !hasError && value.length > 0;

  return (
    <div className="space-y-2">
      {label && (
        <Label 
          htmlFor={id}
          className={`text-sm font-medium ${
            hasError 
              ? 'text-red-600' 
              : showSuccess 
              ? 'text-green-600' 
              : 'text-gray-700'
          }`}
        >
          {label}
          {required && <span className="text-orange-600 ml-1">*</span>}
        </Label>
      )}

      <div className="relative">
        {Icon && (
          <Icon className={`absolute left-3 top-3 h-4 w-4 ${
            hasError 
              ? 'text-red-500' 
              : showSuccess 
              ? 'text-green-500' 
              : 'text-gray-400'
          }`} />
        )}

        {type === 'textarea' ? (
          <Textarea
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            maxLength={maxLength}
            onBlur={onBlur}
            className={`${Icon ? 'pl-10' : ''} ${
              hasError 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : showSuccess 
                ? 'border-green-500 focus:ring-green-500 focus:border-green-500' 
                : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'
            } min-h-24 resize-none`}
          />
        ) : (
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            maxLength={maxLength}
            pattern={pattern}
            onBlur={onBlur}
            className={`${Icon ? 'pl-10' : ''} ${
              hasError 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : showSuccess 
                ? 'border-green-500 focus:ring-green-500 focus:border-green-500' 
                : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'
            }`}
          />
        )}

        {showSuccess && (
          <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
        )}
        {hasError && (
          <AlertCircle className="absolute right-3 top-3 h-4 w-4 text-red-500" />
        )}
      </div>

      {maxLength && (
        <div className="text-xs text-gray-500 text-right">
          {value.length}/{maxLength}
        </div>
      )}

      {hasError && (
        <div className="flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      {!hasError && helper && (
        <p className="text-xs text-gray-500">{helper}</p>
      )}
    </div>
  );
}