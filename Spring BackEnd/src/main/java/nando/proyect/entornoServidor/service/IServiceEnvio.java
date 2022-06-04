package nando.proyect.entornoServidor.service;

import java.util.List;

import nando.proyect.entornoServidor.model.Envio;

public interface IServiceEnvio {
    Envio encontrarUnaEnvioPorId(Integer id);
    void guardarEnvio(Envio envio);
    List<Envio> encontrarTodas();
    void borrarEnvio(Envio envio);
    
}
