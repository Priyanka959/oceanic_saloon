'use client';

import { useBooking } from '@/hooks/use-booking';
import { Button, ButtonProps } from '@/components/ui/button';

interface BookButtonProps extends ButtonProps {
  serviceSlug?: string;
}

export function BookButton({
  serviceSlug,
  children,
  onClick,
  ...props
}: BookButtonProps) {
  const { openBooking } = useBooking();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    openBooking(serviceSlug);
    if (onClick) onClick(e);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children || 'Book Now'}
    </Button>
  );
}
