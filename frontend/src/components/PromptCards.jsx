export default function PromptCards({ onSelect }) {
  const prompts = [
    "What are your pricing plans?",
    "What AI services do you provide?",
    "How can I contact support?",
    "Summarize my uploaded documents",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8 max-w-3xl mx-auto">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onSelect(prompt)}
          className="
            bg-white
            border
            border-gray-200
            rounded-xl
            p-4
            text-left
            shadow-sm
            hover:shadow-md
            hover:border-blue-400
            transition
          "
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}