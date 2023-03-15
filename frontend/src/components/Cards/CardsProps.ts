import { CardProps } from '../Card/CardProps';

export interface CardsProps extends CardProps {
	cardNumber: number;
	items: CardProps[] | any;
	space: number;
}
