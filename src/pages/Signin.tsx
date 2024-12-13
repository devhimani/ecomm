import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border m-2 p-4 rounded-lg w-full max-w-sm bg-gray-100 flex flex-col gap-4">
        <h1 className="text-center text-3xl">Sign In</h1>
        <form>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-white"
          />
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-white"
          />
          <Button className="mt-2" disabled>
            {/* <Loader2 className="animate-spin" />
        Please wait */}
            Sign In
          </Button>
        </form>
        <div className="text-sm">
          Dont have an account?
          <Link className="underline" to="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
