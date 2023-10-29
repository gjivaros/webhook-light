import Card from "./Card"
import SectionTitle from "./SectionTitle"

const features = [
  {
    id: 1,
    title: "Custom Webhook Testing URLs",
    description: `Easily create and manage unique webhook testing URLs tailored to your 
      integration needs.Ensure comprehensive testing of your
      webhook endpoints with full control over your test data`,
    svg: <svg className="w-6 h-6 text-gray-800 dark:text-white mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"/>
      </svg>
  },
  {
    id: 2,
    title: "Real-Time Data Monitoring",
    description: `Instantly monitor and analyze incoming payload data in real time. 
      Gain valuable insights into the behavior
       of your webhooks as data flows into your system.`,
    svg: <svg className="w-6 h-6 text-gray-800 dark:text-white mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
    </svg>
  },
  {
    id: 3,
    title: "User-Friendly Dashboard",
    description: `Manage and analyze your webhook integrations effortlessly with our 
    intuitive dashboard. Visualize webhook performance, track historical data,
     and make data-driven decisions.`,
    svg:<svg className="w-6 h-6 text-gray-800 dark:text-white mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
  </svg>
  }
]


export default function Features() {
  return <section className="block max-w-screen-xl mx-auto p-4" id="features">
    <SectionTitle title="Features" />
    <div className="flex justify-between  flex-wrap">
    {features.map(feature => <Card feature={feature} />)}
    </div>
  </section>
}