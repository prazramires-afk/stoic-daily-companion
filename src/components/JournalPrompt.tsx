import { formatDate } from '@/hooks/useLocalStorage';

interface JournalPromptProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export function JournalPrompt({
  label,
  placeholder,
  value,
  onChange,
  readOnly = false,
}: JournalPromptProps) {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border/50">
      <label className="block text-habit-title font-medium text-foreground mb-2">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={3}
        className="w-full bg-transparent text-body text-foreground placeholder:text-muted-foreground/50 resize-none focus:outline-none"
      />
    </div>
  );
}

interface PastJournalEntryProps {
  date: string;
  didWell: string;
  canImprove: string;
  lessonLearned: string;
}

export function PastJournalEntry({
  date,
  didWell,
  canImprove,
  lessonLearned,
}: PastJournalEntryProps) {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border/50">
      <p className="text-secondary text-muted-foreground mb-3">
        {formatDate(date)}
      </p>
      
      {didWell && (
        <div className="mb-3">
          <p className="text-secondary font-medium text-foreground/80 mb-1">
            What I did well
          </p>
          <p className="text-body text-foreground">{didWell}</p>
        </div>
      )}
      
      {canImprove && (
        <div className="mb-3">
          <p className="text-secondary font-medium text-foreground/80 mb-1">
            What I can improve
          </p>
          <p className="text-body text-foreground">{canImprove}</p>
        </div>
      )}
      
      {lessonLearned && (
        <div>
          <p className="text-secondary font-medium text-foreground/80 mb-1">
            Lesson learned
          </p>
          <p className="text-body text-foreground">{lessonLearned}</p>
        </div>
      )}
    </div>
  );
}

interface LessonCardProps {
  date: string;
  lesson: string;
}

export function LessonCard({ date, lesson }: LessonCardProps) {
  return (
    <div className="bg-card rounded-2xl p-4 border border-border/50">
      <p className="text-secondary text-muted-foreground mb-2">
        {formatDate(date)}
      </p>
      <p className="font-quote text-base italic text-foreground/90">
        "{lesson}"
      </p>
    </div>
  );
}
