"use client";

import { useSearchParams } from "next/navigation";
import Chatbot from "@/components/chat/Chatbot";

export default function ChatPage() {
  const params = useSearchParams();
  const prefill = {
    type: params.get("type") || "",
    name: params.get("name") || "",
    location: params.get("location") || "",
    budget: params.get("budget") || "",
    timeline: params.get("timeline") || "",
  };

  return <Chatbot prefill={prefill} />;
}


