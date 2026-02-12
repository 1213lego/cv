import { Section } from "@/components/ui/section";

type Hobby = {
  title: string;
  description: string;
};

interface HobbiesProps {
  hobbies: Hobby[];
  className?: string;
}

export function Hobbies({ hobbies, className }: HobbiesProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="hobbies-section">
        Hobbies & Interests
      </h2>
      <div className="space-y-3">
        {hobbies.map((hobby) => (
          <div key={hobby.title}>
            <h3 className="font-semibold text-sm">{hobby.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground print:text-[10px]">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
