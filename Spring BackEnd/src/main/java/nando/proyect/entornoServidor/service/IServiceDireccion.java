package nando.proyect.entornoServidor.service;

import java.util.List;


import nando.proyect.entornoServidor.model.Direccion;
public interface IServiceDireccion {
    Direccion encontrarUnaDireccionPorId(Integer id);
    void guardarDireccion(Direccion direccion);
    List<Direccion> encontrarTodas();
    void borrarDireccion(Direccion direccion);
    void borrarDireccionPorId(Integer id);
}
