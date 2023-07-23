'use client'
import { useRouter } from "next/navigation";

interface Params {
  params: { email: string };
}

export default function Page({ params }: Params) {
  const decodedEmail = decodeURIComponent(params.email);
  const router = useRouter();
  const handleDismiss = () => {
    router.back();
  };

  return (
    <div>
      <h1 className="text-3xl">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{decodedEmail}</span>. Please open it and
        click the button inside to confirm your subscription.
      </p>

      <button
        className="bg-slate-800 text-white w-full py-5 rounded-lg text-xl"
        onClick={handleDismiss}
      >
        Dismiss message
      </button>
    </div>
  );
}
