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
          <Input />
          <Label htmlFor="email">Password</Label>
          <Input />
          <Button className="mt-2" disabled>
            {/* <Loader2 className="animate-spin" />
        Please wait */}
            Sign up
          </Button>
        </form>
        <div className="text-sm">
          Dont have an account?
          <Link className="underline" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
