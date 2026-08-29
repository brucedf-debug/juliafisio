export type CategorySlug =
	'dor-e-coluna' | 'fisioterapia-esportiva' | 'mobilidade-e-exercicios' | 'reabilitacao' | 'saude-e-prevencao';

export const categories: Record<CategorySlug, { name: string; description: string }> = {
	'dor-e-coluna': {
		name: 'Dor e Coluna',
		description: 'Causas, sinais de alerta e tratamento fisioterapêutico para dores na coluna e articulações.',
	},
	'fisioterapia-esportiva': {
		name: 'Fisioterapia Esportiva',
		description: 'Prevenção e recuperação de lesões para quem pratica esportes.',
	},
	'mobilidade-e-exercicios': {
		name: 'Mobilidade e Exercícios',
		description: 'Rotinas e exercícios terapêuticos para incluir no dia a dia.',
	},
	'reabilitacao': {
		name: 'Reabilitação',
		description: 'Recuperação funcional após cirurgias, lesões e afastamentos prolongados.',
	},
	'saude-e-prevencao': {
		name: 'Saúde e Prevenção',
		description: 'Postura, hábitos e cuidados para prevenir dores e lesões antes que aconteçam.',
	},
};
