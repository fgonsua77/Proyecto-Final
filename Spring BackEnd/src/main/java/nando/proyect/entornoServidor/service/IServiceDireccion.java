package nando.proyect.entornoServidor.service;

import java.util.List;


import nando.proyect.entornoServidor.model.Direccion;
public interface IServiceDireccion {
    Direccion encontrarUnaDireccionPorId(Integer id);
    List<Direccion> encontrarDireccionesPorUsuario(Integer iduser);
    void guardarDireccion(Direccion direccion);
    List<Direccion> encontrarTodas();
    void borrarDireccion(Direccion direccion);
}
