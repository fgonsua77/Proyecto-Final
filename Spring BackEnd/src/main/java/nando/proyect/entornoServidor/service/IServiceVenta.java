package nando.proyect.entornoServidor.service;

import java.util.List;

import org.springframework.data.domain.Sort;

import nando.proyect.entornoServidor.model.Venta;
public interface IServiceVenta {
    Venta encontrarUnaVentaPorId(Integer id);
    void guardarVenta(Venta venta);
    List<Venta> encontrarTodas();
    List<Venta> encontrarTodasFiltradas(Sort sort);
    void borrarVenta(Venta venta);
}
