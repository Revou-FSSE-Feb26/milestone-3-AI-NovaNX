import FaqContent from "./FaqContent";

export default function FAQPage() {
  const generatedAt = new Date().toISOString();

  return <FaqContent generatedAt={generatedAt} />;
}
