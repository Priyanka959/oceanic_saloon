import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '@/components/modules/contact-form';

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', async () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/name must be at least 2 characters/i)
      ).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/phone/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message here' },
    });

    const submitButton = screen.getByRole('button', { name: /send message/i });
    fireEvent.click(submitButton);

    const successMessage = await screen.findByText(/message sent!/i, {
      timeout: 3000,
    });
    expect(successMessage).toBeInTheDocument();
  });
});
