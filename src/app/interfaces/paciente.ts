export interface Paciente {
    id_paciente: number;
    nombre_paciente: string;
    apellido_paciente: string;
    rut_paciente: string;
    edad_paciente: number | null;
    telefono_paciente: string;
    reportes: any[];
}
