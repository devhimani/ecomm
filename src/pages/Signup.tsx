import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border m-2 p-4 rounded-lg w-full max-w-sm bg-gray-100 flex flex-col gap-4">
        <h1 className="text-center text-3xl">Sign Up</h1>
        <form>
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            id="name"
            placeholder="Name"
            className="bg-white"
          />
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-white"
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-white"
          />
          <Button className="mt-2" disabled>
            {/* <Loader2 className="animate-spin" />
        Please wait */}
            Sign Up
          </Button>
        </form>
        <div className="text-sm">
          Already have an acoount
          <Link className="underline" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
