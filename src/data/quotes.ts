import { Quote } from '@/types/habits';

export const dailyQuotes: Quote[] = [
  {
    text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    author: "Marcus Aurelius"
  },
  {
    text: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius"
  },
  {
    text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    author: "Marcus Aurelius"
  },
  {
    text: "It is not death that a man should fear, but he should fear never beginning to live.",
    author: "Marcus Aurelius"
  },
  {
    text: "The soul becomes dyed with the colour of its thoughts.",
    author: "Marcus Aurelius"
  },
  {
    text: "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    author: "Marcus Aurelius"
  },
  {
    text: "Loss is nothing else but change, and change is Nature's delight.",
    author: "Marcus Aurelius"
  },
  {
    text: "If it is not right do not do it; if it is not true do not say it.",
    author: "Marcus Aurelius"
  },
  {
    text: "How much more grievous are the consequences of anger than the causes of it.",
    author: "Marcus Aurelius"
  },
  {
    text: "The best revenge is not to be like your enemy.",
    author: "Marcus Aurelius"
  },
  {
    text: "Look back over the past, with its changing empires that rose and fell, and you can foresee the future too.",
    author: "Marcus Aurelius"
  },
  {
    text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    author: "Marcus Aurelius"
  },
  {
    text: "Receive without conceit, release without struggle.",
    author: "Marcus Aurelius"
  },
  {
    text: "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it.",
    author: "Marcus Aurelius"
  },
  {
    text: "What stands in the way becomes the way.",
    author: "Marcus Aurelius"
  },
  {
    text: "Our life is what our thoughts make it.",
    author: "Marcus Aurelius"
  },
  {
    text: "The impediment to action advances action. What stands in the way becomes the way.",
    author: "Marcus Aurelius"
  },
  {
    text: "No man is free who is not master of himself.",
    author: "Marcus Aurelius"
  },
  {
    text: "He who lives in harmony with himself lives in harmony with the universe.",
    author: "Marcus Aurelius"
  },
  {
    text: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",
    author: "Marcus Aurelius"
  },
  {
    text: "The art of living is more like wrestling than dancing.",
    author: "Marcus Aurelius"
  },
  {
    text: "Do not act as if you were going to live ten thousand years. Death hangs over you.",
    author: "Marcus Aurelius"
  },
  {
    text: "Be tolerant with others and strict with yourself.",
    author: "Marcus Aurelius"
  },
  {
    text: "Confine yourself to the present.",
    author: "Marcus Aurelius"
  },
  {
    text: "Nothing happens to anybody which he is not fitted by nature to bear.",
    author: "Marcus Aurelius"
  },
  {
    text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.",
    author: "Marcus Aurelius"
  },
  {
    text: "Each day provides its own gifts.",
    author: "Marcus Aurelius"
  },
  {
    text: "Choose not to be harmed — and you won't feel harmed. Don't feel harmed — and you haven't been.",
    author: "Marcus Aurelius"
  },
  {
    text: "Adapt yourself to the things among which your lot has been cast and love sincerely the fellow creatures with whom destiny has ordained that you shall live.",
    author: "Marcus Aurelius"
  },
  {
    text: "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.",
    author: "Marcus Aurelius"
  },
  {
    text: "Time is a sort of river of passing events, and strong is its current.",
    author: "Marcus Aurelius"
  }
];

export const weeklyReflectionQuestions: string[] = [
  "What unnecessary burdens have you been carrying this week?",
  "Where have you placed value on things outside your control?",
  "How have your judgments shaped your emotional responses?",
  "What would the best version of yourself do differently?",
  "Have you been living as if each day could be your last?",
  "Where can you practice more acceptance and less resistance?",
  "What virtue needs more cultivation in your daily practice?",
];

export const stoicConcepts = [
  {
    id: 'dichotomy',
    title: 'Dichotomy of Control',
    summary: 'Focus only on what you can control — your own actions, judgments, and responses.',
    unlockAtWeeks: 0, // Always unlocked - foundational
    content: `The foundation of Stoic practice. Epictetus taught that some things are "up to us" (our opinions, impulses, desires, aversions) and some things are not (our body, reputation, position). Happiness comes from focusing entirely on the former.

When you find yourself disturbed, ask: "Is this within my control?" If not, remind yourself that it is nothing to you. If it is, consider what virtue demands of you in this moment.`,
    quote: "Make the best use of what is in your power, and take the rest as it happens.",
    quoteAuthor: "Epictetus"
  },
  {
    id: 'premeditatio',
    title: 'Premeditatio Malorum',
    summary: 'Prepare the mind for difficulty by imagining possible hardships in advance.',
    unlockAtWeeks: 1,
    content: `Beyond pessimism, Premeditatio Malorum is an exercise in resilience. By imagining possible difficulties in advance, the mind becomes familiar with hardship before it arrives. What is anticipated loses its power to disturb.

This practice is not about fear, but preparation. When adversity appears, it feels less like an invasion and more like a guest you were expecting.`,
    quote: "He robs present ills of their power who has perceived their coming beforehand.",
    quoteAuthor: "Seneca"
  },
  {
    id: 'memento-mori',
    title: 'Memento Mori',
    summary: 'Remember death — not to frighten, but to clarify what truly matters.',
    unlockAtWeeks: 2,
    content: `Memento Mori is not morbid reflection, but clarity. By remembering that life is finite, we are stripped of trivial concerns and drawn back to what matters.

Awareness of death sharpens gratitude, dissolves procrastination, and urges us to act with integrity. Time becomes precious when it is no longer assumed to be endless.`,
    quote: "You could leave life right now. Let that determine what you do and say and think.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'apatheia',
    title: 'Apatheia (Freedom from Passions)',
    summary: 'Freedom from being dragged by destructive impulses and irrational judgments.',
    unlockAtWeeks: 3,
    content: `Apatheia is often misunderstood as emotional numbness. In truth, it is freedom — freedom from being dragged by destructive impulses and irrational judgments.

The Stoic does not deny emotion, but refuses to be ruled by it. Calm replaces chaos when reason is allowed to lead.`,
    quote: "No man is free who is not master of himself.",
    quoteAuthor: "Epictetus"
  },
  {
    id: 'virtue',
    title: 'Virtue as the Highest Good',
    summary: 'The four cardinal virtues — Wisdom, Courage, Justice, Temperance — are the only true goods.',
    unlockAtWeeks: 4,
    content: `The Stoics held that virtue is the only thing that is truly good, and vice the only thing truly bad. Everything else — health, wealth, reputation, pleasure — are "indifferent" (though some are naturally preferable).

Wisdom (Sophia): Knowing what is truly good, bad, and indifferent.
Courage (Andreia): Facing difficulty and danger for what is right.
Justice (Dikaiosyne): Treating others fairly and fulfilling your social duties.
Temperance (Sophrosyne): Moderation and self-control in all things.

A life lived according to these virtues is a good life, regardless of external circumstances.`,
    quote: "Waste no more time arguing about what a good man should be. Be one.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'amor-fati',
    title: 'Amor Fati',
    summary: 'Love your fate. Embrace everything that happens as necessary and good.',
    unlockAtWeeks: 5,
    content: `Beyond mere acceptance, Amor Fati asks us to love our fate — to see everything that happens as fuel for our growth. The obstacle becomes the way. Every setback is training.

This is not passive resignation. It is active acceptance combined with determined effort. You do your best, accept the outcome with grace, and find meaning in whatever occurs.`,
    quote: "A blazing fire makes flame and brightness out of everything that is thrown into it.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'eudaimonia',
    title: 'Eudaimonia (Flourishing Through Virtue)',
    summary: 'True happiness arises from living in accordance with virtue, not pleasure.',
    unlockAtWeeks: 6,
    content: `True happiness is not pleasure, wealth, or status. For the Stoic, Eudaimonia arises from living in accordance with virtue.

A good life is not measured by comfort, but by character. Even in hardship, one can flourish by choosing wisdom, courage, justice, and temperance.`,
    quote: "Happiness is a good flow of life.",
    quoteAuthor: "Zeno of Citium"
  },
  {
    id: 'living-nature',
    title: 'Living According to Nature',
    summary: 'Live according to reason and reality, accepting the world as it is.',
    unlockAtWeeks: 7,
    content: `To live according to nature is to live according to reason and reality. It means accepting the world as it is, not as we wish it to be.

Resistance to reality creates suffering. Alignment with it creates peace.`,
    quote: "Stop arguing about what a good man should be. Be one.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'sympatheia',
    title: 'Sympatheia (Universal Connection)',
    summary: 'All things are interconnected parts of a greater whole.',
    unlockAtWeeks: 8,
    content: `Stoicism teaches that all things are interconnected parts of a greater whole. No action exists in isolation.

Understanding this dissolves resentment and fosters compassion. Harm to others ultimately harms ourselves.`,
    quote: "What brings no benefit to the hive brings none to the bee.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'view-above',
    title: 'The View from Above',
    summary: 'Lift the mind beyond narrow perspective to see troubles in cosmic context.',
    unlockAtWeeks: 9,
    content: `This exercise lifts the mind beyond narrow perspective. By imagining life from above — cities, nations, centuries — our personal troubles shrink.

What once felt overwhelming becomes manageable when seen in context.`,
    quote: "Observe the stars in their courses, and consider yourself running with them.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'voluntary-discomfort',
    title: 'Voluntary Discomfort',
    summary: 'Occasionally choose discomfort to weaken dependence on comfort.',
    unlockAtWeeks: 10,
    content: `By occasionally choosing discomfort, we weaken our dependence on comfort. Fear of loss fades when we learn we can endure less.

This practice builds inner security that cannot be taken away.`,
    quote: "Set aside a certain number of days during which you shall be content with the scantiest food.",
    quoteAuthor: "Seneca"
  },
  {
    id: 'self-mastery',
    title: 'Self-Mastery',
    summary: 'Power over oneself is lasting; power over others is fleeting.',
    unlockAtWeeks: 11,
    content: `Power over others is fleeting. Power over oneself is lasting.

The Stoic trains discipline not to dominate, but to remain free regardless of circumstances.`,
    quote: "The first and best victory is to conquer self.",
    quoteAuthor: "Plato (echoed by Stoics)"
  },
  {
    id: 'tranquility',
    title: 'Tranquility Over Pleasure',
    summary: 'Value steady peace over fleeting highs and constant stimulation.',
    unlockAtWeeks: 12,
    content: `Pleasure excites, then abandons. Tranquility remains.

Stoicism teaches us to value steady peace over fleeting highs, and calm contentment over constant stimulation.`,
    quote: "A happy life is one which is in accordance with its own nature.",
    quoteAuthor: "Seneca"
  },
  {
    id: 'present-moment',
    title: 'Focus on the Present Moment',
    summary: 'The past is gone, the future imagined. Only the present is real.',
    unlockAtWeeks: 13,
    content: `The past is gone. The future is imagined. The present alone is real.

Anxiety dissolves when attention returns to what is happening now.`,
    quote: "Confine yourself to the present.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'acceptance',
    title: 'Acceptance Without Resignation',
    summary: 'Engage fully while releasing attachment to outcomes.',
    unlockAtWeeks: 14,
    content: `Acceptance does not mean inaction. It means engaging fully while releasing attachment to outcomes.

You act with care, then accept whatever follows with dignity.`,
    quote: "Do your duty, and leave the rest to fate.",
    quoteAuthor: "Epictetus"
  },
  {
    id: 'rational-judgment',
    title: 'Rational Judgment',
    summary: 'Events are neutral; suffering arises from interpretation.',
    unlockAtWeeks: 15,
    content: `Events themselves are neutral. Suffering arises from interpretation.

By examining our judgments, we regain freedom.`,
    quote: "If you are distressed by anything external, the pain is not due to the thing itself.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'gratitude',
    title: 'Gratitude for What Is',
    summary: 'Contentment grows when appreciation replaces entitlement.',
    unlockAtWeeks: 16,
    content: `Contentment grows when appreciation replaces entitlement.

Gratitude grounds us in sufficiency rather than lack.`,
    quote: "He who is grateful for little has abundance.",
    quoteAuthor: "Epictetus"
  },
  {
    id: 'social-duty',
    title: 'Social Duty',
    summary: 'Virtue expresses itself through service to others.',
    unlockAtWeeks: 17,
    content: `Humans are not meant to live for themselves alone.

Virtue expresses itself through service to others.`,
    quote: "We are made for cooperation.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'inner-citadel',
    title: 'The Inner Citadel',
    summary: 'Within you is a place untouched by chaos — the ruling mind.',
    unlockAtWeeks: 18,
    content: `Within you is a place untouched by chaos — the ruling mind.

No one can invade it unless you allow them.`,
    quote: "You have power over your mind — not outside events.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'progress',
    title: 'Progress, Not Perfection',
    summary: 'Stoicism is practice, not purity. Each day offers improvement.',
    unlockAtWeeks: 19,
    content: `Stoicism is practice, not purity.

Each day offers another opportunity to improve.`,
    quote: "No man suddenly becomes wise.",
    quoteAuthor: "Seneca"
  },
  {
    id: 'simplicity',
    title: 'Simplicity',
    summary: 'Excess multiplies anxiety. Simplicity restores freedom.',
    unlockAtWeeks: 20,
    content: `Excess multiplies anxiety. Simplicity restores freedom.

By needing less, we gain more.`,
    quote: "It is not the man who has too little, but the man who craves more, that is poor.",
    quoteAuthor: "Seneca"
  },
  {
    id: 'endurance',
    title: 'Endurance',
    summary: 'Strength grows through patient endurance of what cannot be changed.',
    unlockAtWeeks: 21,
    content: `Some things cannot be changed — only borne.

Strength grows through patient endurance.`,
    quote: "The gem cannot be polished without friction.",
    quoteAuthor: "Stoic principle"
  },
  {
    id: 'right-action',
    title: 'Right Action',
    summary: 'Do what is right, even if unseen. Virtue is its own reward.',
    unlockAtWeeks: 22,
    content: `Do what is right, even if unseen.

Virtue is its own reward.`,
    quote: "Waste no more time arguing what a good man should be. Be one.",
    quoteAuthor: "Marcus Aurelius"
  },
  {
    id: 'impermanence',
    title: 'Impermanence',
    summary: 'All things are temporary. This too shall pass — both pleasure and pain.',
    unlockAtWeeks: 23,
    content: `The Stoics practiced Memento Mori — remembering death — not to be morbid, but to appreciate life fully. Marcus Aurelius constantly reminded himself that emperors and great men are forgotten, that all material things decay.

This awareness liberates us from attachment. It teaches us to cherish what we have now, to act with urgency, and to accept loss with grace. Nothing lasts, and that is precisely what makes each moment precious.`,
    quote: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",
    quoteAuthor: "Marcus Aurelius"
  }
];

export const getDailyQuote = (date: Date): Quote => {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 
    (1000 * 60 * 60 * 24)
  );
  return dailyQuotes[dayOfYear % dailyQuotes.length];
};

export const getRandomReflectionQuestion = (): string => {
  return weeklyReflectionQuestions[
    Math.floor(Math.random() * weeklyReflectionQuestions.length)
  ];
};
