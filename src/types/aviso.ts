export interface Aviso {
    id: number;
    tipo: string;
    material: string;
    precio: string;
    descripcion: string;
    fechaCreacion: string;
    imagenUrl: string;
    }
    
    export interface CreateAvisoDto extends Omit<Aviso, 'id'> {}
    