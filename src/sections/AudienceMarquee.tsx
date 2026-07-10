const SEGMENTS = [
  "Imobiliárias e corretoras",
  "Arquitetura e engenharia",
  "Lojas conceito",
  "Clubes e resorts",
  "Hotéis e Airbnb premium",
];

export default function AudienceMarquee() {
  const track = [...SEGMENTS, ...SEGMENTS];

  return (
    <section className="border-t border-ink/10 py-16">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
          {track.map((item, i) => (
            <span
              key={i}
              className="font-display text-2xl font-medium text-ink/20 md:text-3xl"
            >
              {item}
              <span className="ml-16 text-ink/10">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
