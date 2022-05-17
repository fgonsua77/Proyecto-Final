package nando.proyect.entornoServidor.service;

import java.util.List;


import nando.proyect.entornoServidor.model.Venta;
public interface IServiceVenta {
    Venta encontrarUnaVentaPorId(Integer id);
    void guardarVenta(Venta venta);
    List<Venta> encontrarTodas();
    void borrarVenta(Venta venta);
    
}
