import { Check, Minus } from "lucide-react";

// Dados extraídos do PDF enviado pelo cliente ("Planos Move Tour 360 -
// Opção B"). Manter em sincronia com esse documento caso os planos mudem.
const PLAN_COLUMNS = [
  { name: "Starter", tagline: "Essencial para começar", featured: false },
  { name: "Professional", tagline: "Para quem quer se destacar", featured: true },
  { name: "Business", tagline: "Máxima performance", featured: false },
] as const;

type CellValue = true | false | string;

const FEATURES: { label: string; values: readonly [CellValue, CellValue, CellValue] }[] = [
  { label: "Captura 3D com Matterport Pro 3", values: [true, true, true] },
  { label: "Defurnish — remoção de mobília", values: [true, true, true] },
  { label: "Modelo 3D interativo (Dollhouse View)", values: [true, true, true] },
  { label: "Tour virtual com navegação livre", values: [true, true, true] },
  { label: "Link compartilhável", values: [true, true, true] },
  { label: "Hospedagem inclusa", values: ["03 meses", "06 meses", "12 meses"] },
  { label: "Logo e contato do cliente", values: [true, true, true] },
  { label: "Integração com Google Street View", values: [false, true, true] },
  {
    label: "Fotos profissionais extraídas do tour",
    values: [false, "Até 05 fotos", "Até 10 fotos"],
  },
  {
    label: "Pontos informativos (tags básicas)",
    values: [false, "Até 05 pontos", "Até 10 pontos"],
  },
  {
    label: "Pontos interativos personalizados",
    values: [false, "Até 05 pontos", "Até 10 pontos"],
  },
  { label: "Relatório de desempenho mensal", values: [false, false, true] },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-ink/8">
        <Check className="h-3.5 w-3.5 text-ink" strokeWidth={2} />
      </span>
    );
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-ink/20" strokeWidth={1.5} />;
  }
  return <span className="text-sm font-medium text-ink">{value}</span>;
}

export default function PlansComparisonTable() {
  return (
    <div className="mt-20 overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-1/3 pb-6 pr-6 align-bottom" />
            {PLAN_COLUMNS.map((plan) => (
              <th
                key={plan.name}
                className={`px-4 pt-6 pb-6 text-center align-bottom ${
                  plan.featured ? "rounded-t-2xl bg-mist/60" : ""
                }`}
              >
                {plan.featured ? (
                  <span className="mb-2 inline-block rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-paper">
                    Mais escolhido
                  </span>
                ) : (
                  <span className="mb-2 inline-block h-[22px]" />
                )}
                <p className="font-display text-lg font-medium text-ink">{plan.name}</p>
                <p className="mt-1 text-xs text-ink/45">{plan.tagline}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((feature, i) => (
            <tr key={feature.label} className="border-t border-ink/10">
              <td className="py-4 pr-6 text-sm text-ink/70">{feature.label}</td>
              {feature.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-4 text-center ${
                    PLAN_COLUMNS[colIndex].featured ? "bg-mist/60" : ""
                  } ${
                    i === FEATURES.length - 1 && PLAN_COLUMNS[colIndex].featured
                      ? "rounded-b-2xl"
                      : ""
                  }`}
                >
                  <Cell value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
