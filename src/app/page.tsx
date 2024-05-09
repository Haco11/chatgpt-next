import Chat from "@/components/Chat";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#213123]">
      <div className="container">
        <Chat />
      </div>
    </main>
  );
}
