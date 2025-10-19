import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '@/components/ContactForm'

describe('ContactForm validation', () => {
  it('requires name and either email or phone', async () => {
    render(<ContactForm />)
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(await screen.findByText(/please enter your full name/i)).toBeInTheDocument()
    // Provide name only -> email/phone requirement should appear
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe')
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(await screen.findByText(/provide at least email or phone/i)).toBeInTheDocument()
  })
})

