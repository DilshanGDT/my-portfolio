export default function ChatBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-6 bg-white dark:bg-gray-800 rounded-3xl shadow-xl relative">
      
      {/* Bubble Tail */}
      <div className="absolute -top-4 left-10 w-6 h-6 bg-white dark:bg-gray-800 rotate-45"></div>

      {children}
    </div>
  );
}