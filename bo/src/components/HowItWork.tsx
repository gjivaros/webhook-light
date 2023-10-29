import SectionTitle from "./SectionTitle";

export default function HowItWork() {
  return <section id="how-it-work" className="max-w-screen-xl mx-auto p-4">
    <SectionTitle title="How it work" />

    <div className="bg-gray-200 h-[80px] flex justify-between items-center p-4 shadow-sm rounded-xl">
      <p>1: Sign up for a free account </p>
      <p>2: Generate a unique webhook test URL. </p>
      <p>3: Monitor real-time payload data on your dashboard. </p>
    </div>
  </section>
}