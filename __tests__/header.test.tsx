import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout/header';
import { BookingProvider } from '@/hooks/use-booking';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Header', () => {
  it('renders the salon name', () => {
    render(
      <BookingProvider>
        <Header />
      </BookingProvider>
    );
    expect(screen.getByText(/Oceanic/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BookingProvider>
        <Header />
      </BookingProvider>
    );
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
