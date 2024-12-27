import Button from "@/components/Button";
import { Container } from "@/components/Container";
import InputField from "@/components/CustomFields/InputField";
import { genTitle } from "@/helpers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: genTitle("Login"),
};

const Login = () => {
  return (
    <div className="component:Login">
      <Container className="flex justify-center items-center min-h-[500px]">
        <div className="rounded-xl bg-gray-100 w-[500px] p-9">
          <form className="flex flex-col gap-4">
            <h1 className="text-3xl">Login</h1>
            <InputField
              type="email"
              name="email"
              label="Email"
              placeholder="john@email.com"
              required
            />

            <InputField
              type="password"
              name="password"
              label="Password"
              placeholder="yourpassword"
              required
            />

            <div className="flex justify-end">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
