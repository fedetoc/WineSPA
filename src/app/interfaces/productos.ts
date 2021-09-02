export interface Producto {
  readonly id: string;
  readonly price: number;
  readonly summary: string;
  readonly location: string;
  readonly item: string;
  readonly image: string;
  readonly categoria: string;
  readonly description: string;
  readonly cuotas?: number;
  readonly tarjetaPromo?: string;
  readonly stock: boolean;
}
