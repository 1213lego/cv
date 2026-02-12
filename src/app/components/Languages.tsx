import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

type Language = {
  language: string;
  proficiency: string;
};

interface LanguagesListProps {
  languages: Language[];
  className?: string;
}

function LanguagesList({ languages, className }: LanguagesListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of languages"
    >
      {languages.map((item) => (
        <li key={item.language}>
          <Badge
            className="print:text-[10px]"
            aria-label={`Language: ${item.language} - ${item.proficiency}`}
          >
            {item.language} ({item.proficiency})
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface LanguagesProps {
  languages: Language[];
  className?: string;
}

export function Languages({ languages, className }: LanguagesProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="languages-section">
        Languages
      </h2>
      <LanguagesList
        languages={languages}
        aria-labelledby="languages-section"
      />
    </Section>
  );
}
