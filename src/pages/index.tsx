import { NextPage } from "next"
import Container from "@/components/Container"
import Home from "@/components/screens/Home"

const HomePage: NextPage = () => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default HomePage

// todo - - - при создании задачи поставить автофокус на title
// todo - - - при создании задачи выделить с помощью focus выбранные поля
// todo - - - свестрать 404 страницу
// todo - - - сверстать компонент загрузки задач
// todo - - - сверстать компонент ошибки задач
// todo - - - при нажатии на энтэр, автоматическое нажатие кнопки создания задачи
// todo - - - сделать задачу редактируемой
// todo - - - 
// todo - - - 