import Home from "@/app/(public)/(home)/page"
import { render } from "@testing-library/react"

describe('App Component', () => {
  it('should render Home', () => {
    render(<Home />)
  })
})