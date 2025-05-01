"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AuthLayoutProps{
  children:React.ReactNode;
}

const AuthLayout =({children}:AuthLayoutProps)=>{
  const pathname = usePathname();
  const inSignIn = pathname === "/sign-in";

  return(
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image 
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
          />
          <div className="flex items-center gap-2">
            <Button variant="secondary">
              <Link href={inSignIn ? "/sign-up" : "/sign-in"}>
                {inSignIn ? "Sign Up" : "Login"}
              </Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
        {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout;