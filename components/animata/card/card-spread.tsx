import { useState } from "react";

import { cn } from "@/lib/utils";
import ShoppingList from "../widget/shopping-list";
import Notes, { NotesCard } from "../widget/notes";

function Reminders() {
  return (
    <ShoppingList
      title="Salon Reminders"
      data={[
        { title: "Order new henna cones" },
        { title: "Restock HydraFacial supplies", checked: true },
        { title: "Schedule staff training" },
      ]}
    />
  );
}

function RemodelNotes() {
  return (
    <NotesCard title="Mehndi Design Ideas">
      <div>Arabic floral patterns</div>
      <div>Pakistani traditional motifs</div>
      <div>Bridal backhand designs</div>
      <div>Guest hand/foot options</div>
    </NotesCard>
  );
}

const cards = [
  {
    component: Notes,
    rotationClass: "",
    revealClass: "-rotate-[2deg]",
  },
  {
    component: ShoppingList,
    rotationClass: "group-hover:rotate-[15deg]",
    revealClass: "rotate-[3deg] translate-y-2",
  },

  {
    component: RemodelNotes,
    rotationClass: "group-hover:rotate-[30deg]",
    revealClass: "-rotate-[2deg] translate-x-1",
  },

  {
    component: Reminders,
    rotationClass: "group-hover:rotate-[45deg]",
    revealClass: "rotate-[2deg]",
  },
];

export default function CardSpread() {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex min-h-80 min-w-52 items-center transition-all duration-500 ease-in-out",
        {
          "origin-bottom transition-all duration-500 ease-in-out hover:-rotate-[15deg]":
            !isExpanded,
          "gap-3": isExpanded,
        }
      )}
    >
      {cards.map((item, index) => {
        return (
          <div
            key={index}
            onClick={(e) => {
              setExpanded(!isExpanded);
              e.preventDefault();
            }}
            className={cn(
              "transition-all duration-500 ease-in-out",
              {
                absolute: !isExpanded,
                "origin-bottom": !isExpanded,
              },
              !isExpanded && item.rotationClass,
              isExpanded && item.revealClass
            )}
          >
            <item.component />
          </div>
        );
      })}
    </div>
  );
}
