'use client';

import * as React from 'react';
import { BookingProvider } from '@/hooks/use-booking';
import { BookingModal } from '@/components/modules/booking-modal';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
    </BookingProvider>
  );
}
