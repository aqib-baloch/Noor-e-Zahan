export function NotesCard({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="h-64 w-48 rounded-3xl border bg-[#fced99] p-4 font-sans text-zinc-950 shadow-sm">
      <div className="text-lg font-bold tracking-wide">{title}</div>
      <div className="mt-3 flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}

export default function Notes() {
  return (
    <NotesCard title="Bridal Prep Tips">
      <div>Book consultation 2 weeks in advance</div>
      <div>Bring reference photos of desired look</div>
      <div>Arrive 30 minutes early for skin prep</div>
      <div>Discuss allergies and skin concerns</div>
    </NotesCard>
  );
}
