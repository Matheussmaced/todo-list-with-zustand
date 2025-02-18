import CreateTasks from "@/components/createTasks";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe('CreateTasks Component', () => {
  it("Renders home page", () => {
    render(<CreateTasks />)
  })

  it('should br able to add new item to the list', () => {
    const { getByText } = render(<CreateTasks />)

    //userEvent dispara ações dentro da interface da minha aplicação
    const addButton = getByText('+');

    userEvent.click(addButton);
  })
})
