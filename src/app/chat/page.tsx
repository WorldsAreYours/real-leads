import Chatbot from "@/components/chat/Chatbot";

export default async function ChatPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const get = (key: string): string => {
    const v = params[key];
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


