import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <Label htmlFor="email">Email</Label>
        <Input />
        <Label htmlFor="email">Password</Label>
        <Input />
        <Button disabled>
          {/* <Loader2 className="animate-spin" />
        Please wait */}
          Sign up
        </Button>
      </form>
      <div>
        Dont have an account? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Signin;
