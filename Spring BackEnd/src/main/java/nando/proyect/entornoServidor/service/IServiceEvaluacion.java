package nando.proyect.entornoServidor.service;

import java.util.List;

import nando.proyect.entornoServidor.model.Evaluacion;
public interface IServiceEvaluacion {
    Evaluacion encontrarUnaEvaluacionPorId(Integer id);
    void guardarEvaluacion(Evaluacion evaluacion);
    void borrarEvaluacion(Evaluacion evaluacion);
    List<Evaluacion> encontrarTodas();
    
}
