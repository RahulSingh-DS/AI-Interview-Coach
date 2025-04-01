import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Sign } from "crypto";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10">
      <SignInButton>
        <Button>
          Log in
        </Button>
      </SignInButton>
    </div>
  );
}
