import { NextPage } from "next"
import Container from "@/components/Container";
import SignIn from "@/components/screens/SignIn";

const signInPage: NextPage = () => {
  return (
    <Container>
        <SignIn />
    </Container>
  )
}

export default signInPage;