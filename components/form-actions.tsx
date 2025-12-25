'use client';

import { Button } from '@/components/ui/button';
import { Loader2, Check, X } from 'lucide-react';

interface Props {
  onSubmit: () => void | Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  submitText?: string;
  cancelText?: string;
  submitVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  cancelVariant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  disabled?: boolean;
  showSecondaryAction?: boolean;
  secondaryActionText?: string;
  onSecondaryAction?: () => void;
  fullWidth?: boolean;
  alignment?: 'start' | 'center' | 'end' | 'between';
  gap?: 'sm' | 'md' | 'lg';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export default function FormActions({
  onSubmit,
  onCancel,
  isLoading = false,
  submitText = 'Submit',
  cancelText = 'Cancel',
  submitVariant = 'default',
  cancelVariant = 'outline',
  disabled = false,
  showSecondaryAction = false,
  secondaryActionText = 'Save as Draft',
  onSecondaryAction,
  fullWidth = false,
  alignment = 'end',
  gap = 'md',
  size = 'default',
}: Props) {
  const alignmentClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4',
  };

  const handleSubmit = async () => {
    try {
      await onSubmit();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className={`flex ${alignmentClasses[alignment]} ${gapClasses[gap]} flex-wrap`}>
      {showSecondaryAction && (
        <Button
          type="button"
          variant="ghost"
          size={size}
          onClick={onSecondaryAction}
          disabled={isLoading || disabled}
          className={fullWidth ? 'flex-1' : ''}
        >
          {secondaryActionText}
        </Button>
      )}

      <Button
        type="button"
        variant={cancelVariant}
        size={size}
        onClick={onCancel}
        disabled={isLoading || disabled}
        className={fullWidth ? 'flex-1' : ''}
      >
        <X className="w-4 h-4 mr-2" />
        {cancelText}
      </Button>

      <Button
        type="button"
        variant={submitVariant}
        size={size}
        onClick={handleSubmit}
        disabled={isLoading || disabled}
        className={`${fullWidth ? 'flex-1' : ''} bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700`}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Check className="w-4 h-4 mr-2" />
            {submitText}
          </>
        )}
      </Button>
    </div>
  );
}