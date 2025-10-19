import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BeforeAfterSlider, clampPercent } from '@/components/BeforeAfterSlider'

describe('BeforeAfterSlider', () => {
  it('clamps percentage values', () => {
    expect(clampPercent(-10)).toBe(0)
    expect(clampPercent(50)).toBe(50)
    expect(clampPercent(150)).toBe(100)
  })

  it('renders and updates via slider', async () => {
    render(
      <BeforeAfterSlider beforeSrc="/before.svg" afterSrc="/after.svg" initial={25} alt="Test" />,
    )
    const slider = screen.getByRole('slider', { name: /before after slider/i }) as HTMLInputElement
    expect(slider.value).toBe('25')
    await userEvent.clear(slider)
    await userEvent.type(slider, '75')
    expect(slider.value).toBe('75')
  })
})

