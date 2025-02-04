export interface EstadoVitalDto {
    id_estado: number;
    frecuencia_cardiaca: number;
    persion_arterial_sis: number;
    presion_arterial_dias: number;
    saturacion_oxigeno: number; //esto en el back es un float, aca es int para tratarlo como porcentaje
    fecha_registro_ev: string; //formato "YYYY-MM-DD"
    hora_registro_ev: string; //formato "HH:mm:ss.SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS"
    id_paciente: number;
}
