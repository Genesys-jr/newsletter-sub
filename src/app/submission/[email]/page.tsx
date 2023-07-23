interface Params {
  params: {email: string};
}

export default async function Page({params}: Params) {
  return (
    <div>
      <h1 className="text-3xl">Thanks for subscribing!</h1>
      <p>A confirmation email has been to <span className="font-bold">{params.email}</span> Please open it and click the button inside to confirm your subcription </p>

      <button className="bg-slate-800 text-white w-full py-5 rounded-lg text-xl">Dismiss message</button>
    </div>
  );
}
