export interface VallaResponse {
    id: number;
    nombre: string;
    ubicacion: string;
    ciudad: {
      id: number;
      ciudad: string;
    };
    estado: {
      id: number;
      estado: string;
    };
    ancho: number;
    alto: number;
    price: number;
    disponibilidad: boolean;
    descripcion?: string;
    imagenUrl: string;
  }
  
  export interface CreateVallaDto extends Omit<VallaResponse, 'id'> {}
  