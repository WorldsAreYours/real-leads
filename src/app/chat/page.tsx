import Chatbot from "@/components/chat/Chatbot";

export default function ChatPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const get = (key: string): string => {
    const v = searchParams[key];
    return typeof v === "string" ? v : "";
  };

  const prefill = {
    type: get("type"),
    name: get("name"),
    location: get("location"),
    budget: get("budget"),
    timeline: get("timeline"),
  };

  return <Chatbot prefill={prefill} />;
}


