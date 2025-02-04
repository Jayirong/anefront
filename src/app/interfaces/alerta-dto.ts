export interface AlertaDto {
    id_alerta: number;
    descripcion_alerta: string;
    nivel_alerta: number; // 1=bajo,2=medio,3=alto
    fecha_alerta: string; //formato YYYY-MM-DD
    hora_alerta: string; //formato HH:mm:ss.SSSSSSSSSSSSSSSSSSSS
    id_paciente: number;
}
